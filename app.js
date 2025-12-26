/**
 * Portfolio Application Logic
 * Handles dynamic content rendering and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
    initializeNavigation();
    initializeScrollAnimations();
    initializeParallax();
    initializeImageLoading();
});

/**
 * Initialize portfolio with data
 */
function initializePortfolio() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    populateHeroSection();
    populateServicesSection();
    populateFeaturedWork();
    populateAboutSection();
    populateSkills();
    populatePublications();
    populateSocialLinks();
}

/**
 * Populate hero section
 */
function populateHeroSection() {
    const { personal } = portfolioData;

    document.getElementById('hero-name').textContent = personal.name;
    document.getElementById('hero-subtitle').textContent = personal.title;
    document.getElementById('hero-description').textContent = personal.description;

    const cvButton = document.getElementById('download-cv');
    if (cvButton && personal.cvFile) {
        cvButton.href = personal.cvFile;
    }
}

/**
 * Populate services/expertise section
 */
function populateServicesSection() {
    const { services } = portfolioData;
    const container = document.getElementById('services-grid');
    if (!container || !services) return;

    const serviceIcons = {
        ai: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M9.5 17.5h5"/></svg>`,
        data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
        code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
        research: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
    };

    services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="service-icon">${serviceIcons[service.icon] || ''}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        `;
        container.appendChild(card);
    });
}

/**
 * Populate featured work (apps + projects combined)
 */
function populateFeaturedWork() {
    const { featuredWork } = portfolioData;
    const container = document.getElementById('apps-grid');
    if (!container || !featuredWork) return;

    const platformIcons = {
        'Android': `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341c-.5 0-.904-.404-.904-.904s.404-.904.904-.904.904.404.904.904-.404.904-.904.904m-11.046 0c-.5 0-.904-.404-.904-.904s.404-.904.904-.904.904.404.904.904-.404.904-.904.904m11.4-6.057l1.96-3.394c.108-.188.044-.428-.144-.536-.188-.108-.428-.043-.536.144l-1.986 3.439C15.584 8.27 13.863 7.87 12 7.87c-1.863 0-3.584.4-5.17 1.067L4.844 5.498c-.108-.187-.348-.252-.536-.144-.188.108-.252.348-.144.536l1.96 3.394C2.69 11.081.344 14.543.344 18.5h23.312c0-3.957-2.346-7.419-5.779-9.216z"/></svg>`,
        'Android TV': `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>`,
        'Windows': `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>`
    };

    featuredWork.forEach((item, index) => {
        const card = document.createElement('article');
        card.className = item.type === 'app' ? 'app-card' : 'project-card';
        card.style.animationDelay = `${index * 0.08}s`;

        if (item.type === 'app') {
            // App card - use icon/logo, no preview image
            card.innerHTML = `
                <div class="app-body">
                    <div class="app-header">
                        <div class="app-icon">
                            ${item.icon ? `<img src="${item.icon}" alt="${item.title}" onerror="this.style.display='none'" />` : ''}
                            <div class="app-icon-fallback">${platformIcons[item.platform] || ''}</div>
                        </div>
                        <div class="app-platform">
                            ${platformIcons[item.platform] || ''}
                            <span>${item.platform}</span>
                        </div>
                    </div>
                    <div class="app-content">
                        <h3 class="app-title">${item.title}</h3>
                        <p class="app-description">${item.description}</p>
                        <div class="app-features">
                            ${item.tags.map(tag => `<span class="feature">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="app-actions">
                        <a href="${item.downloadFile}" download class="btn btn-download">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            <span>Download</span>
                        </a>
                        ${item.githubUrl ? `
                            <a href="${item.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-github">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                                <span>Source</span>
                            </a>
                        ` : ''}
                    </div>
                </div>
            `;
        } else {
            // Project card with screenshot
            const imageHtml = item.image
                ? `<img src="${item.image}" alt="${item.title}" loading="lazy" />`
                : `<div class="project-placeholder"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>`;

            card.innerHTML = `
                <div class="project-image">
                    ${imageHtml}
                    <div class="project-overlay">
                        <div class="project-links">
                            ${item.liveUrl ? `
                                <a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link" title="Live Demo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                </a>
                            ` : ''}
                            ${item.githubUrl ? `
                                <a href="${item.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" title="View Code">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${item.title}</h3>
                    <p class="project-description">${item.description}</p>
                    <div class="project-tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
        }
        container.appendChild(card);
    });
}

/**
 * Populate about section
 */
function populateAboutSection() {
    const { about } = portfolioData;

    const text1 = document.getElementById('about-text-1');
    const text2 = document.getElementById('about-text-2');

    if (text1 && about.paragraphs[0]) {
        text1.textContent = about.paragraphs[0];
    }
    if (text2 && about.paragraphs[1]) {
        text2.textContent = about.paragraphs[1];
    }
}

/**
 * Populate skills
 */
function populateSkills() {
    const { skills } = portfolioData;
    const container = document.getElementById('skills-grid');
    if (!container) return;

    const skillIcons = {
        python: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.68H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l10.06.05h.1l.09-.01.09-.02.08-.03.07-.04.06-.05.05-.05.04-.06.03-.07.02-.07.01-.08v-.71l.02-.14.03-.12.05-.11.06-.1.07-.08.08-.07.1-.06.11-.05.12-.04.13-.02h.14l.07.01z"/></svg>`,
        kotlin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.3,24l11.4-11.4L24,24H1.3z M0,0h12L0,12.6V0z M12,0L0,12.6V24l12-12l12,12V0H12z"/></svg>`,
        javascript: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067z"/></svg>`,
        git: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>`,
        android: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341c-.5 0-.904-.404-.904-.904s.404-.904.904-.904.904.404.904.904-.404.904-.904.904m-11.046 0c-.5 0-.904-.404-.904-.904s.404-.904.904-.904.904.404.904.904-.404.904-.904.904m11.4-6.057l1.96-3.394c.108-.188.044-.428-.144-.536-.188-.108-.428-.043-.536.144l-1.986 3.439C15.584 8.27 13.863 7.87 12 7.87c-1.863 0-3.584.4-5.17 1.067L4.844 5.498c-.108-.187-.348-.252-.536-.144-.188.108-.252.348-.144.536l1.96 3.394C2.69 11.081.344 14.543.344 18.5h23.312c0-3.957-2.346-7.419-5.779-9.216z"/></svg>`,
        d3: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.312 12C13.312 5.718 8.22.625 1.937.625v5.156c3.395 0 6.156 2.76 6.156 6.156v.063c0 3.395-2.76 6.156-6.156 6.156v5.156c6.282 0 11.375-5.092 11.375-11.375v-.063z"/></svg>`,
        ai: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/></svg>`,
        nlp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        llm: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        compose: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
        streamlit: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.57 2.15a.72.72 0 0 0-.72 0l-9.6 5.54a.72.72 0 0 0 0 1.25l9.6 5.54a.72.72 0 0 0 .72 0l9.6-5.54a.72.72 0 0 0 0-1.25z"/></svg>`,
        pandas: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="2" width="4" height="8" rx="1"/><rect x="4" y="14" width="4" height="8" rx="1"/><rect x="10" y="6" width="4" height="12" rx="1"/><rect x="16" y="2" width="4" height="8" rx="1"/><rect x="16" y="14" width="4" height="8" rx="1"/></svg>`,
        aws: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.064-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586z"/></svg>`,
        sql: `<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
        docker: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.82 17.275c-.684 0-1.304-.264-1.74-.756-.552-.607-.736-1.483-.52-2.463.02-.092.195-.793.86-1.603.398-.484.94-.924 1.612-1.31a6.323 6.323 0 0 1 1.14-.523c-.148-.18-.28-.37-.398-.565-.552-.913-.654-1.926-.287-2.856.31-.786.91-1.398 1.696-1.727.24-.1.495-.17.76-.21.54-.082 1.09-.04 1.64.124.187.056.37.126.547.21-.18-.43-.27-.9-.27-1.4 0-.97.35-1.87.98-2.54.67-.7 1.57-1.1 2.54-1.14h.14c.97 0 1.87.35 2.54.99.7.67 1.1 1.58 1.14 2.55.04.78-.17 1.52-.56 2.15.62-.25 1.29-.38 2-.38 1.1 0 2.12.38 2.96 1.07.92.75 1.54 1.84 1.7 2.99.02.14.03.28.03.42 0 .34-.04.67-.1 1-.16.76-.5 1.48-.99 2.09-.54.67-1.24 1.2-2.04 1.54-.73.31-1.52.48-2.33.5h-.1c-.95.02-9.36.02-11.93 0z"/></svg>`
    };

    skills.forEach(skill => {
        const el = document.createElement('div');
        el.className = 'skill-item';
        el.innerHTML = `
            <div class="skill-icon">${skillIcons[skill.icon] || ''}</div>
            <span class="skill-name">${skill.name}</span>
        `;
        container.appendChild(el);
    });
}

/**
 * Populate publications
 */
function populatePublications() {
    const { publications } = portfolioData;
    const container = document.getElementById('publications-grid');
    if (!container) return;

    publications.forEach((pub, index) => {
        const el = document.createElement('article');
        el.className = 'publication-card';
        el.style.animationDelay = `${index * 0.1}s`;

        el.innerHTML = `
            <div class="publication-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <div class="publication-content">
                <div class="publication-meta">
                    <span class="publication-journal">${pub.journal}</span>
                    <span class="publication-year">${pub.year}</span>
                </div>
                <h3 class="publication-title">${pub.title}</h3>
                <p class="publication-description">${pub.description}</p>
                <div class="publication-tags">
                    ${pub.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <a href="${pub.url}" target="_blank" rel="noopener noreferrer" class="publication-link">
                <span>Read</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
        `;
        container.appendChild(el);
    });
}

/**
 * Populate social links
 */
function populateSocialLinks() {
    const { socialLinks } = portfolioData;
    const container = document.getElementById('social-links');
    if (!container) return;

    const icons = {
        github: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
        email: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
        linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`
    };

    socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = link.icon !== 'email' ? '_blank' : '_self';
        a.rel = 'noopener noreferrer';
        a.className = 'social-link';
        a.title = link.name;
        a.innerHTML = icons[link.icon] || '';
        container.appendChild(a);
    });
}

/**
 * Navigation functionality
 */
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        if (currentScroll > lastScroll && currentScroll > 300) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        lastScroll = currentScroll;
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.pageYOffset >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * Scroll animations
 */
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section-header, .project-card, .app-card, .publication-card, .about-content, .contact-card, .service-card').forEach(el => {
        el.classList.add('animate-target');
        observer.observe(el);
    });
}

/**
 * Parallax effects
 */
function initializeParallax() {
    const orbs = document.querySelectorAll('.gradient-orb');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        orbs.forEach((orb, i) => {
            orb.style.transform = `translateY(${scrollY * (i + 1) * 0.05}px)`;
        });
    });
}

/**
 * Image loading - fade in when loaded
 */
function initializeImageLoading() {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
}
