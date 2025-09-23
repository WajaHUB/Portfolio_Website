// Projects page specific JavaScript functionality

// Initialize projects page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (getCurrentPage() === 'projects') {
        initializeProjectsPageFeatures();
    }
});

// Initialize additional features for projects page
function initializeProjectsPageFeatures() {
    initializeSearchFunction();
    initializeSortFunction();
    addProjectAnimations();
}

// Search functionality for projects
function initializeSearchFunction() {
    // Create search input if it doesn't exist
    const filterContainer = document.querySelector('.project-filters');
    if (filterContainer && !document.getElementById('projectSearch')) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'col-12 mb-4';
        searchContainer.innerHTML = `
            <div class="search-container text-center">
                <input type="text" id="projectSearch" class="form-control" placeholder="Search projects..." style="max-width: 400px; margin: 0 auto;">
            </div>
        `;
        filterContainer.parentElement.insertBefore(searchContainer, filterContainer);
        
        // Add search functionality
        const searchInput = document.getElementById('projectSearch');
        searchInput.addEventListener('input', handleProjectSearch);
    }
}

// Handle project search
function handleProjectSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        const card = item.querySelector('.project-card');
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-text').textContent.toLowerCase();
        const techStack = Array.from(card.querySelectorAll('.tech-tag'))
            .map(tag => tag.textContent.toLowerCase())
            .join(' ');
        
        const isMatch = title.includes(searchTerm) || 
                       description.includes(searchTerm) || 
                       techStack.includes(searchTerm);
        
        if (isMatch) {
            item.style.display = 'block';
            item.classList.add('search-match');
        } else {
            item.style.display = 'none';
            item.classList.remove('search-match');
        }
    });
    
    // Show message if no results
    updateNoResultsMessage(searchTerm);
}

