// ===========================
// Lightbox Modal Functionality
// ===========================

const lightbox = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('modal-title');
const lightboxMeta = document.getElementById('modal-meta');
const lightboxDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.lightbox-close');

// ===========================
// Dress Data – all collections
// ===========================

const dressData = {
    // ── Collection 1: Fear Into Freedom ──
    'fear-1': {
        image: 'images/dress-01.jpg',
        alt: 'Outfit 1 – Fear Into Freedom, 2023',
        title: 'Fear Into Freedom — Outfit 1',
        meta: '2023  ·  Neoprene & Wool',
        description: 'Structured neoprene silhouette with wool detail. A wearable manifesto against fear, designed for all who dare to fight for freedom. The grey tones reflect tiredness and anger; the neoprene holds its shape against pressure.'
    },
    'fear-2': {
        image: 'images/fear-outfit2.jpg',
        alt: 'Outfit 2 – Fear Into Freedom, 2023',
        title: 'Fear Into Freedom — Outfit 2',
        meta: '2023  ·  Rib Jersey & Air Mesh',
        description: 'Layered jersey and air mesh construction. The open mesh evokes vulnerability and exposure, while the rib jersey grounds the body — movement and stillness held in tension.'
    },
    'fear-3': {
        image: 'images/fear-outfit3.jpg',
        alt: 'Outfit 3 – Fear Into Freedom, 2023',
        title: 'Fear Into Freedom — Outfit 3',
        meta: '2023  ·  Reflective Fabric & Felt',
        description: 'Reflective surfaces confront the viewer — a mirror of society\'s gaze turned back on itself. Felt grounds the piece in warmth and solidity, anchoring protest in the human body.'
    },
    'fear-4': {
        image: 'images/fear-outfit4.jpg',
        alt: 'Outfit 4 – Fear Into Freedom, 2023',
        title: 'Fear Into Freedom — Outfit 4',
        meta: '2023  ·  Faux Fur & Wool',
        description: 'Softness as defiance. Faux fur textures merge with structured wool to challenge what tenderness means in the context of resistance. Pink as a color of protest: security, sensitivity, and the feminist movement embodied in a single garment.'
    },
    'fear-5': {
        image: 'images/fear-outfit5.jpg',
        alt: 'Outfit 5 – Fear Into Freedom, 2023',
        title: 'Fear Into Freedom — Outfit 5',
        meta: '2023  ·  Neoprene & Rib Jersey',
        description: 'Pink as protest: historically charged, now recast in clean neoprene lines. The genderless silhouette speaks to everyone who has overcome a fear imposed by others.'
    },
    'fear-6': {
        image: 'images/fear-outfit6.jpg',
        alt: 'Outfit 6 – Fear Into Freedom, 2023',
        title: 'Fear Into Freedom — Outfit 6',
        meta: '2023  ·  Wool & Air Mesh',
        description: 'The closing look — green for hope, grey for struggle, worn together as one. Shades of green inspire renaissance and calm; grey carries the weight of ongoing resistance. Together, they are the collection\'s final word.'
    },

    // ── Collection 2: Between Worlds ──
    'worlds-1': {
        image: 'images/dress-02.jpg',
        alt: 'Outfit 1 – Between Worlds, 2022',
        title: 'Between Worlds — Key Look',
        meta: '2022  ·  Cashmere & Silk; Cotton & Wool',
        description: 'Asymmetric coat in cashmere and wool paired with an asymmetric jumpsuit in cotton and wool, both wearable from either side. A silk collar completes the look. The asymmetry of form and the contrast of light and dark grey tones reflect the harmony of opposites — inspired by the natural landscapes of Iran.'
    },
    'worlds-2': {
        image: 'images/worlds-outfit2.jpg',
        alt: 'Outfit 2 – Between Worlds, 2022',
        title: 'Between Worlds — Outfit 2',
        meta: '2022  ·  Cotton & Cashmere-Wool',
        description: 'Asymmetric trousers in cotton, a hoody with two different sleeves, and a cashmere-wool vest fastened by a buttoned waistband. Sportswear sensibility meets tailored contrast — the functional and the luxurious in quiet dialogue.'
    },

    // ── Collection 3: People ──
    'people-1': {
        image: 'images/dress-03.jpg',
        alt: 'Outfit 1 – People, 2021',
        title: 'People — Outfit 1',
        meta: '2021  ·  Self-patterned Cotton',
        description: 'Embroidered faces emerge across the surface of self-patterned cotton — each one unique, each one a story of emotional connection. Despite our different emotional states, we can always love each other.'
    },
    'people-2': {
        image: 'images/people-outfit2.jpg',
        alt: 'Outfit 2 – People, 2021',
        title: 'People — Outfit 2',
        meta: '2021  ·  Two-layered Cotton-filled Jersey',
        description: 'Two-layered cotton-filled self-patterned jersey with metal earring details — portraits rendered in three dimensions. Faces are sometimes sewn onto fabric and sometimes made from metal, turning each garment into a wearable portrait gallery.'
    },

    // ── Collection 4: Worn With Love ──
    'love-1': {
        image: 'images/dress-04.jpg',
        alt: 'Outfit 1 – Worn With Love, 2020',
        title: 'Worn With Love — The Trenchcoat',
        meta: '2020  ·  Recycled Cotton & Linen',
        description: 'Remade from a mother\'s worn trenchcoat into a modern two-piece silhouette. The seams are finished with fabric bands for durability. Two separable pieces joined by buttons — the original love and attachment preserved in every reclaimed thread. Upcycling as philosophy, emotion, and a way of staying close to the people we love.'
    },

    // ── Collection 5: Style & Wildness ──
    'wild-1': {
        image: 'images/wild-outfit1.jpg',
        alt: 'Outfit 1 – Style & Wildness, 2019',
        title: 'Style & Wildness — Outfit 1',
        meta: '2019  ·  Persian Carpet-patterned Fabric',
        description: 'Asymmetric jumpsuit and half-coat woven from fabric bearing Persian carpet motifs — culture worn on the body. The abstract geometric patterns of traditional Persian textiles meet the asymmetric forms of the natural world. Colors drawn from the traditional carpet palette, accented with green from nature.'
    },

    // ── Collection 6: Supernormal ──
    'super-1': {
        image: 'images/super-outfit1.jpg',
        alt: 'Outfit 1 – Supernormal, 2019',
        title: 'Supernormal — Outfit 1',
        meta: '2019  ·  Secondhand Bedcover (White Cotton)',
        description: 'A single white secondhand bedcover, ironed into deliberate folds. Unorganized folds suggest the cotton tips; organized folds reflect the rhythmic order of Q-Tips grouped in mass. The everyday object — commonplace, white, repetitive — elevated into the extraordinary through the logic of form and repetition.'
    },

    // ── Collection 7: Textile Design ──
    'textile-1': {
        image: 'images/textile-outfit1.jpg',
        alt: 'Hands Print – Textile Design, 2022',
        title: 'Textile Design — Hands Print',
        meta: '2022  ·  Digital Print on Cotton',
        description: 'Overlapping hand motifs with blended, mixing colors — two people, two lives, meeting at the point of touch. Hands speak together when we meet and shake them. Their movements in different body gestures were the starting point: showing the effect of people on each other when they hold hands.'
    },
    'textile-2': {
        image: 'images/textile-outfit2.jpg',
        alt: 'Wrinkled Thoughts Print – Textile Design, 2022',
        title: 'Textile Design — Wrinkled Thoughts Print',
        meta: '2022  ·  Digital Print on Cotton',
        description: 'A creative mind rendered as fabric. Different thoughts cross each other and make thinking look like a wrinkled surface — so the print was made from wrinkled fabric itself, photographed and returned to cloth as pattern. The material and the metaphor become one.'
    }
};

