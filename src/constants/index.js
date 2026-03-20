const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Jan 2026",
    title: "Migrating 130+ Landing Pages to WordPress",
    image: "/images/blog1.png",
    link: "https://resumeajaysingh.netlify.app",
  },
  {
    id: 2,
    date: "Dec 2025",
    title: "Building Conversion-Focused Med Spa Websites",
    image: "/images/blog1.png",
    link: "https://resumeajaysingh.netlify.app",
  },
  {
    id: 3,
    date: "Nov 2025",
    title: "How I Improved Lead Capture with UX Optimization",
    image: "/images/blog1.png",
    link: "https://resumeajaysingh.netlify.app",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/singhajay/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
  {
  id: 1,
  name: "BoomerangFX Platform",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-10 left-5", // icon position inside Finder
  windowPosition: "top-[5vh] left-5", // Finder window position
  children: [
    {
      id: 5,
      name: "BoomerangFX Project.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: [
        "BoomerangFX is a platform that provides websites, marketing tools, and automation systems for medical clinics.",
        "I led the development and maintenance of dozens of clinic websites and landing pages used across North America.",
        "Migrated 130+ landing pages into optimized WordPress templates, improving development speed and engagement.",
        "Integrated booking systems, CRM connections, and automation flows to improve lead capture and scheduling.",
        "Used analytics, heatmaps, and A/B testing to refine layouts and increase conversion rates."
      ],
    },
    {
      id: 2,
      name: "boomerangfx.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://boomerangfx.com",
      position: "top-10 right-20",
    },
    {
      id: 3,
      name: "boomerangfx.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-80",
      imageUrl: "/images/project-boomerangfx.png",
    },
    {
      id: 4,
      name: "Landing Pages.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      position: "top-60 right-20",
    },
  ],
},

// ▶ Project 2
{
  id: 6,
  name: "Perspective Health Website",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-52 right-80",
  windowPosition: "top-[20vh] left-7",
  children: [
    {
      id: 1,
      name: "Overview.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 right-10",
      description: [
        "Perspective Health is a wellness and medical aesthetics clinic website designed to educate patients and generate qualified leads.",
        "I designed and developed structured service pages optimized for SEO and online booking conversions.",
        "Built using WordPress and Elementor with a focus on clean layouts and intuitive navigation.",
        "Optimized page structure and performance to improve user experience across desktop and mobile devices.",
        "Implemented conversion-focused layouts with clear calls to action and treatment education."
      ],
    },
    {
      id: 2,
      name: "perspectivehealth.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://perspectivehealth.com",
      position: "top-20 left-20",
    },
    {
      id: 3,
      name: "perspective-health.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/project-perspective.png",
    },
    {
      id: 4,
      name: "Service Pages.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      position: "top-60 left-5",
    },
  ],
},

   // ▶ Project 3
{
  id: 7,
  name: "ImageBucket Application",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-10 left-80",
  windowPosition: "top-[33vh] left-7",
  children: [
    {
      id: 1,
      name: "Overview.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: [
        "ImageBucket is a full-stack web application for uploading and exploring visual content.",
        "Users can upload images, browse galleries, and interact with a dynamic interface.",
        "Built using React and Node.js with REST APIs for managing images and user data.",
        "Designed to demonstrate scalable architecture and clean component-based development.",
        "Focused on performance, usability, and structured backend data handling."
      ],
    },
    {
      id: 2,
      name: "Github Repository.url",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://github.com/YOURUSERNAME/imagebucket",
      position: "top-10 right-20",
    },
    {
      id: 3,
      name: "imagebucket.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-80",
      imageUrl: "/images/project-imagebucket.png",
    },
    {
      id: 4,
      name: "Architecture.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      position: "top-60 right-20",
    },
  ],
},
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
  id: 4,
  name: "about-me.txt",
  icon: "/images/txt.png",
  kind: "file",
  fileType: "txt",
  position: "top-60 left-5",
  subtitle: "About Ajay",
  image: "/images/ajay.jpg",
  description: [
    "Hi, I'm Ajay — a Front-End Web Developer focused on building conversion-driven websites and digital experiences.",
    "I have 5+ years of experience delivering websites and applications for healthcare, education, and small business clients.",
    "I specialize in turning UI and UX designs into fast, scalable WordPress and React.js builds that generate real business results.",
    "My work includes CRM integrations, booking systems, automation funnels, and conversion optimization across 60+ websites.",
    "Beyond development, I also produce marketing videos and podcasts that help businesses grow their audience and reach new customers."
  ],
},
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };