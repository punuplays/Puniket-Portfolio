/* =================================
   CINEMATIC SCROLL REVEAL
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(
        ".about-heading, .about-content, .about-card, .skills-heading, .skill-card, .projects-heading, .project-featured, .projects-coming, .contact-container"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });
/* STAGGER CARD ANIMATIONS */

document.querySelectorAll(
    ".about-cards, .skills-grid"
).forEach(container => {

    const cards = container.children;

    Array.from(cards).forEach((card, index) => {

        card.style.transitionDelay = `${index * 0.12}s`;

    });

});
    revealElements.forEach(element => {
        observer.observe(element);
    });

});