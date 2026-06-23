import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const skills = {
    backend: [
      { name: "Java", level: "90%" },
      { name: "Spring Boot", level: "88%" },
      { name: "Spring Security", level: "85%" },
      { name: "Microservices", level: "82%" },
      { name: "Hibernate/JPA", level: "85%" },
      { name: "Node.js", level: "78%" },
      { name: "Express.js", level: "80%" },
      { name: "RESTful APIs", level: "90%" },
    ],
    frontend: [
      { name: "React.js", level: "80%" },
      { name: "JavaScript", level: "85%" },
      { name: "Tailwind CSS", level: "90%" },
      { name: "HTML5 & CSS3", level: "92%" },
      { name: "Bootstrap", level: "85%" },
    ],
    databases: [
      { name: "MySQL", level: "88%" },
      { name: "PostgreSQL", level: "82%" },
      { name: "MongoDB", level: "78%" },
    ],
    devops: [
      { name: "AWS (EC2/S3)", level: "75%" },
      { name: "Git & GitHub", level: "88%" },
      { name: "JWT", level: "85%" },
      { name: "Postman", level: "90%" },
      { name: "Maven", level: "82%" },
      { name: "npm", level: "85%" },
    ]
  };

  const projects = [
    {
      title: "Trego -- B2B Medicine Delivery Platform",
      description: "A production-level medicine delivery and vendor platform backend built using Spring Boot and Java. It powers inventory management, vendor pricing, and secure ordering workflow.",
      tags: ["Spring Boot", "Java", "MySQL", "REST APIs"],
      codeLink: "https://github.com/connecttrego/trego_backend.git",
      color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-blue-300"
    },
    {
      title: "StayGrade: Hotel Rating System",
      description: "A secure microservices backend architecture utilizing Spring Cloud Gateway, Eureka Service Discovery, and OpenFeign for declarative inter-service communication and REST aggregation.",
      tags: ["Java", "Spring Boot", "Spring Cloud", "MySQL", "MongoDB", "React.js"],
      codeLink: "https://github.com/vatsalya0713/microservice-",
      color: "from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-300"
    },
    {
      title: "Trego -- Medicine Delivery & Vendor Management",
      description: "Secure B2B dashboard platform featuring role-based access control (JWT) for Admins, Vendors, and Riders. Built-in analytical charts, SMS validation, and robust order state management.",
      tags: ["React.js", "Node.js", "Express.js", "JWT", "MySQL", "Tailwind CSS", "Twilio", "Recharts"],
      codeLink: "https://github.com/vatsalya0713/Trego_Vms",
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-300"
    }
  ];

  // Tab Content Renderer
  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid gap-12 md:grid-cols-12 md:items-center py-8"
          >
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping"></span>
                Open for Opportunities
              </div>

              <div className="space-y-4">
                <h1 className="font-['Outfit'] text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-['Outfit']">Vatsalya Bhardwaj</span>
                </h1>
                <h2 className="font-['Outfit'] text-xl font-medium text-gray-300 sm:text-2xl">
                  Full Stack Developer | Java Backend Enthusiast
                </h2>
              </div>

              <p className="text-base text-gray-400 leading-relaxed max-w-xl">
                MCA 2nd Year Student @ Galgotias College of Engineering and Technology. 
                I specialize in building scalable backend systems using <b>Java, Spring Boot, Spring Security</b> on the backend, alongside building responsive interfaces with <b>React.js</b>.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setActiveTab("projects")}
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 hover:shadow-indigo-600/40 transition duration-200 cursor-pointer"
                >
                  Explore Projects
                </button>
                <button
                  onClick={() => setActiveTab("contact")}
                  className="inline-flex items-center justify-center rounded-xl border border-gray-700 bg-gray-900/50 hover:bg-gray-800/80 px-6 py-3.5 text-sm font-semibold text-gray-300 hover:text-white transition duration-200 cursor-pointer"
                >
                  Contact Me
                </button>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="relative aspect-square w-72 md:w-80 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-[3px] shadow-2xl shadow-indigo-500/10">
                <div className="h-full w-full rounded-[21px] bg-[#0F1424] flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className="h-20 w-20 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <svg className="h-10 w-10 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Outfit'] text-lg font-bold text-white">Vatsalya Bhardwaj</h3>
                    <p className="text-xs text-gray-500">Noida, Uttar Pradesh</p>
                  </div>
                  <div className="w-full border-t border-gray-800/80 pt-4 flex justify-around text-xs">
                    <div>
                      <span className="block font-bold text-indigo-400">CGPA</span>
                      <span className="text-gray-400">7.3 (MCA)</span>
                    </div>
                    <div className="border-l border-gray-800/85"></div>
                    <div>
                      <span className="block font-bold text-indigo-400">Experience</span>
                      <span className="text-gray-400">Letsgain Intern</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "skills":
        return (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 py-8"
          >
            <div className="text-center space-y-2">
              <h2 className="font-['Outfit'] text-3xl font-bold tracking-tight text-white">Technical Skills</h2>
              <p className="text-gray-400 text-sm max-w-lg mx-auto">Technologies and libraries that I employ to build production-level software.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-4">
              {/* Backend */}
              <div className="rounded-2xl border border-gray-800/80 bg-[#0D1220] p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="font-['Outfit'] text-base font-bold text-white">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {skills.backend.map(s => (
                    <span key={s.name} className="rounded-lg bg-gray-900 border border-gray-800 px-3 py-1.5 text-xs text-gray-300 font-medium">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="rounded-2xl border border-gray-800/80 bg-[#0D1220] p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-['Outfit'] text-base font-bold text-white">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {skills.frontend.map(s => (
                    <span key={s.name} className="rounded-lg bg-gray-900 border border-gray-800 px-3 py-1.5 text-xs text-gray-300 font-medium">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="rounded-2xl border border-gray-800/80 bg-[#0D1220] p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h3 className="font-['Outfit'] text-base font-bold text-white">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {skills.databases.map(s => (
                    <span key={s.name} className="rounded-lg bg-gray-900 border border-gray-800 px-3 py-1.5 text-xs text-gray-300 font-medium">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & DevOps */}
              <div className="rounded-2xl border border-gray-800/80 bg-[#0D1220] p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 border border-pink-500/20">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    </svg>
                  </div>
                  <h3 className="font-['Outfit'] text-base font-bold text-white">DevOps & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {skills.devops.map(s => (
                    <span key={s.name} className="rounded-lg bg-gray-900 border border-gray-800 px-3 py-1.5 text-xs text-gray-300 font-medium">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "experience":
        return (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 py-8 max-w-4xl mx-auto"
          >
            <div className="text-center space-y-2">
              <h2 className="font-['Outfit'] text-3xl font-bold tracking-tight text-white">Work Experience</h2>
              <p className="text-gray-400 text-sm">Real world experience and professional internships.</p>
            </div>

            <div className="relative border-l-2 border-gray-800/80 pl-8 ml-2 mt-8 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] top-1.5 h-6 w-6 rounded-full bg-indigo-500 border-4 border-[#0B0F19]"></div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-['Outfit'] text-xl font-bold text-white">Java Backend Developer Intern</h3>
                    <span className="rounded-full bg-gray-900 border border-gray-800 px-3 py-1 text-xs text-indigo-400 font-semibold">Jan 2026 -- June 2026</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-300">Letsgain Pvt. Ltd.</p>

                  <div className="pt-2 space-y-3">
                    <p className="text-sm text-indigo-300 font-semibold">Key Contribution: Trego (B2B Medicine Delivery & Vendor Platform)</p>
                    <ul className="list-disc list-outside pl-4 space-y-2.5 text-sm text-gray-400">
                      <li>Engineered core backend modules using <b>Java</b> and <b>Spring Boot</b>, implementing robust RESTful APIs for vendor inventory management and order workflow.</li>
                      <li>Developed order processing logic utilizing Spring's <b>@Transactional</b> to ensure transactional integrity across multi-vendor carts and auto-sorting price rules.</li>
                      <li>Integrated the <b>Razorpay Payment Gateway API</b> by constructing custom secure HTTP requests for validation and signature check.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "projects":
        return (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 py-8"
          >
            <div className="text-center space-y-2">
              <h2 className="font-['Outfit'] text-3xl font-bold tracking-tight text-white">Technical Projects</h2>
              <p className="text-gray-400 text-sm">Hands-on applications built using Spring Boot, Microservices, and MERN.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 pt-6">
              {projects.map((p, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl border bg-gradient-to-b ${p.color} p-6 flex flex-col justify-between space-y-6 hover:shadow-xl hover:shadow-indigo-500/5 transition duration-300`}
                >
                  <div className="space-y-4">
                    <h3 className="font-['Outfit'] text-lg font-bold text-white">{p.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{p.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="rounded bg-gray-950 px-2 py-1 text-[10px] font-semibold text-gray-300 border border-gray-800">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={p.codeLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors pt-2"
                    >
                      <span>View Code</span>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "education":
        return (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 py-8 max-w-3xl mx-auto"
          >
            <div className="text-center space-y-2">
              <h2 className="font-['Outfit'] text-3xl font-bold tracking-tight text-white">Education</h2>
              <p className="text-gray-400 text-sm">Academic background and scores.</p>
            </div>

            <div className="relative border-l-2 border-gray-800 pl-8 ml-2 mt-8 space-y-12">
              {/* MCA */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1.5 h-6 w-6 rounded-full bg-indigo-500 border-4 border-[#0B0F19]"></div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-indigo-400">2024 -- 2026</span>
                  <h3 className="font-['Outfit'] text-lg font-bold text-white">Master of Computer Applications (MCA)</h3>
                  <p className="text-sm text-gray-400">Galgotias College of Engineering and Technology, Greater Noida</p>
                  <span className="inline-block rounded-md bg-gray-900 border border-gray-800 px-2.5 py-1 text-xs text-gray-300 font-semibold mt-2">
                    CGPA: 7.3 / 10.0
                  </span>
                </div>
              </div>

              {/* BCA */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1.5 h-6 w-6 rounded-full bg-purple-500 border-4 border-[#0B0F19]"></div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-purple-400">2021 -- 2024</span>
                  <h3 className="font-['Outfit'] text-lg font-bold text-white">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-sm text-gray-400">Gopal Narayan Singh University, Bihar</p>
                  <span className="inline-block rounded-md bg-gray-900 border border-gray-800 px-2.5 py-1 text-xs text-gray-300 font-semibold mt-2">
                    CGPA: 7.5 / 10.0
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "contact":
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 py-8 text-center max-w-xl mx-auto"
          >
            <div className="space-y-4">
              <h2 className="font-['Outfit'] text-3xl font-extrabold tracking-tight text-white">Get in Touch</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                I am actively seeking software engineering positions. Feel free to contact me directly or check out my profiles.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-800/80 bg-[#0D1220] space-y-4 text-sm mt-6">
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-gray-950/50 border border-gray-900">
                <span className="text-gray-500">Email</span>
                <a href="mailto:vatsalybhardwaj0713@gmail.com" className="font-bold text-indigo-400 hover:underline">
                  vatsalyabhardwaj0713@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-gray-950/50 border border-gray-900">
                <span className="text-gray-500">Contact</span>
                <a href="tel:+918294830713" className="font-bold text-gray-300 hover:text-white">
                  +91-8294830713
                </a>
              </div>
            </div>

            <div className="flex justify-center gap-6 pt-4 text-gray-500">
              <a href="https://github.com/vatsalya0713" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-xs font-semibold">
                GitHub
              </a>
              <span className="text-gray-800">|</span>
              <a href="https://www.linkedin.com/in/vatsalya-bhardwaj-a1834036b/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-xs font-semibold">
                LinkedIn
              </a>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 selection:bg-indigo-500 selection:text-white relative overflow-hidden flex flex-col justify-between">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none"></div>

      <div>
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-gray-800/80 bg-[#0B0F19]/70 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="font-['Outfit'] text-xl font-bold tracking-tight text-white">
                vatsalya<span className="text-indigo-400">.dev</span>
              </span>
            </div>
            
            {/* Desktop Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1.5 rounded-full border border-gray-800 bg-gray-950/40 p-1 text-xs font-medium text-gray-400">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative rounded-full px-4 py-2 transition duration-200 cursor-pointer ${
                    activeTab === tab.id ? "text-white" : "hover:text-gray-200"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="active-tab"
                      className="absolute inset-0 rounded-full bg-indigo-600/20 border border-indigo-500/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </nav>

            <button 
              onClick={() => setActiveTab("contact")}
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition duration-200 cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Navigation Tabs (Scrollable Bar) */}
          <div className="md:hidden border-t border-gray-800/60 bg-gray-950/20 flex overflow-x-auto whitespace-nowrap p-2 scrollbar-none gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full px-4 py-1.5 text-xs font-medium transition cursor-pointer ${
                  activeTab === tab.id ? "text-indigo-300 bg-indigo-500/10 border border-indigo-500/20" : "text-gray-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        {/* Main Content Area */}
        <main className="mx-auto max-w-6xl px-6 py-12 md:py-16 min-h-[50vh] flex items-center justify-center">
          <div className="w-full">
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 bg-[#080B13] py-6 text-center text-xs text-gray-500 w-full">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Vatsalya Bhardwaj. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/vatsalya0713" target="_blank" rel="noreferrer" className="hover:text-gray-300">GitHub</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/vatsalya-bhardwaj-a1834036b/" target="_blank" rel="noreferrer" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
