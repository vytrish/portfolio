// =========================================================
// VYSHNAV M — DYNAMIC PORTFOLIO RENDERING ENGINE
// Reads from data.js so you never have to edit HTML/CSS
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    const { profile, skills, projects, certificates } = portfolioData;

    // 1. POPULATE HERO & PROFILE DETAILS (College & Batch Only)
    document.getElementById("hero-name").textContent = profile.name;
    document.getElementById("hero-headline").textContent = profile.headline;
    document.getElementById("hero-status-pill").textContent = `${profile.degree} • ${profile.university} (${profile.batch})`;
    document.getElementById("hero-cert-count").textContent = certificates.length;

    document.getElementById("hero-github").href = profile.github;
    document.getElementById("hero-linkedin").href = profile.linkedin;

    // Quick Stats Bar
    document.getElementById("stat-degree").textContent = profile.degree;
    document.getElementById("stat-certs").textContent = `${certificates.length}`;
    document.getElementById("stat-batch").textContent = profile.batch;

    // 2. POPULATE ABOUT & EDUCATION CARD
    document.getElementById("about-description").textContent = profile.about;
    document.getElementById("about-credly-link").href = profile.credly;

    document.getElementById("card-degree").textContent = profile.degree;
    document.getElementById("card-university").textContent = profile.university;
    document.getElementById("card-location").textContent = profile.location;
    document.getElementById("card-batch").textContent = profile.batch;

    // 3. POPULATE CATEGORIZED TECHNICAL SKILLS
    const skillCategories = [
        { key: "programming", title: "Programming & Logic", icon: "fas fa-code" },
        { key: "webBackend", title: "Web & Backend", icon: "fas fa-globe" },
        { key: "dataDatabases", title: "Data & Databases", icon: "fas fa-database" },
        { key: "toolsWorkflow", title: "Tools & Workflow", icon: "fas fa-screwdriver-wrench" }
    ];

    const skillsContainer = document.getElementById("skills-container");
    skillsContainer.innerHTML = skillCategories.map(cat => {
        const items = skills[cat.key] || [];
        return `
            <div class="glass-card hover-card p-6 rounded-2xl flex flex-col justify-between">
                <div>
                    <div class="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                        <div class="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                            <i class="${cat.icon}"></i>
                        </div>
                        <h3 class="font-bold text-slate-100 text-base">${cat.title}</h3>
                    </div>
                    <ul class="space-y-3">
                        ${items.map(skill => `
                            <li class="flex items-center gap-3 text-sm text-slate-300 bg-slate-900/70 px-3.5 py-2.5 rounded-xl border border-slate-800/80">
                                <i class="${skill.icon} text-cyan-400 text-base w-5 text-center"></i>
                                <span class="font-medium">${skill.name}</span>
                            </li>
                        `).join("")}
                    </ul>
                </div>
            </div>
        `;
    }).join("");

    // 4. POPULATE FEATURED PROJECTS
    document.getElementById("projects-github-more").href = profile.github;
    const projectsGrid = document.getElementById("projects-grid");
    projectsGrid.innerHTML = projects.map(project => `
        <div class="glass-card hover-card p-7 rounded-2xl flex flex-col justify-between">
            <div>
                <div class="flex items-center justify-between mb-4">
                    <div class="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg">
                        <i class="fas fa-folder-open"></i>
                    </div>
                    <div class="flex items-center gap-3">
                        ${project.githubUrl ? `
                            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" title="View Source on GitHub" class="text-slate-400 hover:text-cyan-400 transition text-lg">
                                <i class="fab fa-github"></i>
                            </a>
                        ` : ""}
                        ${project.liveUrl && project.liveUrl !== "#" ? `
                            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" title="Live Preview" class="text-slate-400 hover:text-cyan-400 transition text-base">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        ` : ""}
                    </div>
                </div>
                <h3 class="text-xl font-bold text-slate-100 mb-3">${project.title}</h3>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">${project.description}</p>
            </div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800/70">
                ${project.tech.map(t => `
                    <span class="px-3 py-1 rounded-lg bg-slate-900 text-cyan-400 font-mono text-xs border border-slate-800">
                        ${t}
                    </span>
                `).join("")}
            </div>
        </div>
    `).join("");

    // 5. POPULATE CATEGORIZED CERTIFICATES & DIRECT CERTIFICATE VIEWER MODAL
    document.getElementById("cert-credly-btn").href = profile.credly;

    const certFiltersContainer = document.getElementById("cert-filters");
    const certGrid = document.getElementById("cert-grid");

    // Modal Elements
    const certModal = document.getElementById("cert-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalCategory = document.getElementById("modal-category");
    const modalOpenTab = document.getElementById("modal-open-tab");
    const modalBody = document.getElementById("modal-body");
    const modalCloseBtn = document.getElementById("modal-close-btn");

    const openCertificateModal = (cert) => {
        modalTitle.textContent = cert.title;
        modalCategory.textContent = `${cert.category} • ${cert.date}`;
        modalOpenTab.href = cert.fileUrl;

        const isImage = /\.(jpg|jpeg|png|webp|gif)$/i.test(cert.fileUrl);

        if (isImage) {
            modalBody.innerHTML = `
                <img src="${cert.fileUrl}" alt="${cert.title}" class="max-h-[72vh] w-auto object-contain rounded-lg shadow-lg border border-slate-800" />
            `;
        } else {
            modalBody.innerHTML = `
                <iframe src="${cert.fileUrl}" class="w-full h-[72vh] rounded-lg border border-slate-800 bg-slate-900" title="${cert.title}"></iframe>
            `;
        }

        certModal.classList.remove("hidden");
        certModal.classList.add("flex");
        document.body.style.overflow = "hidden";
    };

    const closeCertificateModal = () => {
        certModal.classList.add("hidden");
        certModal.classList.remove("flex");
        modalBody.innerHTML = "";
        document.body.style.overflow = "";
    };

    modalCloseBtn.addEventListener("click", closeCertificateModal);
    certModal.addEventListener("click", (e) => {
        if (e.target === certModal) closeCertificateModal();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !certModal.classList.contains("hidden")) {
            closeCertificateModal();
        }
    });

    // Category badge color styling helper
    const getCategoryBadgeStyle = (category) => {
        const styles = {
            "NASSCOM": "bg-amber-500/10 text-amber-400 border-amber-500/30",
            "Udemy": "bg-purple-500/10 text-purple-400 border-purple-500/30",
            "Infosys Springboard": "bg-sky-500/10 text-sky-400 border-sky-500/30",
            "MongoDB": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
            "Celonis": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
            "Qlik": "bg-teal-500/10 text-teal-400 border-teal-500/30",
            "Red Hat": "bg-rose-500/10 text-rose-400 border-rose-500/30"
        };
        return styles[category] || "bg-slate-800 text-cyan-400 border-slate-700";
    };

    // Dynamically calculate categories and counts from data.js
    const categoryCounts = certificates.reduce((acc, cert) => {
        acc[cert.category] = (acc[cert.category] || 0) + 1;
        return acc;
    }, {});

    const allCategories = ["All", ...Object.keys(categoryCounts)];

    const renderFilterButtons = (activeCategory) => {
        certFiltersContainer.innerHTML = allCategories.map(category => {
            const count = category === "All" ? certificates.length : categoryCounts[category];
            const isActive = category === activeCategory ? "active" : "bg-slate-900/90 text-slate-300 border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400";
            return `
                <button data-category="${category}" class="filter-btn ${isActive} px-4 py-2 rounded-xl border text-xs sm:text-sm font-medium flex items-center gap-2">
                    <span>${category}</span>
                    <span class="px-1.5 py-0.5 rounded-md text-[11px] font-mono bg-black/20">${count}</span>
                </button>
            `;
        }).join("");

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const selected = btn.getAttribute("data-category");
                renderFilterButtons(selected);
                renderCertificates(selected);
            });
        });
    };

    const renderCertificates = (selectedCategory) => {
        const filtered = selectedCategory === "All"
            ? certificates
            : certificates.filter(c => c.category === selectedCategory);

        certGrid.innerHTML = filtered.map((cert, index) => `
            <div style="animation-delay: ${index * 35}ms" class="cert-card-animate glass-card hover-card p-6 rounded-2xl flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between gap-2 mb-4">
                        <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold border ${getCategoryBadgeStyle(cert.category)}">
                            ${cert.category}
                        </span>
                        <span class="text-xs font-mono text-slate-400">${cert.date}</span>
                    </div>
                    <h3 class="text-base font-bold text-slate-100 mb-2 leading-snug">${cert.title}</h3>
                    <p class="text-xs text-slate-400 mb-1">Issued by <span class="text-slate-300 font-medium">${cert.issuer}</span></p>
                    <p class="text-xs text-slate-500 font-mono mt-2">${cert.details}</p>
                </div>

                <div class="mt-5 pt-4 border-t border-slate-800/70 flex items-center justify-between gap-3">
                    <button data-cert-index="${index}" class="view-cert-btn inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition cursor-pointer">
                        <i class="fas fa-eye"></i>
                        <span>View Certificate</span>
                    </button>

                    <a href="${cert.fileUrl}" target="_blank" rel="noopener noreferrer" title="Open File in New Tab" class="text-xs font-mono text-slate-400 hover:text-cyan-400 transition">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        `).join("");

        // Attach modal viewer click event to each "View Certificate" button
        document.querySelectorAll(".view-cert-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.getAttribute("data-cert-index"), 10);
                openCertificateModal(filtered[idx]);
            });
        });
    };

    // Initial render of filters and certificates
    renderFilterButtons("All");
    renderCertificates("All");

    // 6. POPULATE CONTACT & FOOTER (STRICTLY NO PHONE NUMBER)
    document.getElementById("contact-email").href = `mailto:${profile.email}`;
    document.getElementById("contact-email-text").textContent = profile.email;
    document.getElementById("contact-linkedin").href = profile.linkedin;
    document.getElementById("contact-github").href = profile.github;
    document.getElementById("contact-credly").href = profile.credly;

    document.getElementById("footer-year").textContent = new Date().getFullYear();
    document.getElementById("footer-name").textContent = profile.name;

    // 7. MOBILE MENU INTERACTION
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });
});