export function initLeadFormAnimation() {
  // Transition to lead form by fading out scene
  gsap.to(".scene", {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 11600,
      end: 12000,
      scrub: 1
    }
  });
}
