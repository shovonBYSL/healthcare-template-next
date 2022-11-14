const scrollTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const currentYear = new Date().getFullYear();

export { scrollTop, currentYear };
