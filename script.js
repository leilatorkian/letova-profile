// ===========================
// Collection Data
// ===========================

const collectionsData = {
    survival: {
        title: 'Multi-Functional Survival System',
        tags: 'Technical Outerwear · Genderless',
        description: 'An adaptive survival jacket developed for changing environmental conditions. The design transforms into a vest, incorporates an oxygen-carrying system, and protects from harsh elements like wind and sand. Technical function meets wearable design.',
        outfits: [
            { image: 'images/fear-outfit6-a.jpg', alt: 'Multi-Functional Survival System, 2025' },
            { image: 'images/fear-outfit6-b.jpg', alt: 'Multi-Functional Survival System, 2025' },
            { image: 'images/fear-outfit6-c.jpg', alt: 'Multi-Functional Survival System, 2025' },
            { image: 'images/fear-outfit6-d.jpg', alt: 'Multi-Functional Survival System, 2025' },
            { image: 'images/fear-outfit6-e.jpg', alt: 'Multi-Functional Survival System, 2025' },
            { image: 'images/fear-outfit6-f.jpg', alt: 'Multi-Functional Survival System, 2025' },
            { image: 'images/fear-outfit6-g.jpg', alt: 'Multi-Functional Survival System, 2025' },
            { image: 'images/fear-outfit6-h.jpg', alt: 'Multi-Functional Survival System, 2025' }
        ]
    },
    fear: {
        title: 'Fear Into Freedom',
        tags: 'Genderless · Womenswear',
        description: 'A wearable manifesto against fear. The feeling of fear opposes freedom: the greater the fear, the further one is from personal liberty. Inspired by people fighting for their rights across the world, this collection visualizes fear in textile. Pink, green, and grey speak to protest, hope, and exhaustion. Both feminine and unisex, dismantling false gender stereotypes alongside fear itself.',
        hasSubOutfits: true,
        subOutfits: [
            {
                title: 'Outfit 1',
                heroImage: 'images/fear-outfit1-a.jpg',
                images: [
                    { image: 'images/fear-outfit1-a.jpg', alt: 'Fear Into Freedom - Outfit 1, 2023' },
                    { image: 'images/fear-outfit1-b.jpg', alt: 'Fear Into Freedom - Outfit 1, 2023' },
                    { image: 'images/fear-outfit1-c.jpg', alt: 'Fear Into Freedom - Outfit 1, 2023' },
                    { image: 'images/fear-outfit1-d.jpg', alt: 'Fear Into Freedom - Outfit 1, 2023' },
                    { image: 'images/fear-outfit1-e.jpg', alt: 'Fear Into Freedom - Outfit 1, 2023' },
                    { image: 'images/fear-outfit1-f.jpg', alt: 'Fear Into Freedom - Outfit 1, 2023' },
                    { image: 'images/fear-outfit1-g.jpg', alt: 'Fear Into Freedom - Outfit 1, 2023' }
                ]
            },
            {
                title: 'Outfit 2',
                heroImage: 'images/fear-outfit2-a.jpg',
                images: [
                    { image: 'images/fear-outfit2-a.jpg', alt: 'Fear Into Freedom - Outfit 2, 2023' },
                    { image: 'images/fear-outfit2-b.jpg', alt: 'Fear Into Freedom - Outfit 2, 2023' },
                    { image: 'images/fear-outfit2-c.jpg', alt: 'Fear Into Freedom - Outfit 2, 2023' },
                    { image: 'images/fear-outfit2-d.jpg', alt: 'Fear Into Freedom - Outfit 2, 2023' },
                    { image: 'images/fear-outfit2-e.jpg', alt: 'Fear Into Freedom - Outfit 2, 2023' },
                    { image: 'images/fear-outfit2-f.jpg', alt: 'Fear Into Freedom - Outfit 2, 2023' },
                    { image: 'images/fear-outfit2-g.jpg', alt: 'Fear Into Freedom - Outfit 2, 2023' }
                ],
                technicalDrawings: [
                    { image: 'images/fear-outfit2-tech-a.jpg', alt: 'Fear Into Freedom - Outfit 2 Technical Drawing 1, 2023' },
                    { image: 'images/fear-outfit2-tech-b.jpg', alt: 'Fear Into Freedom - Outfit 2 Technical Drawing 2, 2023' },
                    { image: 'images/fear-outfit2-tech-c.jpg', alt: 'Fear Into Freedom - Outfit 2 Technical Drawing 3, 2023' }
                ]
            },
            {
                title: 'Outfit 3',
                heroImage: 'images/fear-outfit3-a.jpg',
                images: [
                    { image: 'images/fear-outfit3-a.jpg', alt: 'Fear Into Freedom - Outfit 3, 2023' },
                    { image: 'images/fear-outfit3-b.jpg', alt: 'Fear Into Freedom - Outfit 3, 2023' },
                    { image: 'images/fear-outfit3-c.jpg', alt: 'Fear Into Freedom - Outfit 3, 2023' },
                    { image: 'images/fear-outfit3-d.jpg', alt: 'Fear Into Freedom - Outfit 3, 2023' },
                    { image: 'images/fear-outfit3-e.jpg', alt: 'Fear Into Freedom - Outfit 3, 2023' }
                ]
            },
            {
                title: 'Outfit 4',
                heroImage: 'images/fear-outfit4-a.jpg',
                images: [
                    { image: 'images/fear-outfit4-a.jpg', alt: 'Fear Into Freedom - Outfit 4, 2023' },
                    { image: 'images/fear-outfit4-b.jpg', alt: 'Fear Into Freedom - Outfit 4, 2023' },
                    { image: 'images/fear-outfit4-c.jpg', alt: 'Fear Into Freedom - Outfit 4, 2023' },
                    { image: 'images/fear-outfit4-d.jpg', alt: 'Fear Into Freedom - Outfit 4, 2023' },
                    { image: 'images/fear-outfit4-e.jpg', alt: 'Fear Into Freedom - Outfit 4, 2023' },
                    { image: 'images/fear-outfit4-f.jpg', alt: 'Fear Into Freedom - Outfit 4, 2023' },
                    { image: 'images/fear-outfit4-g.jpg', alt: 'Fear Into Freedom - Outfit 4, 2023' }
                ]
            },
            {
                title: 'Outfit 5',
                heroImage: 'images/fear-outfit5-a.jpg',
                images: [
                    { image: 'images/fear-outfit5-a.jpg', alt: 'Fear Into Freedom - Outfit 5, 2023' },
                    { image: 'images/fear-outfit5-b.jpg', alt: 'Fear Into Freedom - Outfit 5, 2023' },
                    { image: 'images/fear-outfit5-c.jpg', alt: 'Fear Into Freedom - Outfit 5, 2023' },
                    { image: 'images/fear-outfit5-d.jpg', alt: 'Fear Into Freedom - Outfit 5, 2023' },
                    { image: 'images/fear-outfit5-e.jpg', alt: 'Fear Into Freedom - Outfit 5, 2023' },
                    { image: 'images/fear-outfit5-f.jpg', alt: 'Fear Into Freedom - Outfit 5, 2023' }
                ]
            }
        ]
    },
    worlds: {
        title: 'Between Worlds',
        tags: 'Sportswear · Menswear · Genderless',
        description: 'A study in contrast. Asymmetric forms and shifting grey tones inspired by Iran\'s natural landscapes, opposites meeting in quiet harmony. The concept references contrast everywhere: between social levels, genders, in nature, in thought. Asymmetry of form, harmonies of light and dark shades.',
        hasSubOutfits: true,
        subOutfits: [
            {
                title: 'Outfit 1',
                heroImage: 'images/worlds-outfit1-a.jpg',
                images: [
                    { image: 'images/worlds-outfit1-a.jpg', alt: 'Between Worlds - Outfit 1, 2022' },
                    { image: 'images/worlds-outfit1-b.jpg', alt: 'Between Worlds - Outfit 1, 2022' },
                    { image: 'images/worlds-outfit1-c.jpg', alt: 'Between Worlds - Outfit 1, 2022' },
                    { image: 'images/worlds-outfit1-d.jpg', alt: 'Between Worlds - Outfit 1, 2022' },
                    { image: 'images/worlds-outfit1-e.jpg', alt: 'Between Worlds - Outfit 1, 2022' },
                    { image: 'images/worlds-outfit1-f.jpg', alt: 'Between Worlds - Outfit 1, 2022' },
                    { image: 'images/worlds-outfit1-g.jpg', alt: 'Between Worlds - Outfit 1, 2022' }
                ],
                technicalDrawings: [
                    { image: 'images/worlds-outfit1-tech-a.jpg', alt: 'Between Worlds - Outfit 1 Technical Drawing, 2022' }
                ]
            },
            {
                title: 'Outfit 2',
                heroImage: 'images/worlds-outfit2-a.jpg',
                images: [
                    { image: 'images/worlds-outfit2-a.jpg', alt: 'Between Worlds - Outfit 2, 2022' },
                    { image: 'images/worlds-outfit2-b.jpg', alt: 'Between Worlds - Outfit 2, 2022' },
                    { image: 'images/worlds-outfit2-c.jpg', alt: 'Between Worlds - Outfit 2, 2022' },
                    { image: 'images/worlds-outfit2-d.jpg', alt: 'Between Worlds - Outfit 2, 2022' },
                    { image: 'images/worlds-outfit2-e.jpg', alt: 'Between Worlds - Outfit 2, 2022' },
                    { image: 'images/worlds-outfit2-f.jpg', alt: 'Between Worlds - Outfit 2, 2022' },
                    { image: 'images/worlds-outfit2-g.jpg', alt: 'Between Worlds - Outfit 2, 2022' },
                    { image: 'images/worlds-outfit2-h.jpg', alt: 'Between Worlds - Outfit 2, 2022' },
                    { image: 'images/worlds-outfit2-i.jpg', alt: 'Between Worlds - Outfit 2, 2022' }
                ]
            }
        ]
    },
    people: {
        title: 'People',
        tags: 'Creative Identity · Womenswear',
        description: 'A celebration of faces, gazes, and races. This collection brings human emotion to life on fabric. Despite our differences, love is always possible. Faces rendered through embroidery and metal earring details turn each piece into a wearable portrait. Self-patterned cotton and two-layered cotton-filled self-patterned jersey.',
        hasSubOutfits: true,
        subOutfits: [
            {
                title: 'Outfit 1',
                heroImage: 'images/people-outfit1-a.jpg',
                images: [
                    { image: 'images/people-outfit1-a.jpg', alt: 'People - Outfit 1, 2021' },
                    { image: 'images/people-outfit1-b.jpg', alt: 'People - Outfit 1, 2021' },
                    { image: 'images/people-outfit1-c.jpg', alt: 'People - Outfit 1, 2021' },
                    { image: 'images/people-outfit1-d.jpg', alt: 'People - Outfit 1, 2021' },
                    { image: 'images/people-outfit1-e.jpg', alt: 'People - Outfit 1, 2021' },
                    { image: 'images/people-outfit1-f.jpg', alt: 'People - Outfit 1, 2021' },
                    { image: 'images/people-outfit1-g.jpg', alt: 'People - Outfit 1, 2021' }
                ]
            },
            {
                title: 'Outfit 2',
                heroImage: 'images/people-outfit2-a.jpg',
                images: [
                    { image: 'images/people-outfit2-a.jpg', alt: 'People - Outfit 2, 2021' },
                    { image: 'images/people-outfit2-b.jpg', alt: 'People - Outfit 2, 2021' },
                    { image: 'images/people-outfit2-c.jpg', alt: 'People - Outfit 2, 2021' },
                    { image: 'images/people-outfit2-d.jpg', alt: 'People - Outfit 2, 2021' },
                    { image: 'images/people-outfit2-e.jpg', alt: 'People - Outfit 2, 2021' },
                    { image: 'images/people-outfit2-f.jpg', alt: 'People - Outfit 2, 2021' },
                    { image: 'images/people-outfit2-g.jpg', alt: 'People - Outfit 2, 2021' }
                ]
            }
        ]
    },
    love: {
        title: 'Inherited Warmth',
        tags: 'Sustainability · Upcycling · Womenswear',
        description: 'An upcycled transformation of a mother\'s trench coat, developed during COVID-19 isolation. Reconstructed into a two-piece suit with front fastening, reconfiguring an existing garment while preserving its emotional resonance. Through deconstruction and reassembly, sustainability becomes material practice and narrative. Clothing retains intimacy, history, and connection across distance.',
        outfits: [
            { image: 'images/warmth-outfit1-a.jpg', alt: 'Inherited Warmth, 2020' },
            { image: 'images/warmth-outfit1-b.jpg', alt: 'Inherited Warmth, 2020' },
            { image: 'images/warmth-outfit1-c.jpg', alt: 'Inherited Warmth, 2020' },
            { image: 'images/warmth-outfit1-d.jpg', alt: 'Inherited Warmth, 2020' },
            { image: 'images/warmth-outfit1-e.jpg', alt: 'Inherited Warmth, 2020' },
            { image: 'images/warmth-outfit1-f.jpg', alt: 'Inherited Warmth, 2020' },
            { image: 'images/warmth-outfit1-g.jpg', alt: 'Inherited Warmth, 2020' }
        ]
    },
    sacred: {
        title: 'Sacred Asymmetry',
        tags: 'Womenswear',
        description: 'Ritual, protection, and cultural memory through asymmetric form. Traditional ornamental references reinterpreted into contemporary silhouette. Geometric textile patterns meet raw, instinctive construction. The face covering: concealment and identity in one, balancing mystery, protection, presence. Structure and wildness, heritage and modernity.',
        outfits: [
            { image: 'images/sacred-outfit1-a.jpg', alt: 'Sacred Asymmetry, 2020' },
            { image: 'images/sacred-outfit1-b.jpg', alt: 'Sacred Asymmetry, 2020' },
            { image: 'images/sacred-outfit1-c.jpg', alt: 'Sacred Asymmetry, 2020' },
            { image: 'images/sacred-outfit1-d.jpg', alt: 'Sacred Asymmetry, 2020' },
            { image: 'images/sacred-outfit1-e.jpg', alt: 'Sacred Asymmetry, 2020' },
            { image: 'images/sacred-outfit1-f.jpg', alt: 'Sacred Asymmetry, 2020' },
            { image: 'images/sacred-outfit1-g.jpg', alt: 'Sacred Asymmetry, 2020' },
            { image: 'images/sacred-outfit1-h.jpg', alt: 'Sacred Asymmetry, 2020' }
        ]
    },
    cocoon: {
        title: 'Silent Cocoon',
        tags: 'Womenswear · Conceptual',
        description: 'Protective volume and quiet intimacy. Soft, pleated structures wrap the body in a cocoon-like silhouette, balancing fragility with control. The exaggerated neckline: a gentle barrier, soft armor, creating stillness and subtle isolation. Rendered in white, form reduced to purest expression. Texture and volume speak louder than color.',
        outfits: [
            { image: 'images/cocoon-outfit1-a.jpg', alt: 'Silent Cocoon, 2019' },
            { image: 'images/cocoon-outfit1-b.jpg', alt: 'Silent Cocoon, 2019' },
            { image: 'images/cocoon-outfit1-c.jpg', alt: 'Silent Cocoon, 2019' },
            { image: 'images/cocoon-outfit1-d.jpg', alt: 'Silent Cocoon, 2019' },
            { image: 'images/cocoon-outfit1-e.jpg', alt: 'Silent Cocoon, 2019' },
            { image: 'images/cocoon-outfit1-f.jpg', alt: 'Silent Cocoon, 2019' },
            { image: 'images/cocoon-outfit1-g.jpg', alt: 'Silent Cocoon, 2019' },
            { image: 'images/cocoon-outfit1-h.jpg', alt: 'Silent Cocoon, 2019' }
        ]
    }
};

