export function initCharacterAnimations() {
  // Initial movement phase (0 to 8000px)
  gsap.to(".degen", {
    left: "45vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: 8000,
      scrub: 3
    }
  });

  gsap.to(".castle", {
    left: "70vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: 8000,
      scrub: 3
    }
  });

  gsap.to(".wizard", {
    left: "55vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: 8000,
      scrub: 3
    }
  });

  gsap.to(".moon", {
    left: "75vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: 8000,
      scrub: 3
    }
  });

  // Drive past sequence (9900 to 11500px)
  gsap.to(".wizard", {
    left: "-40vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 9900,
      end: 11500,
      scrub: 3
    }
  });

  gsap.to(".castle", {
    left: "-40vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 9900,
      end: 11500,
      scrub: 3
    }
  });
}
