const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.scroll-fade').forEach((el, i) => {
  const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('scroll-fade'));
  const index = siblings.indexOf(el);
  if (index > 0) {
    el.style.transitionDelay = (index * 0.15) + 's';
  }
  observer.observe(el);
});
