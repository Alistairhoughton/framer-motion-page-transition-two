export const exit = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
  exit: {
    height: "100vh",
    width: "100%",
    y: -113,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.7,
    },
  },
};


export const squareVariants = (
  boundingTop,
  initialBgXScale,
  initialBgYScale
) => {
  return {
    initial: {
      position: "absolute",
      transform: `scaleY(${initialBgYScale}) scaleX(${initialBgXScale})`,
      translateY: `(${boundingTop})`,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
    animate: {
      transform: "scale(1, 1)",
      translateY: 0,
      position: "fixed",
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };
};






