// ===== TYPING EFFECT =====
const typeWriter = () => {
  const roles = ["Software Engineer", "Data Scientist", "Full Stack Developer", "Computer Science Student"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;
  
  const type = () => {
    const currentRole = roles[roleIndex];
    const roleElement = document.getElementById('role');
    
    if (!roleElement) return;

    if (isDeleting) {
      // Removing characters
      roleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      // Adding characters
      roleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }
    
    // If finished typing the current role
    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at the end
      isDeleting = true;
      typeSpeed = 2000; // Pause time before deleting
    } else if (isDeleting && charIndex === 0) {
      // Move to the next role
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500; // Pause time before typing next role
    }
    
    setTimeout(type, typeSpeed);
  };
  
  // Start the typing effect
  type();
};

// ===== NAVBAR FUNCTIONALITY =====
const initNavbar = () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navbar = document.querySelector('.navbar');
  const navItems = document.querySelectorAll('.nav-links a');
  
  // Toggle mobile menu
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks?.classList.toggle('active');
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });
  
  // Active nav link
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      
      // Close mobile menu when item is clicked
      hamburger?.classList.remove('active');
      navLinks?.classList.remove('active');
    });
  });
  
  // Set active nav link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100; // Offset for better accuracy
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
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
};

// ===== CONTACT FORM FUNCTIONALITY =====
const initContactForm = () => {
  const contactForm = document.getElementById('contact-form');
  const formResult = document.getElementById('form-result');
  
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.message) {
      formResult.textContent = 'Please fill in all required fields.';
      formResult.classList.add('error');
      return;
    }
    
    // Show success message
    formResult.textContent = 'Thanks for your message! I\'ll get back to you soon.';
    formResult.classList.remove('error');
    formResult.classList.add('success');
    
    // Reset form
    contactForm.reset();
    
    // Hide success message after a few seconds
    setTimeout(() => {
      formResult.textContent = '';
      formResult.classList.remove('success', 'error');
    }, 5000);
  });
};

// ===== SMOOTH SCROLL =====
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Account for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
};

