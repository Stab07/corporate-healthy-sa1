const TRANSITION_EASING = "cubic-bezier(0.76, 0, 0.24, 1)";

function createTransitionOverlay() {
  const existingOverlay = document.querySelector(".page-transition");

  if (existingOverlay) {
    existingOverlay.setAttribute("aria-hidden", "true");

    return existingOverlay;
  }

  const overlay = document.createElement("div");

  overlay.className = "page-transition";
  overlay.setAttribute("aria-hidden", "true");
  document.body.appendChild(overlay);

  return overlay;
}

function animateOverlay(overlay, keyframes, options) {
  if (typeof overlay.animate !== "function") {
    const lastFrame = keyframes[keyframes.length - 1];

    overlay.style.transformOrigin = options.transformOrigin;
    overlay.style.transform = lastFrame.transform;

    return Promise.resolve();
  }

  const animation = overlay.animate(keyframes, {
    duration: options.duration,
    easing: TRANSITION_EASING,
    fill: "forwards",
  });

  overlay.style.transformOrigin = options.transformOrigin;

  return new Promise((resolve) => {
    animation.addEventListener(
      "finish",
      () => {
        const lastFrame = keyframes[keyframes.length - 1];
        overlay.style.transform = lastFrame.transform;
        resolve();
      },
      { once: true },
    );
  });
}

function isModifiedEvent(event) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

function shouldInterceptLink(event, anchor) {
  const rawHref = anchor.getAttribute("href");

  if (!rawHref || rawHref.startsWith("#")) {
    return false;
  }

  if (anchor.target && anchor.target !== "_self") {
    return false;
  }

  if (anchor.hasAttribute("download") || isModifiedEvent(event)) {
    return false;
  }

  if (/^(mailto:|tel:|javascript:)/i.test(rawHref)) {
    return false;
  }

  const destination = new URL(anchor.href, window.location.href);
  const sameOrigin = destination.origin === window.location.origin;
  const startsWithSlash = rawHref.startsWith("/");
  const isSamePageHash =
    destination.origin === window.location.origin &&
    destination.pathname === window.location.pathname &&
    destination.search === window.location.search &&
    destination.hash !== "";

  if (isSamePageHash) {
    return false;
  }

  return destination.protocol.startsWith("http") && (sameOrigin || startsWithSlash);
}

window.initTransitions = function initTransitions() {
  if (window.__transitionsInitialized) {
    return;
  }

  window.__transitionsInitialized = true;

  const overlay = createTransitionOverlay();
  let isTransitioning = false;

  window.__pageTransitionRevealed = false;
  overlay.style.transform = "scaleY(1)";
  overlay.style.transformOrigin = "top";

  window.requestAnimationFrame(() => {
    animateOverlay(
      overlay,
      [{ transform: "scaleY(1)" }, { transform: "scaleY(0)" }],
      {
        duration: 600,
        transformOrigin: "top",
      },
    ).then(() => {
      overlay.style.transformOrigin = "bottom";
      window.__pageTransitionRevealed = true;
      window.dispatchEvent(new CustomEvent("page-transition:revealed"));
    });
  });

  document.addEventListener("click", (event) => {
    const anchor = event.target.closest("a[href]");

    if (!anchor || isTransitioning || !shouldInterceptLink(event, anchor)) {
      return;
    }

    const destination = new URL(anchor.href, window.location.href);

    event.preventDefault();
    isTransitioning = true;

    animateOverlay(
      overlay,
      [{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }],
      {
        duration: 500,
        transformOrigin: "bottom",
      },
    ).then(() => {
      window.location.href = destination.href;
    });
  });
};
