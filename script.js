// ===========================
// Collection Data
// ===========================

const collectionsData = {
    fear: {
        title: 'Fear Into Freedom',
        tags: 'Genderless · Womenswear',
        description: 'A wearable manifesto against fear. The feeling of fear opposes freedom — the greater the fear, the further one is from personal liberty. Inspired by the Iranian people\'s courage in fighting for their rights, this collection visualizes fear and translates it into textile. The color palette — pink, green, and grey — speaks to protest, hope, and exhaustion. Both feminine and unisex, the collection dismantles false gender stereotypes as it dismantles fear itself.',
        outfits: [
            {
                image: 'images/dress-01.jpg',
                alt: 'Outfit 1 – Fear Into Freedom, 2023',
                title: 'Outfit 1',
                meta: 'Neoprene & Wool',
                description: 'Structured neoprene silhouette with wool detail — designed for those who dare to fight for freedom.'
            },
            {
                image: 'images/fear-outfit2.jpg',
                alt: 'Outfit 2 – Fear Into Freedom, 2023',
                title: 'Outfit 2',
                meta: 'Rib Jersey & Air Mesh',
                description: 'Layered jersey and mesh construction evoking movement and vulnerability, set against a grey ground.'
            },
            {
                image: 'images/fear-outfit3.jpg',
                alt: 'Outfit 3 – Fear Into Freedom, 2023',
                title: 'Outfit 3',
                meta: 'Reflective Fabric & Felt',
                description: 'Reflective surfaces confront the viewer — a mirror of society\'s gaze turned back on itself.'
            },
            {
                image: 'images/fear-outfit4.jpg',
                alt: 'Outfit 4 – Fear Into Freedom, 2023',
                title: 'Outfit 4',
                meta: 'Faux Fur & Wool',
                description: 'Softness as defiance — faux fur textures merge with structured wool to challenge what tenderness means.'
            },
            {
                image: 'images/fear-outfit5.jpg',
                alt: 'Outfit 5 – Fear Into Freedom, 2023',
                title: 'Outfit 5',
                meta: 'Neoprene & Rib Jersey',
                description: 'Pink as protest: historically a color of resistance, recast here in clean neoprene lines.'
            },
            {
                image: 'images/fear-outfit6.jpg',
                alt: 'Outfit 6 – Fear Into Freedom, 2023',
                title: 'Outfit 6',
                meta: 'Wool & Air Mesh',
                description: 'The closing piece — green for hope, grey for struggle, worn together as one.'
            }
        ]
    },
    worlds: {
        title: 'Between Worlds',
        tags: 'Sportswear · Menswear · Genderless',
        description: 'A study in contrast, asymmetric forms and shifting grey tones inspired by the natural landscapes of Iran, where opposites meet in quiet harmony. The concept references the contrast that exists everywhere — between social levels, genders, in nature, and in different thoughts. Asymmetry of form and a harmonic combination of light and dark shades give shape to this duality.',
        outfits: [
            {
                image: 'images/dress-02.jpg',
                alt: 'Outfit 1 – Between Worlds, 2022',
                title: 'Outfit 1 – Key Look',
                meta: 'Cashmere & Silk',
                description: 'Asymmetric coat in cashmere and wool paired with an asymmetric jumpsuit in cotton and wool — both wearable from either side.'
            },
            {
                image: 'images/worlds-outfit2.jpg',
                alt: 'Outfit 2 – Between Worlds, 2022',
                title: 'Outfit 2',
                meta: 'Cotton & Cashmere',
                description: 'Asymmetric trousers in cotton paired with a hoody featuring two different sleeves, and a cashmere-wool vest fastened with a buttoned waistband.'
            }
        ]
    },
    people: {
        title: 'People',
        tags: 'Creative Identity · Womenswear',
        description: 'A celebration of faces, gazes, and races — this collection brings human emotion to life on fabric, showing that despite our differences, love is always possible. Faces are rendered through embroidery and metal earring details, turning each piece into a wearable portrait. Crafted in self-patterned cotton and two-layered cotton-filled self-patterned jersey.',
        outfits: [
            {
                image: 'images/dress-03.jpg',
                alt: 'Outfit 1 – People, 2021',
                title: 'Outfit 1',
                meta: 'Self-patterned Cotton',
                description: 'Embroidered faces emerge across the surface — each one unique, each one a story of emotional connection.'
            },
            {
                image: 'images/people-outfit2.jpg',
                alt: 'Outfit 2 – People, 2021',
                title: 'Outfit 2',
                meta: 'Cotton-filled Jersey',
                description: 'Two-layered cotton-filled self-patterned jersey with metal earring details — portraits rendered in three dimensions.'
            }
        ]
    },
    love: {
        title: 'Worn With Love',
        tags: 'Sustainability · Upcycling · Genderless',
        description: 'Upcycling is more than sustainability — it is a philosophy, an emotion, and a way of staying close to the people we love. This collection transforms old, worn garments into something new and modern, beginning with a mother\'s trenchcoat remade into a fresh silhouette with the same spirit of love and attachment at its core. Two separable pieces, joined by buttons, crafted from reclaimed materials into something made to last.',
        outfits: [
            {
                image: 'images/dress-04.jpg',
                alt: 'Outfit 1 – Worn With Love, 2020',
                title: 'Outfit 1 – The Trenchcoat',
                meta: 'Recycled Cotton & Linen',
                description: 'Remade from a mother\'s worn trenchcoat into a modern two-piece silhouette. The seams are finished with fabric bands for durability.'
            }
        ]
    },
    wild: {
        title: 'Style & Wildness',
        tags: 'Menswear',
        description: 'The main inspirations are the abstract and geometric patterns of Persian carpets and clothing as cultural references, paired with asymmetric forms found in nature. The outfit combines an asymmetric jumpsuit and a half-coat crafted from a special fabric patterned with Persian carpet motifs. Colors draw from the traditional carpet palette, accented with green drawn from the natural world.',
        outfits: [
            {
                image: 'images/wild-outfit1.jpg',
                alt: 'Outfit 1 – Style & Wildness, 2019',
                title: 'Outfit 1',
                meta: 'Persian Carpet-patterned Fabric',
                description: 'Asymmetric jumpsuit and half-coat woven from fabric bearing Persian carpet motifs — culture worn on the body.'
            }
        ]
    },
    super: {
        title: 'Supernormal',
        tags: 'Womenswear',
        description: 'Inspired by the everyday object — the Q-Tip. Plain, white, rhythmic in its form when massed together. The dress echoes its shape and color: crafted from a white secondhand bedcover, ironed with unorganized folds to suggest the cotton tips, and organized folds to reflect the rhythmic order of Q-Tips grouped in mass. The commonplace made extraordinary through the logic of repetition.',
        outfits: [
            {
                image: 'images/super-outfit1.jpg',
                alt: 'Outfit 1 – Supernormal, 2019',
                title: 'Outfit 1',
                meta: 'Secondhand Bedcover (White Cotton)',
                description: 'A single white secondhand bedcover, ironed into deliberate folds — form and rhythm drawn from Q-Tips grouped in mass.'
            }
        ]
    },
    textile: {
        title: 'Textile Design',
        tags: 'Digital Print · Womenswear',
        description: 'Two digital prints exploring human connection. The first — inspired by hands — captures the effect of people on each other when they touch, with overlapping forms and blending colors showing where lives meet. The second print emerges from the image of a creative mind at work: thoughts crossing and intersecting like the surface of wrinkled fabric, rendered literally as the source material for print.',
        outfits: [
            {
                image: 'images/textile-outfit1.jpg',
                alt: 'Hands Print – Textile Design, 2022',
                title: 'Hands Print',
                meta: 'Digital Print on Cotton',
                description: 'Overlapping hand motifs with blended colors — two people, two lives, meeting at the point of touch.'
            },
            {
                image: 'images/textile-outfit2.jpg',
                alt: 'Wrinkled Thoughts Print – Textile Design, 2022',
                title: 'Wrinkled Thoughts Print',
                meta: 'Digital Print on Cotton',
                description: 'A creative mind rendered as fabric — the wrinkles of thought photographed and reprinted as pattern.'
            }
        ]
    }
};

