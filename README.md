# Roi Alfassi - AI Engineer Portfolio

A professional portfolio website showcasing AI/ML projects, published applications, and research. Built with vanilla HTML/CSS/JavaScript for maximum simplicity and customization.

🌐 **Live Site**: [roialfassi.github.io/roi-portfolio](https://roialfassi.github.io/roi-portfolio)

## ✨ Features

- **Microsoft-Inspired Design** - Professional dark theme with clean blues
- **AI Engineer Focus** - Highlights ML, NLP, and data expertise
- **Downloadable Apps** - Direct APK/EXE downloads for IPTV apps
- **Live Project Demos** - Interactive data visualizations
- **Research Publications** - Academic work on display
- **Hire Me CTA** - Optimized for attracting opportunities
- **Fully Responsive** - Perfect on desktop, tablet, and mobile

## 🚀 Quick Start

```bash
# Run locally
npx serve .

# Opens at http://localhost:3000
```

## 📂 Project Structure

```
roi-portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Microsoft-inspired styling
├── app.js              # Dynamic rendering logic
├── data.js             # ⭐ YOUR CONTENT (edit this!)
├── assets/
│   └── images/         # Project screenshots
└── Resources/          # Downloadable files
    ├── CV.pdf
    ├── *.apk           # Android apps
    └── *.exe           # Desktop app
```

## 📝 Customize Content

Edit **`data.js`** to update your portfolio:

### Personal Info
```javascript
personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    // ...
}
```

### Add/Edit Projects
```javascript
featuredWork: [
    {
        id: "project-id",
        type: "project",  // or "app" for downloadables
        title: "Project Name",
        description: "What it does...",
        image: "assets/images/screenshot.png",
        tags: ["Tech1", "Tech2"],
        liveUrl: "https://...",
        githubUrl: "https://github.com/...",
        // For apps only:
        platform: "Android",
        downloadFile: "Resources/app.apk"
    }
]
```

### Services
```javascript
services: [
    {
        title: "AI & Machine Learning",
        description: "Custom ML models...",
        icon: "ai"
    }
]
```

## 🎨 Customizing Design

### Colors (in styles.css)
```css
:root {
    --color-accent-primary: #0078d4;   /* Microsoft Blue */
    --color-accent-secondary: #00a4ef; /* Light Blue */
    --color-accent-tertiary: #50e6ff;  /* Cyan */
}
```

## 📱 Screenshots Required

When adding projects, include screenshots in `assets/images/`:
- Recommended size: 800×500px for projects
- Format: PNG, JPG, or WebP

## 🌐 Deploy to GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Set Source: "main" branch, root folder
4. Your site goes live at `https://username.github.io/repo-name/`

## 📄 License

MIT License - feel free to use for your own portfolio!

---

**Built with ❤️ for attracting opportunities**
