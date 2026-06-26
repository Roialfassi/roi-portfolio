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
        tagline: "Shipping Production GenAI Systems",
        description: "Production AI/GenAI Engineer building tool-calling assistants, RAG pipelines, and predictive ML in Python. I own the AI and data architecture at AIO Systems, shipping production-grade solutions across a platform spanning 110,500+ IoT deployments. M.Sc. in Information Systems with three first-author publications and a University of Haifa Research Excellence Award.",
        email: "roialfassi@gmail.com",
        github: "https://github.com/Roialfassi",
        linkedin: "https://www.linkedin.com/in/roi-alfassi/",
        location: "Haifa, Israel",
        available: false, // No badge
        cvFile: "Resources/Roi_Alfassi_2026.pdf"
    },

    // ==========================================
    // SERVICES / WHAT I DO
    // ==========================================
    services: [
        {
            title: "GenAI & Machine Learning",
            description: "Production GenAI systems — tool-calling assistants, RAG pipelines, and agents (MCP) — plus predictive ML and intelligent automation. From prototype to deployment.",
            icon: "ai"
        },
        {
            title: "Data Engineering",
            description: "ETL/ELT pipelines, data warehouse design, and large-scale processing (~1B rows across 10+ sources). Cloud infrastructure on Azure and AWS for analytics and ML.",
            icon: "data"
        },
        {
            title: "Full-Stack Development",
            description: "End-to-end applications across Android (Kotlin/Compose), desktop (Python), and web (Vue.js, React). Clean architecture, modern UI.",
            icon: "code"
        },
        {
            title: "Research & Analysis",
            description: "Academic background with three first-author publications, including IJHCI (Taylor & Francis). Data-driven insights, LLM evaluation, and technical documentation.",
            icon: "research"
        }
    ],

    // ==========================================
    // ABOUT SECTION
    // ==========================================
    about: {
        paragraphs: [
            "I'm an AI Engineer at AIO Systems, where I own the AI and data architecture end-to-end. I re-architected the production AI chat assistant on the OpenAI Responses API with tool-calling, MCP, and RAG over multi-source company data, and shipped page-level AI assistants across a CMS serving 110,500+ IoT deployments for global telecom operators.",
            "I also own the company data warehouse and ETL pipelines (~1B rows across 10+ sources) and deployed an XGBoost forecasting model running in production. I hold an M.Sc. in Information Systems from the University of Haifa (GPA 90, Thesis 95) with three first-author publications — including the International Journal of Human–Computer Interaction (Taylor & Francis) — and am the sole recipient of the University of Haifa Research Excellence Award, 2025."
        ]
    },

    // ==========================================
    // SKILLS / TECH STACK
    // ==========================================
    skills: [
        // GenAI & ML
        { name: "Python", icon: "python", category: "core" },
        { name: "LLMs & GenAI", icon: "llm", category: "core" },
        { name: "RAG & Agents", icon: "ai", category: "core" },
        { name: "Machine Learning", icon: "ai", category: "core" },
        { name: "NLP", icon: "nlp", category: "core" },
        // Data & Cloud
        { name: "SQL", icon: "sql", category: "data" },
        { name: "Pandas", icon: "pandas", category: "data" },
        { name: "Azure", icon: "cloud", category: "data" },
        { name: "AWS", icon: "aws", category: "data" },
        { name: "Docker", icon: "docker", category: "data" },
        // Development
        { name: "Kotlin", icon: "kotlin", category: "dev" },
        { name: "JavaScript", icon: "javascript", category: "dev" },
        { name: "Git", icon: "git", category: "tools" }
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
            downloadFile: "https://play.google.com/apps/internaltest/4701693477024329318",
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
            downloadFile: "https://play.google.com/apps/internaltest/4698715405678683216",
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
            downloadFile: "https://github.com/Roialfassi/IPTV-Saba/releases/download/v1.0.0/IPTV-Saba.exe",
            releaseUrl: "https://github.com/Roialfassi/IPTV-Saba/releases/tag/v1.0.0",
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
        },
        {
            id: "buying-vs-renting",
            type: "project",
            title: "Buying vs. Renting Calculator",
            description: "Financial decision tool comparing buying vs. renting a home over time — modeling opportunity cost and investment returns, not just monthly payments. Break-even analysis, regional presets, and shareable scenario URLs.",
            image: "Resources/buyingvsrenting.jpg",
            icon: null,
            platform: null,
            downloadFile: null,
            githubUrl: "https://github.com/Roialfassi/BuyingVsRenting",
            liveUrl: "https://roialfassi.github.io/BuyingVsRenting/",
            tags: ["TypeScript", "Vite", "Fluent UI", "Finance"],
            featured: true
        },
        {
            id: "personal-finances",
            type: "project",
            title: "Salary Budget Splitter",
            description: "Local-first budgeting app that turns take-home pay into a practical monthly budget. Multiple pay frequencies, budget templates (50/30/20, Ramsey, savings/debt-focused), one-click balancing, and CSV/JSON export — fully browser-based, no backend.",
            image: "Resources/FinancialPlanning.jpg",
            icon: null,
            platform: null,
            downloadFile: null,
            githubUrl: "https://github.com/Roialfassi/PersonalFinances",
            liveUrl: "https://roialfassi.github.io/PersonalFinances/",
            tags: ["React", "TypeScript", "Vite", "Finance"],
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
            journal: "IJHCI · Taylor & Francis",
            year: "2025",
            description: "First-author study in the International Journal of Human–Computer Interaction (Vol. 42) on how creative writing communities perceive AI-generated content — authenticity, creativity, and technology adoption in online storytelling spaces.",
            url: "https://arxiv.org/abs/2506.18706",
            tags: ["AI", "NLP", "HCI", "Research"]
        },
        {
            id: "hai-gen",
            title: "Online Storytelling Spaces: Exploring Participants' Perceptions of Overt and Covert AI Agents",
            journal: "HAI-Gen · ACM IUI 2025",
            year: "2025",
            description: "First-author paper examining participants' perceptions of overt and covert AI agents in collaborative storytelling environments. Presented at the HAI-Gen Workshop, ACM IUI 2025, Cagliari, Italy.",
            url: "https://arxiv.org/abs/2506.18706",
            tags: ["Human-AI Interaction", "IUI 2025"]
        },
        {
            id: "netscix-fanfiction",
            title: "Identifying Differences Between Human- and AI-Generated Fanfiction Stories",
            journal: "NetsciX 2025",
            year: "2025",
            description: "First-author network-science study quantifying stylistic and structural differences between human- and AI-generated fanfiction, combining embedding analysis, clustering, and classification.",
            url: "https://arxiv.org/abs/2506.18706",
            tags: ["AI", "NLP", "Network Science"]
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
