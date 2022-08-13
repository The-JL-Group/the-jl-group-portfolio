// Outer Card

export const cardVariants = {
  // `inactive` state defines the h and w that the div will start at, and inside the `transition` obj, the duration and delay 
  inactive: {
    opacity: 1,
	  scale: 0.9,
    transition: {
      duration: 0.5,
      delay: 0.1,
    }
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
    }
  },
};

// This variant will be applied to the thumbnail img in the initial card layout. Right before the card expands, the img will animate downwards slightly and fade out as defined by the y coordinate and opacity
// export const thumbnailVariants = {
//   inactive: {
//     x: -45,
//     y: 35,
//     opacity: 0,
//     transition: {
//       duration: 0.4,
//     }
//   },
//   active: {
//     x: -45,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//     }
//   },
// };

// Card content variant
// export const contentVariants = {
//   inactive: {
//     x: -35,
//     y: 35,
//     opacity: 0,
//     transition: {
//       duration: 0.4,
//     }
//   },
//   active: {
//     x: -35,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//     }
//   },
// };

// Controls the anim staggering for the main img and the content blocks
// export const expandedVariants = {
//   inactive: {
//     opacity: 0,
//   },
//   active: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 0.3,
//     }
//   },
// };

// Controls the anim of the main img
export const mainImageVariants = {
  inactive: {
    opacity: 0,
    y: -50,
    x: -65,
    transition: {
      // duration: 0.8,
    }
  },
  active: {
    opacity: 1,
    y: -10,
    x: 0,
    transition: {
      duration: 0.8,
    }
  },
  exit: {
    // opacity: 0,
		// x: -35,
    transition: {
      // duration: 0.4,
    }
  }
};

// Will be applied
export const contentBlockVariants = {
  inactive: {
    opacity: 0,
    // y: 20,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    }
  },
  exit: {
    // opacity: 0,
    // y: 0,
    transition: {
      // duration: 0.4,
    }
  }
};