// ===========================
// Collection Modal Functionality
// ===========================

const collectionModal = document.getElementById('collection-modal');
const collectionModalTitle = document.getElementById('collection-modal-title');
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
const outfitNavPrev = document.querySelector('.outfit-nav-prev');
const outfitNavNext = document.querySelector('.outfit-nav-next');

// Track current collection and outfit
let currentCollectionId = null;
let currentOutfitIndex = 0;
let currentSubOutfitIndex = null; // For collections with sub-outfits

// Open Collection Modal
function openCollectionModal(collectionId) {
    const collection = collectionsData[collectionId];
    
    if (!collection) return;
    
    // Store current collection
    currentCollectionId = collectionId;
    currentOutfitIndex = 0;
    currentSubOutfitIndex = null;
    
    // Hide toggle buttons when viewing collection overview
    const toggleContainer = document.getElementById('view-toggle-container');
    if (toggleContainer) {
        toggleContainer.style.display = 'none';
    }
    
    // Set modal header
    collectionModalTitle.textContent = collection.title;
    collectionModalDescription.textContent = collection.description;
    
    // Clear and populate gallery
    collectionModalGallery.innerHTML = '';
    
    // Check if this collection has sub-outfits (nested structure)
    if (collection.hasSubOutfits && collection.subOutfits) {
        // Show sub-outfit hero images
        collection.subOutfits.forEach((subOutfit, index) => {
            const outfitCard = document.createElement('article');
            outfitCard.className = 'modal-outfit-card sub-outfit-card';
            outfitCard.dataset.subOutfitIndex = index;
            outfitCard.dataset.collectionId = collectionId;
            
            outfitCard.innerHTML = `
                <div class="modal-outfit-image-wrapper">
                    <img src="${subOutfit.heroImage}" 
                         alt="${collection.title} - ${subOutfit.title}" 
                         class="modal-outfit-image"
                         loading="lazy">
                </div>
                <div class="modal-outfit-info">
                    <h4 class="modal-outfit-title">${subOutfit.title}</h4>
                </div>
            `;
            
            // Add click handler to open sub-outfit gallery
            outfitCard.addEventListener('click', (e) => {
                e.stopPropagation();
                openSubOutfitGallery(collectionId, index);
            });
            
            // Keyboard accessibility
            outfitCard.setAttribute('tabindex', '0');
            outfitCard.setAttribute('role', 'button');
            outfitCard.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    openSubOutfitGallery(collectionId, index);
                }
            });
            
            collectionModalGallery.appendChild(outfitCard);
        });
    } else {
        // Regular collection - show all outfits
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
    }
    
    // Show modal
    collectionModal.showModal();
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Open Sub-Outfit Gallery (for collections with nested outfits)
function openSubOutfitGallery(collectionId, subOutfitIndex, view = 'photos') {
    const collection = collectionsData[collectionId];
    
    if (!collection || !collection.subOutfits || !collection.subOutfits[subOutfitIndex]) return;
    
    currentSubOutfitIndex = subOutfitIndex;
    const subOutfit = collection.subOutfits[subOutfitIndex];
    
    // Check if this outfit has technical drawings
    const hasTechnicalDrawings = subOutfit.technicalDrawings && subOutfit.technicalDrawings.length > 0;
    
    // Show/hide toggle buttons
    const toggleContainer = document.getElementById('view-toggle-container');
    if (hasTechnicalDrawings) {
        toggleContainer.style.display = 'flex';
        
        // Set up toggle button listeners
        const togglePhotos = document.getElementById('toggle-photos');
        const toggleTechnical = document.getElementById('toggle-technical');
        
        // Remove existing listeners
        const newTogglePhotos = togglePhotos.cloneNode(true);
        const newToggleTechnical = toggleTechnical.cloneNode(true);
        togglePhotos.parentNode.replaceChild(newTogglePhotos, togglePhotos);
        toggleTechnical.parentNode.replaceChild(newToggleTechnical, toggleTechnical);
        
        // Add new listeners
        newTogglePhotos.addEventListener('click', () => {
            openSubOutfitGallery(collectionId, subOutfitIndex, 'photos');
        });
        
        newToggleTechnical.addEventListener('click', () => {
            openSubOutfitGallery(collectionId, subOutfitIndex, 'technical');
        });
        
        // Update active state
        newTogglePhotos.classList.toggle('active', view === 'photos');
        newToggleTechnical.classList.toggle('active', view === 'technical');
    } else {
        toggleContainer.style.display = 'none';
    }
    
    // Clear and repopulate gallery with sub-outfit images
    collectionModalGallery.innerHTML = '';
    
    // Add back button
    const backButton = document.createElement('button');
    backButton.className = 'back-to-collection-btn';
    backButton.innerHTML = '← Back to Collection';
    backButton.addEventListener('click', (e) => {
        e.stopPropagation();
        openCollectionModal(collectionId); // Re-open collection to show sub-outfits again
    });
    collectionModalGallery.appendChild(backButton);
    
    // Determine which images to show based on view
    const imagesToShow = view === 'technical' && subOutfit.technicalDrawings 
        ? subOutfit.technicalDrawings 
        : subOutfit.images;
    
    // Show all images for this sub-outfit
    imagesToShow.forEach((imageData, index) => {
        const outfitCard = document.createElement('article');
        outfitCard.className = 'modal-outfit-card';
        outfitCard.dataset.outfitIndex = index;
        
        outfitCard.innerHTML = `
            <div class="modal-outfit-image-wrapper">
                <img src="${imageData.image}" 
                     alt="${imageData.alt}" 
                     class="modal-outfit-image"
                     loading="lazy">
            </div>
        `;
        
        // Add click handler to open outfit detail modal
        outfitCard.addEventListener('click', (e) => {
            e.stopPropagation();
            openSubOutfitImageModal(collectionId, subOutfitIndex, index, view);
        });
        
        // Keyboard accessibility
        outfitCard.setAttribute('tabindex', '0');
        outfitCard.setAttribute('role', 'button');
        outfitCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                openSubOutfitImageModal(collectionId, subOutfitIndex, index, view);
            }
        });
        
        collectionModalGallery.appendChild(outfitCard);
    });
}

