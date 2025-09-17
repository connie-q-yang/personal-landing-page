// Connie Yang Portfolio - Main JavaScript

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initSmoothScrolling();
    initAnimations();
    initMobileMenu();
    loadProfileImage();
    initMediaTabs();
    initTypingAnimation();
});

// Navbar scroll effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add stagger effect for grid items
                if (entry.target.parentElement.classList.contains('expertise-grid') ||
                    entry.target.parentElement.classList.contains('media-grid')) {
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // Timeline animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (mobileMenuBtn.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
        
        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// Load profile image
function loadProfileImage() {
    const profileCircle = document.querySelector('.profile-circle');
    const profileInner = document.querySelector('.profile-inner');

    if (profileCircle && profileInner) {
        const img = new Image();
        img.src = 'assets/images/profile.png';

        img.onload = function() {
            // Replace initials with actual image
            profileCircle.innerHTML = `
                <img src="assets/images/profile.png"
                     alt="Connie Yang"
                     style="width: 100%; height: 100%; object-fit: cover;">
            `;
        };

        img.onerror = function() {
            // Keep the initials as fallback
            console.log('Profile image not found, using initials');
        };
    }
}

// Analytics (optional - replace with your tracking ID)
function initAnalytics() {
    // Google Analytics or other analytics code
    console.log('Analytics initialized');
}

// Email Popup Functions
function openEmailForm() {
    const popup = document.getElementById('emailPopup');
    if (popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
    }
}

function closeEmailForm() {
    const popup = document.getElementById('emailPopup');
    if (popup) {
        popup.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Handle email form submission
function sendEmail(event) {
    event.preventDefault();

    const form = document.getElementById('emailForm');
    const formData = new FormData(form);

    // Construct mailto link
    const subject = encodeURIComponent(formData.get('subject'));
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const body = encodeURIComponent(
        `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Open email client
    window.location.href = `mailto:contactconnieyang@gmail.com?subject=${subject}&body=${body}`;

    // Close popup and reset form
    setTimeout(() => {
        closeEmailForm();
        form.reset();
    }, 500);
}

// Close popup when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('emailPopup');
    if (popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                closeEmailForm();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && popup.classList.contains('active')) {
                closeEmailForm();
            }
        });
    }
});

// Media Tabs Filtering
function initMediaTabs() {
    const tabs = document.querySelectorAll('.media-tab');
    const mediaItems = document.querySelectorAll('.media-item');

    if (tabs.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            // Filter media items
            mediaItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Typing Animation
function initTypingAnimation() {
    const typingElement = document.getElementById('typingLine');
    if (!typingElement) return;

    const phrases = [
        "I build AI systems that drive real impact.",
        "I transform ideas into scalable solutions.",
        "I lead teams to deliver enterprise AI."
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause at end of phrase
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing new phrase
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing animation
    setTimeout(type, 1000);
}

// Toggle Education Details
function toggleEducation() {
    const details = document.getElementById('educationDetails');
    const toggle = document.querySelector('.education-toggle');
    const icon = toggle.querySelector('.toggle-icon');

    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        icon.textContent = '+';
        toggle.classList.remove('active');
    } else {
        details.classList.add('expanded');
        icon.textContent = '−';
        toggle.classList.add('active');
    }
}

// Console Easter Egg
console.log('%c👋 Hi there!', 'font-size: 24px; font-weight: bold; color: #5e72e4;');
console.log('%cInterested in working together? Let\'s connect!', 'font-size: 14px; color: #64748b;');
console.log('%c📧 contactconnieyang@gmail.com', 'font-size: 12px; color: #94a3b8;');