// ===========================
// Collection Modal Functionality
// ===========================

const collectionModal = document.getElementById('collection-modal');
const collectionModalTitle = document.getElementById('collection-modal-title');
const collectionModalTags = document.getElementById('collection-modal-tags');
const collectionModalDescription = document.getElementById('collection-modal-description');
const collectionModalGallery = document.getElementById('collection-modal-gallery');
const collectionModalClose = document.querySelector('.collection-modal-close');

// Outfit modal elements
const outfitModal = document.getElementById('outfit-modal');
const outfitModalImage = document.getElementById('outfit-modal-image');
const outfitModalTitle = document.getElementById('outfit-modal-title');
const outfitModalMeta = document.getElementById('outfit-modal-meta');
const outfitModalDescription = document.getElementById('outfit-modal-description');
const outfitModalClose = document.querySelector('.outfit-modal-close');

// Open Collection Modal
function openCollectionModal(collectionId) {
    const collection = collectionsData[collectionId];
    
    if (!collection) return;
    
    // Set modal header
    collectionModalTitle.textContent = collection.title;
    collectionModalTags.textContent = collection.tags;
    collectionModalDescription.textContent = collection.description;
    
    // Clear and populate gallery
    collectionModalGallery.innerHTML = '';
    
    collection.outfits.forEach((outfit, index) => {
        const outfitCard = document.createElement('article');
        outfitCard.className = 'modal-outfit-card';
        outfitCard.dataset.outfitIndex = index;
        outfitCard.dataset.collectionId = collectionId;
        
        outfitCard.innerHTML = `
            <div class="modal-outfit-image-wrapper">
                <img src="${outfit.image}" 
                     alt="${outfit.alt}" 
                     class="modal-outfit-image"
                     loading="lazy">
            </div>
            <div class="modal-outfit-info">
                <h4 class="modal-outfit-title">${outfit.title}</h4>
                <p class="modal-outfit-meta">${outfit.meta}</p>
                <p class="modal-outfit-description">${outfit.description}</p>
            </div>
        `;
        
        // Add click handler to open outfit detail modal
        outfitCard.addEventListener('click', (e) => {
            e.stopPropagation();
            openOutfitModal(collectionId, index);
        });
        
        // Keyboard accessibility
        outfitCard.setAttribute('tabindex', '0');
        outfitCard.setAttribute('role', 'button');
        outfitCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                openOutfitModal(collectionId, index);
            }
        });
        
        collectionModalGallery.appendChild(outfitCard);
    });
    
    // Show modal
    collectionModal.showModal();
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Close Collection Modal
function closeCollectionModal() {
    collectionModal.close();
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Open Outfit Detail Modal
function openOutfitModal(collectionId, outfitIndex) {
    const collection = collectionsData[collectionId];
    
    if (!collection || !collection.outfits[outfitIndex]) return;
    
    const outfit = collection.outfits[outfitIndex];
    
    // Set modal content
    outfitModalImage.src = outfit.image;
    outfitModalImage.alt = outfit.alt;
    outfitModalTitle.textContent = outfit.title;
    outfitModalMeta.textContent = outfit.meta;
    outfitModalDescription.textContent = outfit.description;
    
    // Show modal
    outfitModal.showModal();
}

// Close Outfit Modal
function closeOutfitModal() {
    outfitModal.close();
}

// ===========================
// Event Listeners
// ===========================

// Add click listeners to all collection cards
document.querySelectorAll('.collection-card').forEach(card => {
    const collectionId = card.dataset.collectionId;
    
    // Click on card or button
    card.addEventListener('click', (e) => {
        openCollectionModal(collectionId);
    });
    
    // Keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openCollectionModal(collectionId);
        }
    });
});

// Close button click
collectionModalClose.addEventListener('click', closeCollectionModal);

// Close on backdrop click
collectionModal.addEventListener('click', (e) => {
    if (e.target === collectionModal) {
        closeCollectionModal();
    }
});

// Close on ESC key
collectionModal.addEventListener('cancel', (e) => {
    closeCollectionModal();
});

// Outfit modal close button
outfitModalClose.addEventListener('click', closeOutfitModal);

// Close outfit modal on backdrop click
outfitModal.addEventListener('click', (e) => {
    if (e.target === outfitModal) {
        closeOutfitModal();
    }
});

// Close outfit modal on ESC key
outfitModal.addEventListener('cancel', (e) => {
    closeOutfitModal();
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
// Loading State for Images
// ===========================

document.querySelectorAll('.collection-card-image, .intro-image').forEach(img => {
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

console.log('%c✨ Letova Portfolio', 'font-size: 20px; font-weight: bold; color: #8B7355;');
console.log('%cDesigned with elegance and accessibility in mind.', 'font-size: 14px; color: #666;');
