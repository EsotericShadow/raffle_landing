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

  // Clouds autoscroll very slowly
  gsap.to(".cloud1", { 
    x: "-200vw", 
    duration: 240, 
    repeat: -1, 
    ease: "linear" 
  });
  gsap.to(".cloud2", { 
    x: "-200vw", 
    duration: 280, 
    repeat: -1, 
    ease: "linear" 
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
