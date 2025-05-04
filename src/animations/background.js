export function initBackgroundAnimations() {
  // Continuous cloud movement (slow, independent of scroll)
  gsap.to(".cloud1", { 
    x: "-200%", 
    duration: 120, 
    repeat: -1, 
    ease: "linear" 
  });
  gsap.to(".cloud2", { 
    x: "-200%", 
    duration: 140, 
    repeat: -1, 
    ease: "linear" 
  });

  // Seamless background looping: moves left as degen moves right
  gsap.to(".night-sky, .day-sky", {
    x: "-=200vw", // Moves 200% of viewport width for seamless looping
    duration: 60,  // Long duration for slow movement
    repeat: -1,   // Infinite loop
    ease: "none", // Linear movement
    scrollTrigger: {
      trigger: "#scroll-container",
      start: "top top",
      end: "+=14000",
      scrub: 5    // Slow pacing tied to scroll
    }
  });

  // Road moves faster than background, also looping seamlessly
  gsap.to(".road", {
    x: "-=400vw", // Moves faster (400% of viewport width)
    duration: 50, // Slightly faster than background
    repeat: -1,   // Infinite loop
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: "top top",
      end: "+=14000",
      scrub: 4    // Slightly faster scrub than background
    }
  });

  // Day/Night transition handled in transformations.js, ensuring timing aligns
}
