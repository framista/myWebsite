export const variantsFromX = (xStart) => ({
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.5,
      duration: 2,
      x: { type: 'spring', stiffness: 30 },
    },
  },
  hidden: { opacity: 0, x: xStart },
});
