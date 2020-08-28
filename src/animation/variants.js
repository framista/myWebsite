export const variantsFromX = (xStart, delay = 2.5) => ({
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: delay,
      duration: 2,
      x: { type: 'spring', stiffness: 30 },
    },
  },
  hidden: { opacity: 0, x: xStart },
});

export const variantsLinkHover = {
  whileHover: {
    scale: 1.1,
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.4)',
  },
  transition: {
    type: 'spring',
    stiffness: 300,
  },
};

export const variantsNavbarHover = {
  whileHover: {
    scale: 0.9,
    rotate: 2,
  },
  transition: {
    type: 'spring',
    stiffness: 300,
  },
};

export const variantsDrawerHover = {
  whileHover: {
    scale: 1.2,
    originX: 0,
  },
  transition: {
    type: 'spring',
    stiffness: 300,
  },
};