// Open individual image from sub-outfit
function openSubOutfitImageModal(collectionId, subOutfitIndex, imageIndex, view = 'photos') {
    const collection = collectionsData[collectionId];
    
    if (!collection || !collection.subOutfits || !collection.subOutfits[subOutfitIndex]) return;
    
    const subOutfit = collection.subOutfits[subOutfitIndex];
    
    // Determine which images to use based on view
    const images = view === 'technical' && subOutfit.technicalDrawings 
        ? subOutfit.technicalDrawings 
        : subOutfit.images;
    
    if (!images[imageIndex]) return;
    
    currentOutfitIndex = imageIndex;
    
    const imageData = images[imageIndex];
    
    // Set modal content
    outfitModalImage.src = imageData.image;
    outfitModalImage.alt = imageData.alt;
    
    // Hide text elements
    outfitModalTitle.style.display = 'none';
    outfitModalMeta.style.display = 'none';
    outfitModalDescription.style.display = 'none';
    
    // Update navigation buttons for sub-outfit context
    updateNavButtonsForSubOutfit(images.length);
    
    // Override navigation to work within sub-outfit
    outfitNavPrev.onclick = () => navigateSubOutfitImage(collectionId, subOutfitIndex, -1, view);
    outfitNavNext.onclick = () => navigateSubOutfitImage(collectionId, subOutfitIndex, 1, view);
    
    // Show modal
    outfitModal.showModal();
}

