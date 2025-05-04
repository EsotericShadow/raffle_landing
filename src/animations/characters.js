export function initCharacterAnimations() {
  const totalScroll = 8000;
  const degenStart = -40;
  const degenEnd = 45;
  const castleStart = 115;
  const castleMid = 85;
  const castleEnd = 65;
  const wizardStart = 115;
  const wizardEnd = 55;
  const moonStart = 95;
  const moonMid = 85;
  const moonEnd = 75;

  // Degen movement
  gsap.to(".degen", {
    left: `${degenEnd}vw`,
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: totalScroll,
      scrub: true
    }
  });

  // Castle movement: starts when degen reaches 25vw (approx. 6118px)
  const degenAt25vw = (25 - degenStart) / (degenEnd - degenStart) * totalScroll;
  gsap.to(".castle", {
    left: `${castleMid}vw`,
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: degenAt25vw,
      end: totalScroll,
      scrub: true
    }
  });

  // Wizard movement: starts slightly after castle (e.g., 6500px)
  const wizardStartScroll = degenAt25vw + 382; // Adjust as needed
  gsap.to(".wizard", {
    left: `${wizardEnd}vw`,
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: wizardStartScroll,
      end: totalScroll,
      scrub: true
    }
  });

  // Moon movement
  gsap.to(".moon", {
    left: `${moonEnd}vw`,
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 0,
      end: totalScroll,
      scrub: true
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
      scrub: 5
    }
  });

  gsap.to(".castle", {
    left: "-40vw",
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: 9900,
      end: 11500,
      scrub: 5
    }
  });
}
