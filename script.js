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
        ],
        technicalDrawings: [
            { 
                image: 'images/fear-outfit6-tech-a.jpg', 
                alt: 'Multi-Functional Survival System - Technical Drawing, 2025',
                specifications: `Waterproof Polyester & Mesh Fabric

OUTERWEAR
— Oversized silhouette with detachable sleeves, convertible to vest
— Concealed chest pocket with integrated oxygen mask compartment
— In-seam side pockets
— Rear patch pockets
— Velcro tab sleeve hems — adjustable length closure

HOOD SYSTEM
— Dual-hood construction
— Hood 01: Insulated thermal hood for warmth retention at altitude
— Hood 02: Protective face-covering hood with mesh eye panel for wind and rain exposure
— Both hoods convertible to function as backpack cover

BACKPACK
— Detachable carry system in polyester ripstop
— Structured to accommodate oxygen canisters
— Compatible with jacket hood closure system`
            }
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
                ],
                technicalDrawings: [
                    { 
                        image: 'images/fear-outfit1-tech-a.jpg', 
                        alt: 'Fear Into Freedom - Outfit 1 Technical Drawing, 2023',
                        specifications: `JACKET
— Oversized silhouette with dropped shoulders
— Stand collar
— Set-in sleeves with shoulder yoke panel
— Appliquéd fabric hand motifs, individually cut and sewn onto the front panel
— Side seam pockets

TROUSERS
— Slim-fit, high-waisted silhouette
— Elasticized waistband with structured front panel
— Sculptural hip panel detail
— Concealed in-seam side pockets
— Tapered ankle hem

CONSTRUCTION NOTES
— Hand motifs individually constructed and applied by hand
— Fabric appliqué technique achieves three-dimensional relief on the front
— Garment concept rooted in the emotional weight of fear and the act of release`
                    }
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
                    { 
                        image: 'images/fear-outfit2-tech-a.jpg', 
                        alt: 'Fear Into Freedom - Outfit 2 Technical Drawing 1, 2023',
                        specifications: `TOP / BODYSUIT
Material: Ribbed Jersey Bodysuit Base · Printed Textile Panels

— Fitted ribbed jersey bodysuit construction
— Front panel features layered printed textile strips, gathered and hand-attached
— Textile prints reference handwritten text, letters, and scroll forms
— Rolled and folded layering technique creates three-dimensional relief on front
— Narrative construction: memory, archiving, and personal storytelling embedded in surface design`
                    },
                    { 
                        image: 'images/fear-outfit2-tech-b.jpg', 
                        alt: 'Fear Into Freedom - Outfit 2 Technical Drawing 2, 2023',
                        specifications: `OVERSIZED JACKET
Material: Neoprene Fabric

— Oversized, voluminous silhouette with structured shoulders
— Gathered sleeve cap with puff detail at shoulder head
— Open front with no closure — draped hemline
— Wide cape-like sleeves tapering toward cuff
— Conceptual garment: volume and weight expressing emotional pressure and protection`
                    },
                    { 
                        image: 'images/fear-outfit2-tech-c.jpg', 
                        alt: 'Fear Into Freedom - Outfit 2 Technical Drawing 3, 2023',
                        specifications: `TROUSER
Material: Wool-Blend Fabric

— Exaggerated wide-leg silhouette from high waist
— Self-fabric belt at waistband, gathering and tightening volume
— Adjustable gathered construction — shape fully modifiable
— Culotte-inspired wide leg hem emphasizing movement
— No external fastening — belt as sole closure element`
                    }
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
                ],
                technicalDrawings: [
                    { 
                        image: 'images/fear-outfit3-tech-a.jpg', 
                        alt: 'Fear Into Freedom - Outfit 3 Technical Drawing 1, 2023',
                        specifications: `FULL-BODY BANDAGE
Reflective fabric with Persian handwritten script

— Full-length bandage construction in reflective material
— Surface covered entirely in Persian handwritten text, applied by hand
— Spiralling wrap silhouette suggesting movement, memory and unravelling
— Dual-panel construction — front and back views show continuous script narrative
— Conceptual piece: the body as archive, text as second skin`
                    },
                    { 
                        image: 'images/fear-outfit3-tech-b.jpg', 
                        alt: 'Fear Into Freedom - Outfit 3 Technical Drawing 2, 2023',
                        specifications: `TROUSERS
Wool-blend fabric

— High-waisted slim-fit silhouette
— Structured waistband with front dart detail
— Sculptural front panel with asymmetric curved seam construction
— Concealed side zip closure
— Concealed in-seam side pockets
— Tapered ankle hem`
                    },
                    { 
                        image: 'images/fear-outfit3-tech-c.jpg', 
                        alt: 'Fear Into Freedom - Outfit 3 Technical Drawing 3, 2023',
                        specifications: `CROPPED JACKET
Synthetic fur fabric

— Cropped voluminous silhouette with dramatic dropped shoulders
— Exaggerated oversized sleeves with rounded hem
— Open front — no closure
— Sculptural three-dimensional sleeve construction with layered volume
— Stand collar with open neckline
— Front and back views show consistent volume and weight`
                    }
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
                ],
                technicalDrawings: [
                    { 
                        image: 'images/fear-outfit4-tech-a.jpg', 
                        alt: 'Fear Into Freedom - Outfit 4 Technical Drawing, 2023',
                        specifications: `Material: Wool-Blend Fabric

TOP
— Structured wool-blend top with embroidered details inspired by the facial expression of fear
— Sculptural silhouette with asymmetric volume
— Surface embroidery referencing distorted facial features as central motif

WRAPPED SKIRT
— Wrap construction in matching wool-blend fabric
— Embroidered surface detail consistent with top — unified narrative across the outfit`
                    }
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
                ],
                technicalDrawings: [
                    { 
                        image: 'images/fear-outfit5-tech-a.jpg', 
                        alt: 'Fear Into Freedom - Outfit 5 Technical Drawing, 2023',
                        specifications: `TOP
Wool-blend fabric with hand-embroidered mesh

— Wide sculptural neckline with dramatic shoulder extension
— Asymmetric mesh panel with hand embroidery on front
— Organic topographic embroidery pattern
— Cropped length

TROUSERS
Wool-blend fabric with hand-embroidered mesh

— High-waisted with structured waistband
— Asymmetric mesh cut-out panels on front and back legs
— Gathered and elasticated mid-leg with wide flared hem
— Handcrafted embroidery on mesh inserts creating organic texture and tonal contrast
— Exaggerated silhouette with sculptural volume at hem`
                    }
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
                    { 
                        image: 'images/worlds-outfit1-tech-a.jpg', 
                        alt: 'Between Worlds - Outfit 1 Technical Drawing, 2022',
                        specifications: `ASYMMETRIC JUMPSUIT
Cotton & Wool fabric

— Relaxed full-length silhouette
— Crew neckline with concealed back zip closure
— Set-in sleeves with ribbed cuff finish
— Asymmetric colour-block construction — contrasting tonal panels on front and back
— Oversized patch pocket on front hip
— Dual-fabric panel construction visible from both sides

COLLAR
Wool & Printed Silk

— Detachable stand collar
— Structured wool base with draped silk overlay
— Gathered and pleated silk panel
— Worn as independent accessory piece

ASYMMETRIC COAT
Cashmere & Wool fabric

— Longline open-front silhouette — no closure
— Asymmetric colour-block shoulder panel in contrast fabric
— Contrasting burgundy cuff lining detail
— Wide structured cuffs with double buckle strap fastening
— Side slit hem construction
— Tonal contrast panel visible on back`
                    }
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
                ],
                technicalDrawings: [
                    { 
                        image: 'images/worlds-outfit2-tech-a.jpg', 
                        alt: 'Between Worlds - Outfit 2 Technical Drawing 1, 2022',
                        specifications: `SYMMETRIC TROUSERS
Cotton fabric · Olive & White

— High-waisted with wide structured olive waistband
— Asymmetric balloon silhouette — exaggerated volume at hip and thigh
— Concealed side panel with contrast insert
— Back button closure at waistband
— Side zip fastening
— Cropped wide hem opening
— Knitted ocher socks styled as part of the outfit`
                    },
                    { 
                        image: 'images/worlds-outfit2-tech-b.jpg', 
                        alt: 'Between Worlds - Outfit 2 Technical Drawing 2, 2022',
                        specifications: `ASYMMETRIC HOODIE
Cotton-blend fabric · Olive & White colour-block

— Cropped asymmetric silhouette
— Raglan sleeve construction in contrast olive fabric
— Large integrated hood with front zip closure and adjustable toggle
— Colour-block panelling — olive sleeves and hood, white body
— Asymmetric curved hem
— Ribbed cuff detail on sleeves

VEST / HOOD
Wool fabric · Charcoal & Light Grey

— Structured bib-shaped vest construction
— Asymmetric colour-block — charcoal and light grey panels
— Tonal topstitching detail on front
— Ribbed hem band
— Wearable as standalone vest or hood accessory piece`
                    }
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
        ],
        technicalDrawings: [
            {
                image: 'images/warmth-outfit1-tech-a.jpg',
                alt: 'Inherited Warmth - Technical Drawing, 2020',
                specifications: `Material: 100% Cotton · Upcycled Construction

JACKET
— Cropped double-breasted silhouette
— Notch lapel collar, retained from original garment
— Functional D-ring cuff straps & adjustable sleeve tabs
— Front button closure

TROUSERS
— High-waisted with wide structured waistband
— Front patch pockets with flap & button fastening
— Ankle cuff with buckle strap closure (original hardware reused)
— Concealed back zip with button fly at waistband
— Pleated volume at ankle hem

CONSTRUCTION NOTES
— Zero new material introduced
— All hardware, trims, and panels sourced from original trench coat
— Minimal cutting waste through pattern redistribution`
            }
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
// Helper Functions
// ===========================

// Format specifications text into HTML with headers and bullet lists
function formatSpecifications(specText) {
    if (!specText) return '';
    
    const lines = specText.split('\n');
    let html = '<div class="specifications-content">';
    let inList = false;
    
    lines.forEach(line => {
        const trimmed = line.trim();
        
        if (!trimmed) {
            // Empty line - close list if open
            if (inList) {
                html += '</ul>';
                inList = false;
            }
            return;
        }
        
        // Check if it's a section header (all caps, no dash)
        if (trimmed === trimmed.toUpperCase() && !trimmed.startsWith('—')) {
            // Close previous list if open
            if (inList) {
                html += '</ul>';
                inList = false;
            }
            // Add header with shadow box
            html += `<h4>${trimmed}</h4>`;
        } else if (trimmed.startsWith('—')) {
            // It's a bullet point
            if (!inList) {
                html += '<ul>';
                inList = true;
            }
            // Remove the dash and add as list item
            html += `<li>${trimmed.substring(1).trim()}</li>`;
        }
    });
    
    // Close list if still open
    if (inList) {
        html += '</ul>';
    }
    
    html += '</div>';
    return html;
}

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

// Track current view and navigation context
let currentView = 'photos'; // 'photos' or 'technical'
let currentNavigationHandler = null; // Store the current navigation handler

// Open Collection Modal
function openCollectionModal(collectionId, view = 'photos') {
    const collection = collectionsData[collectionId];
    
    if (!collection) return;
    
    // Store current view
    currentView = view;
    
    // Store current collection
    currentCollectionId = collectionId;
    currentOutfitIndex = 0;
    currentSubOutfitIndex = null;
    
    // Set modal header
    collectionModalTitle.textContent = collection.title;
    collectionModalDescription.textContent = collection.description;
    
    // Check if this is a regular collection with technical drawings
    const hasRegularTechnicalDrawings = !collection.hasSubOutfits && collection.technicalDrawings && collection.technicalDrawings.length > 0;
    
    // Show/hide toggle buttons for regular collections with technical drawings
    const toggleContainer = document.getElementById('view-toggle-container');
    if (hasRegularTechnicalDrawings) {
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
            openCollectionModal(collectionId, 'photos');
        });
        
        newToggleTechnical.addEventListener('click', () => {
            openCollectionModal(collectionId, 'technical');
        });
        
        // Update active state
        newTogglePhotos.classList.toggle('active', view === 'photos');
        newToggleTechnical.classList.toggle('active', view === 'technical');
    } else {
        toggleContainer.style.display = 'none';
    }
    
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
        // Regular collection - show all outfits or technical drawings based on view
        const imagesToShow = view === 'technical' && collection.technicalDrawings 
            ? collection.technicalDrawings 
            : collection.outfits;
        
        imagesToShow.forEach((outfit, index) => {
            const outfitCard = document.createElement('article');
            outfitCard.className = 'modal-outfit-card';
            outfitCard.dataset.outfitIndex = index;
            outfitCard.dataset.collectionId = collectionId;
            
            // Check if this is a PDF
            const isPDF = outfit.isPDF || outfit.image.toLowerCase().endsWith('.pdf');
            
            if (isPDF) {
                // For PDFs, show a placeholder and open in new tab
                outfitCard.innerHTML = `
                    <div class="modal-outfit-image-wrapper pdf-wrapper">
                        <div class="pdf-icon">📄</div>
                        <div class="pdf-label">Technical Drawing PDF</div>
                    </div>
                `;
                
                // Add click handler to open PDF in new tab
                outfitCard.addEventListener('click', (e) => {
                    e.stopPropagation();
                    window.open(outfit.image, '_blank');
                });
            } else {
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
                    openOutfitModal(collectionId, index, view);
                });
            }
            
            // Keyboard accessibility
            outfitCard.setAttribute('tabindex', '0');
            outfitCard.setAttribute('role', 'button');
            outfitCard.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    if (isPDF) {
                        window.open(outfit.image, '_blank');
                    } else {
                        openOutfitModal(collectionId, index, view);
                    }
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
        
        // Check if this is a PDF
        const isPDF = imageData.isPDF || imageData.image.toLowerCase().endsWith('.pdf');
        
        if (isPDF) {
            // For PDFs, show a placeholder and open in new tab
            outfitCard.innerHTML = `
                <div class="modal-outfit-image-wrapper pdf-wrapper">
                    <div class="pdf-icon">📄</div>
                    <div class="pdf-label">Technical Drawing PDF</div>
                </div>
            `;
            
            // Add click handler to open PDF in new tab
            outfitCard.addEventListener('click', (e) => {
                e.stopPropagation();
                window.open(imageData.image, '_blank');
            });
        } else {
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
        }
        
        // Keyboard accessibility
        outfitCard.setAttribute('tabindex', '0');
        outfitCard.setAttribute('role', 'button');
        outfitCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                if (isPDF) {
                    window.open(imageData.image, '_blank');
                } else {
                    openSubOutfitImageModal(collectionId, subOutfitIndex, index, view);
                }
            }
        });
        
        collectionModalGallery.appendChild(outfitCard);
    });
}

