import { Skill, Service, Project, ProcessStep, WhyChooseMeItem, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Abdul Rauf',
  shortName: 'AR',
  domain: 'Rauf.dev',
  title: 'Modern Front-End Web Developer',
  location: 'Peshawar, Pakistan',
  email: 'abdulraufdev0@gmail.com',
  phone: '+92 370 513 8158',
  status: 'Available for Freelance & Full-time Roles',
  tagline: 'Building Fast, Responsive & High-Performance Websites',
  heroSubheadline: 'I build fast, responsive and high-performance digital experiences.',
  heroDescription: 'Building fast, responsive, and high-performance websites with clean code, pixel-perfect UI, and experiences people enjoy using.',
  aboutHeading: 'A developer who cares about the details.',
  aboutDescription: `I am a passionate Front-End Web Developer specializing in creating responsive, modern, and SEO-friendly websites. I build business websites, landing pages, admin dashboards, portfolios, and custom web interfaces with clean, scalable, and maintainable code.\n\nI focus on performance, accessibility, responsive design, and exceptional user experience — turning Figma and PSD designs into pixel-perfect, production-ready websites that load fast and work everywhere.`,
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'mailto:abdulraufdev0@gmail.com',
    phone: 'tel:+923705138158',
    whatsapp: 'https://wa.me/923705138158'
  }
};

export const STATS_DATA: StatItem[] = [
  {
    id: 'projects',
    value: '35+',
    label: 'Projects Shipped',
    sublabel: 'Delivered on time with pixel-perfect standards'
  },
  {
    id: 'experience',
    value: '3+',
    label: 'Years Experience',
    sublabel: 'Specialized in front-end architecture & UI'
  },
  {
    id: 'performance',
    value: '99+',
    label: 'Optimized Builds',
    sublabel: 'Lighthouse score focus on speed & core vitals'
  },
  {
    id: 'responsive',
    value: '100%',
    label: 'Responsive Design',
    sublabel: 'Flawless execution from mobile to 4K displays'
  }
];

