# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview

This is Wajahat Khan's personal portfolio website - a modern, responsive single-page application showcasing data science, machine learning, and software development projects. The site is built with vanilla HTML5, CSS3, and JavaScript, using Bootstrap 5 for responsive design and Font Awesome for icons.

**Key Technologies:**
- Frontend: HTML5, CSS3, JavaScript (ES6+)
- Framework: Bootstrap 5 (CDN)
- Icons: Font Awesome 6
- Typography: Inter font family (Google Fonts)
- Data: JSON-based project configuration
- Deployment: GitHub Pages

## Common Development Commands

### Local Development Server

Start a local development server to test changes:

```bash
# Option 1: Python 3 (recommended - available on most systems)
python -m http.server 8000

# Option 2: Node.js live server (if Node.js is installed)
npx live-server --port=8080

# Option 3: Python 2 (legacy systems)
python -m SimpleHTTPServer 8000
```

Then open your browser to `http://localhost:8000` (or `http://localhost:8080` for live-server).

### Testing and Validation

```bash
# Check for broken links (if you have linkchecker installed)
linkchecker http://localhost:8000

# Validate HTML (if you have html5validator installed)
html5validator --root . --ignore-re=".*assets.*"
```

### Git Workflow

```bash
# Deploy to GitHub Pages
git add .
git commit -m "Update portfolio content"
git push origin main
```

## Architecture Overview

The portfolio uses a dynamic, JavaScript-driven architecture where content is loaded from JSON data:

### Core Architecture Pattern:
1. **Static HTML Templates** (`index.html`, `projects.html`) provide the structure
2. **JSON Data Source** (`projects.json`) contains all project information, skills, and categories
3. **JavaScript Controllers** (`main.js`, `projects.js`) fetch data and render dynamic content
4. **CSS Styling** (`assets/css/style.css`) provides theming with CSS custom properties

### Data Flow:
```
projects.json → main.js → DOM manipulation → Rendered HTML
              ↓
        Filtering/Search logic → Dynamic UI updates
```

### Page-Specific Behavior:
- **Homepage (`index.html`)**: Shows featured projects only, loads skills display
- **Projects Page (`projects.html`)**: Shows all projects with filtering, search, and sorting

## File Structure and Key Files

```
Portfolio/
├── index.html                    # Homepage - hero, about, featured projects, skills, contact
├── projects.html                 # Dedicated projects page with filtering/search
├── projects.json                # Central data source for all projects and skills
├── assets/
│   ├── css/
│   │   └── style.css            # Main stylesheet with CSS custom properties
│   └── js/
│       ├── main.js              # Core functionality, data loading, homepage features
│       └── projects.js          # Projects page specific features (search, sort, filters)
├── resume/
│   └── Wajahat_Khan_Resume.pdf  # Resume file linked from navigation
├── README.md                    # Comprehensive documentation
└── [Academic/Project folders]   # DMA/, Data100/, Projects-master/ etc.
```

### Asset Loading Pattern:
- Both pages load Bootstrap 5 and Font Awesome from CDN
- Custom CSS uses CSS custom properties (`:root` variables) for consistent theming
- JavaScript is loaded at page bottom for performance
- External resources use `defer` loading where appropriate

## Project Data Management

All project information is centralized in `projects.json`. The schema is:

```javascript path=null start=null
{
  "projects": [
    {
      "id": "unique-project-id",
      "title": "Project Title",
      "category": "Machine Learning|Data Science|Software Development|Artificial Intelligence|Data Analysis",
      "description": "Detailed project description",
      "tech_stack": ["Python", "TensorFlow", "etc"],
      "github_url": "https://github.com/username/repo",
      "image": "assets/projects/image.jpg", // Optional, falls back to generated SVG
      "featured": true|false,
      "highlights": ["Key feature 1", "Key feature 2"]
    }
  ],
  "categories": ["All", "Machine Learning", ...],
  "skills": {
    "Programming Languages": ["Python", "Java", ...],
    "Data Science & ML": ["Pandas", "NumPy", ...],
    // ...
  }
}
```

