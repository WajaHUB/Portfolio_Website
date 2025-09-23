// Simplified Projects Page JavaScript

// Initialize projects page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (getCurrentPage() === 'projects') {
        loadProjectsData().then(() => {
            renderAllProjects();
        });
    }
});

// Render all projects in a clean grid
function renderAllProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid || !projectsData) return;
    
    projectsGrid.innerHTML = '';
    
    projectsData.forEach(project => {
        const projectCard = createSimpleProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
    
    // Add simple animations
    addCardAnimations();
}

// Create a simple project card with direct GitHub link
function createSimpleProjectCard(project) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-lg-4 col-md-6 mb-4';
    
    colDiv.innerHTML = `
        <div class="card project-card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
                <div class="d-flex align-items-start mb-3">
                    <div class="project-icon me-3">
                        <i class="${getProjectIcon(project.category)} fa-2x text-primary"></i>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="card-title mb-1">${project.title}</h5>
                        <span class="badge bg-primary bg-opacity-10 text-primary">${project.category}</span>
                    </div>
                </div>
                
                <p class="card-text text-muted flex-grow-1">${project.description}</p>
                
                <div class="tech-stack mb-3">
                    ${project.tech_stack.slice(0, 4).map(tech => 
                        `<span class="badge bg-light text-dark me-1 mb-1">${tech}</span>`
                    ).join('')}
                    ${project.tech_stack.length > 4 ? 
                        `<span class="badge bg-light text-muted">+${project.tech_stack.length - 4} more</span>` : ''}
                </div>
                
                <div class="project-links">
                    <a href="${project.github_url}" target="_blank" class="btn btn-primary btn-sm">
                        <i class="fab fa-github me-2"></i>View Code
                    </a>
                    ${project.featured ? '<span class="badge bg-warning text-dark ms-2">Featured</span>' : ''}
                </div>
            </div>
        </div>
    `;
    
    return colDiv;
}

// Get appropriate icon for project category
function getProjectIcon(category) {
    const iconMap = {
        'Machine Learning': 'fas fa-brain',
        'Data Science': 'fas fa-chart-line',
        'Software Development': 'fas fa-code',
        'Artificial Intelligence': 'fas fa-robot',
        'Data Analysis': 'fas fa-analytics'
    };
    return iconMap[category] || 'fas fa-project-diagram';
}

// Add simple hover animations to cards
function addCardAnimations() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
        // Staggered entrance animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
        
        // Hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
}

// Simple CSS for the project cards
const simpleProjectsCSS = `
    .project-card {
        transition: all 0.3s ease;
        border: none;
        border-radius: 12px;
    }
    
    .project-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
    }
    
    .project-icon i {
        opacity: 0.8;
    }
    
    .tech-stack .badge {
        font-size: 0.75rem;
        font-weight: 500;
    }
    
    .project-links .btn {
        border-radius: 20px;
        font-weight: 500;
    }
    
    .page-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 120px 0 80px;
        margin-top: 76px;
    }
    
    .page-title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    
    .page-subtitle {
        font-size: 1.2rem;
        opacity: 0.9;
    }
`;

// Inject the CSS
const style = document.createElement('style');
style.textContent = simpleProjectsCSS;
document.head.appendChild(style);
