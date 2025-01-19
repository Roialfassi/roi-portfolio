# Professional Portfolio Website

A modern, responsive portfolio website built with Vue.js and Tailwind CSS. This single-page application showcases professional experience, projects, and skills with a clean, minimalist design.

## Features

- 📱 Fully responsive design
- 🎯 Smooth scroll navigation
- 💫 Interactive UI elements
- 🌓 Section highlighting based on scroll position
- 📊 Dynamic content loading
- 🎨 Modern and clean UI design
- 🔍 SEO-friendly structure

## Tech Stack

- Vue.js 3
- Tailwind CSS
- Vue Router
- JavaScript (ES6+)
- HTML5
- CSS3

## Project Structure

```
Directory structure:
└── roialfassi-roi-portfolio/
    ├── README.md
    ├── LICENSE
    ├── index.html
    ├── jsconfig.json
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    ├── public/
    └── src/
        ├── App.vue
        ├── main.js
        ├── assets/
        │   ├── base.css
        │   ├── main.css
        │   └── images/
        │       ├── PromptQueueRunner.webp
        │       ├── WorldTemp.webp
        │       └── stock_comparator.webp
        ├── components/
        │   ├── home/
        │   │   ├── AboutSection.vue
        │   │   ├── ContactSection.vue
        │   │   ├── EducationSection.vue
        │   │   ├── ExperienceSection.vue
        │   │   ├── HeroSection.vue
        │   │   └── ProjectsSection.vue
        │   ├── icons/
        │   │   ├── IconCommunity.vue
        │   │   ├── IconDocumentation.vue
        │   │   ├── IconEcosystem.vue
        │   │   ├── IconSupport.vue
        │   │   └── IconTooling.vue
        │   ├── layout/
        │   │   ├── TheFooter.vue
        │   │   ├── TheHeader.vue
        │   │   └── TheNavigation.vue
        │   └── ui/
        │       ├── ProjectCard.vue
        │       ├── SkillTag.vue
        │       └── SocialLink.vue
        ├── router/
        │   └── index.js
        └── views/
            └── HomeView.vue

```

## Prerequisites

- Node.js (v14.0 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Roialfassi/roi-portfolio.git
cd roi-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Build for production:
```bash
npm run build
# or
yarn build
```

## Customization

### Content
- Update personal information in respective component files
- Modify section content in the `sections` directory
- Add or remove sections as needed in `App.vue`

### Styling
- Customize colors in `tailwind.config.js`
- Modify component styles within individual `.vue` files
- Add new CSS classes in `assets/css`

### Navigation
- Update navigation items in `TheHeader.vue`
- Modify scroll behavior in navigation methods
- Adjust mobile menu breakpoints

## Deployment

The site can be deployed to various hosting platforms:

1. Static hosting (Netlify, Vercel, GitHub Pages)
2. Traditional web hosting
3. Cloud platforms (AWS, Google Cloud, Azure)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Vue.js team for the fantastic framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and maintainers

