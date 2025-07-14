const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: '0px 0px -6% 0px',
});

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));