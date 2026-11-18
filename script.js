document.addEventListener('DOMContentLoaded', () => {

    // 1. Navigation Alert / Interactive CTA Button
    const navCta = document.getElementById('navCta');
    if (navCta) {
        navCta.addEventListener('click', () => {
            alert('Welcome! Fill out the contact form below to get started.');
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. Animated Number Counters
    const counters = document.querySelectorAll('.counter');
    let animated = false;

    window.addEventListener('scroll', () => {
        const statsSection = document.getElementById('stats');
        if (!statsSection) return;

        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos && !animated) {
            animated = true;
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const speed = target / 50;

                const updateCount = () => {
                    count += speed;
                    if (count < target) {
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target + '+';
                    }
                };
                updateCount();
            });
        }
    });

    // 3. Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Thank you ${name}, your message has been received! Our team will contact you shortly.`);
            contactForm.reset();
        });
    }

    // 4. Smooth Scroll Behavior for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Scroll Animation for Service Cards (Fade-in & Slide up)
    const serviceCards = document.querySelectorAll('.service-card');
    const cardObserverOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-card');
                observer.unobserve(entry.target);
            }
        });
    }, cardObserverOptions);

    serviceCards.forEach(card => {
        cardObserver.observe(card);
    });

});
