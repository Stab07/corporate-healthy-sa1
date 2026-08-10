function easeOutCubic(progress) {
  return 1 - Math.pow(1 - progress, 3);
}

function getCounterSuffix(element) {
  return element.textContent.replace(/[0-9\s.,]/g, "");
}

function initAos() {
  if (!window.AOS) {
    return;
  }

  window.AOS.init({
    duration: 700,
    easing: "ease-out-cubic",
    once: false,
    mirror: true,
    offset: 80,
  });
}

function initHeroAnimation() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;

  if (!gsap) {
    return;
  }

  const heroEyebrow = document.querySelector('[data-animate="hero-eyebrow"]');
  const heroTitle = document.querySelector('[data-animate="hero-title"]');
  const heroSub = document.querySelector('[data-animate="hero-sub"]');
  const heroButtons = document.querySelector('[data-animate="hero-buttons"]');
  const heroElements = [heroEyebrow, heroTitle, heroSub, heroButtons].filter(Boolean);

  if (heroElements.length === 0) {
    return;
  }

  function resetHeroAnimation() {
    if (heroEyebrow) {
      gsap.set(heroEyebrow, { opacity: 0, y: 20 });
    }

    if (heroTitle) {
      gsap.set(heroTitle, { opacity: 0, y: 30 });
    }

    if (heroSub) {
      gsap.set(heroSub, { opacity: 0, y: 20 });
    }

    if (heroButtons) {
      gsap.set(heroButtons, { opacity: 0, y: 20 });
    }
  }

  resetHeroAnimation();

  const heroTimeline = gsap.timeline({ paused: true });

  if (heroEyebrow) {
    heroTimeline.to(heroEyebrow, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0);
  }

  if (heroTitle) {
    heroTimeline.to(heroTitle, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.15);
  }

  if (heroSub) {
    heroTimeline.to(heroSub, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.3);
  }

  if (heroButtons) {
    heroTimeline.to(heroButtons, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.45);
  }

  let hasPlayedInitially = false;

  function playHeroTimeline() {
    heroTimeline.restart();
  }

  function playInitialHeroTimeline() {
    if (hasPlayedInitially) {
      return;
    }

    hasPlayedInitially = true;
    playHeroTimeline();
  }

  window.addEventListener("page-transition:revealed", playInitialHeroTimeline, { once: true });

  if (window.__pageTransitionRevealed) {
    window.requestAnimationFrame(playInitialHeroTimeline);
  }

  window.addEventListener(
    "load",
    () => {
      window.setTimeout(playInitialHeroTimeline, 700);
    },
    { once: true },
  );

  if (ScrollTrigger) {
    ScrollTrigger.create({
      trigger: ".hero",
      start: "bottom bottom",
      end: "bottom top",
      onLeave: () => {
        if (!hasPlayedInitially) {
          return;
        }

        resetHeroAnimation();
      },
      onEnterBack: () => {
        if (!hasPlayedInitially) {
          return;
        }

        playHeroTimeline();
      },
    });
  }
}

function initPageHeroAnimation() {
  const gsap = window.gsap;

  if (!gsap) {
    return;
  }

  const breadcrumb = document.querySelector('[data-animate="page-breadcrumb"]');
  const title = document.querySelector('[data-animate="page-title"]');
  const pageHeroElements = [breadcrumb, title].filter(Boolean);

  if (pageHeroElements.length === 0) {
    return;
  }

  if (breadcrumb) {
    gsap.set(breadcrumb, { opacity: 0, y: 18 });
  }

  if (title) {
    gsap.set(title, { opacity: 0, y: 26 });
  }

  const pageHeroTimeline = gsap.timeline({ paused: true });

  if (breadcrumb) {
    pageHeroTimeline.to(breadcrumb, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0);
  }

  if (title) {
    pageHeroTimeline.to(title, { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" }, 0.12);
  }

  let hasPlayed = false;

  function playPageHeroTimeline() {
    if (hasPlayed) {
      return;
    }

    hasPlayed = true;
    pageHeroTimeline.play(0);
  }

  window.addEventListener("page-transition:revealed", playPageHeroTimeline, { once: true });

  if (window.__pageTransitionRevealed) {
    window.requestAnimationFrame(playPageHeroTimeline);
  }

  window.addEventListener(
    "load",
    () => {
      window.setTimeout(playPageHeroTimeline, 700);
    },
    { once: true },
  );
}

function initHeroParallax() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const heroBackground = document.querySelector(".hero__bg");

  if (!gsap || !ScrollTrigger || !heroBackground) {
    return;
  }

  gsap.to(".hero__bg", {
    yPercent: 40,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

function animateCounter(element, duration) {
  const target = Number(element.dataset.count || 0);
  const suffix = getCounterSuffix(element);
  const startTime = performance.now();
  let frameId = 0;

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);
    const currentValue = Math.round(target * easedProgress);

    element.textContent = `${currentValue}${suffix}`;

    if (progress < 1) {
      frameId = window.requestAnimationFrame(updateCounter);
    }
  }

  frameId = window.requestAnimationFrame(updateCounter);

  return () => {
    if (frameId) {
      window.cancelAnimationFrame(frameId);
    }
  };
}

function initStatsCounter() {
  const statsBar = document.querySelector(".stats-bar");
  const counters = document.querySelectorAll("[data-count]");

  if (!statsBar || counters.length === 0) {
    return;
  }

  counters.forEach((counter) => {
    counter.textContent = `0${getCounterSuffix(counter)}`;
  });

  let isActive = false;
  const stopAnimations = new Map();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (isActive) {
            return;
          }

          isActive = true;

          counters.forEach((counter) => {
            const stopAnimation = animateCounter(counter, 2000);
            stopAnimations.set(counter, stopAnimation);
          });

          return;
        }

        isActive = false;

        counters.forEach((counter) => {
          const stopAnimation = stopAnimations.get(counter);

          if (typeof stopAnimation === "function") {
            stopAnimation();
          }

          counter.textContent = `0${getCounterSuffix(counter)}`;
        });
      });
    },
    {
      threshold: 0.35,
    },
  );

  observer.observe(statsBar);
}

window.initAnimations = function initAnimations() {
  if (window.__animationsInitialized) {
    return;
  }

  if (!window.gsap || !window.ScrollTrigger || !window.AOS) {
    window.setTimeout(window.initAnimations, 16);
    return;
  }

  initAos();
  initHeroAnimation();
  initPageHeroAnimation();
  initHeroParallax();
  initStatsCounter();

  window.__animationsInitialized = true;
};
