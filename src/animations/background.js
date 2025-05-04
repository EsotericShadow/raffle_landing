export function initBackgroundAnimations() {
  // Continuous cloud movement (very slow)
  gsap.to(".cloud1", { x: "-200vw", duration: 120, repeat: -1, ease: "linear" });
  gsap.to(".cloud2", { x: "-200vw", duration: 140, repeat: -1, ease: "linear" });

  // Parallax background and floor movement
  gsap.to(".night-sky, .day-sky", {
    x: "50vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: 8000,
      scrub: 5
    }
  });

  gsap.to(".road", {
    x: "-100vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: 8000,
      scrub: 4
    }
  });
}
