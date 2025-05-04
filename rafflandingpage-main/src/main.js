import { initBackgroundAnimations } from './animations/background.js';
import { initCharacterAnimations } from './animations/characters.js';
import { initTransformationAnimations } from './animations/transformations.js';
import { initLeadFormAnimation } from './animations/leadForm.js';

gsap.registerPlugin(ScrollTrigger);

function init() {
  initBackgroundAnimations();
  initCharacterAnimations();
  initTransformationAnimations();
  initLeadFormAnimation();
}

init();
