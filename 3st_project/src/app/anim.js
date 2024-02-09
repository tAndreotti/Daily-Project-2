export const blur = {
  initial: {
    filter: "blur(0px)",
    opacity: 1,
  },
  open: {
    filter: "blur(4px)",
    opacity: 0.6,
    transition: { duration: 0.3 },
  },
  closed: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.3 },
  },
};