export const SKILLS_DATA: Skill[] = [
  // Front-End
  {
    name: 'HTML5',
    category: 'frontend',
    icon: 'FileCode2',
    description: 'Semantic markup, accessibility standards, and SEO-optimized document structure.',
    tag: 'Core Markup',
    highlight: true
  },
  {
    name: 'CSS3',
    category: 'frontend',
    icon: 'Palette',
    description: 'Modern flexbox, grid, custom properties, animations, and fluid responsive layouts.',
    tag: 'Styling',
    highlight: true
  },
  {
    name: 'JavaScript ES6+',
    category: 'frontend',
    icon: 'Code2',
    description: 'Modern asynchronous programming, DOM manipulation, modular code, and state management.',
    tag: 'Core Logic',
    highlight: true
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: 'Sparkles',
    description: 'Utility-first styling, design system tokens, JIT compiler, and custom plugin integration.',
    tag: 'Framework',
    highlight: true
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    icon: 'LayoutGrid',
    description: 'Rapid prototyping, grid systems, responsive breakpoints, and UI component customization.',
    tag: 'Framework'
  },
  {
    name: 'Responsive Web Design',
    category: 'frontend',
    icon: 'Smartphone',
    description: 'Mobile-first viewport engineering ensuring fluid layouts across all form factors.',
    tag: 'Specialty',
    highlight: true
  },
  {
    name: 'Cross-Browser Compatibility',
    category: 'frontend',
    icon: 'Globe2',
    description: 'Consistent behavior and visual fidelity across Chrome, Safari, Firefox, Edge, and mobile engines.',
    tag: 'Quality'
  },
  {
    name: 'Figma to HTML',
    category: 'frontend',
    icon: 'Figma',
    description: 'Pixel-perfect translation of complex design files, auto-layouts, and component tokens.',
    tag: 'Design-to-Code',
    highlight: true
  },
  {
    name: 'PSD to HTML',
    category: 'frontend',
    icon: 'Image',
    description: 'Structured, clean, and semantic code extracted cleanly from layered Photoshop files.',
    tag: 'Design-to-Code'
  },
  {
    name: 'Website Optimization',
    category: 'frontend',
    icon: 'Zap',
    description: 'Asset compression, critical CSS, lazy loading, Core Web Vitals, and lightning load times.',
    tag: 'Performance',
    highlight: true
  },

  // Backend / Development
  {
    name: 'PHP',
    category: 'backend',
    icon: 'Server',
    description: 'Server-side scripting, custom endpoint integration, and backend template rendering.',
    tag: 'Server'
  },
  {
    name: 'Laravel',
    category: 'backend',
    icon: 'Layers',
    description: 'MVC architecture, Blade templating, routing, and RESTful API integration.',
    tag: 'Framework',
    highlight: true
  },
  {
    name: 'MySQL',
    category: 'backend',
    icon: 'Database',
    description: 'Relational database schema modeling, queries, data persistence, and relationship indexing.',
    tag: 'Database'
  },

  // Development Tools
  {
    name: 'Git',
    category: 'tools',
    icon: 'GitBranch',
    description: 'Version control workflows, clean commit hygiene, branching, and rebasing.',
    tag: 'Version Control',
    highlight: true
  },
  {
    name: 'GitHub',
    category: 'tools',
    icon: 'GitPullRequest',
    description: 'Collaborative code reviews, pull requests, automated actions, and open source repositories.',
    tag: 'Collaboration'
  },
  {
    name: 'Figma',
    category: 'tools',
    icon: 'Figma',
    description: 'Design inspection, style guides, asset exports, vector optimization, and typography sizing.',
    tag: 'Design'
  },
  {
    name: 'VS Code',
    category: 'tools',
    icon: 'Terminal',
    description: 'Power setup with custom linting, Emmet shortcuts, snippets, and fast debugging tools.',
    tag: 'Environment'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'modern-website',
    index: '01',
    title: 'Modern Website Development',
    shortDescription: 'Create fast, responsive, and professional websites for businesses, personal brands, startups, and digital products.',
    fullDescription: 'From high-end marketing sites to complete multi-page business platforms, I craft bespoke web experiences that elevate your brand and turn casual visitors into loyal clients.',
    icon: 'Globe',
    deliverables: [
      'Custom semantic markup & clean architecture',
      'Mobile-first responsive fluid grids',
      'Lightning-fast page loading speeds',
      'SEO & accessibility best practices built-in'
    ],
    bestFor: 'Startups, Corporate Businesses & Personal Brands'
  },
  {
    id: 'landing-page',
    index: '02',
    title: 'Landing Page Development',
    shortDescription: 'Build high-converting and visually polished landing pages with modern UI and responsive layouts.',
    fullDescription: 'High-impact conversion engines engineered with clear value props, strategic CTAs, smooth micro-interactions, and tight typography that guides the user down the funnel.',
    icon: 'Flame',
    deliverables: [
      'Conversion-optimized layout structure',
      'Frictionless call-to-action sections',
      'Instant load times for low bounce rate',
      'A/B testing friendly modular components'
    ],
    bestFor: 'Product Launches, SaaS Marketing & Lead Generation'
  },
  {
    id: 'figma-to-html',
    index: '03',
    title: 'Figma to HTML',
    shortDescription: 'Convert Figma designs into pixel-perfect, responsive, production-ready websites.',
    fullDescription: 'Transforming your Figma prototypes, auto-layouts, and component libraries into pristine, scalable code with exact spacing, colors, and typography match.',
    icon: 'Figma',
    deliverables: [
      '100% pixel-perfect layout replication',
      'Clean CSS/Tailwind utility architecture',
      'Smooth interactive state transitions',
      'Cross-device breakpoint responsiveness'
    ],
    bestFor: 'Design Agencies, UI/UX Designers & Product Teams'
  },
  {
    id: 'psd-to-html',
    index: '04',
    title: 'PSD to HTML',
    shortDescription: 'Transform PSD designs into clean, structured, responsive front-end code.',
    fullDescription: 'Legacy or fresh Photoshop files converted into modern, standards-compliant HTML5/CSS3 with web fonts, SVG optimizations, and modern responsive breakpoints.',
    icon: 'FileCode',
    deliverables: [
      'Layer-by-layer asset optimization',
      'Hand-crafted semantic HTML5 markup',
      'Retina-ready high-resolution imagery',
      'Cross-browser tested and validated code'
    ],
    bestFor: 'Agencies with existing PSD design assets'
  },
  {
    id: 'dashboard-dev',
    index: '05',
    title: 'Dashboard Development',
    shortDescription: 'Create modern admin panels, business dashboards, CRM interfaces, and data-focused web applications.',
    fullDescription: 'Clean, dense, and intuitive interfaces for managing data, metrics, analytics, and user workflows with modular components and smooth interaction states.',
    icon: 'LayoutDashboard',
    deliverables: [
      'Modular UI cards & data grid views',
      'Sidebar navigation & collapse drawers',
      'Interactive tables, charts & filters',
      'Backend/API-ready clean data binding'
    ],
    bestFor: 'SaaS Platforms, Internal Tools & Admin Portals'
  },
  {
    id: 'website-optimization',
    index: '06',
    title: 'Website Optimization',
    shortDescription: 'Improve performance, responsiveness, accessibility, SEO, and overall user experience.',
    fullDescription: 'Auditing and refactoring existing websites to achieve 90+ Google Lighthouse scores, eliminating layout shifts, reducing payload size, and fixing mobile bugs.',
    icon: 'Gauge',
    deliverables: [
      'Comprehensive Core Web Vitals audit',
      'Asset compression & lazy loading pipeline',
      'Render-blocking script elimination',
      'Accessibility (WCAG AA) & SEO fixes'
    ],
    bestFor: 'Existing Websites experiencing slow speeds or poor SEO'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'nexus-saas',
    title: 'Nexus Analytics SaaS Platform',
    category: 'dashboard',
    categoryLabel: 'Dashboard & Web App',
    description: 'A modern, high-density analytics dashboard featuring real-time data visualizers, customizable metric widgets, and responsive dark/light interfaces.',
    detailedDescription: 'Developed a comprehensive front-end dashboard for a cloud analytics platform. Integrated responsive data tables with custom sorting, interactive metrics charts, quick filters, and fluid collapsible navigation with zero layout shift.',
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript ES6+', 'Dashboard UI', 'Performance'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    metrics: [
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'Load Time', value: '0.4s' },
      { label: 'Responsiveness', value: '100%' }
    ],
    highlights: [
      'Collapsible multi-level sidebar navigation',
      'Data grid with responsive horizontal scroll fallbacks',
      'Custom dark-mode / light-mode color token architecture',
      'Modular widget system for custom layout rearrangement'
    ],
    deliverables: ['Full responsive source code', 'Interactive component library', 'Performance audit report']
  },
  {
    id: 'strata-agency',
    title: 'Strata Digital Agency Website',
    category: 'business',
    categoryLabel: 'Business Website',
    description: 'A clean, editorial corporate website built for a digital creative studio with smooth micro-interactions and high-contrast typography.',
    detailedDescription: 'Engineered a modern, conversion-focused corporate presence for a digital branding studio. Built with modular component sections, custom case study grids, and responsive client quote sliders.',
    tags: ['JavaScript', 'Tailwind CSS', 'Figma to HTML', 'SEO Friendly', 'Responsive'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    metrics: [
      { label: 'Mobile Score', value: '98/100' },
      { label: 'Total Pages', value: '8 Pages' },
      { label: 'Bounce Rate Reduction', value: '-35%' }
    ],
    highlights: [
      'Bespoke hero section with responsive typography scale',
      'Smooth client testimonial ticker and review showcase',
      'Interactive services breakdown with nested accordion details'
    ],
    deliverables: ['Complete multi-page responsive HTML/CSS', 'Optimized WebP graphics', 'Contact form integration']
  },
  {
    id: 'hyperflow-landing',
    title: 'Hyperflow AI Product Landing Page',
    category: 'landing-page',
    categoryLabel: 'Landing Page',
    description: 'High-converting product landing page designed to turn traffic into active trials with sticky CTAs and feature comparisons.',
    detailedDescription: 'Built a pixel-perfect SaaS landing page from a complex Figma design. Included dynamic pricing tier switchers (monthly/annual), interactive interactive code previews, and high-contrast feature bento grids.',
    tags: ['HTML5', 'Tailwind CSS', 'Figma to HTML', 'Conversion UI', 'Micro-animations'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    metrics: [
      { label: 'Conversion Rate', value: '+42%' },
      { label: 'Page Weight', value: '< 280KB' },
      { label: 'Figma Match', value: '100%' }
    ],
    highlights: [
      'Interactive pricing toggle with annual discount badges',
      'Feature bento grid with custom visual illustration cards',
      'Sticky navigation with subtle scroll backdrop blur'
    ],
    deliverables: ['Production-ready landing template', 'Clean commented stylesheet', 'SVG iconography pack']
  },
  {
    id: 'estate-pro',
    title: 'PrimeEstate Luxury Real Estate Portal',
    category: 'business',
    categoryLabel: 'Business Website',
    description: 'A responsive real estate discovery platform featuring property filtering, interactive gallery sliders, and agent contact workflows.',
    detailedDescription: 'Crafted a full-featured real estate front-end interface. Integrated custom multi-criteria search filters (price, bedrooms, location), smooth image lightboxes, and clean property specification badges.',
    tags: ['JavaScript ES6+', 'Bootstrap 5', 'PSD to HTML', 'Filter Engine', 'Responsive'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    metrics: [
      { label: 'Filter Speed', value: '< 16ms' },
      { label: 'Image Load', value: 'Progressive' },
      { label: 'Form Completion', value: '94%' }
    ],
    highlights: [
      'Instant property filtering with zero page reload',
      'High-resolution image gallery with thumbnail pagination',
      'Clean specification badges for amenities and floorplans'
    ],
    deliverables: ['Responsive template package', 'PSD asset extraction', 'Cross-browser compatibility validation']
  },
  {
    id: 'fintech-checkout',
    title: 'PaySwift Modern Checkout & Billing Portal',
    category: 'conversion',
    categoryLabel: 'Conversion & UX',
    description: 'Streamlined checkout flow and customer billing portal designed with zero-friction input validation and bank-grade UI polish.',
    detailedDescription: 'Engineered a conversion-focused checkout flow with real-time credit card formatting, client-side input validation, order summary recalculation, and accessible error message tooltips.',
    tags: ['JavaScript', 'Tailwind CSS', 'Accessibility', 'Form UX', 'Optimization'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    metrics: [
      { label: 'Form Drop-off', value: '-28%' },
      { label: 'Accessibility', value: 'WCAG AA' },
      { label: 'Validation', value: 'Real-time' }
    ],
    highlights: [
      'Smart credit card type detection & formatting',
      'Accessible focus rings and screen-reader compliant aria-live alerts',
      'One-click copy billing details and downloadable receipt view'
    ],
    deliverables: ['Checkout component suite', 'Validation logic library', 'Error-handling test suite']
  },
  {
    id: 'pulse-crm',
    title: 'Pulse Team CRM & Lead Manager',
    category: 'dashboard',
    categoryLabel: 'Dashboard & Web App',
    description: 'Enterprise CRM interface with pipeline Kanban boards, contact activity timelines, and responsive table views.',
    detailedDescription: 'Developed an expansive CRM front-end with interactive status columns, contact search with instant highlighting, activity feed cards, and modal dialogs for quick lead creation.',
    tags: ['HTML5', 'CSS3', 'JavaScript ES6+', 'PHP', 'Laravel UI', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop',
    featured: false,
    metrics: [
      { label: 'Interaction Delay', value: '< 20ms' },
      { label: 'API Binding', value: 'Clean JSON' },
      { label: 'Mobile Usability', value: '100/100' }
    ],
    highlights: [
      'Interactive pipeline view with stage status indicators',
      'Comprehensive contact profile side-panel with history feed',
      'Clean integration with Laravel Blade templates and MySQL data models'
    ],
    deliverables: ['Laravel Blade views', 'Responsive stylesheet', 'Reusable component partials']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Strategy & Requirements',
    description: 'Understand the project goals, audience, requirements, and design direction. I analyze your target market, content structure, and technical needs to establish a rock-solid foundation.',
    points: ['Architecture mapping & scope definition', 'Asset & design file audit (Figma/PSD)', 'Performance targets & tech stack selection']
  },
  {
    number: '02',
    title: 'Design',
    tagline: 'Interface & Token Setup',
    description: 'Transform ideas or Figma designs into structured, responsive interfaces. I establish clean design tokens, font scales, spacing rules, and responsive breakpoint strategies.',
    points: ['Design system tokenization (colors, typography, spacing)', 'Component breakdown & responsive states', 'Interaction and micro-transition choreography']
  },
  {
    number: '03',
    title: 'Build',
    tagline: 'Clean Code Implementation',
    description: 'Develop clean, scalable, maintainable, and high-performance front-end code with modern semantic markup, modular CSS, and robust JavaScript logic.',
    points: ['Semantic HTML5 & utility-first Tailwind CSS', 'Modular, reusable component architecture', 'Accessible and responsive interactive states']
  },
  {
    number: '04',
    title: 'Refine',
    tagline: 'Optimization & Polish',
    description: 'Test responsiveness, optimize performance, improve accessibility, and polish every detail. I ensure 95+ Lighthouse scores and flawless cross-browser compatibility.',
    points: ['Cross-browser & cross-device validation', 'Core Web Vitals & asset compression audit', 'SEO meta setup & final production build']
  }
];

export const WHY_CHOOSE_ME: WhyChooseMeItem[] = [
  {
    id: 'pixel-perfect',
    title: 'Pixel-Perfect Implementation',
    description: 'Exact 1:1 translation from Figma or PSD into production code. Margin, padding, line-height, and color codes match your design flawlessly.',
    icon: 'Maximize2',
    metric: '100% Match'
  },
  {
    id: 'responsive',
    title: 'Fully Responsive Design',
    description: 'Fluid layouts that look deliberate and balanced on smartphones, tablets, laptops, and wide desktop monitors.',
    icon: 'Smartphone',
    metric: 'All Devices'
  },
  {
    id: 'clean-code',
    title: 'Clean & Maintainable Code',
    description: 'Structured, modular, and well-commented code following modern industry conventions, making future updates effortless for any developer.',
    icon: 'Code2',
    metric: 'Scalable'
  },
  {
    id: 'performance',
    title: 'Performance-Focused Development',
    description: 'Lightweight payloads, optimized images, zero layout shifts, and rapid render speeds that keep users engaged and improve rankings.',
    icon: 'Zap',
    metric: '95+ Score'
  },
  {
    id: 'seo',
    title: 'SEO-Friendly Structure',
    description: 'Semantic HTML5 hierarchy, open graph metadata, structured headings, and search-engine optimized markup to maximize discoverability.',
    icon: 'Search',
    metric: 'SEO Ready'
  },
  {
    id: 'cross-browser',
    title: 'Cross-Browser Compatibility',
    description: 'Tested and proven across all modern web browsers including Chrome, Safari, Firefox, and Edge on iOS and Android.',
    icon: 'Globe',
    metric: 'Universal'
  },
  {
    id: 'modern-ui',
    title: 'Modern UI & UX Principles',
    description: 'Deep appreciation for visual hierarchy, generous whitespace, legible typography, and intuitive interaction states.',
    icon: 'Layers',
    metric: 'SaaS Grade'
  },
  {
    id: 'communication',
    title: 'Clear & Reliable Communication',
    description: 'Prompt updates, transparent timelines, and collaborative problem-solving from initial kick-off to final handover.',
    icon: 'MessageSquare',
    metric: '< 2hr Response'
  }
];

export const ABOUT_HIGHLIGHTS = [
  {
    title: 'Clean, scalable & maintainable code',
    description: 'Built with industry best practices and modular architecture.'
  },
  {
    title: 'Pixel-perfect Figma / PSD to HTML',
    description: 'Zero design drift with exact typographic and spatial fidelity.'
  },
  {
    title: 'SEO-friendly & accessible builds',
    description: 'Structured semantic markup adhering to WCAG standards.'
  },
  {
    title: 'Fast, optimized page performance',
    description: 'Engineered for sub-second load times and high Core Web Vitals.'
  }
];
