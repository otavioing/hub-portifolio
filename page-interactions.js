(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    const backToTopButton = document.querySelector('[data-back-to-top]');

    if (revealElements.length) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -8% 0px',
        });

        revealElements.forEach((element) => revealObserver.observe(element));
    }

    if (backToTopButton) {
        const toggleBackToTop = () => {
            if (window.scrollY > 600) {
                backToTopButton.classList.add('is-visible');
            } else {
                backToTopButton.classList.remove('is-visible');
            }
        };

        toggleBackToTop();
        window.addEventListener('scroll', toggleBackToTop, { passive: true });
    }
})();