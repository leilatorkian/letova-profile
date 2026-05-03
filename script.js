// ===========================
// Lightbox Modal Functionality
// ===========================

// Get modal element
const lightbox = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('modal-title');
const lightboxMeta = document.getElementById('modal-meta');
const lightboxDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.lightbox-close');

// Store dress data
const dressData = {
    1: {
        image: 'images/dress-01.jpg',
        alt: '',
        title: 'Fear into Freedom',
        meta: '2023 • Neoprene & Wool',
        description: 'A wearable manifesto against fear, designed for all who dare to fight for freedom. '
    },
    2: {
        image: 'images/dress-02.jpg',
        alt: '',
        title: 'Between Worlds',
        meta: '2022 • Cashmere & Silk',
        description: 'A study in contrast, asymmetric forms and shifting grey tones inspired by the natural landscapes of Iran, where opposites meet in quiet harmony.'
    },
    3: {
        image: 'images/dress-03.jpg',
        alt: 'Classic A-line wedding dress with embroidered details',
        title: 'Ethereal Grace',
        meta: '2026 • Organza & Tulle',
        description: 'A timeless bridal gown with hand-embroidered details and a romantic A-line silhouette in pure ivory. Each embroidered motif is carefully placed to enhance the natural beauty of the wearer. This dress represents the perfect marriage of traditional craftsmanship and contemporary elegance.'
    },
    4: {
        image: 'images/dress-04.jpg',
        alt: 'Structured midi dress with architectural details',
        title: 'Urban Sophistication',
        meta: '2025 • Structured Cotton & Linen',
        description: 'A modern midi dress featuring architectural lines and clean tailoring perfect for contemporary elegance. Inspired by urban architecture, this piece combines functionality with high fashion. The structured silhouette and natural fibers make it versatile for various occasions, from business to evening wear.'
    }
};

// ===========================
// Open Lightbox
// ===========================

function openLightbox(dressId) {
    const dress = dressData[dressId];
    
    if (!dress) return;
    
    // Set modal content
    lightboxImage.src = dress.image;
    lightboxImage.alt = dress.alt;
    lightboxTitle.textContent = dress.title;
    lightboxMeta.textContent = dress.meta;
    lightboxDescription.textContent = dress.description;
    
    // Show modal
    lightbox.showModal();
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// ===========================
// Close Lightbox
// ===========================

function closeLightbox() {
    lightbox.close();
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// ===========================
// Event Listeners
// ===========================

// Add click listeners to all dress cards
document.querySelectorAll('.dress-card').forEach(card => {
    const dressId = card.dataset.dressId;
    
    // Click on image wrapper
    const imageWrapper = card.querySelector('.dress-image-wrapper');
    imageWrapper.addEventListener('click', () => {
        openLightbox(dressId);
    });
    
    // Click on "View Details" button
    const viewButton = card.querySelector('.view-details-btn');
    viewButton.addEventListener('click', (e) => {
        e.stopPropagation();
        openLightbox(dressId);
    });
    
    // Keyboard accessibility for image wrapper
    imageWrapper.setAttribute('tabindex', '0');
    imageWrapper.setAttribute('role', 'button');
    imageWrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLightbox(dressId);
        }
    });
});

// Close button click
closeButton.addEventListener('click', closeLightbox);

// Close on backdrop click
lightbox.addEventListener('click', (e) => {
    // Only close if clicking the backdrop (not the content)
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close on ESC key
lightbox.addEventListener('cancel', (e) => {
    closeLightbox();
});

// ===========================
// Smooth Scroll for Navigation
// ===========================

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================

// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe dress cards for animation
document.querySelectorAll('.dress-card').forEach(card => {
    observer.observe(card);
});

// ===========================
// Loading State for Images
// ===========================

// Add loading state for all images
document.querySelectorAll('.dress-image, .intro-image').forEach(img => {
    if (!img.complete) {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    }
});

// ===========================
// Console Welcome Message
// ===========================

console.log('%c✨ Fashion Portfolio', 'font-size: 20px; font-weight: bold; color: #8B7355;');
console.log('%cWelcome to the portfolio! Designed with elegance and accessibility in mind.', 'font-size: 14px; color: #666;');
