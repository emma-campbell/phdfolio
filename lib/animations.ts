export const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.4,
    },
  },
};

export const contentVariants = {
  hidden: {
    opacity: 0,
    y: -5,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "ease",
      stiffness: 100,
      mass: 0.3,
      duration: 2,
    },
  },
};
