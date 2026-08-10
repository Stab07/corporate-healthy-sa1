function registerScrollTrigger() {
  if (!window.gsap || !window.ScrollTrigger) {
    window.setTimeout(registerScrollTrigger, 16);
    return;
  }

  window.gsap.registerPlugin(window.ScrollTrigger);
}

function bootstrap() {
  if (typeof window.initNav === "function") {
    window.initNav();
  }

  registerScrollTrigger();

  if (typeof window.initAnimations === "function") {
    window.initAnimations();
  }

  if (typeof window.initTransitions === "function") {
    window.initTransitions();
  }

  if (typeof window.initContactForm === "function") {
    window.initContactForm();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap, { once: true });
} else {
  bootstrap();
}
