# Wajahat Khan - Portfolio Website

A modern, responsive portfolio website showcasing data science, machine learning, and software development projects. Built with HTML5, CSS3, JavaScript, and Bootstrap 5.

## 🌐 Live Demo

Visit the live portfolio: [https://wajahub.github.io/Portfolio_Website/) (Coming Soon)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [GitHub Pages Setup](#github-pages-setup)
- [Customization](#customization)
- [Contact Information](#contact-information)

## ✨ Features

### 🎨 Modern Design
- Responsive design that works on all devices
- Clean and professional UI/UX
- Smooth animations and transitions
- Dark/light theme support
- Custom CSS with CSS Grid and Flexbox

### 📱 Interactive Elements
- Dynamic project filtering and search
- Project modal views with detailed information
- Smooth scrolling navigation
- Mobile-friendly hamburger menu
- Loading animations and hover effects

### 🔍 Project Showcase
- Featured projects section on homepage
- Detailed projects page with filtering by category
- Search functionality across all projects
- Project categories: Machine Learning, Data Science, Software Development, AI
- Direct links to GitHub repositories

### 📊 Skills Display
- Organized skill categories
- Visual skill tags with hover effects
- Comprehensive technology stack display

### 📞 Contact Integration
- Multiple contact methods (email, phone, LinkedIn)
- Social media links
- Professional resume download
- Contact form ready for integration

## 🛠 Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with custom properties and animations
- **JavaScript (ES6+)** - Interactive functionality and API handling
- **Bootstrap 5** - Responsive grid system and components

### External Libraries
- **Font Awesome** - Icons and symbols
- **Google Fonts** - Custom typography (Inter font family)

### Development Tools
- **Git** - Version control
- **GitHub Pages** - Static site hosting
- **VS Code** - Development environment (recommended)

## 📁 Project Structure

```
Portfolio/
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   ├── main.js           # Core functionality
│   │   └── projects.js       # Project-specific features
│   ├── img/
│   │   └── [project images]  # Project screenshots and assets
│   └── projects/
│       └── [project files]   # Additional project resources
├── resume/
│   └── Wajahat_Khan_Resume.pdf
├── index.html                 # Homepage
├── projects.html             # Projects showcase page
├── projects.json             # Project data and metadata
├── README.md                 # Documentation
└── .gitignore               # Git ignore rules
```

## 💻 Local Development

### Prerequisites
- Git
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/WajaCode/Portfolio.git
   cd Portfolio
   ```

2. **Open in your preferred editor**
   ```bash
   code .  # For VS Code
   ```

3. **Local server (recommended)**
   
   For the best development experience, serve the files through a local server:
   
   **Option 1: Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option 2: Node.js (if you have it installed)**
   ```bash
   npx serve .
   ```
   
   **Option 3: VS Code Live Server Extension**
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

4. **View the website**
   - Open your browser and navigate to `http://localhost:8000`
   - The portfolio should load with all functionality

### Development Tips

- **Hot Reloading**: Use Live Server extension in VS Code for automatic refresh
- **Browser DevTools**: Use F12 to debug JavaScript and inspect CSS
- **Mobile Testing**: Use browser DevTools device emulation for responsive testing
- **Performance**: Check Lighthouse scores for optimization opportunities

## 🚀 Deployment

### GitHub Pages (Recommended)

GitHub Pages provides free hosting for static websites directly from your GitHub repository.

#### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it `Portfolio` (or any name you prefer)
3. Make sure it's public for free GitHub Pages hosting
4. Don't initialize with README (since we already have one)

#### Step 2: Push Your Code

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio commit"

# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

#### Step 4: Access Your Live Site

- Your site will be available at: `https://YOUR_USERNAME.github.io/Portfolio/`
- It may take a few minutes for the first deployment
- GitHub will show you the URL in the Pages settings

### Alternative Deployment Options

#### Netlify
1. Drag and drop your project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for automatic deployments

#### Vercel
1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Automatic deployments on every push

#### Traditional Web Hosting
1. Upload all files to your web server's public folder
2. Ensure `index.html` is in the root directory

## 🔧 GitHub Pages Setup (Detailed)

### Custom Domain (Optional)

If you have a custom domain:

1. Create a `CNAME` file in the repository root
2. Add your domain name (e.g., `wajakhan.com`)
3. Configure DNS settings with your domain provider
4. Update GitHub Pages settings to use your custom domain

### HTTPS and Security

- GitHub Pages automatically provides HTTPS
- Enforce HTTPS in repository settings for security
- Use relative URLs for all internal links

### Build Optimization

For better performance:

1. **Minify CSS and JavaScript** (optional)
2. **Optimize images** before adding them
3. **Use a CDN** for external resources

## 🎨 Customization

### Updating Personal Information

1. **Contact Details** (`index.html`):
   ```html
   <!-- Update email, phone, LinkedIn links -->
   <a href="mailto:YOUR_EMAIL@example.com">
   <a href="tel:YOUR_PHONE_NUMBER">
   <a href="https://linkedin.com/in/YOUR_LINKEDIN">
   ```

2. **Resume** (`resume/` folder):
   - Replace `Wajahat_Khan_Resume.pdf` with your resume
   - Update the filename in HTML links

### Adding New Projects

1. **Update `projects.json`**:
   ```json
   {
     "id": "new-project",
     "title": "Your Project Title",
     "category": "Machine Learning",
     "description": "Project description...",
     "tech_stack": ["Python", "TensorFlow"],
     "github_url": "https://github.com/username/project",
     "featured": true,
     "highlights": ["Key feature 1", "Key feature 2"]
   }
   ```

2. **Add project images** to `assets/projects/` folder

### Color Scheme Customization

Update CSS custom properties in `assets/css/style.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #1e40af;  /* Secondary color */
    --accent-color: #3b82f6;     /* Accent color */
    --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adding New Pages

1. Create new HTML file (e.g., `blog.html`)
2. Add navigation link in both `index.html` and existing pages
3. Update JavaScript routing if needed

## 📞 Contact Information

- **Email**: [wajakhan@Berkeley.edu](mailto:wajakhan@Berkeley.edu)
- **Phone**: [(510) 309-7334](tel:5103097334)
- **LinkedIn**: [wajaakhan](https://www.linkedin.com/in/wajaakhan/)
- **GitHub**: [WajaCode](https://github.com/WajaCode)

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Bootstrap Team** - For the excellent CSS framework
- **Font Awesome** - For the comprehensive icon library
- **Google Fonts** - For the beautiful typography
- **GitHub Pages** - For free static site hosting

---

**Built with ❤️ by Wajahat Khan**

*Last updated: September 2024*
