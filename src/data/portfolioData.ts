import mushahidPortrait from '../assets/images/mushahid_portrait_1790334059939.jpg';
import saniaPortrait from '../assets/images/sania_portrait_1790333699567.jpg';
import ecommerceImg from '../assets/images/mushahid_ecommerce_app_1790334006518.jpg';
import saasImg from '../assets/images/mushahid_saas_app_1790334029983.jpg';
import luxeLogoImg from '../assets/images/luxe_logo_mockup_1790333712674.jpg';
import businessCardImg from '../assets/images/business_card_mockup_1790333724136.jpg';
import ramadanPosterImg from '../assets/images/ramadan_poster_mockup_1790333736057.jpg';
import resumeMockupImg from '../assets/images/resume_layout_mockup_1790333746709.jpg';

export interface DeveloperProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'React / Next.js' | 'E-Commerce' | 'SaaS & Tools' | 'UI / Graphic Design';
  image: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface DeveloperSkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number; iconUrl?: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  details: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  tech: string[];
  turnaround: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  avatarText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const mushahidData = {
  name: 'Mushahid Hussain',
  title: 'Full Stack Web Developer & Software Engineer',
  tagline: 'Building High-Performance, Scalable & Pixel-Perfect Web Applications',
  bio: 'Passionate and result-driven Full Stack Web Developer with over 5+ years of experience in architecting modern web solutions. Specialized in React.js, Next.js, TypeScript, Node.js, Express, and Database Systems. I transform complex requirements into seamless, responsive, and high-converting digital experiences.',
  email: 'mushahidrafiqe744@gmail.com',
  phone: '0317-9948934',
  whatsapp: '+923179948934',
  location: 'Pakistan (Available Worldwide)',
  github: 'https://github.com/mushahid-hussain',
  linkedin: 'https://linkedin.com/in/mushahid-hussain',
  experienceYears: '5+',
  completedProjects: '50+',
  satisfactionRate: '100%',
  portraitImage: mushahidPortrait,
  stats: [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Completed Projects', value: '50+' },
    { label: 'Happy Clients', value: '35+' },
    { label: 'Client Satisfaction', value: '100%' },
  ],
  services: [
    {
      id: 'fullstack-web',
      title: 'Full Stack Web Applications',
      iconName: 'Code2',
      shortDesc: 'End-to-end custom web apps using MERN / Next.js stack with robust architecture.',
      longDesc: 'Complete development lifecycle from database schema design, RESTful / GraphQL API construction, authentication to dynamic frontend user experiences.',
      deliverables: [
        'Custom Frontend (React / Next.js / TypeScript)',
        'Secure Backend REST APIs (Node.js & Express)',
        'Database Modeling & Integration (PostgreSQL / MongoDB / Firebase)',
        'Role-Based Authentication & Authorization (JWT / OAuth)',
        'Production Deployment on Vercel, Cloud Run or AWS'
      ],
      tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'TypeScript'],
      turnaround: '1-3 Weeks'
    },
    {
      id: 'frontend-engineering',
      title: 'Modern Frontend & SPA Development',
      iconName: 'Layout',
      shortDesc: 'Pixel-perfect, lightning-fast, and responsive user interfaces with Tailwind CSS.',
      longDesc: 'Transforming Figma, Adobe XD, or custom wireframes into responsive, accessible, interactive web applications with fluid animations and SEO perfection.',
      deliverables: [
        'Figma to Pixel-Perfect React/HTML conversion',
        'Fully Responsive & Mobile-First Layouts',
        'State Management with Redux Toolkit / Zustand',
        'Lighthouse 95+ Performance & Web Vitals',
        'Accessible, Modern Micro-interactions & Animations'
      ],
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      turnaround: '3-7 Days'
    },
    {
      id: 'ecommerce-solutions',
      title: 'E-Commerce & Payment Systems',
      iconName: 'ShoppingCart',
      shortDesc: 'Custom online stores with seamless checkout, cart management & order tracking.',
      longDesc: 'High-converting e-commerce web applications equipped with intuitive catalogs, real-time inventory tracking, Stripe/PayPal payment gateway integrations, and admin dashboards.',
      deliverables: [
        'Product Catalogs with Dynamic Filtering & Search',
        'Cart, Wishlist & Instant Checkout System',
        'Payment Gateway Integration (Stripe, PayPal, Local)',
        'Admin Dashboard for Orders & Inventory Management',
        'Automated Email & WhatsApp Notifications'
      ],
      tech: ['Next.js', 'Stripe API', 'PostgreSQL / Prisma', 'Tailwind CSS'],
      turnaround: '2-3 Weeks'
    },
    {
      id: 'api-backend',
      title: 'Backend APIs & Cloud Integration',
      iconName: 'Server',
      shortDesc: 'Scalable RESTful microservices, database optimizations, and cloud infrastructure.',
      longDesc: 'Designing high-throughput server backends, microservice architectures, third-party webhooks, and secure cloud storage pipelines.',
      deliverables: [
        'RESTful & GraphQL API Architecture',
        'Database Indexing & Query Speed Optimization',
        'Third-Party API Integrations & Webhooks',
        'Cloud File Storage (AWS S3, Firebase, Cloudinary)',
        'Comprehensive Postman API Documentation'
      ],
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Docker'],
      turnaround: '4-10 Days'
    },
    {
      id: 'performance-seo',
      title: 'Speed Optimization & Technical SEO',
      iconName: 'Zap',
      shortDesc: 'Accelerate web apps to sub-second load times with structured SEO schema.',
      longDesc: 'Deep audit and optimization for existing web applications, optimizing asset delivery, code splitting, OpenGraph metadata, and indexing.',
      deliverables: [
        'Core Web Vitals & Lighthouse Score Auditing',
        'Asset Compression & Next-Gen Image Formatting',
        'Search Engine Schema.org (JSON-LD) Integration',
        'Clean Routing, Meta Tags & OpenGraph Cards'
      ],
      tech: ['SEO Tools', 'Webpack/Vite Analyzer', 'Lighthouse', 'JSON-LD'],
      turnaround: '2-4 Days'
    },
    {
      id: 'maintenance-support',
      title: 'Code Refactoring & Maintenance',
      iconName: 'Wrench',
      shortDesc: 'Bug fixing, legacy code modernization, and continuous feature enhancements.',
      longDesc: 'Ongoing support, security patching, dependency upgrades, TypeScript conversions, and feature scaling for running production apps.',
      deliverables: [
        'Bug Fixing & Issue Resolution',
        'JavaScript to TypeScript Migration',
        'Framework Upgrades & Security Audits',
        'CI/CD Pipeline Setup (GitHub Actions)'
      ],
      tech: ['TypeScript', 'GitHub Actions', 'Jest', 'Docker'],
      turnaround: 'Flexible / Ongoing'
    }
  ] as ServiceItem[],
  skillCategories: [
    {
      category: 'Frontend Development',
      iconName: 'Monitor',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 92 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'Tailwind CSS', level: 98 },
        { name: 'HTML5 / CSS3 / SCSS', level: 98 },
        { name: 'Redux / Zustand', level: 88 },
        { name: 'Framer Motion', level: 85 },
      ]
    },
    {
      category: 'Backend & APIs',
      iconName: 'Server',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 92 },
        { name: 'RESTful APIs', level: 95 },
        { name: 'GraphQL', level: 80 },
        { name: 'JWT & OAuth Auth', level: 90 },
        { name: 'WebSockets', level: 82 },
      ]
    },
    {
      category: 'Databases & Cloud',
      iconName: 'Database',
      skills: [
        { name: 'MongoDB / Mongoose', level: 92 },
        { name: 'PostgreSQL / SQL', level: 88 },
        { name: 'MySQL', level: 86 },
        { name: 'Firebase / Firestore', level: 90 },
        { name: 'Docker & Containers', level: 78 },
        { name: 'Vercel / Cloud Run', level: 92 },
      ]
    },
    {
      category: 'Tools & Workflow',
      iconName: 'Cpu',
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Vite & Webpack', level: 90 },
        { name: 'Figma to Code', level: 95 },
        { name: 'Postman API Testing', level: 92 },
        { name: 'Jest / Testing', level: 80 },
        { name: 'SCRUM / Agile (Jira)', level: 88 },
      ]
    }
  ] as DeveloperSkillCategory[],
  experiences: [
    {
      period: '2023 — Present',
      role: 'Lead Full Stack Web Developer',
      company: 'Freelance & Independent Consultant',
      location: 'Remote (Worldwide)',
      description: [
        'Architected and delivered 30+ custom full-stack web applications and SaaS platforms for clients across the US, UK, and UAE.',
        'Engineered responsive React/Next.js interfaces integrated with Node.js microservices and PostgreSQL/MongoDB databases.',
        'Implemented secure stripe checkout pipelines, authentication flows, and real-time dashboard analytics.',
        'Consistently achieved 95+ Google Lighthouse scores and guaranteed 100% on-time project completion.'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
      current: true
    },
    {
      period: '2021 — 2023',
      role: 'Senior Frontend Developer',
      company: 'Digital Solutions Enterprise',
      location: 'Karachi, Pakistan',
      description: [
        'Led a team of 4 frontend engineers creating responsive enterprise dashboards and client-facing web portals.',
        'Refactored legacy vanilla JavaScript and jQuery codebases into modern TypeScript and React SPA architecture, boosting load times by 45%.',
        'Collaborated closely with UI/UX designers to translate Figma design tokens into reusable Tailwind component libraries.',
        'Integrated RESTful APIs, handled complex state with Redux, and built unit tests with Jest.'
      ],
      technologies: ['React.js', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Jest']
    },
    {
      period: '2019 — 2021',
      role: 'Web Developer & UI Specialist',
      company: 'Creative Tech Studios',
      location: 'Pakistan',
      description: [
        'Developed custom business websites, landing pages, and interactive e-commerce layouts.',
        'Mastered cross-browser compatibility, responsive CSS architectures, and WordPress/PHP custom integrations.',
        'Optimized on-page SEO, image compression, and web accessibility standards.'
      ],
      technologies: ['JavaScript', 'HTML5/CSS3', 'Bootstrap', 'PHP', 'MySQL', 'Git']
    }
  ] as ExperienceItem[],
  education: [
    {
      period: '2015 — 2019',
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      institution: 'University of Engineering and Technology',
      details: 'Comprehensive study of Data Structures, Algorithms, Software Engineering, Database Management, and Web Technologies.'
    }
  ] as EducationItem[],
  projects: [
    {
      id: 'apex-ecommerce',
      title: 'Apex Luxury E-Commerce Platform',
      subtitle: 'Full-Stack Modern Shopping Store with Stripe Checkout',
      category: 'E-Commerce',
      image: ecommerceImg,
      description: 'A full-stack e-commerce web platform engineered with Next.js, TypeScript, PostgreSQL, and Stripe integration. Features real-time stock sync, advanced multi-attribute product filters, customer reviews, dynamic cart management, and a comprehensive vendor analytics dashboard.',
      features: [
        'Instant search with debounce and multi-category filtering',
        'Stripe Checkout session integration with webhook fulfillment',
        'Admin inventory tracking, sales charts & order management',
        'Fully responsive mobile navigation and sticky mini-cart',
        'Optimized image CDN delivery with Next.js Image caching'
      ],
      techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma ORM', 'Stripe API'],
      liveUrl: 'https://mushahid-hussain-web-developer-port-seven.vercel.app/',
      githubUrl: 'https://github.com/mushahid-hussain',
      featured: true
    },
    {
      id: 'iot-saas-dashboard',
      title: 'HyperPulse IoT Cloud Analytics Platform',
      subtitle: 'Real-time telemetry and device monitoring SaaS',
      category: 'SaaS & Tools',
      image: saasImg,
      description: 'Enterprise IoT device telemetry and analytics dashboard built for monitoring distributed sensor networks. Features real-time WebSocket charts, anomaly alerts, device geofencing maps, and role-based team management.',
      features: [
        'Live streaming WebSocket telemetry data visualizations',
        'Interactive time-series charts with custom date-range queries',
        'Configurable automated threshold alerts with email triggers',
        'RBAC access control for Admins, Engineers, and Viewers',
        'Dark mode aesthetic with optimized CSS hardware acceleration'
      ],
      techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Chart.js', 'Tailwind CSS'],
      liveUrl: 'https://mushahid-hussain-web-developer-port-seven.vercel.app/',
      githubUrl: 'https://github.com/mushahid-hussain',
      featured: true
    },
    {
      id: 'luxe-beauty-brand',
      title: 'LUXE Cosmetics Brand & Design System',
      subtitle: 'Luxury brand identity, packaging and digital style guide',
      category: 'UI / Graphic Design',
      image: luxeLogoImg,
      description: 'High-end visual branding architecture created for an organic luxury beauty boutique. Included logo vector marks, stationery suites, social promo templates, and modern packaging guidelines.',
      features: [
        'Golden ratio lotus monogram logo design in vector formats',
        'Comprehensive typography pairing and color scheme tokens',
        'Digital & print-ready marketing collateral deliverables',
        'Social media banner and carousel brand template system'
      ],
      techStack: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Brand Strategy'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 'business-card-system',
      title: 'Atelier Luxury Business Stationery',
      subtitle: 'Metallic foil & minimalist corporate stationery suite',
      category: 'UI / Graphic Design',
      image: businessCardImg,
      description: 'Bespoke corporate identity package featuring textured paper cards, gold foil embossing guidelines, letterheads, and digital NFC card mockups.',
      features: [
        '300 DPI CMYK print-ready production files with bleeds',
        'Spot UV and metallic foil finishing specifications',
        'Integrated dynamic QR code connecting to digital vCard'
      ],
      techStack: ['Print Design', 'Adobe InDesign', 'Photoshop', 'Vector Art'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 'ramadan-marketing-campaign',
      title: 'Ramadan 50% Sale Promo Visuals',
      subtitle: 'High-converting omnichannel seasonal advertising graphics',
      category: 'UI / Graphic Design',
      image: ramadanPosterImg,
      description: 'Omnichannel advertising poster campaign designed for retail chain holiday sales, driving a 38% increase in promotional click-through rates across social channels.',
      features: [
        'Print flyers and high-res digital social media banners',
        'Custom Islamic geometric vector motifs and golden typography',
        'Multi-format adaptations for Instagram, TikTok, and print billboards'
      ],
      techStack: ['Photoshop', 'Canva Pro', 'Typography', 'Visual Composition'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 'executive-resume-kit',
      title: 'Executive CV / Resume Template Kit',
      subtitle: 'ATS-compliant modern resume layout for tech leaders',
      category: 'UI / Graphic Design',
      image: resumeMockupImg,
      description: 'Minimalist, high-impact resume and cover letter template engineered for readability and automated ATS resume parsers.',
      features: [
        'Scannable single-page and two-page structural layouts',
        'ATS-friendly typographic hierarchy and font embedding',
        'Editable Canva, PDF, and DOCX format options'
      ],
      techStack: ['Editorial Layout', 'Canva Pro', 'ATS Optimization'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ] as DeveloperProject[],
  testimonials: [
    {
      id: 't1',
      name: 'James Reynolds',
      role: 'CEO & Founder',
      company: 'Veritas Digital Inc (USA)',
      rating: 5,
      content: 'Mushahid is one of the most reliable and skilled full-stack developers I have worked with. He delivered our e-commerce platform ahead of schedule with immaculate code quality and sub-second load speeds.',
      avatarText: 'JR'
    },
    {
      id: 't2',
      name: 'Dr. Tariq Al-Mansoor',
      role: 'Product Director',
      company: 'NexGen Cloud Solutions (UAE)',
      rating: 5,
      content: 'Exceptional communication and brilliant technical execution. Mushahid transformed our IoT dashboard into an intuitive, high-performance web app. Highly recommended for any serious web development project!',
      avatarText: 'TA'
    },
    {
      id: 't3',
      name: 'Elena Rostova',
      role: 'Creative Director',
      company: 'Aesthetic Studios (UK)',
      rating: 5,
      content: 'The attention to detail in both UI design and frontend implementation was extraordinary. Every button, animation, and breakpoint works seamlessly across all devices.',
      avatarText: 'ER'
    }
  ] as TestimonialItem[],
  faqs: [
    {
      question: 'What is your typical project workflow and communication style?',
      answer: 'I start with an in-depth requirement analysis and scope definition, followed by wireframing/architecture planning. Throughout the development phase, I share frequent live staging links for review and communicate via WhatsApp, Email, or Slack.'
    },
    {
      question: 'Can you work with my existing codebase or API?',
      answer: 'Yes, absolutely! I regularly collaborate on existing repositories (GitHub/GitLab), refactoring code, adding new features, resolving bugs, or integrating new third-party APIs and payment gateways.'
    },
    {
      question: 'Do you provide responsive design and cross-browser testing?',
      answer: 'Every single website or application I build is tested extensively on modern browsers (Chrome, Safari, Firefox, Edge) and mobile devices (iOS, Android, Tablets) ensuring 100% responsiveness and fluid touch interactions.'
    },
    {
      question: 'What if I need post-launch support and updates?',
      answer: 'I provide 30 days of free post-launch support with every project to guarantee smooth deployment and resolve any unexpected bugs. Long-term maintenance packages are also available.'
    },
    {
      question: 'How can I get started on a project with you?',
      answer: 'Simply click the "Let\'s Talk" button or send a message directly on WhatsApp (0317-9948934) or Email (mushahidrafiqe744@gmail.com). I will respond within a few hours with estimated timelines and a custom quote!'
    }
  ] as FAQItem[],
  processSteps: [
    {
      step: '01',
      title: 'Discovery & Scope',
      desc: 'Understanding your business goals, target audience, technical requirements, and defining clear milestones.'
    },
    {
      step: '02',
      title: 'Architecture & UI Prototype',
      desc: 'Designing database schemas, API structures, and creating pixel-perfect responsive UI wireframes.'
    },
    {
      step: '03',
      title: 'Development & Integration',
      desc: 'Writing clean, typed, modular code using modern React, Next.js, Node.js, and connecting databases.'
    },
    {
      step: '04',
      title: 'QA, Speed & SEO Polish',
      desc: 'Rigorous cross-device testing, performance audits (95+ Lighthouse), security hardening, and SEO optimization.'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      desc: 'Seamless production launch on cloud hosting, handing over documentation, and 30-day post-launch support.'
    }
  ]
};
