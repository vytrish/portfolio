// ==========================================
// VYSHNAV M - PORTFOLIO DATA CONTROL CENTER
// ==========================================
// To update your profile, projects, or add/remove certificates in the future,
// simply edit this file without touching HTML, CSS, or script.js.

const portfolioData = {
    // --- PERSONAL & ACADEMIC INFO ---
    profile: {
        name: "Vyshnav M",
        headline: "BCA Analytics Student | Python, SQL, Java & Web Development | Building Data & Web Projects | Open to Tech Internships",
        degree: "BCA Analytics",
        university: "Kristu Jayanti (Deemed to be University)",
        location: "Bengaluru, India",
        batch: "2025 – 2028",
        email: "vyshnav.m2504@gmail.com",
        linkedin: "https://www.linkedin.com/in/vyshnav-m-b41783449",
        github: "https://github.com/vytrish",
        credly: "https://www.credly.com/users/vyshnav-m.191c535c/badges/credly",
        about: "I am a BCA Analytics student at Kristu Jayanti (Deemed to be University), Bengaluru (Batch 2025 – 2028), passionate about turning data and code into functional web and software solutions. Currently building practical skills in full-stack development, Python, SQL, Java, and database systems, I enjoy exploring how modern web technologies and version control tools work together to build real-world software."
    },

    // --- CATEGORIZED SKILLS ---
    skills: {
        programming: [
            { name: "Python", icon: "fab fa-python" },
            { name: "Java", icon: "fab fa-java" },
            { name: "C Programming", icon: "fas fa-terminal" }
        ],
        webBackend: [
            { name: "HTML5 / CSS3", icon: "fab fa-html5" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "Node.js", icon: "fab fa-node-js" }
        ],
        dataDatabases: [
            { name: "SQL & Databases", icon: "fas fa-database" },
            { name: "Data Analytics", icon: "fas fa-chart-line" },
            { name: "MongoDB (Basics)", icon: "fas fa-server" }
        ],
        toolsWorkflow: [
            { name: "Git & GitHub", icon: "fab fa-git-alt" },
            { name: "AI Prompt Engineering", icon: "fas fa-robot" },
            { name: "Linux Fundamentals", icon: "fab fa-linux" }
        ]
    },

    // --- FEATURED PROJECTS ---
    projects: [
        {
            title: "AI-Assisted Dataset Analyzer",
            description: "A Python-based utility prototype designed to parse structured datasets, automate basic exploratory data analysis, and integrate AI prompts for quick reporting insights.",
            tech: ["Python", "Data Analytics", "AI Integration"],
            githubUrl: "https://github.com/vytrish",
            liveUrl: "#"
        },
        {
            title: "Personal Portfolio Website",
            description: "A minimalist, responsive developer portfolio showcasing academic projects, core technical stack, and verified credentials with a modular data-driven architecture.",
            tech: ["HTML5", "Tailwind CSS", "JavaScript", "Git"],
            githubUrl: "https://github.com/vytrish",
            liveUrl: "#"
        }
    ],

    // --- CATEGORIZED CERTIFICATES (All 23 Standardized to .pdf) ---
    certificates: [
        // NASSCOM
        {
            title: "Digital Engineering (Gold Category)",
            category: "NASSCOM",
            issuer: "MeitY – FutureSkills Prime",
            date: "Oct 16, 2025",
            details: "74% Score, NSQF Level 5 • ID: FSP/2025/10/10243752",
            fileUrl: "certificates/nasscom/digital-engineering.pdf"
        },
        // Udemy
        {
            title: "The Complete Git Guide: Understand and Master Git & GitHub",
            category: "Udemy",
            issuer: "Udemy (Bogdan Stashchuk)",
            date: "Feb 5, 2026",
            details: "23.5 Total Hours Masterclass • ID: UC-0257c021-ecec-4197-8d44-e234e1fa88bd",
            fileUrl: "certificates/udemy/git-github-masterclass.pdf"
        },
        // Infosys Springboard
        {
            title: "Front End Web Developer Certification",
            category: "Infosys Springboard",
            issuer: "Infosys Springboard",
            date: "Feb 5, 2026",
            details: "Certificate of Achievement",
            fileUrl: "certificates/infosys/frontend-web-developer.pdf"
        },
        {
            title: "Node JS: Advanced Concepts",
            category: "Infosys Springboard",
            issuer: "Infosys Springboard",
            date: "Feb 5, 2026",
            details: "Course Completion Certificate",
            fileUrl: "certificates/infosys/nodejs-advanced.pdf"
        },
        {
            title: "JavaScript",
            category: "Infosys Springboard",
            issuer: "Infosys Springboard",
            date: "Feb 5, 2026",
            details: "Course Completion Certificate",
            fileUrl: "certificates/infosys/javascript.pdf"
        },
        {
            title: "CSS3",
            category: "Infosys Springboard",
            issuer: "Infosys Springboard",
            date: "Feb 4, 2026",
            details: "Course Completion Certificate",
            fileUrl: "certificates/infosys/css3.pdf"
        },
        {
            title: "HTML5 - The Language",
            category: "Infosys Springboard",
            issuer: "Infosys Springboard",
            date: "Dec 31, 2025",
            details: "Course Completion Certificate",
            fileUrl: "certificates/infosys/html5.pdf"
        },
        // Red Hat
        {
            title: "Getting Started with Linux Fundamentals (RH104)",
            category: "Red Hat",
            issuer: "Red Hat Academy",
            date: "Sep 28, 2026",
            details: "Red Hat Academy Course Attendance",
            fileUrl: "certificates/redhat/linux-fundamentals-rh104.pdf"
        },
        // MongoDB
        {
            title: "AI and Innovation: How MongoDB Enables a Resilient AI Strategy",
            category: "MongoDB",
            issuer: "MongoDB",
            date: "Sep 22, 2026",
            details: "MongoDB Official Skill Credential",
            fileUrl: "certificates/mongodb/ai-innovation-strategy.pdf"
        },
        {
            title: "Building AI Agents with MongoDB",
            category: "MongoDB",
            issuer: "MongoDB",
            date: "Sep 22, 2026",
            details: "MongoDB Official Skill Credential",
            fileUrl: "certificates/mongodb/building-ai-agents.pdf"
        },
        {
            title: "Building AI-Powered Search with MongoDB Vector Search",
            category: "MongoDB",
            issuer: "MongoDB",
            date: "Sep 22, 2026",
            details: "MongoDB Official Skill Credential",
            fileUrl: "certificates/mongodb/ai-powered-search.pdf"
        },
        {
            title: "Building RAG Apps Using MongoDB",
            category: "MongoDB",
            issuer: "MongoDB",
            date: "Sep 22, 2026",
            details: "MongoDB Official Skill Credential",
            fileUrl: "certificates/mongodb/building-rag-apps.pdf"
        },
        {
            title: "MongoDB Basics for Students",
            category: "MongoDB",
            issuer: "MongoDB",
            date: "Jul 15, 2026",
            details: "MongoDB Official Skill Credential",
            fileUrl: "certificates/mongodb/mongodb-basics-students.pdf"
        },
        // Qlik
        {
            title: "Qlik Data Analytics Certification",
            category: "Qlik",
            issuer: "Qlik",
            date: "Feb 6, 2026",
            details: "Analytics Certified Credential",
            fileUrl: "certificates/qlik/data-analytics-certified.pdf"
        },
        {
            title: "Qlik Data Literacy Certification",
            category: "Qlik",
            issuer: "Qlik",
            date: "Feb 4, 2026",
            details: "Data Literacy Certified Credential",
            fileUrl: "certificates/qlik/data-literacy-certified.pdf"
        },
        // Celonis
        {
            title: "Get Data into Celonis",
            category: "Celonis",
            issuer: "Celonis",
            date: "Jul 27, 2026",
            details: "Intermediate Process Mining Credential",
            fileUrl: "certificates/celonis/get-data-into-celonis.pdf"
        },
        {
            title: "Build Action Flows",
            category: "Celonis",
            issuer: "Celonis",
            date: "Jul 21, 2026",
            details: "Intermediate Process Mining Credential",
            fileUrl: "certificates/celonis/build-action-flows.pdf"
        },
        {
            title: "Deliver Business Value with Celonis",
            category: "Celonis",
            issuer: "Celonis",
            date: "Jul 21, 2026",
            details: "Intermediate Process Mining Credential",
            fileUrl: "certificates/celonis/deliver-business-value.pdf"
        },
        {
            title: "Create and Deliver Demos",
            category: "Celonis",
            issuer: "Celonis",
            date: "May 26, 2026",
            details: "Intermediate Process Mining Credential",
            fileUrl: "certificates/celonis/create-deliver-demos.pdf"
        },
        {
            title: "Process Intelligence Rising Star - Business",
            category: "Celonis",
            issuer: "Celonis",
            date: "May 26, 2026",
            details: "Academic Rising Star Credential",
            fileUrl: "certificates/celonis/process-intelligence-rising-star.pdf"
        },
        {
            title: "Write PQL Queries",
            category: "Celonis",
            issuer: "Celonis",
            date: "May 26, 2026",
            details: "Intermediate Process Query Language Credential",
            fileUrl: "certificates/celonis/write-pql-queries.pdf"
        },
        {
            title: "Process Intelligence Fundamentals",
            category: "Celonis",
            issuer: "Celonis",
            date: "Sep 9, 2025",
            details: "Foundational Process Intelligence Credential",
            fileUrl: "certificates/celonis/process-intelligence-fundamentals.pdf"
        },
        {
            title: "Celonis Foundations",
            category: "Celonis",
            issuer: "Celonis",
            date: "Sep 4, 2025",
            details: "Foundational Process Mining Credential",
            fileUrl: "certificates/celonis/celonis-foundations.pdf"
        }
    ]
};