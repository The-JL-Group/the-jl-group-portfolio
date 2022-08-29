// Outer Card

export const cardVariants = {
  // `inactive` state defines the h and w that the div will start at, and inside the `transition` obj, the duration and delay
  inactive: {
    opacity: 1,
    scale: 0.9,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
  active: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

// Inner Card

// This variant controls the `thumbnail-container` and `initial-content` motion div anims and gives them instructions for staggering and delay
export const cardContentVariants = {
  inactive: {
    transition: {
      staggerChildren: 0.3,
      duration: 0.4,
      delay: 0.4,
    },
  },
  active: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
      duration: 0.4,
      staggerDirection: -1,
      delay: 0.4,
    },
  },
};

// Controls the anim of the main img
export const mainImageVariants = {
  inactive: {
    opacity: 0,
    y: -50,
    x: -65,
  },
  active: {
    opacity: 1,
    y: -10,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {},
};

// Will be applied
export const contentBlockVariants = {
  inactive: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {},
};
