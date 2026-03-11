document.addEventListener('DOMContentLoaded', () => {
    const revealItems = document.querySelectorAll('.svc-reveal');
    if (!revealItems.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((item, index) => {
        item.style.transitionDelay = `${Math.min(index * 60, 420)}ms`;
        observer.observe(item);
    });
});
