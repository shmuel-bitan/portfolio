/* ═══════════════════════════════════════
   SHMUEL BITAN — PORTFOLIO
   main.js
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── HAMBURGER ── */
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            menu.classList.toggle('open');
        });

        // Close on nav link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                menu.classList.remove('open');
            });
        });
    }

    /* ── ACTIVE NAV ON SCROLL ── */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, observerOptions);

    sections.forEach(s => observer.observe(s));

    /* ── SCROLL REVEAL ── */
    const revealEls = document.querySelectorAll(
        '.tl-card, .project-card, .skill-group, .cert-card, .info-card'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = entry.target.style.transform.replace('translateY(20px)', 'translateY(0)');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity .5s ease, transform .5s ease';
        revealObserver.observe(el);
    });

    /* ── HEADER SHADOW ON SCROLL ── */
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.style.boxShadow = window.scrollY > 20
                ? '0 4px 30px rgba(0,0,0,.4)'
                : 'none';
        }, { passive: true });
    }

});