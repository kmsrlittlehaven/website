const options = {
  root: null, // viewport
  rootMargin: '0px 0px -50px 0px',
  threshold: 0.1, 
};

export const setupIntersectionObserver = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach(element => {
    observer.observe(element);
  });
};