// Open individual image from sub-outfit
function openSubOutfitImageModal(collectionId, subOutfitIndex, imageIndex, view = 'photos') {
    const collection = collectionsData[collectionId];
    
    if (!collection || !collection.subOutfits || !collection.subOutfits[subOutfitIndex]) return;
    
    // Store current view
    currentView = view;
    
    const subOutfit = collection.subOutfits[subOutfitIndex];
    
    // Determine which images to use based on view
    const images = view === 'technical' && subOutfit.technicalDrawings 
        ? subOutfit.technicalDrawings 
        : subOutfit.images;
    
    if (!images[imageIndex]) return;
    
    currentOutfitIndex = imageIndex;
    currentSubOutfitIndex = subOutfitIndex; // Store sub-outfit index
    currentCollectionId = collectionId;
    
    const imageData = images[imageIndex];
    
    // Set modal content
    outfitModalImage.src = imageData.image;
    outfitModalImage.alt = imageData.alt;
    
    // Handle specifications if available
    const specificationsContainer = document.getElementById('outfit-modal-specifications');
    if (imageData.specifications) {
        // Format specifications with proper HTML structure
        const formattedSpecs = formatSpecifications(imageData.specifications);
        specificationsContainer.innerHTML = formattedSpecs;
        specificationsContainer.style.display = 'block';
        // Add class to modal content for side-by-side layout
        document.querySelector('.outfit-modal-content').classList.add('has-specifications');
    } else {
        specificationsContainer.style.display = 'none';
        specificationsContainer.innerHTML = '';
        document.querySelector('.outfit-modal-content').classList.remove('has-specifications');
    }
    
    // Hide text elements
    outfitModalTitle.style.display = 'none';
    outfitModalMeta.style.display = 'none';
    outfitModalDescription.style.display = 'none';
    
    // Update navigation buttons for sub-outfit context
    updateNavButtonsForSubOutfit(images.length);
    
    // Set navigation handler for sub-outfits
    currentNavigationHandler = {
        prev: () => navigateSubOutfitImage(collectionId, subOutfitIndex, -1, view),
        next: () => navigateSubOutfitImage(collectionId, subOutfitIndex, 1, view)
    };
    
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
function openOutfitModal(collectionId, outfitIndex, view = 'photos') {
    const collection = collectionsData[collectionId];
    
    if (!collection) return;
    
    // Store current view
    currentView = view;
    
    // Determine which images to use based on view
    const images = view === 'technical' && collection.technicalDrawings 
        ? collection.technicalDrawings 
        : collection.outfits;
    
    if (!images[outfitIndex]) return;
    
    // Update current index and collection
    currentCollectionId = collectionId;
    currentOutfitIndex = outfitIndex;
    currentSubOutfitIndex = null; // Reset sub-outfit index for regular collections
    
    const outfit = images[outfitIndex];
    
    // Set modal content
    outfitModalImage.src = outfit.image;
    outfitModalImage.alt = outfit.alt;
    
    // Handle specifications if available
    const specificationsContainer = document.getElementById('outfit-modal-specifications');
    if (outfit.specifications) {
        // Format specifications with proper HTML structure
        const formattedSpecs = formatSpecifications(outfit.specifications);
        specificationsContainer.innerHTML = formattedSpecs;
        specificationsContainer.style.display = 'block';
        // Add class to modal content for side-by-side layout
        document.querySelector('.outfit-modal-content').classList.add('has-specifications');
    } else {
        specificationsContainer.style.display = 'none';
        specificationsContainer.innerHTML = '';
        document.querySelector('.outfit-modal-content').classList.remove('has-specifications');
    }
    
    // Hide text elements since outfits no longer have detailed descriptions
    outfitModalTitle.style.display = 'none';
    outfitModalMeta.style.display = 'none';
    outfitModalDescription.style.display = 'none';
    
    // Update navigation buttons
    updateNavButtons(images.length);
    
    // Set navigation handler for regular collections
    currentNavigationHandler = {
        prev: () => navigateOutfitImage(collectionId, -1, view),
        next: () => navigateOutfitImage(collectionId, 1, view)
    };
    
    // Override navigation to work with current view
    outfitNavPrev.onclick = () => navigateOutfitImage(collectionId, -1, view);
    outfitNavNext.onclick = () => navigateOutfitImage(collectionId, 1, view);
    
    // Show modal
    outfitModal.showModal();
}

// Close Outfit Modal
function closeOutfitModal() {
    outfitModal.close();
    // Clear navigation handler
    currentNavigationHandler = null;
    currentSubOutfitIndex = null;
}

// Navigate within outfit images (for regular collections)
function navigateOutfitImage(collectionId, direction, view = 'photos') {
    const collection = collectionsData[collectionId];
    
    // Determine which images to use based on view
    const images = view === 'technical' && collection.technicalDrawings 
        ? collection.technicalDrawings 
        : collection.outfits;
    
    currentOutfitIndex += direction;
    
    if (currentOutfitIndex < 0) {
        currentOutfitIndex = images.length - 1;
    } else if (currentOutfitIndex >= images.length) {
        currentOutfitIndex = 0;
    }
    
    openOutfitModal(collectionId, currentOutfitIndex, view);
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
function updateNavButtons(totalImages = null) {
    if (!currentCollectionId) return;
    
    const collection = collectionsData[currentCollectionId];
    if (!collection) return;
    
    // Use provided total or calculate from collection
    const total = totalImages !== null ? totalImages : collection.outfits.length;
    
    // Always enable both buttons for circular navigation
    outfitNavPrev.disabled = false;
    outfitNavNext.disabled = false;
    
    // Show/hide buttons if only one outfit
    if (total <= 1) {
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

// Keyboard navigation for outfit modal
document.addEventListener('keydown', (e) => {
    // Only navigate when outfit modal is open
    if (outfitModal.open) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            // Check if we have a custom navigation handler (for sub-outfits)
            if (currentSubOutfitIndex !== null) {
                navigateSubOutfitImage(currentCollectionId, currentSubOutfitIndex, -1, currentView);
            } else if (currentNavigationHandler && currentNavigationHandler.prev) {
                currentNavigationHandler.prev();
            } else {
                navigateOutfitImage(currentCollectionId, -1, currentView);
            }
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            // Check if we have a custom navigation handler (for sub-outfits)
            if (currentSubOutfitIndex !== null) {
                navigateSubOutfitImage(currentCollectionId, currentSubOutfitIndex, 1, currentView);
            } else if (currentNavigationHandler && currentNavigationHandler.next) {
                currentNavigationHandler.next();
            } else {
                navigateOutfitImage(currentCollectionId, 1, currentView);
            }
        } else if (e.key === 'Escape') {
            closeOutfitModal();
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
