export function initBackgroundAnimations() {
  // Set up seamless looping for night-sky and day-sky
  const skyWidth = 200; // Adjust based on your background image width (in vw)
  gsap.to(".night-sky, .day-sky", {
    x: `-=${skyWidth}vw`,
    duration: 60,
    repeat: -1,
    ease: "none",
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % skyWidth + "vw")
    }
  });

  // Set up seamless looping for the road
  const roadWidth = 200; // Adjust based on your road image width (in vw)
  gsap.to(".road", {
    x: `-=${roadWidth}vw`,
    duration: 50,
    repeat: -1,
    ease: "none",
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % roadWidth + "vw")
    }
  });

  // Parallax effect tied to scroll
  gsap.to(".night-sky, .day-sky", {
    x: "-50vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: 14000,
      scrub: 3 // Smoother scrub for sky
    }
  });

  gsap.to(".road", {
    x: "-100vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: 14000,
      scrub: 2 // Slightly faster scrub for road
    }
  });

  // Continuous cloud movement (slow, independent of scroll)
  gsap.to(".cloud1", {
    x: "-200vw",
    duration: 120,
    repeat: -1,
    ease: "linear"
  });
  gsap.to(".cloud2", {
    x: "-200vw",
    duration: 140,
    repeat: -1,
    ease: "linear"
  });
}