// ===========================
// Open Lightbox
// ===========================

function openLightbox(dressId) {
    const dress = dressData[dressId];
    if (!dress) return;

    lightboxImage.src = dress.image;
    lightboxImage.alt = dress.alt;
    lightboxTitle.textContent = dress.title;
    lightboxMeta.textContent = dress.meta;
    lightboxDescription.textContent = dress.description;

    lightbox.showModal();
    document.body.style.overflow = 'hidden';
}

// ===========================
// Close Lightbox
// ===========================

function closeLightbox() {
    lightbox.close();
    document.body.style.overflow = '';
}

// ===========================
// Event Listeners
// ===========================

document.querySelectorAll('.dress-card').forEach(card => {
    const dressId = card.dataset.dressId;

    const imageWrapper = card.querySelector('.dress-image-wrapper');
    imageWrapper.addEventListener('click', () => openLightbox(dressId));

    const viewButton = card.querySelector('.view-details-btn');
    viewButton.addEventListener('click', (e) => {
        e.stopPropagation();
        openLightbox(dressId);
    });

    imageWrapper.setAttribute('tabindex', '0');
    imageWrapper.setAttribute('role', 'button');
    imageWrapper.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLightbox(dressId);
        }
    });
});

closeButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

lightbox.addEventListener('cancel', () => closeLightbox());

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
            const offsetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.dress-card').forEach(card => observer.observe(card));

// ===========================
// Image Loading States
// ===========================

document.querySelectorAll('.dress-image, .intro-image').forEach(img => {
    if (!img.complete) {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        img.addEventListener('load', () => { img.style.opacity = '1'; });
    }
});

console.log('%c✨ Letova – Leila Torkian', 'font-size: 20px; font-weight: bold; color: #8B7355;');
console.log('%cFashion portfolio — 7 collections, 2019–2023.', 'font-size: 14px; color: #666;');