// Navigate within sub-outfit images
function navigateSubOutfitImage(collectionId, subOutfitIndex, direction, view = 'photos') {
    const collection = collectionsData[collectionId];
    const subOutfit = collection.subOutfits[subOutfitIndex];
    
    // Determine which images to use based on view
    const images = view === 'technical' && subOutfit.technicalDrawings 
        ? subOutfit.technicalDrawings 
        : subOutfit.images;
    
    currentOutfitIndex += direction;
    
    if (currentOutfitIndex < 0) {
        currentOutfitIndex = images.length - 1;
    } else if (currentOutfitIndex >= images.length) {
        currentOutfitIndex = 0;
    }
    
    openSubOutfitImageModal(collectionId, subOutfitIndex, currentOutfitIndex, view);
}

// Update navigation buttons for sub-outfit
function updateNavButtonsForSubOutfit(totalImages) {
    outfitNavPrev.disabled = false;
    outfitNavNext.disabled = false;
    
    if (totalImages <= 1) {
        outfitNavPrev.style.display = 'none';
        outfitNavNext.style.display = 'none';
    } else {
        outfitNavPrev.style.display = 'flex';
        outfitNavNext.style.display = 'flex';
    }
}

// Close Collection Modal
function closeCollectionModal() {
    collectionModal.close();
    
    // Reset current collection
    currentCollectionId = null;
    currentOutfitIndex = 0;
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Open Outfit Detail Modal
function openOutfitModal(collectionId, outfitIndex) {
    const collection = collectionsData[collectionId];
    
    if (!collection || !collection.outfits[outfitIndex]) return;
    
    // Update current index and collection
    currentCollectionId = collectionId;
    currentOutfitIndex = outfitIndex;
    
    const outfit = collection.outfits[outfitIndex];
    
    // Set modal content
    outfitModalImage.src = outfit.image;
    outfitModalImage.alt = outfit.alt;
    
    // Hide text elements since outfits no longer have detailed descriptions
    outfitModalTitle.style.display = 'none';
    outfitModalMeta.style.display = 'none';
    outfitModalDescription.style.display = 'none';
    
    // Update navigation buttons
    updateNavButtons();
    
    // Show modal
    outfitModal.showModal();
}

// Close Outfit Modal
function closeOutfitModal() {
    outfitModal.close();
}

// Navigate to previous outfit
function navigateToPrevOutfit() {
    if (!currentCollectionId) return;
    
    const collection = collectionsData[currentCollectionId];
    if (!collection) return;
    
    currentOutfitIndex--;
    if (currentOutfitIndex < 0) {
        currentOutfitIndex = collection.outfits.length - 1;
    }
    
    openOutfitModal(currentCollectionId, currentOutfitIndex);
    updateNavButtons();
}

// Navigate to next outfit
function navigateToNextOutfit() {
    if (!currentCollectionId) return;
    
    const collection = collectionsData[currentCollectionId];
    if (!collection) return;
    
    currentOutfitIndex++;
    if (currentOutfitIndex >= collection.outfits.length) {
        currentOutfitIndex = 0;
    }
    
    openOutfitModal(currentCollectionId, currentOutfitIndex);
    updateNavButtons();
}

// Update navigation button states
function updateNavButtons() {
    if (!currentCollectionId) return;
    
    const collection = collectionsData[currentCollectionId];
    if (!collection) return;
    
    // Always enable both buttons for circular navigation
    outfitNavPrev.disabled = false;
    outfitNavNext.disabled = false;
    
    // Show/hide buttons if only one outfit
    if (collection.outfits.length <= 1) {
        outfitNavPrev.style.display = 'none';
        outfitNavNext.style.display = 'none';
    } else {
        outfitNavPrev.style.display = 'flex';
        outfitNavNext.style.display = 'flex';
    }
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

// Navigation button listeners
outfitNavPrev.addEventListener('click', navigateToPrevOutfit);
outfitNavNext.addEventListener('click', navigateToNextOutfit);

// Keyboard navigation for outfit modal only
document.addEventListener('keydown', (e) => {
    // Only navigate when outfit modal is open
    if (outfitModal.open) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            navigateToPrevOutfit();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            navigateToNextOutfit();
        }
    }
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