### To Add a New Project:
1. Edit `projects.json`
2. Add new project object to the `projects` array
3. Ensure the `category` matches one of the existing categories
4. Set `featured: true` to show on homepage
5. Refresh the browser - changes are immediate (no build step required)

## JavaScript Architecture Details

### main.js Responsibilities:
- **Data Loading**: Fetches and parses `projects.json`
- **Page Detection**: Determines current page (`index` vs `projects`)
- **Dynamic Rendering**: Creates project cards, skill tags, featured project displays
- **Common Features**: Navigation, smooth scrolling, animations

### projects.js Responsibilities:
- **Filtering**: Category-based project filtering
- **Search**: Real-time search across project titles, descriptions, and tech stacks
- **Sorting**: Multiple sort options (title, category, featured status)
- **Modal Display**: Detailed project view in Bootstrap modal

### Key Functions:
```javascript path=null start=null
// Core data loading
async function loadProjectsData()

// Project card generation
function createProjectCard(project, showDetails = false)

// Filtering logic
function filterProjects(category)
function handleProjectSearch(event)

// Modal display
function showProjectModal(projectId)
```

## CSS Architecture

The stylesheet uses CSS custom properties for consistent theming:

```css path=null start=null
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Animation System:
- CSS keyframe animations for hero elements (`fadeInUp`)
- JavaScript-triggered animations for project cards
- CSS transitions for hover effects and interactions
- Responsive animations that scale with viewport size

## Deployment to GitHub Pages

### Prerequisites:
- Public GitHub repository
- Content in `main` branch

### Deployment Process:
```bash
# Commit changes
git add .
git commit -m "Deploy portfolio updates"
git push origin main

# Enable GitHub Pages:
# 1. Go to repository Settings
# 2. Navigate to Pages section
# 3. Select "Deploy from a branch"
# 4. Choose "main" branch and "/ (root)" folder
# 5. Save settings
```

### Post-Deployment:
- Site will be available at: `https://username.github.io/Portfolio/`
- Changes take 1-5 minutes to propagate
- CDN caching may require hard refresh (`Ctrl+F5`) to see updates

### Custom Domain (Optional):
1. Create `CNAME` file in repository root with domain name
2. Configure DNS with domain provider
3. Enable HTTPS in repository settings

## Content and Contact Information

### Personal Information (Update in HTML files):
- **Email**: wajakhan@Berkeley.edu
- **Phone**: (510) 309-7334
- **LinkedIn**: wajaakhan
- **GitHub**: WajaCode

### Resume Management:
- File location: `resume/Wajahat_Khan_Resume.pdf`
- Linked from navigation bar on both pages
- Opens in new tab/window

## Development Tips

### Testing Across Devices:
- Use browser DevTools device emulation
- Test on actual mobile devices when possible
- Verify touch interactions and responsive breakpoints

### Performance Considerations:
- Images are generated as SVG placeholders for faster loading
- External resources loaded from CDN for better caching
- CSS and JS are not minified (development-friendly)

### Browser Compatibility:
- Uses modern JavaScript (ES6+) - ensure browser support
- CSS custom properties require modern browsers
- Fallbacks provided for older browsers where critical

## External Dependencies

### CDN Resources:
- **Bootstrap 5.3.0**: CSS framework and components
- **Font Awesome 6.4.0**: Icon library
- **Google Fonts (Inter)**: Typography

### Development Dependencies:
- No build process required
- No package.json or npm dependencies
- Pure vanilla JavaScript implementation

## Further Reading

For additional context, see:
- `README.md` - Comprehensive project documentation, setup instructions, and feature details
- GitHub repository - Contains additional academic and project work in subdirectories
- Live demo - Will be available at GitHub Pages URL once deployed