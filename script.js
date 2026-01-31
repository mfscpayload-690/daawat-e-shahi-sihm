/* ========================================
   ROYAL MUGHAL MENU - JAVASCRIPT
   Premium Edition with Enhanced Animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all premium effects
    initScrollAnimations();
    initParallaxEffect();
    initSparkleEffects();
    initFloatingParticles();
    initSmoothReveal();
});

/**
 * Initialize Intersection Observer for scroll animations
 * with staggered reveal for menu items
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Stagger menu items within section
                const menuItems = entry.target.querySelectorAll('.menu-item');
                menuItems.forEach((item, index) => {
                    item.style.transitionDelay = `${index * 0.1}s`;
                    item.classList.add('revealed');
                });
            }
        });
    }, observerOptions);
    
    // Observe all menu sections
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Enhanced parallax scrolling effect with depth layers
 */
function initParallaxEffect() {
    const header = document.querySelector('.header');
    const crest = document.querySelector('.royal-crest');
    const archFrame = document.querySelector('.arch-frame');
    
    if (!header) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const headerHeight = header.offsetHeight;
                
                if (scrolled < headerHeight) {
                    const parallaxSpeed = 0.4;
                    const opacityFade = 1 - (scrolled / (headerHeight * 0.8));
                    
                    header.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
                    header.style.opacity = Math.max(0, opacityFade);
                    
                    // Layered parallax for depth
                    if (crest) {
                        crest.style.transform = `translateY(${scrolled * 0.2}px)`;
                    }
                    if (archFrame) {
                        archFrame.style.transform = `translateX(-50%) translateY(${scrolled * 0.1}px)`;
                    }
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

/**
 * Enhanced golden sparkle effects on menu item hover
 */
function initSparkleEffects() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            // Create sparkle burst effect
            createSparkle(this, e);
        });
    });
}

/**
 * Create sparkle particle on hover
 */
function createSparkle(element, event) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle-particle';
    sparkle.innerHTML = '✦';
    sparkle.style.cssText = `
        position: absolute;
        left: ${event.offsetX || 20}px;
        top: ${event.offsetY || 20}px;
        color: #DAA520;
        font-size: 0.8rem;
        pointer-events: none;
        animation: sparkleFloat 0.8s ease-out forwards;
        z-index: 10;
    `;
    
    element.style.position = 'relative';
    element.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 800);
}

/**
 * Initialize floating particles in header
 */
function initFloatingParticles() {
    const particleContainer = document.querySelector('.header-particles');
    if (!particleContainer) return;
    
    // Create additional floating particles
    const particleSymbols = ['✦', '◆', '✧', '❖'];
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('span');
        particle.className = 'floating-particle';
        particle.innerHTML = particleSymbols[i % particleSymbols.length];
        particle.style.cssText = `
            position: absolute;
            left: ${10 + Math.random() * 80}%;
            top: ${Math.random() * 100}%;
            color: #DAA520;
            font-size: ${0.3 + Math.random() * 0.4}rem;
            opacity: ${0.2 + Math.random() * 0.3};
            animation: floatParticle ${5 + Math.random() * 5}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
        `;
        particleContainer.appendChild(particle);
    }
}

/**
 * Smooth reveal animation for page load
 */
function initSmoothReveal() {
    // Add loaded class for initial animations
    document.body.classList.add('page-loaded');
    
    // Reveal header elements sequentially
    const headerElements = [
        '.royal-crest',
        '.ornament-top',
        '.main-title',
        '.subtitle',
        '.tagline',
        '.header-flourish',
        '.college-info',
        '.ornament-bottom'
    ];
    
    headerElements.forEach((selector, index) => {
        const el = document.querySelector(selector);
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 200 + (index * 100));
        }
    });
}

/**
 * Smooth scroll to sections (for potential navigation)
 */
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Keyboard navigation support for accessibility
 */
document.addEventListener('keydown', (e) => {
    // Press 'H' to scroll to top
    if (e.key === 'h' || e.key === 'H') {
        if (document.activeElement === document.body) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
    
    // Press 'M' to scroll to menu
    if (e.key === 'm' || e.key === 'M') {
        if (document.activeElement === document.body) {
            const menuContainer = document.querySelector('.menu-container');
            if (menuContainer) {
                menuContainer.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }
});

/**
 * Preload fonts for better performance
 */
if ('fonts' in document) {
    Promise.all([
        document.fonts.load('400 1em "Playfair Display"'),
        document.fonts.load('400 1em "Cormorant Garamond"'),
        document.fonts.load('400 1em "Inter"')
    ]).then(() => {
        document.body.classList.add('fonts-loaded');
    });
}

/**
 * Add CSS for sparkle animation (injected dynamically)
 */
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-30px) scale(0.5);
        }
    }
    
    .menu-item.revealed {
        opacity: 1 !important;
    }
`;
document.head.appendChild(sparkleStyle);
