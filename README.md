# Fashion Portfolio Website

An elegant, responsive portfolio website showcasing your fashion design work with a focus on dress designs.

## 📁 Project Structure

```
personal_page/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── images/             # Image folder (add your photos here)
│   ├── personal-photo.jpg
│   ├── dress-01.jpg
│   ├── dress-02.jpg
│   ├── dress-03.jpg
│   └── dress-04.jpg
└── README.md          # This file
```

## 🖼️ Adding Your Images

### Step 1: Prepare Your Images

You need **5 images total**:
- 1 personal photo (your portrait for the intro section)
- 4 dress design photos (for the portfolio gallery)

### Step 2: Image Optimization (Recommended)

For best performance, optimize your images before adding them:

**Image Dimensions:**
- Personal photo: ~1200px width recommended
- Dress photos: ~1200px width recommended
- Maintain aspect ratio 3:4 (portrait) for dress images

**Compression:**
- Use [ImageOptim](https://imageoptim.com/) (macOS - free)
- Or use [Squoosh.app](https://squoosh.app/) (web-based - free)
- Target file size: under 300KB per image

**Formats:**
- JPEG works great for photos
- WebP is even better (optional, but recommended for faster loading)

### Step 3: Add Images to the Project

1. Save your images with these exact names in the `images/` folder:
   - `personal-photo.jpg` - Your portrait
   - `dress-01.jpg` - First dress design
   - `dress-02.jpg` - Second dress design
   - `dress-03.jpg` - Third dress design
   - `dress-04.jpg` - Fourth dress design

2. If your images have different names or extensions, you can either:
   - **Option A**: Rename your files to match the names above
   - **Option B**: Update the file references in `index.html` (search for `images/` and replace with your filenames)

### Step 4: Customize Your Content

Open [index.html](index.html) and update:

1. **Line 27**: Replace `"Designer Name"` with your actual name
2. **Line 28**: Update the tagline to reflect your design philosophy
3. **Lines 29-35**: Customize your bio text
4. **Lines 48-61**: Update dress #1 details (title, year, materials, description)
5. **Lines 64-77**: Update dress #2 details
6. **Lines 80-93**: Update dress #3 details
7. **Lines 96-109**: Update dress #4 details
8. **Line 119**: Update email address in the contact section
9. **Line 128**: Update copyright year and name in footer

### Step 5: View Your Portfolio

1. Open `index.html` in your web browser by double-clicking it
2. Or right-click → Open With → Your preferred browser
3. Test all features:
   - Click on dress images to open lightbox
   - Test navigation links
   - Resize browser window to test responsive design
   - Test on mobile device

## ✨ Features

- **Elegant Design**: Clean, minimal aesthetic with generous white space
- **Responsive Layout**: Looks great on desktop, tablet, and mobile devices
- **Interactive Lightbox**: Click any dress to view larger image with full details
- **Smooth Animations**: Subtle fade-in effects and hover interactions
- **Accessibility**: Keyboard navigation, screen reader support, proper semantic HTML
- **Fast Loading**: Lazy loading for images, optimized CSS and JavaScript

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in [styles.css](styles.css) (lines 11-19):

```css
:root {
    --color-background: #FAFAFA;      /* Page background */
    --color-text-primary: #1A1A1A;    /* Main text color */
    --color-text-secondary: #666666;  /* Secondary text */
    --color-accent: #8B7355;          /* Accent color (links, highlights) */
    --color-white: #FFFFFF;           /* Pure white */
}
```

### Changing Fonts

The site uses Google Fonts:
- **Playfair Display** (serif) for headings
- **Inter** (sans-serif) for body text

To change fonts:
1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your preferred fonts
3. Replace the font link in [index.html](index.html) (line 9)
4. Update CSS variables in [styles.css](styles.css) (lines 21-22)

### Adding More Dresses

To showcase more than 4 dresses:

1. Add more dress articles in [index.html](index.html) following the existing pattern
2. Add corresponding images to the `images/` folder
3. Update the dress data in [script.js](script.js) (lines 13-53) with new entries

## 🚀 Hosting Your Portfolio

Once you're happy with your portfolio, you can host it online for free:

### Option 1: GitHub Pages
1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository
3. Upload all your files
4. Enable GitHub Pages in repository settings
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Create account at [netlify.com](https://www.netlify.com)
2. Drag and drop your project folder
3. Your site goes live instantly with HTTPS

### Option 3: Vercel
1. Create account at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

## 🛠️ Browser Support

This portfolio works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Tips for Best Results

1. **High-Quality Photos**: Use professional photos or well-lit, high-resolution images
2. **Consistent Style**: Keep photo backgrounds and lighting consistent across dress images
3. **Descriptive Text**: Write compelling descriptions that tell the story behind each design
4. **Alt Text**: Make sure image alt text accurately describes each piece (good for SEO and accessibility)
5. **Regular Updates**: Keep your portfolio fresh by updating with your latest work

## 🔧 Troubleshooting

**Images not showing?**
- Check that image files are in the `images/` folder
- Verify filenames match exactly (case-sensitive on some systems)
- Make sure image format is supported (jpg, jpeg, png, webp)

**Lightbox not working?**
- Check browser console for errors (F12 or Cmd+Option+I)
- Ensure [script.js](script.js) is properly loaded

**Layout looks broken?**
- Verify [styles.css](styles.css) is linked correctly in [index.html](index.html)
- Clear your browser cache (Cmd+Shift+R or Ctrl+Shift+R)

## 📧 Need Help?

If you encounter any issues or need customization help, refer to the inline comments in each file for guidance.

---

**Made with ❤️ for showcasing elegant fashion design**
