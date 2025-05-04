export function initLeadFormAnimation() {
  // Transition to lead form (11600 to 12000px)
  gsap.to(".scene", {
    top: "-100vh",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 11600,
      end: 12000,
      scrub: 1
    }
  });
}
