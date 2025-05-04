export function initCharacterAnimations() {
  const viewportWidth = window.innerWidth;
  const totalScroll = 8200; // Characters reach final positions just before level-up at 8200-8500px

  // Get elements and their widths
  const degen = document.querySelector('.degen');
  const degenWidth = degen.offsetWidth;
  const wizard = document.querySelector('.wizard');
  const wizardWidth = wizard.offsetWidth;
  const castle = document.querySelector('.castle');
  const sportsCar = document.querySelector('.sports-car');
  const sportsCarWidth = sportsCar.offsetWidth;

  // Calculate final left positions in pixels to center degen at 45vw and wizard at 55vw
  const degenFinalLeft = (45 / 100 * viewportWidth) - (degenWidth / 2);
  const wizardFinalLeft = (55 / 100 * viewportWidth) - (wizardWidth / 2);
  const castleFinalLeft = 70 / 100 * viewportWidth; // Castle ends at 70vw (left edge)

  // Degen moves from -40vw to final position over 0 to 8200px
  gsap.fromTo(".degen", 
    { left: -0.4 * viewportWidth }, // -40vw
    { 
      left: degenFinalLeft,
      ease: "none",
      scrollTrigger: {
        trigger: "#scroll-container",
        start: 0,
        end: totalScroll,
        scrub: true
      }
    }
  );

  // Calculate when degen reaches 25vw to start castle and wizard
  const degenAt25vwScroll = ((25 / 100 * viewportWidth) - (-0.4 * viewportWidth)) / ((45 / 100 * viewportWidth) - (-0.4 * viewportWidth)) * totalScroll;

  // Castle moves from 140vw to 70vw starting when degen is at 25vw
  gsap.fromTo(".castle", 
    { left: 1.4 * viewportWidth }, // 140vw
    { 
      left: castleFinalLeft,
      ease: "none",
      scrollTrigger: {
        trigger: "#scroll-container",
        start: degenAt25vwScroll,
        end: totalScroll,
        scrub: true
      }
    }
  );

  // Wizard moves from 140vw to final position, starting 300px after castle
  const wizardStartScroll = degenAt25vwScroll + 300;
  gsap.fromTo(".wizard", 
    { left: 1.4 * viewportWidth }, // 140vw
    { 
      left: wizardFinalLeft,
      ease: "none",
      scrollTrigger: {
        trigger: "#scroll-container",
        start: wizardStartScroll,
        end: totalScroll,
        scrub: true
      }
    }
  );

  // Moon moves from 95vw to 75vw over the same scroll range
  const moonStartLeft = 0.95 * viewportWidth;
  const moonEndLeft = 0.75 * viewportWidth;
  gsap.fromTo(".moon", 
    { left: moonStartLeft },
    { 
      left: moonEndLeft,
      ease: "none",
      scrollTrigger: {
        trigger: "#scroll-container",
        start: 0,
        end: totalScroll,
        scrub: true
      }
    }
  );

  // Sports Car Movement: Adjusted to start at 9500px and end at 9900px
  const sportsCarStartScroll = 9500;
  const sportsCarEndScroll = 9900;
  const sportsCarFinalLeft = 40 / 100 * viewportWidth; // Left edge at 40vw

  gsap.fromTo(".sports-car", 
    { left: -0.7 * viewportWidth }, // Start off-screen left at -40vw
    { 
      left: sportsCarFinalLeft,
      ease: "none",
      scrollTrigger: {
        trigger: "#scroll-container",
        start: sportsCarStartScroll,
        end: sportsCarEndScroll,
        scrub: 5
      }
    }
  );

  // Drive past sequence from 9900 to 11500px
  const drivePastStart = 9900;
  const drivePastEnd = 11500;
  gsap.to(".wizard", {
    left: -0.4 * viewportWidth, // -40vw
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: drivePastStart,
      end: drivePastEnd,
      scrub: 5
    }
  });

  gsap.to(".castle", {
    left: -0.4 * viewportWidth, // -40vw
    ease: "none",
    scrollTrigger: {
      trigger: "#scroll-container",
      start: drivePastStart,
      end: drivePastEnd,
      scrub: 5
    }
  });
}