// ===== SCROLL TO TOP =====
const initScrollToTop = () => {
  const scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

// ===== SKILLS DATA =====
const skillsData = [
  {
    name: 'React',
    icon: '<i class="fab fa-react"></i>',
    level: 90,
    description: 'Building modern, interactive UIs with React and its ecosystem.',
    category: 'frontend',
    experience: '2+ years'
  },
  {
    name: 'Angular',
    icon: '<i class="fab fa-angular"></i>',
    level: 85,
    description: 'Creating enterprise web applications with Angular framework.',
    category: 'frontend',
    experience: '1+ years'
  },
  {
    name: 'JavaScript',
    icon: '<i class="fab fa-js-square"></i>',
    level: 90,
    description: 'Proficient in modern JavaScript (ES6+) and DOM manipulation.',
    category: 'frontend',
    experience: '3+ years'
  },
  {
    name: 'TypeScript',
    icon: '<i class="fab fa-js"></i>',
    level: 85,
    description: 'Strong typing for scalable JavaScript applications.',
    category: 'frontend',
    experience: '2+ years'
  },
  {
    name: 'HTML/CSS',
    icon: '<i class="fab fa-html5"></i>',
    level: 95,
    description: 'Creating responsive and accessible web interfaces.',
    category: 'frontend',
    experience: '3+ years'
  },
  {
    name: 'Node.js',
    icon: '<i class="fab fa-node-js"></i>',
    level: 85,
    description: 'Building scalable server-side applications with JavaScript.',
    category: 'backend',
    experience: '2+ years'
  },
  {
    name: 'Java',
    icon: '<i class="fab fa-java"></i>',
    level: 80,
    description: 'Enterprise application development with Java and Spring.',
    category: 'backend',
    experience: '2+ years'
  },
  {
    name: 'Python',
    icon: '<i class="fab fa-python"></i>',
    level: 90,
    description: 'Backend development with Python and its frameworks.',
    category: 'backend',
    experience: '3+ years'
  },
  {
    name: 'Flask',
    icon: '<i class="fas fa-flask"></i>',
    level: 80,
    description: 'Lightweight Python web framework for APIs and web apps.',
    category: 'backend',
    experience: '2+ years'
  },
  {
    name: 'Django',
    icon: '<i class="fas fa-code"></i>',
    level: 75,
    description: 'Full-featured web framework for Python.',
    category: 'backend',
    experience: '1+ years'
  },
  {
    name: 'MongoDB',
    icon: '<i class="fas fa-database"></i>',
    level: 85,
    description: 'NoSQL database design and optimization.',
    category: 'database',
    experience: '2+ years'
  },
  {
    name: 'PostgreSQL',
    icon: '<i class="fas fa-database"></i>',
    level: 80,
    description: 'Relational database management and query optimization.',
    category: 'database',
    experience: '2+ years'
  },
  {
    name: 'MySQL',
    icon: '<i class="fas fa-database"></i>',
    level: 85,
    description: 'Database design, schema optimization, and complex queries.',
    category: 'database',
    experience: '2+ years'
  },
  {
    name: 'Data Science',
    icon: '<i class="fas fa-chart-line"></i>',
    level: 90,
    description: 'Data analysis, machine learning, and data visualization.',
    category: 'data',
    experience: '3+ years'
  },
  {
    name: 'Pandas',
    icon: '<i class="fas fa-table"></i>',
    level: 90,
    description: 'Data manipulation and analysis with Pandas.',
    category: 'data',
    experience: '2+ years'
  },
  {
    name: 'TensorFlow',
    icon: '<i class="fas fa-brain"></i>',
    level: 75,
    description: 'Building and training machine learning models.',
    category: 'data',
    experience: '1+ years'
  },
  {
    name: 'Git/GitHub',
    icon: '<i class="fab fa-git-alt"></i>',
    level: 90,
    description: 'Version control, collaboration, and CI/CD workflows.',
    category: 'devops',
    experience: '3+ years'
  },
  {
    name: 'Docker',
    icon: '<i class="fab fa-docker"></i>',
    level: 80,
    description: 'Containerization for application deployment.',
    category: 'devops',
    experience: '1+ years'
  },
  {
    name: 'AWS',
    icon: '<i class="fab fa-aws"></i>',
    level: 75,
    description: 'Cloud infrastructure and services.',
    category: 'devops',
    experience: '1+ years'
  }
];

// ===== PROJECTS DATA =====
const projectsData = [
  {
    title: 'ReachSearch',
    description: 'Built a scalable web scraper in JavaScript (Node.js + Cheerio) to extract 250 faculty profiles and research areas from cs.rutgers.edu and cs.umd.edu. Architected a MongoDB backend for sub-100ms queries and deployed a RESTful API on AWS Elastic Beanstalk. Developed an iOS client in Swift with an AI-driven recommendation engine using OpenRouter LLM.',
    tags: ['Node.js', 'Cheerio', 'MongoDB', 'AWS', 'Swift', 'OpenRouter'],
    category: 'web',
    date: 'May 2025',
    liveUrl: 'https://apps.apple.com/us/app/reachsearch/id6746462291',
    icon: '<i class="fab fa-app-store"></i>',
    image: 'images/projects/resized-image.jpeg'
  },
  {
    title: 'Snake Extreme',
    description: 'Created a Python-based game, Extreme Snake, utilizing Pygame, achieving 30% more challenging gameplay compared to the classic Snake game by incorporating advanced difficulty levels. Implemented custom collision detection, dynamic speed scaling, and randomized obstacle generation.',
    tags: ['Python', 'PyGame', 'Git'],
    category: 'game',
    date: 'October 2023',
    githubUrl: 'https://github.com/manasvohal/pythonProjects',
    icon: '<i class="fas fa-gamepad"></i>',
    image: 'images/projects/snake_extreme.svg'
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern, responsive portfolio website showcasing my projects and skills, built with HTML, CSS, and JavaScript. Features smooth animations, mobile-friendly design, and interactive elements.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    category: 'web',
    date: 'May 2023',
    githubUrl: 'https://github.com/manasvohal/portfolio',
    liveUrl: 'https://manasvohal.netlify.app',
    icon: '<i class="fas fa-code"></i>',
    image: 'images/projects/portfolio.svg'
  }
];

// ===== RENDER SKILLS SECTION =====
const renderSkills = (category = 'frontend') => {
  const skillsGrid = document.getElementById('skills-grid');
  if (!skillsGrid) return;
  
  skillsGrid.innerHTML = '';
  
  const filteredSkills = skillsData.filter(skill => skill.category === category);
    
  filteredSkills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.innerHTML = `
      <div class="skill-header">
        <div class="skill-icon">${skill.icon}</div>
        <h3 class="skill-title">${skill.name}</h3>
      </div>
      <div class="skill-level">
        <div class="progress-bar">
          <div class="progress" style="width: ${skill.level}%"></div>
        </div>
        <div class="progress-labels">
          <span>Beginner</span>
          <span>${skill.experience}</span>
          <span>Expert</span>
        </div>
      </div>
      <p class="skill-description">${skill.description}</p>
    `;
    
    skillsGrid.appendChild(skillCard);
  });
};

