// All site content lives here. Edit text in one place.
export const site = {
  url: "https://vikasmauryaportfolio.netlify.app",
  name: "Vikas Maurya",
  role: "Full Stack Developer",
  tagline: "React.js • Next.js • Node.js • Laravel • REST APIs",
  email: "vikas.128ve@gmail.com",
  phone: "+91 9867388691",
  github: "https://github.com/vikasmauryass",
  linkedin: "https://www.linkedin.com/in/1vikasmaurya",
  resume: "https://drive.google.com/uc?export=download&id=14IY48j1UEMG-vR5i-kXk2ehq4BFbEie3",
  resumeView: "https://drive.google.com/file/d/14IY48j1UEMG-vR5i-kXk2ehq4BFbEie3/view?usp=sharing",
  location: "India",
  summary:
    "Full Stack Developer with nearly 3 years of hands-on experience developing and deploying scalable web applications using React.js, Node.js, Express.js, PHP, Laravel, MySQL, Docker and MongoDB. I build high-performance REST APIs, responsive React interfaces, secure JWT authentication and real-time backend microservices across CRM and enterprise ERP platforms.",
};

export const stats = [
  { value: "3", suffix: "+", label: "Years experience" },
  { value: "4", suffix: "", label: "Live projects" },
  { value: "3", suffix: "", label: "Companies" },
];

export const skillGroups = [
  { title: "Frontend", items: ["React.js", "Next.js", "Redux Toolkit", "Context API", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "AJAX", "jQuery"] },
  { title: "Backend", items: ["Node.js", "Express.js", "PHP", "Laravel", "Python", "REST APIs", "Microservices", "JWT & RBAC", "Queue Jobs", "Redis", "RabbitMQ", "Docker", "Face Recognition", "AWS (basics)"] },
  { title: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL", "Query Optimization", "Schema Design", "Indexing", "Mongoose", "Eloquent"] },
  { title: "Tools", items: ["Git", "GitHub", "GitLab", "Postman", "VS Code", "MVC Architecture"] },
];

// Skill bars: adjust levels (0-100) to what you are comfortable defending in an interview.
export const skillBars = [
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Next.js", level: 80 },
  { name: "Laravel / PHP", level: 85 },
  { name: "MongoDB", level: 82 },
  { name: "MySQL", level: 85 },
  { name: "Redis / RabbitMQ", level: 70 },
  { name: "Docker", level: 70 },
];

export const projects = [
  {
    name: "BytePe",
    url: "https://bytepe.com/",
    tag: "Subscription Platform",
    desc: "Phone subscription platform with tailored portals for retailers and customers.",
    stack: ["Next.js", "React.js", "Node.js", "MongoDB", "MySQL"],
  },
  {
    name: "Zedflow",
    url: "https://zedflow.in/",
    tag: "Enterprise ERP",
    desc: "Internal ERP and workflow automation tool digitizing manual paperwork into pipelines for Sales, Finance, MD and Accounting teams.",
    stack: ["Node.js", "MongoDB", "React.js", "Microservices"],
  },
  {
    name: "UrGesture",
    url: "https://urgesture.com/",
    tag: "Web Platform",
    // TODO: replace with your real description of what you built here
    desc: "Production web application I contributed to, built with a modern full-stack JavaScript setup.",
    stack: ["React.js", "Node.js", "REST APIs"],
  },
  {
    name: "Mini Athletics Franchising",
    url: "https://miniathleticsfranchising.co.uk/",
    tag: "Franchise Website",
    // TODO: replace with your real description of what you built here
    desc: "Franchise-focused website and platform delivered for a UK client.",
    stack: ["JavaScript", "REST APIs", "MySQL"],
  },
];

export const aiProject = {
  name: "AI-Powered Attendance Automation",
  desc: "Intelligent attendance system that automatically marks student attendance by recognizing faces in uploaded classroom images using computer vision and facial recognition.",
  stack: ["Python", "Face Recognition", "Computer Vision"],
};

export const experience = [
  {
    role: "Software Developer",
    company: "Fi Ellements Pvt. Ltd.",
    place: "Noida, India",
    period: "Jan 2025 – Present",
    points: [
      "Developed BytePe, a phone subscription platform, using Next.js, React.js, Node.js, MongoDB and MySQL with portals for retailers and customers.",
      "Built Zedflow, an internal enterprise ERP and workflow automation tool for Sales, Finance, MD and Accounting teams.",
      "Designed and deployed a scalable microservices architecture with Node.js and MongoDB for high-concurrency transactions.",
      "Optimized database queries and complex UI state across relational and non-relational databases.",
      "Built an AI attendance system that marks attendance by recognizing faces from classroom images.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Careernova Technologies LLP",
    place: "Mumbai, India",
    period: "Jul 2024 – Dec 2024",
    points: [
      "Built end-to-end modules for an enterprise SaaS platform on the MERN stack.",
      "Developed Express.js REST APIs with Mongoose schemas for data operations, transaction logs and customer access control.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Rdigi Work",
    place: "Mumbai, India",
    period: "Oct 2023 – May 2024",
    points: [
      "Designed and maintained modular backends for a multi-tenant School ERP serving Admin, Teacher, Student and Parent portals using PHP, Laravel and MySQL.",
      "Implemented secure authentication, RBAC and custom API endpoints consumed by React frontends.",
    ],
  },
];

export const education = [
  { title: "B.E. Information Technology", place: "Theem College of Engineering, Mumbai University", meta: "CGPA 8.5 • 2023" },
  { title: "Diploma, Computer Science", place: "Viva College of Information Technology, MSBTE", meta: "80.91% • 2020" },
];
