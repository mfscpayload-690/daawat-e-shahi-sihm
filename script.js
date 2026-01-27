/* ========================================
   ROYAL MUGHAL MENU - JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize smooth scroll animations
    initScrollAnimations();
    
    // Add subtle parallax effect to header
    initParallaxEffect();
    
    // Add sparkle effect on hover (optional enhancement)
    initSparkleEffects();
});

/**
 * Initialize Intersection Observer for scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
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
 * Add subtle parallax scrolling effect to header
 */
function initParallaxEffect() {
    const header = document.querySelector('.header');
    
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (scrolled < window.innerHeight) {
            header.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            header.style.opacity = 1 - (scrolled / 500);
        }
    });
}

/**
 * Add golden sparkle effects on menu item hover
 */
function initSparkleEffects() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            // Add a subtle glow effect
            this.style.boxShadow = '0 4px 20px rgba(218, 165, 32, 0.15)';
        });
        
        item.addEventListener('mouseleave', function(e) {
            this.style.boxShadow = 'none';
        });
    });
}

/**
 * Smooth scroll to sections (if we add navigation later)
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
 * Add keyboard navigation support for accessibility
 */
document.addEventListener('keydown', (e) => {
    // Add keyboard shortcuts if needed
    // Example: Press 'H' to scroll to top
    if (e.key === 'h' || e.key === 'H') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