// ===== RENDER PROJECTS SECTION =====
const renderProjects = (category = 'all') => {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;
  
  projectsGrid.innerHTML = '';
  
  const filteredProjects = category === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === category);
    
  filteredProjects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    // Add special class for specific projects
    const isReachSearch = project.title === 'ReachSearch';
    const isSnakeExtreme = project.title === 'Snake Extreme';
    const isPortfolio = project.title === 'Personal Portfolio';
    let specialClass = '';
    if (isReachSearch) specialClass = 'reachsearch-img';
    if (isSnakeExtreme) specialClass = 'snake-extreme-img';
    if (isPortfolio) specialClass = 'portfolio-img';
    
    projectCard.innerHTML = `
      <div class="project-img ${specialClass}" ${project.image ? `style="background-image: url('${project.image}');"` : ''}>
        <div class="project-img-overlay">
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-link" aria-label="GitHub Repository"><i class="fab fa-github"></i></a>` : ''}
          ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-link" aria-label="Live Project"><i class="fas fa-external-link-alt"></i></a>` : ''}
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-footer">
          <div class="project-category">
            ${project.icon} ${project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </div>
          <div class="project-date">${project.date}</div>
        </div>
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });
};

// ===== INITIALIZE FILTER BUTTONS =====
const initFilterButtons = () => {
  // Skills filters
  const skillFilterBtns = document.querySelectorAll('.skills-section .filter-btn');
  
  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.getAttribute('data-filter');
      
      skillFilterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      renderSkills(category);
    });
  });
  
  // Projects filters
  const projectFilterBtns = document.querySelectorAll('.projects-section .filter-btn');
  
  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.getAttribute('data-filter');
      
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      renderProjects(category);
    });
  });
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all functionality
  typeWriter();
  renderSkills('frontend');
  renderProjects('all');
  initNavbar();
  initContactForm();
  initFilterButtons();
  initSmoothScroll();
  initScrollToTop();
  
  // Add fade-in animation to elements
  const animateElements = () => {
    const elements = document.querySelectorAll('.about-content, .timeline-item, .skill-card, .project-card, .contact-container');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial styles for animation
  document.querySelectorAll('.about-content, .timeline-item, .skill-card, .project-card, .contact-container').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run animation on scroll
  window.addEventListener('scroll', animateElements);
  
  // Run once on load
  animateElements();
});