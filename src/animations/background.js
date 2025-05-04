export function initBackgroundAnimations() {
  // Twinkle stars for ambiance
  gsap.to(".star1", { 
    opacity: 0.5, 
    repeat: -1, 
    yoyo: true, 
    duration: 2, 
    ease: "power1.inOut" 
  });
  gsap.to(".star2", { 
    opacity: 0.5, 
    repeat: -1, 
    yoyo: true, 
    duration: 2.5, 
    ease: "power1.inOut" 
  });
  gsap.to(".star3", { 
    opacity: 0.5, 
    repeat: -1, 
    yoyo: true, 
    duration: 2.2, 
    ease: "power1.inOut" 
  });

  // Continuous cloud movement
  const cloud1Timeline = gsap.to(".cloud1", { 
    x: "-200vw",
    duration: 60, 
    repeat: -1, 
    ease: "linear" 
  });
  const cloud2Timeline = gsap.to(".cloud2", { 
    x: "-200vw",
    duration: 70, 
    repeat: -1, 
    ease: "linear" 
  });

  // Speed up clouds during scroll to match degen
  gsap.to(cloud1Timeline, {
    timeScale: 4, // 4x speed to approximate degen's 165vw over 8000px
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: 8000,
      scrub: 1
    }
  });
  gsap.to(cloud2Timeline, {
    timeScale: 4,
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: 8000,
      scrub: 1
    }
  });

  // Parallax background and floor movement
  gsap.to(".night-sky, .day-sky", {
    x: "-50vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: 14000,
      scrub: 3
    }
  });

  gsap.to(".road", {
    x: "-100vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: 14000,
      scrub: 3
    }
  });
}
