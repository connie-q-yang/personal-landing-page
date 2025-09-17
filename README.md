# Connie Yang - Personal Portfolio Website

A modern, responsive portfolio website showcasing expertise in AI, Machine Learning, and Enterprise Technology Leadership.

## Features

- **Clean, Modern Design**: Minimalist aesthetic with smooth animations and gradient accents
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**:
  - Typing animation in hero section
  - Smooth scroll navigation
  - Collapsible education section
  - Email contact form popup
  - Media content filtering tabs
- **Performance Optimized**: Fast loading with optimized assets and minimal dependencies
- **Accessibility**: Semantic HTML and ARIA labels for screen reader compatibility

## Project Structure

```
connie-yang-portfo/
├── index.html              # Main HTML file
├── package.json            # Node.js dependencies and scripts
├── assets/                 # Static assets
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── images/
│       └── profile.png    # Profile image (optional)
└── public/                 # Public assets directory
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/connie-yang-portfo.git
   cd connie-yang-portfo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running Locally

1. **Start the development server**
   ```bash
   npm start
   ```
   This will:
   - Start a local HTTP server on port 3000
   - Automatically open `index.html` in your default browser
   - Disable caching for development

2. **Access the site**
   - Open your browser to [http://localhost:3000](http://localhost:3000)
   - The site will be served from the root directory

### Alternative Development Server

For live-reload during development:
```bash
npm run dev
```
This uses `live-server` for automatic page refresh on file changes.

## Available Scripts

- `npm start` - Start the HTTP server with caching disabled
- `npm run dev` - Start development server with live-reload
- `npm run build` - No build step needed (static site)
- `npm run deploy` - Deploy to GitHub Pages

## Customization

### Updating Content

1. **Personal Information**: Edit `index.html` to update:
   - Name and titles
   - Professional experience
   - Education details
   - Media appearances
   - Contact information

2. **Styling**: Modify `assets/css/styles.css` to change:
   - Color scheme (look for CSS variables)
   - Typography
   - Spacing and layout
   - Animation effects

3. **Functionality**: Update `assets/js/main.js` to modify:
   - Typing animation phrases
   - Smooth scroll behavior
   - Form handling
   - Interactive elements

### Adding Your Profile Image

1. Add your profile image to `assets/images/profile.png`
2. The image will automatically replace the "CY" initials placeholder
3. Recommended: Square image, at least 400x400px

### Setting Up Link Previews (Open Graph)

The site is configured with Open Graph and Twitter Card meta tags for rich link previews when shared on social media, messaging apps, or text messages.

**To generate the preview image:**
1. Open `assets/images/generate-og-image.html` in a browser
2. Take a screenshot of the 1200x630px window
3. Save as `assets/images/og-preview.png`
4. Upload to your web host

**Preview will show:**
- Your name and title
- Professional tagline
- Key stats (experience, patents, education)
- Branded gradient background
- Profile initials or image

**Testing your preview:**
- Facebook: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Twitter: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- LinkedIn: [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Color Scheme

The site uses CSS custom properties for easy theming:
```css
:root {
  --primary: #8B5CF6;        /* Purple accent */
  --secondary: #5E72E4;      /* Blue accent */
  --bg-primary: #0a0a0f;     /* Dark background */
  --text-primary: #f0f0f0;   /* Light text */
  --text-secondary: #b0b0b0; /* Muted text */
}
```

## 🔧 Troubleshooting

### Port Already in Use
If you see "address already in use" error:
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Then restart
npm start
```

### Changes Not Showing
The server has caching disabled by default. If changes still don't appear:
1. Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. Clear browser cache
3. Restart the server

### Profile Image Not Loading
- Ensure the image is named exactly `profile.png`
- Check that it's in the `assets/images/` directory
- Verify the image file isn't corrupted

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript** - Vanilla JS for interactivity
- **Node.js** - Development server and tooling
- **http-server** - Static file serving
- **live-server** - Development with live-reload

## 📄 License

MIT License - feel free to use this template for your own portfolio

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or suggestions, please reach out through the contact form on the website or via LinkedIn.

---

Built with ❤️ using modern web technologies