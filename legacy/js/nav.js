window.initNav = function initNav() {
  if (window.__navInitialized) {
    return;
  }

  window.__navInitialized = true;

  const navbar = document.querySelector(".navbar");
  const toggleButton = document.querySelector(".navbar__toggle");
  const overlay = document.querySelector(".navbar__overlay");
  const drawer = document.querySelector(".mobile-drawer");
  const accordionToggles = document.querySelectorAll(".mobile-nav__toggle");
  const mobileLinks = document.querySelectorAll(".mobile-drawer a");
  const desktopMediaQuery = window.matchMedia("(min-width: 961px)");

  function updateScrolledState() {
    if (!navbar) {
      return;
    }

    if (navbar.classList.contains("navbar--solid")) {
      navbar.classList.add("scrolled");
      return;
    }

    navbar.classList.toggle("scrolled", window.scrollY > 80);
  }

  function setAccordionState(toggle, isOpen) {
    const item = toggle.closest(".mobile-nav__item--accordion");

    if (!item) {
      return;
    }

    item.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  }

  function closeAccordions(exception = null) {
    accordionToggles.forEach((toggle) => {
      if (toggle === exception) {
        return;
      }

      setAccordionState(toggle, false);
    });
  }

  function openDrawer() {
    if (!toggleButton || !overlay || !drawer) {
      return;
    }

    toggleButton.classList.add("open");
    toggleButton.setAttribute("aria-expanded", "true");
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("nav-open");
  }

  function closeDrawer() {
    if (!toggleButton || !overlay || !drawer) {
      return;
    }

    toggleButton.classList.remove("open");
    toggleButton.setAttribute("aria-expanded", "false");
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("nav-open");
    closeAccordions();
  }

  if (toggleButton && overlay && drawer) {
    toggleButton.addEventListener("click", (event) => {
      event.stopPropagation();

      if (drawer.classList.contains("open")) {
        closeDrawer();
        return;
      }

      openDrawer();
    });

    overlay.addEventListener("click", closeDrawer);
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  accordionToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      closeAccordions(toggle);
      setAccordionState(toggle, !isOpen);
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".mobile-nav__item--accordion")) {
      closeAccordions();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    closeDrawer();
  });

  desktopMediaQuery.addEventListener("change", (event) => {
    if (event.matches) {
      closeDrawer();
    }
  });

  window.addEventListener("scroll", updateScrolledState, { passive: true });
  updateScrolledState();
};
