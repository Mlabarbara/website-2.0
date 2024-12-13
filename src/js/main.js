// Import our custom elements
import '../components/Navigation.js';

// Initialize theme from localStorage
function initializeTheme() {
    // Check localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply theme
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// Initialize animations
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.animate-fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        observer.observe(element);
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeAnimations();
});