// Update no results message
function updateNoResultsMessage(searchTerm) {
    const existingMessage = document.getElementById('noResultsMessage');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const visibleItems = document.querySelectorAll('.project-item[style*="block"], .project-item:not([style])');
    const gridContainer = document.getElementById('projectsGrid');
    
    if (visibleItems.length === 0 && searchTerm.length > 0 && gridContainer) {
        const noResultsDiv = document.createElement('div');
        noResultsDiv.id = 'noResultsMessage';
        noResultsDiv.className = 'col-12 text-center py-5';
        noResultsDiv.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4>No projects found</h4>
                <p class="text-muted">Try adjusting your search terms or browse all projects.</p>
                <button class="btn btn-primary" onclick="clearSearch()">Clear Search</button>
            </div>
        `;
        gridContainer.appendChild(noResultsDiv);
    }
}

// Clear search function
function clearSearch() {
    const searchInput = document.getElementById('projectSearch');
    if (searchInput) {
        searchInput.value = '';
        handleProjectSearch({ target: searchInput });
    }
    
    // Reset filters
    const filterButtons = document.querySelectorAll('[data-filter]');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-filter="All"]').classList.add('active');
}

// Initialize sort functionality
function initializeSortFunction() {
    const filterContainer = document.querySelector('.project-filters');
    if (filterContainer && !document.getElementById('projectSort')) {
        const sortContainer = document.createElement('div');
        sortContainer.className = 'col-12 mb-3';
        sortContainer.innerHTML = `
            <div class="sort-container text-center">
                <label for="projectSort" class="form-label me-2">Sort by:</label>
                <select id="projectSort" class="form-select d-inline-block" style="width: auto;">
                    <option value="default">Default Order</option>
                    <option value="title">Title (A-Z)</option>
                    <option value="category">Category</option>
                    <option value="featured">Featured First</option>
                </select>
            </div>
        `;
        filterContainer.parentElement.appendChild(sortContainer);
        
        // Add sort functionality
        const sortSelect = document.getElementById('projectSort');
        sortSelect.addEventListener('change', handleProjectSort);
    }
}

// Handle project sorting
function handleProjectSort(event) {
    const sortBy = event.target.value;
    const gridContainer = document.getElementById('projectsGrid');
    const projectItems = Array.from(document.querySelectorAll('.project-item'));
    
    let sortedItems = [...projectItems];
    
    switch (sortBy) {
        case 'title':
            sortedItems.sort((a, b) => {
                const titleA = a.querySelector('.card-title').textContent;
                const titleB = b.querySelector('.card-title').textContent;
                return titleA.localeCompare(titleB);
            });
            break;
            
        case 'category':
            sortedItems.sort((a, b) => {
                const categoryA = a.getAttribute('data-category');
                const categoryB = b.getAttribute('data-category');
                return categoryA.localeCompare(categoryB);
            });
            break;
            
        case 'featured':
            sortedItems.sort((a, b) => {
                const featuredA = a.querySelector('.featured-badge') ? 1 : 0;
                const featuredB = b.querySelector('.featured-badge') ? 1 : 0;
                return featuredB - featuredA; // Featured first
            });
            break;
            
        case 'default':
        default:
            // Use original order from projectsData
            if (projectsData) {
                sortedItems.sort((a, b) => {
                    const titleA = a.querySelector('.card-title').textContent;
                    const titleB = b.querySelector('.card-title').textContent;
                    const indexA = projectsData.findIndex(p => p.title === titleA);
                    const indexB = projectsData.findIndex(p => p.title === titleB);
                    return indexA - indexB;
                });
            }
            break;
    }
    
    // Re-append sorted items
    sortedItems.forEach(item => {
        gridContainer.appendChild(item);
    });
}

// Add animations to project cards
function addProjectAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add stagger animation on load
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-on-load');
    });
    
    // Add hover animations
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Enhanced project modal with code snippets
function showEnhancedProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalLabel = document.getElementById('projectModalLabel');
    const modalBody = document.getElementById('projectModalBody');
    
    modalLabel.textContent = project.title;
    
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-8">
                <div class="project-image-container mb-4">
                    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 300' fill='%23667eea'><rect width='600' height='300' fill='url(%23gradient)'/><defs><linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23667eea'/><stop offset='100%' style='stop-color:%23764ba2'/></linearGradient></defs><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='white' font-size='28' font-weight='600'>${project.title}</text></svg>" class="img-fluid rounded" alt="${project.title}">
                </div>
                
                <ul class="nav nav-tabs" id="projectTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button">Overview</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="features-tab" data-bs-toggle="tab" data-bs-target="#features" type="button">Features</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="tech-tab" data-bs-toggle="tab" data-bs-target="#tech" type="button">Tech Stack</button>
                    </li>
                </ul>
                
                <div class="tab-content mt-3" id="projectTabContent">
                    <div class="tab-pane fade show active" id="overview">
                        <p>${project.description}</p>
                        <p><strong>Category:</strong> <span class="badge bg-primary">${project.category}</span></p>
                    </div>
                    
                    <div class="tab-pane fade" id="features">
                        <ul class="list-group list-group-flush">
                            ${project.highlights.map(highlight => `<li class="list-group-item border-0 px-0"><i class="fas fa-check text-success me-2"></i>${highlight}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="tab-pane fade" id="tech">
                        <div class="tech-stack-detailed">
                            ${project.tech_stack.map(tech => `
                                <span class="badge bg-gradient text-white me-2 mb-2 p-2">${tech}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="project-actions mb-4">
                    <a href="${project.github_url}" target="_blank" class="btn btn-primary w-100 mb-2">
                        <i class="fab fa-github me-2"></i>View Source Code
                    </a>
                    <button class="btn btn-outline-primary w-100 mb-2" onclick="shareProject('${project.id}')">
                        <i class="fas fa-share-alt me-2"></i>Share Project
                    </button>
                </div>
                
                <div class="project-stats">
                    <h6>Project Stats</h6>
                    <div class="stat-item d-flex justify-content-between">
                        <span>Technologies:</span>
                        <strong>${project.tech_stack.length}</strong>
                    </div>
                    <div class="stat-item d-flex justify-content-between">
                        <span>Category:</span>
                        <strong>${project.category}</strong>
                    </div>
                    <div class="stat-item d-flex justify-content-between">
                        <span>Status:</span>
                        <strong class="text-success">Completed</strong>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

// Share project function
function shareProject(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    const shareData = {
        title: project.title,
        text: project.description,
        url: project.github_url
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        // Fallback: copy to clipboard
        const url = project.github_url;
        navigator.clipboard.writeText(url).then(() => {
            showToast('Project URL copied to clipboard!');
        });
    }
}

// Toast notification function
function showToast(message, type = 'success') {
    const toastContainer = getOrCreateToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${type} border-0`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    // Remove toast after it's hidden
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

// Get or create toast container
function getOrCreateToastContainer() {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container position-fixed top-0 end-0 p-3';
        container.style.zIndex = '1055';
        document.body.appendChild(container);
    }
    return container;
}

// Add additional CSS for projects page
const projectsCSS = `
    .animate-on-load {
        animation: slideInUp 0.6s ease forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    
    @keyframes slideInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .search-container input,
    .sort-container select {
        border-radius: 25px;
        border: 2px solid #e5e7eb;
        transition: all 0.3s ease;
    }
    
    .search-container input:focus,
    .sort-container select:focus {
        border-color: #667eea;
        box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
    }
    
    .no-results {
        padding: 3rem 1rem;
    }
    
    .project-stats .stat-item {
        padding: 0.5rem 0;
        border-bottom: 1px solid #e5e7eb;
    }
    
    .project-stats .stat-item:last-child {
        border-bottom: none;
    }
    
    .tech-stack-detailed .badge {
        font-size: 0.9rem;
    }
    
    .project-actions .btn {
        border-radius: 25px;
    }
    
    .tab-content {
        min-height: 200px;
    }
`;

// Inject projects-specific CSS
const projectsStyle = document.createElement('style');
projectsStyle.textContent = projectsCSS;
document.head.appendChild(projectsStyle);

// Export functions for global use
window.clearSearch = clearSearch;
window.shareProject = shareProject;
window.showEnhancedProjectModal = showEnhancedProjectModal;