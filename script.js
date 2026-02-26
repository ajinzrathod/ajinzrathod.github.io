/* ============================================
   AJINKYA RATHOD - PERSONAL WEBSITE
   JavaScript - Interactive Features
   ============================================ */

// ============================================
// DARK MODE TOGGLE
// ============================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Initialize theme from localStorage or system preference
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let theme = 'light';
    
    if (savedTheme) {
        theme = savedTheme;
    } else if (prefersDark) {
        theme = 'dark';
    }
    
    setTheme(theme);
}

// Set theme and save to localStorage
function setTheme(theme) {
    if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Update theme icon on system preference change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Initialize theme on page load
initializeTheme();

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only prevent default for internal links
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all article and project cards
document.querySelectorAll('.article-card, .project-card, .video-card, .experience-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================

function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightActiveNavLink);

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Add this function to easily update your content
 * USAGE GUIDE:
 * 
 * 1. TO UPDATE ARTICLES:
 *    Replace the article URLs and titles in index.html
 *    Update the href attributes in the Medium links section
 *
 * 2. TO UPDATE VIDEOS:
 *    Replace the YouTube video IDs in the iframe src
 *    Change dQw4w9WgXcQ to your actual video IDs
 *    Format: https://www.youtube.com/embed/{VIDEO_ID}
 *
 * 3. TO UPDATE PROJECTS:
 *    Replace project names, descriptions, and links
 *    Update GitHub URLs and demo links
 *    Add/remove project cards as needed
 *
 * 4. TO UPDATE SOCIAL LINKS:
 *    Replace your-email@example.com with your actual email
 *    Update all social media URLs in the contact section
 *
 * 5. TO ADD YOUR AVATAR:
 *    Replace assets/images/avatar.jpg with your image file
 *    Place your image file in the assets/images/ folder
 */

// Log initialization message
console.log('%c👋 Welcome to Ajinkya Rathod\'s Portfolio!', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%cTo customize this site, update the links and content in index.html', 'color: #6b7280;');

// ============================================
// MOBILE MENU TOGGLE (for future enhancement)
// ============================================

/**
 * If you want to add a mobile menu hamburger button in the future,
 * uncomment this section and add the HTML toggle button to your header
 */

/*
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}
*/

// ============================================
// ANALYTICS/TRACKING (Optional)
// ============================================

/**
 * Add Google Analytics or your preferred analytics tool here
 * Example for Google Analytics 4:
 * 
 * <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
 * <script>
 *   window.dataLayer = window.dataLayer || [];
 *   function gtag(){dataLayer.push(arguments);}
 *   gtag('js', new Date());
 *   gtag('config', 'GA_ID');
 * </script>
 */

// ============================================
// PERFORMANCE MONITORING (Optional)
// ============================================

// Monitor Core Web Vitals
if ('web-vital' in window) {
    // Uncomment to add web-vitals library for performance monitoring
    // import {onCLS, onFID, onFCP, onLCP, onTTFB} from 'web-vitals';
}
