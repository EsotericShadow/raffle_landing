export function initCharacterAnimations() {
  const totalScroll = 8000;
  const midScroll = 2000;

  // Helper function to calculate position based on scroll progress
  function calculatePosition(startPos, midPos, endPos, progress) {
    const scrollProgress = progress * totalScroll;
    if (scrollProgress < midScroll) {
      // Phase 1: Quick movement to mid-position
      return startPos + (midPos - startPos) * (scrollProgress / midScroll);
    } else {
      // Phase 2: Slow movement to end-position
      const phase2Progress = (scrollProgress - midScroll) / (totalScroll - midScroll);
      return midPos + (endPos - midPos) * phase2Progress;
    }
  }

  // Create ScrollTrigger for degen, castle, wizard, and moon
  ScrollTrigger.create({
    trigger: "#scroll-container",
    start: 0,
    end: totalScroll,
    onUpdate: (self) => {
      const progress = self.progress;

      // Degen: -40vw to 0vw (quick), then 0vw to 45vw (slow)
      const degenLeft = calculatePosition(-40, 0, 45, progress);
      gsap.set(".degen", { left: `${degenLeft}vw` });

      // Castle: 140vw to 100vw (quick), then 100vw to 70vw (slow)
      const castleLeft = calculatePosition(140, 100, 70, progress);
      gsap.set(".castle", { left: `${castleLeft}vw` });

      // Wizard: 140vw to 100vw (quick), then 100vw to 55vw (slow)
      const wizardLeft = calculatePosition(140, 100, 55, progress);
      gsap.set(".wizard", { left: `${wizardLeft}vw` });

      // Moon: 95vw to 85vw (quick), then 85vw to 75vw (slow)
      const moonLeft = calculatePosition(95, 85, 75, progress);
      gsap.set(".moon", { left: `${moonLeft}vw` });
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
