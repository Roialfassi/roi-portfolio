/**
 * ============================================
 * PORTFOLIO DATA CONFIGURATION
 * ============================================
 * Roi Alfassi - AI Engineer Portfolio
 */

const portfolioData = {
    // ==========================================
    // PERSONAL INFORMATION
    // ==========================================
    personal: {
        name: "Roi Alfassi",
        title: "AI Engineer",
        tagline: "Building Intelligent Systems",
        description: "AI Engineer with expertise in NLP, LLMs, and production ML systems. M.Sc. in Information Systems with published research on AI-generated content. I build end-to-end solutions from data pipelines to user-facing applications.",
        email: "roialfassi@gmail.com",
        github: "https://github.com/Roialfassi",
        linkedin: "https://www.linkedin.com/in/roi-alfassi/",
        location: "Israel",
        available: false, // No badge
        cvFile: "Resources/CV-Roi Alfassi-110825.pdf"
    },

    // ==========================================
    // SERVICES / WHAT I DO
    // ==========================================
    services: [
        {
            title: "AI & Machine Learning",
            description: "Production-ready LLM integrations, NLP pipelines, predictive models, and intelligent automation. From prototype to deployment.",
            icon: "ai"
        },
        {
            title: "Data Engineering",
            description: "ETL pipelines, data validation systems, AWS infrastructure (EC2, S3), and large-scale data processing for analytics and ML.",
            icon: "data"
        },
        {
            title: "Full-Stack Development",
            description: "End-to-end applications across Android (Kotlin/Compose), desktop (Python), and web (Vue.js, React). Clean architecture, modern UI.",
            icon: "code"
        },
        {
            title: "Research & Analysis",
            description: "Academic research background with multiple published papers. Data-driven insights, KPI extraction, and technical documentation.",
            icon: "research"
        }
    ],

    // ==========================================
    // ABOUT SECTION
    // ==========================================
    about: {
        paragraphs: [
            "I'm an AI Engineer at AIO Systems, where I develop and integrate LLM-powered features into production systems. My work spans custom chat interfaces, predictive models, and extracting actionable business insights from complex data.",
            "With an M.Sc. in Information Systems from the University of Haifa (GPA 90, Thesis 95) and research published at IUI 2025, NetsciX 2025, and Taylor & Francis, I bring both practical engineering skills and academic rigor to every project."
        ]
    },

    // ==========================================
    // SKILLS / TECH STACK
    // ==========================================
    skills: [
        // AI & ML
        { name: "Python", icon: "python", category: "core" },
        { name: "NLP", icon: "nlp", category: "core" },
        { name: "LLMs", icon: "llm", category: "core" },
        { name: "Machine Learning", icon: "ai", category: "core" },
        { name: "Deep Learning", icon: "ai", category: "core" },
        // Development
        { name: "Kotlin", icon: "kotlin", category: "dev" },
        { name: "JavaScript", icon: "javascript", category: "dev" },
        { name: "Vue.js", icon: "javascript", category: "dev" },
        { name: "Jetpack Compose", icon: "compose", category: "dev" },
        // Data
        { name: "AWS", icon: "aws", category: "data" },
        { name: "SQL", icon: "sql", category: "data" },
        { name: "Pandas", icon: "pandas", category: "data" },
        { name: "D3.js", icon: "d3", category: "data" },
        // Tools
        { name: "Git", icon: "git", category: "tools" },
        { name: "Docker", icon: "docker", category: "tools" }
    ],

    // ==========================================
    // FEATURED WORK (Apps + Projects Combined)
    // ==========================================
    featuredWork: [
        // ===== APPS (Downloadable) =====
        {
            id: "iptv-phone",
            type: "app",
            title: "Alfassi Phone TV",
            description: "IPTV streaming app for Android built with Kotlin and Jetpack Compose. M3U playlist support, Chromecast integration, favorites, history, and offline downloads.",
            image: null, // Use logo instead
            icon: "Resources/app_logo.jpg",
            platform: "Android",
            downloadFile: "Resources/Alfassi-Phone-TV.apk",
            githubUrl: null,
            liveUrl: null,
            tags: ["Kotlin", "Jetpack Compose", "ExoPlayer", "Chromecast"],
            featured: true
        },
        {
            id: "iptv-tv",
            type: "app",
            title: "Alfassi TV",
            description: "Android TV app with elder-friendly 'Easy Mode'. Large buttons, simple navigation, and familiar channel switching for accessibility.",
            image: null, // Use logo instead
            icon: "Resources/app_logo.jpg",
            platform: "Android TV",
            downloadFile: "Resources/Alfassi-TV.apk",
            githubUrl: null,
            liveUrl: null,
            tags: ["Kotlin", "Android TV", "Leanback", "Accessibility"],
            featured: true
        },
        {
            id: "iptv-desktop",
            type: "app",
            title: "IPTV Saba",
            description: "Desktop IPTV application with multi-profile support, channel favorites, watch history, and 'Easy Mode' for elderly users.",
            image: null, // Use logo instead
            icon: "Resources/iptv-logo2.ico",
            platform: "Windows",
            downloadFile: "Resources/iptv_app.exe",
            githubUrl: "https://github.com/Roialfassi/IPTV-Saba",
            liveUrl: null,
            tags: ["Python", "PyQt", "VLC", "Multi-Profile"],
            featured: true
        },
        // ===== PROJECTS (Web/Data) =====
        {
            id: "world-temp",
            type: "project",
            title: "Global Temperature Dashboard",
            description: "Interactive data visualization of global temperature changes. D3.js-powered world maps, bubble charts, line graphs, and scatterplots with time-series animation.",
            image: "assets/images/WorldTemp.webp",
            icon: null,
            platform: null,
            downloadFile: null,
            githubUrl: "https://github.com/Roialfassi/ViZ_Project",
            liveUrl: "https://roialfassi.github.io/ViZ_Project/",
            tags: ["D3.js", "JavaScript", "Data Visualization"],
            featured: true
        },
        {
            id: "stock-comparator",
            type: "project",
            title: "Stock Comparator",
            description: "Streamlit app for comparing historical performance of stocks, ETFs, and index funds. Interactive charts and comparative analytics.",
            image: "assets/images/stock_comparator.png",
            icon: null,
            platform: null,
            downloadFile: null,
            githubUrl: "https://github.com/Roialfassi/Stock_Comparator",
            liveUrl: "https://stock-comparator.streamlit.app/",
            tags: ["Python", "Streamlit", "Finance", "yFinance"],
            featured: true
        },
        {
            id: "prompt-queue",
            type: "project",
            title: "PromptQueueRunner",
            description: "CLI tool for batch processing prompts with local LLMs. Queue prompts, customize system roles, and automate response generation.",
            image: "assets/images/PromptQueueRunner.webp",
            icon: null,
            platform: null,
            downloadFile: null,
            githubUrl: "https://github.com/Roialfassi/PromptQueueRunner",
            liveUrl: null,
            tags: ["Python", "LLM", "CLI", "Automation"],
            featured: true
        },
        {
            id: "weight-calculator",
            type: "project",
            title: "Weight Loss Calculator",
            description: "Web app for calculating weight loss timelines, walking goals, BMI, and calorie deficits. Dark mode and health-aware warnings.",
            image: "assets/images/weight_calculator.png",
            icon: null,
            platform: null,
            downloadFile: null,
            githubUrl: "https://github.com/Roialfassi/weight-loss-calculator",
            liveUrl: "https://roialfassi.github.io/weight-loss-calculator/",
            tags: ["React", "JavaScript", "Health"],
            featured: true
        }
    ],

    // ==========================================
    // PUBLICATIONS
    // ==========================================
    publications: [
        {
            id: "fanfiction-ai",
            title: "Fanfiction in the Age of AI: Community Perspectives on Creativity, Authenticity and Adoption",
            journal: "Taylor & Francis (Accepted)",
            year: "2025",
            description: "Research exploring how creative writing communities perceive AI-generated content. Examines authenticity, creativity, and technology adoption in online storytelling spaces.",
            url: "https://arxiv.org/abs/2506.18706",
            tags: ["AI", "NLP", "HCI", "Research"]
        },
        {
            id: "hai-gen",
            title: "Online Storytelling Spaces: Exploring Perceptions of AI Agents",
            journal: "IUI 2025 HAI-Gen Workshop",
            year: "2025",
            description: "Accepted paper examining participants' perceptions of overt and covert AI agents in collaborative storytelling environments.",
            url: "https://arxiv.org/abs/2506.18706",
            tags: ["Human-AI Interaction", "IUI 2025"]
        }
    ],

    // ==========================================
    // SOCIAL LINKS
    // ==========================================
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/Roialfassi",
            icon: "github"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/roi-alfassi/",
            icon: "linkedin"
        },
        {
            name: "Email",
            url: "mailto:roialfassi@gmail.com",
            icon: "email"
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
