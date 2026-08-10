window.initContactForm = function initContactForm() {
  if (window.__contactFormInitialized) {
    return;
  }

  const form = document.querySelector("[data-contact-form]");

  if (!form) {
    return;
  }

  window.__contactFormInitialized = true;

  const successMessage = form.querySelector(".contact-form__success");
  const errorMessage = form.querySelector(".contact-form__error");
  const errorMessageText = errorMessage ? errorMessage.querySelector(".contact-form__error-text") : null;
  const submitButton = form.querySelector('[type="submit"]');
  const submitLabel = form.querySelector(".contact-form__button-label");
  const requiredFields = Array.from(form.querySelectorAll("[required]"));
  const emailField = form.querySelector('[name="email"]');
  const defaultLabel = submitLabel ? submitLabel.textContent : submitButton.textContent;
  const defaultErrorText = errorMessageText ? errorMessageText.textContent : "";

  function syncFieldState(field) {
    const hasValue = field.value.trim() !== "";
    const isValid = field.checkValidity();
    const isInvalid = hasValue && !isValid;

    field.classList.toggle("is-invalid", isInvalid);
    field.setAttribute("aria-invalid", String(isInvalid));
  }

  function hideMessage(message) {
    if (!message) {
      return;
    }

    message.hidden = true;
    message.classList.remove("is-visible");
  }

  function showMessage(message) {
    if (!message) {
      return;
    }

    message.hidden = false;
    message.classList.add("is-visible");
    message.focus();
  }

  function resetFieldState() {
    requiredFields.forEach((field) => {
      field.classList.remove("is-invalid");
      field.setAttribute("aria-invalid", "false");
    });
  }

  requiredFields.forEach((field) => {
    field.addEventListener("blur", () => {
      syncFieldState(field);
    });

    field.addEventListener("input", () => {
      syncFieldState(field);
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    hideMessage(successMessage);
    hideMessage(errorMessage);

    if (errorMessageText) {
      errorMessageText.textContent = defaultErrorText;
    }

    requiredFields.forEach((field) => {
      syncFieldState(field);
    });

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.classList.add("is-submitting");
    submitButton.disabled = true;

    if (submitLabel) {
      submitLabel.textContent = "Sending...";
    } else {
      submitButton.textContent = "Sending...";
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (emailField && emailField.value.trim() !== "") {
      payload.replyto = emailField.value.trim();
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      let result = null;

      try {
        result = await response.json();
      } catch (parseError) {
        result = null;
      }

      if (!response.ok || !result || !result.success) {
        throw new Error(
          (result && (result.message || (result.body && result.body.message))) ||
            "Something went wrong while sending your message."
        );
      }

      form.reset();
      form.classList.remove("is-submitting");
      resetFieldState();
      showMessage(successMessage);
    } catch (error) {
      if (errorMessageText) {
        errorMessageText.textContent = "We couldn't send your message right now. Please try again, or email us directly at";
      }

      showMessage(errorMessage);
      window.console.error("Contact form submission failed.", error);
    } finally {
      form.classList.remove("is-submitting");
      submitButton.disabled = false;

      if (submitLabel) {
        submitLabel.textContent = defaultLabel;
      } else {
        submitButton.textContent = defaultLabel;
      }
    }
  });
};
