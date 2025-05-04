export function initTransformationAnimations() {
  // Level Up sequence with pause (8200 to 8500px)
  gsap.to(".level-up", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 8200,
      end: 8300,
      scrub: 1
    }
  });

  gsap.to(".level-up", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 8400,
      end: 8500,
      scrub: 1
    }
  });

  // Transformation sequence (8600 to 9000px)
  const transformTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 8600,
      end: 9000,
      scrub: 1
    }
  });

  transformTimeline
    .to(".poof", { opacity: 1, scale: 1.5, duration: 0.5 })
    .to(".degen", { opacity: 0, duration: 0.5 }, "<")
    .to(".degen-transformed", { opacity: 1, duration: 0.5 }, "<")
    .to(".night-sky", { opacity: 0, duration: 1 }, "<")
    .to(".moon", { opacity: 0, duration: 1 }, "<")
    .to(".day-sky", { opacity: 1, duration: 1 }, "<")
    .to(".sun", { left: "75vw", opacity: 1, duration: 1 }, "<")
    .to(".poof", { opacity: 0, scale: 0, duration: 0.5 })
    .to(".treasure-chest", { opacity: 1, duration: 1 })
    .to(".degen-transformed", { left: "40vw", duration: 1 }, "-=0.5")
    .to(".wizard", { left: "60vw", duration: 1 }, "<");

  // Sports car movement (9100 to 9500px)
  gsap.to(".sports-car", {
    left: "40vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 9100,
      end: 9500,
      scrub: 3
    }
  });

  // Car transformation (9600 to 9800px)
  const carTransformTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 9600,
      end: 9800,
      scrub: 1
    }
  });

  carTransformTimeline
    .to(".degen-transformed", { opacity: 0, duration: 1.5 })
    .to(".sports-car", { opacity: 0, duration: 0.25 }, "<")
    .to(".occupied-sports-car", { opacity: 1, duration: 0.25 }, "<");

  // Drive past sequence for occupied sports car (9900 to 11500px)
  gsap.to(".occupied-sports-car", {
    left: "115vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 9900,
      end: 11500,
      scrub: 3
    }
  });
}
