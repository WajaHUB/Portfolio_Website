// Main JavaScript file for Wajahat Khan Portfolio

// Global variables
let projectsData = null;
let skillsData = null;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
async function initializeApp() {
    try {
        // Load projects data
        await loadProjectsData();
        
        // Initialize page-specific functionality
        const currentPage = getCurrentPage();
        
        if (currentPage === 'index') {
            initializeHomePage();
        } else if (currentPage === 'projects') {
            initializeProjectsPage();
        }
        
        // Initialize common functionality
        initializeNavigation();
        initializeSmoothScrolling();
        
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

// Load projects data from JSON file
async function loadProjectsData() {
    try {
        const response = await fetch('projects.json');
        if (!response.ok) {
            throw new Error('Failed to load projects data');
        }
        const data = await response.json();
        projectsData = data.projects;
        skillsData = data.skills;
        return data;
    } catch (error) {
        console.error('Error loading projects data:', error);
        return null;
    }
}

// Get current page name
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('projects.html')) return 'projects';
    return 'index';
}

// Initialize home page specific functionality
function initializeHomePage() {
    loadFeaturedProjects();
    loadSkills();
    initializeAnimations();
    initializeNameTypingAnimation();
}

// Initialize projects page specific functionality
function initializeProjectsPage() {
    loadAllProjects();
    initializeProjectFilters();
}

// Load all projects for home page (no more featured concept)
function loadFeaturedProjects() {
    if (!projectsData) return;
    
    const container = document.getElementById('featuredProjects');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Show first 6 projects instead of featured ones
    const projectsToShow = projectsData.slice(0, 6);
    
    projectsToShow.forEach(project => {
        const projectCard = createProjectCard(project);
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 mb-4';
        col.appendChild(projectCard);
        container.appendChild(col);
    });
}

// Load all projects for projects page
function loadAllProjects() {
    if (!projectsData) return;
    
    const container = document.getElementById('projectsGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project, true);
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 mb-4 project-item';
        col.setAttribute('data-category', project.category);
        col.appendChild(projectCard);
        container.appendChild(col);
    });
}

// Create project card HTML
function createProjectCard(project, showDetails = false) {
    const card = document.createElement('div');
    card.className = 'card project-card h-100';
    
    // Use actual SVG image if available, otherwise fallback
    const projectImage = project.image || `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" fill="%23667eea"><rect width="400" height="220" fill="url(%23gradient)"/><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea"/><stop offset="100%" style="stop-color:%23764ba2"/></linearGradient></defs><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="24" font-weight="600">${project.title}</text></svg>`;
    
    card.innerHTML = `
        <img src="${projectImage}" class="card-img-top" alt="${project.title}" style="height: 200px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
            <div class="mb-2">
                <span class="badge bg-primary rounded-pill">${project.category}</span>
            </div>
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <div class="tech-stack mb-3">
                ${project.tech_stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="mt-auto">
                <div class="d-flex gap-2">
                    <a href="${project.github_url}" target="_blank" class="btn btn-outline-primary btn-sm">
                        <i class="fab fa-github me-1"></i>View Code
                    </a>
                    ${showDetails ? `<button class="btn btn-primary btn-sm" onclick="showProjectModal('${project.id}')">
                        <i class="fas fa-eye me-1"></i>Details
                    </button>` : ''}
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Show project modal with details
function showProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalLabel = document.getElementById('projectModalLabel');
    const modalBody = document.getElementById('projectModalBody');
    
    modalLabel.textContent = project.title;
    
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 220' fill='%23667eea'><rect width='400' height='220' fill='url(%23gradient)'/><defs><linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23667eea'/><stop offset='100%' style='stop-color:%23764ba2'/></linearGradient></defs><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-weight='600'>${project.title}</text></svg>" class="img-fluid rounded mb-3" alt="${project.title}">
            </div>
            <div class="col-md-6">
                <h5>Category</h5>
                <p><span class="badge bg-primary rounded-pill">${project.category}</span></p>
                
                <h5>Description</h5>
                <p>${project.description}</p>
                
                <h5>Technologies Used</h5>
                <div class="mb-3">
                    ${project.tech_stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                
                <h5>Key Highlights</h5>
                <ul>
                    ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
                
                <div class="mt-4">
                    <a href="${project.github_url}" target="_blank" class="btn btn-primary">
                        <i class="fab fa-github me-1"></i>View on GitHub
                    </a>
                </div>
            </div>
        </div>
    `;
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

// Load skills for home page
function loadSkills() {
    if (!skillsData) return;
    
    const container = document.getElementById('skillsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.entries(skillsData).forEach(([category, skills]) => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-6 mb-4';
        
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-category';
        skillCard.innerHTML = `
            <h4>${category}</h4>
            <div>
                ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        
        col.appendChild(skillCard);
        container.appendChild(col);
    });
}

// Initialize project filters for projects page
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'All' || category === filter) {
                    item.style.display = 'block';
                    item.classList.add('animate__fadeIn');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('animate__fadeIn');
                }
            });
        });
    });
}

// Initialize navigation functionality
function initializeNavigation() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('mainNav');
        if (window.scrollY > 100) {
            nav.classList.add('navbar-scrolled');
        } else {
            nav.classList.remove('navbar-scrolled');
        }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                navbarToggle.click();
            }
        });
    });
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize animations
function initializeAnimations() {
    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .about-content');
    animatedElements.forEach(el => observer.observe(el));
}

// Typing animation for name in hero section
function initializeNameTypingAnimation() {
    const nameText = "Wajahat Khan";
    const nameElement = document.getElementById('typedName');
    const cursor = document.getElementById('cursor');
    
    if (!nameElement || !cursor) return;
    
    let nameIndex = 0;
    nameElement.textContent = '';
    
    // Cursor blinking animation
    let cursorVisible = true;
    const blinkCursor = () => {
        cursor.style.opacity = cursorVisible ? '1' : '0';
        cursorVisible = !cursorVisible;
    };
    
    const cursorInterval = setInterval(blinkCursor, 530);
    
    function typeName() {
        if (nameIndex < nameText.length) {
            nameElement.textContent += nameText.charAt(nameIndex);
            nameIndex++;
            setTimeout(typeName, 150); // Slightly slower for better effect
        } else {
            // After name is typed, hide cursor after a brief pause
            setTimeout(() => {
                clearInterval(cursorInterval);
                cursor.style.opacity = '0';
            }, 1500);
        }
    }
    
    // Start typing after a brief delay
    setTimeout(typeName, 800);
}

// Typing animation for hero section
function initializeTypingAnimation() {
    const text = "Data Scientist & Machine Learning Engineer";
    const element = document.querySelector('.hero-subtitle');
    if (!element) return;
    
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 1000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add CSS for additional animations
const additionalCSS = `
    .animate__fadeInUp {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    .animate__fadeIn {
        animation: fadeIn 0.6s ease forwards;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .navbar-scrolled {
        background: rgba(17, 24, 39, 0.98) !important;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .project-item {
        transition: all 0.3s ease;
    }
    
    /* Typing cursor styles */
    .typing-cursor {
        color: #f97316;
        font-weight: normal;
        font-size: inherit;
        margin-left: 2px;
        animation: blink 1.2s infinite;
        transition: opacity 0.3s ease;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    /* Ensure name appears immediately on slower connections */
    #typedName {
        min-height: 1em;
    }
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);

// Export functions for use in other files
window.showProjectModal = showProjectModal;