import { useState } from "react";
import emailjs from "@emailjs/browser";

import "./App.css";

import {

   FaJava,

   FaReact,

   FaJsSquare,

   FaHtml5,

   FaCss3Alt,

   FaPython,

   FaGitAlt,

   FaGithub,

   FaDatabase,

   FaRobot,

   FaCloud,

   FaBug,

   FaCheckCircle,

   FaTerminal,

   FaLinkedin,

   FaEnvelope,

} from "react-icons/fa";

import {

   SiSpringboot,

   SiMysql,

   SiPostman,

   SiGithubactions,

   SiJunit5,

   SiLinux,

} from "react-icons/si";

import { FiArrowUpRight } from "react-icons/fi";

/* ================= SKILLS ================= */

const skillGroups = [

   {

      number: "01",

      title: "Programming & Development",

      skills: [

         { name: "Java", icon: <FaJava /> },

         { name: "JavaScript", icon: <FaJsSquare /> },

         { name: "Python (Basic)", icon: <FaPython /> },

         { name: "Spring Boot", icon: <SiSpringboot /> },

         { name: "React", icon: <FaReact /> },

         { name: "REST APIs", icon: <FaDatabase /> },

      ],

   },

   {

      number: "02",

      title: "AI & Machine Learning",

      skills: [

         { name: "Machine Learning", icon: <FaRobot /> },

         { name: "Deep Learning", icon: <FaRobot /> },

         { name: "Prompt Engineering", icon: <FaRobot /> },

         { name: "Gemini API", icon: <FaRobot /> },

      ],

   },

   {

      number: "03",

      title: "Databases & Developer Tools",

      skills: [

         { name: "SQL", icon: <FaDatabase /> },

         { name: "MySQL", icon: <SiMysql /> },

         { name: "Oracle SQL", icon: <FaDatabase /> },

         { name: "Git / GitHub", icon: <FaGithub /> },

         { name: "Postman", icon: <SiPostman /> },

         { name: "Linux", icon: <SiLinux /> },

      ],

   },

   {

      number: "04",

      title: "Testing, Debugging & Cloud",

      skills: [

         { name: "Manual Testing", icon: <FaCheckCircle /> },

         { name: "Functional Testing", icon: <FaCheckCircle /> },

         { name: "Debugging", icon: <FaBug /> },

         { name: "Cloud Computing", icon: <FaCloud /> },

         { name: "IaC Concepts", icon: <FaTerminal /> },

      ],

   },

];

/* ================= EXPERIENCE ================= */

const experiences = [

   {

      period: "FEB 2026 — OCT 2026",

      role: "Software Trainee",

      company: "3NEX GLOBAL INDIA PRIVATE LIMITED",

      logo: "/3nex-logo.png",

      description: [

         "Contributed to e-commerce product workflows, website content management, and admin operations supporting day-to-day business processes.",

         "Assisted with application troubleshooting, issue identification, and technical support for ongoing platform operations.",

         "Supported UI enhancements, product listings, and digital content updates that improve platform usability and customer experience.",

      ],

   },

   {

      period: "JUNE 2025 - DEC 2025",

      role: "Java Full Stack Developer Intern",

      company: "JSPIDERS",

      logo: "/jspiders-logo.png",

      description: [

         "Developed backend applications using Core Java, JDBC, Oracle SQL, and Spring Boot, including RESTful APIs for data management.",

         "Built dynamic, reusable frontend components in React.js for interactive user interfaces.",

      ],

   },

];

/* ================= PROJECTS ================= */

const projects = [

   {

      number: "01",

      title: "DebugMind AI",

      category: "AI / SOFTWARE QUALITY",

      description: [

         "Analyzes source code and identifies code-quality issues.",

         "Explains findings and recommends practical fixes.",

         "Supports developers with contextual AI assistance.",

      ],

      technologies: ["React", "Spring Boot", "Java", "Gemini API", "MySQL"],

      github: "https://github.com/Sanchithaaa/DebugMind-AI",

      media: {

         type: "image",

         src: "/debugmind-ai.png",

         alt: "DebugMind AI project preview",

      },

   },

   {

      number: "02",

      title: "Bluetooth Test Automation Simulator",

      category: "TEST AUTOMATION",

      description: [

         "Simulates Bluetooth device discovery, connection, data transfer and reconnection.",

         "Automates positive and negative scenarios using Python and Pytest.",

         "Uses JSON test data and logging to support test execution and troubleshooting.",

         "Integrates automated test runs with GitHub Actions CI.",

      ],

      technologies: ["Python", "Pytest", "JSON", "Logging", "GitHub Actions"],

      github: "https://github.com/Sanchithaaa/bluetooth-test-automation",

      media: {

         type: "image",

         src: "/bluetooth-test-automation.png",

         alt: "Bluetooth Test Automation Simulator project preview",

      },

   },

   {

      number: "03",

      title: "Employee Task Tracker",

      category: "FULL STACK DEVELOPMENT",

      description: [

         "Built a task management system to assign and track employee tasks.",

         "Developed REST APIs for task operations and data management.",

         "Added dashboard features to monitor task progress.",

      ],

      technologies: ["Java", "Spring Boot", "MySQL", "React"],

      github: "https://github.com/Sanchithaaa/Employee_Task_Tracker",

      media: {

         type: "image",

         src: "/employee-task-tracker.png",

         alt: "Employee Task Tracker project preview",

      },

   },

   {

      number: "04",

      title: "Lightweight Detection Model for Waste Monitoring",

      category: "AI / COMPUTER VISION",

      description: [

         "Developed a lightweight YOLOv5 model for waste detection and classification.",

         "Focused on real-time performance on resource-constrained devices.",

         "Received a department Best Project Award for the smart waste management approach.",

      ],

      technologies: ["Deep Learning", "CNN", "YOLOv5"],

      media: {

         type: "image",

         src: "/waste-monitoring.png",

         alt: "Lightweight Detection Model for Waste Monitoring project preview",

      },

   },

];

/* ================= CERTIFICATIONS ================= */

const certifications = [

   {

      title: "Google's Introduction to AI",

      issuer: "Coursera",

      image: "/certificates/Google's Introduction to AI.jpg",

      file: "/certificates/Google's Introduction to AI.pdf",

   },

   {

      title: "Java & SQL",

      issuer: "HackerRank",

      image: "/certificates/hackerrank-badges.png",

      link: "https://www.hackerrank.com/profile/sanchithaa",

   },

   {

      title: "Postman API Fundamentals",

      issuer: "IEEE Women in Engineering Association",

      image: "/certificates/postman-api-fundamentals.jpeg",

      file: "/certificates/postman-api-fundamentals.jpeg",

   },

   {

      title: "Claude Courses",

      issuer: "Anthropic Academy",

      image: "/certificates/claude-courses.png",

      file: "/certificates/claude-courses.pdf",

      gallery: "/claude-certificates.html",

   },

];

/* ================= EMAIL CONFIGURATION ================= */
const EMAILJS_SERVICE_ID = "service_txag9or";
const EMAILJS_TEMPLATE_ID = "template_iixvrcc";
const EMAILJS_PUBLIC_KEY = "1rmc9zPl6UScxvwZ_";

/* ================= APP ================= */

function App() {

   const [contactStatus, setContactStatus] = useState("");

   const [isSending, setIsSending] = useState(false);

   const handleContactSubmit = async (event) => {
      event.preventDefault();
      if (isSending) return;

      const form = event.currentTarget;
      const name = form.elements.namedItem("name").value.trim();
      const email = form.elements.namedItem("email").value.trim();
      const message = form.elements.namedItem("message").value.trim();

      setIsSending(true);
      setContactStatus("");

      try {
         await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
               // Match the variables used in the EmailJS template.
               name,
               email,
               message,
               title: `Portfolio contact from ${name}`,
               // Also provide common aliases in case the template uses these names.
               to_email: "sanchugowda24@gmail.com",
               from_name: name,
               reply_to: email,
               subject: `Portfolio contact from ${name}`,
            },
            { publicKey: EMAILJS_PUBLIC_KEY }
         );

         form.reset();
         setContactStatus("Message sent successfully! Thank you for contacting me.");
      } catch (error) {
         console.error("Portfolio contact form error:", error);
         const details = error?.text || error?.message || "Unknown EmailJS error";
         setContactStatus(`Email failed: ${details}. Check the EmailJS template's To Email and required variables.`);
      } finally {
         setIsSending(false);
      }
   };

   return (

      <div className="portfolio">

         <style>{`

            /* Certificate thumbnails and working links to the full certificate files. */

            .certifications-section .certificate-image-grid {

               display: grid;

               grid-template-columns: repeat(4, minmax(0, 1fr));

               gap: 18px;

               align-items: stretch;

            }

            .certifications-section .certificate-image-card {

               min-width: 0;

               display: flex;

               flex-direction: column;

               gap: 18px;

               padding: 18px;

               border: 1px solid rgba(170, 195, 215, .8);

               background: rgba(255, 255, 255, .92);

            }

            .certifications-section .certificate-preview-link {

               display: flex;

               align-items: center;

               justify-content: center;

               width: 100%;

               height: 155px;

               padding: 8px;

               overflow: hidden;

               border: 1px solid #e0e7ef;

               background: #f7f9fb;

               text-decoration: none;

            }

            .certifications-section .certificate-preview-image {

               display: block;

               width: 100%;

               height: 100%;

               object-fit: contain;

               background: white;

            }

            .certifications-section .certificate-image-details {

               display: flex;

               flex: 1;

               flex-direction: column;

               align-items: flex-start;

            }

            .certifications-section .certificate-image-details h3 {

               margin: 10px 0 6px;

               color: #263548;

               font-size: 17px;

               line-height: 1.4;

            }

            .certifications-section .certificate-image-details p {

               margin: 0 0 18px;

               color: #64748b;

               font-size: 13px;

               line-height: 1.5;

            }

            .certifications-section .certificate-image-details .certificate-link {

               display: inline-flex;

               align-items: center;

               gap: 6px;

               margin-top: auto;

            }

            @media (max-width: 1000px) {

               .certifications-section .certificate-image-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

            }

            @media (max-width: 560px) {

               .certifications-section .certificate-image-grid { grid-template-columns: 1fr; }

               .certifications-section .certificate-preview-link { height: 190px; }

            }

            .education-section .education-header { display: flex; justify-content: space-between; align-items: end; gap: 24px; margin: 28px 0 34px; }

            .education-section .education-header h2 { margin: 0; }

            .education-section .education-header p { max-width: 320px; margin: 0 0 6px; color: #64748b; line-height: 1.6; }

            .education-section .education-list { display: grid; gap: 16px; }

            .education-section .education-card { position: relative; display: grid; grid-template-columns: 150px minmax(0, 1fr) 36px; gap: 26px; align-items: start; padding: 28px 30px; border: 1px solid rgba(170, 195, 215, .8); background: rgba(255,255,255,.86); }

            .education-section .education-period { padding-top: 3px; color: #4776a0; font-size: 13px; font-weight: 650; letter-spacing: .02em; }

            .education-section .education-level { display: block; margin-bottom: 9px; color: #4776a0; font-size: 10px; font-weight: 750; letter-spacing: .18em; }

            .education-section .education-content h3 { margin: 0; color: #263548; font-size: 21px; line-height: 1.35; }

            .education-section .education-course { margin: 8px 0 12px; color: #5d6f83; line-height: 1.6; }

            .education-section .education-result { display: inline-flex; align-items: center; padding: 6px 10px; border: 1px solid #d5e1eb; background: #f5f9fc; color: #355e82; font-size: 12px; font-weight: 650; }

            .education-section .education-index { justify-self: end; color: #d8e2ea; font-size: 25px; font-weight: 700; line-height: 1; }

            @media (max-width: 700px) {

               .education-section .education-header { display: block; margin-bottom: 24px; }

               .education-section .education-header p { margin-top: 12px; }

               .education-section .education-card { grid-template-columns: 1fr 28px; gap: 10px 14px; padding: 22px 18px; }

               .education-section .education-period { grid-column: 1; grid-row: 1; }

               .education-section .education-content { grid-column: 1; grid-row: 2; }

               .education-section .education-index { grid-column: 2; grid-row: 1; }

               .education-section .education-content h3 { font-size: 19px; }

            }

            /* Experience cards: compact company mark on the left, details on the right. */

            .experience-section .experience-card {

               display: grid;

               grid-template-columns: 104px minmax(0, 1fr);

               align-items: start;

               gap: 28px;

               padding: 30px;

               overflow: hidden;

            }

            .experience-section .experience-brand {

               display: flex;

               align-items: flex-start;

               justify-content: center;

               padding-top: 5px;

               min-width: 0;

            }

            .experience-section .experience-company-logo {

               display: block;

               width: 100%;

               max-width: 145px;

               height: 88px;

               object-fit: contain;

               object-position: center top;

               border: 0;

               border-radius: 0;

               background: transparent;

               box-shadow: none;

            }

            .experience-section .experience-company-logo-1 {

               max-width: 145px;

            }

            .experience-section .experience-company-logo-2 {

               max-width: 135px;

            }

            .experience-section .experience-main { min-width: 0; }

            .experience-section .experience-card h3 {

               max-width: 760px;

               padding-right: 28px;

               overflow-wrap: anywhere;

               line-height: 1.3;

            }

            .experience-section .experience-description {

               margin: 18px 0 0;

               padding-left: 21px;

               color: #344256;

               line-height: 1.65;

            }

            .experience-section .experience-description li + li { margin-top: 5px; }

            .experience-section .experience-number {

               top: 10px; right: 14px; font-size: 25px; opacity: .7;

            }

            @media (max-width: 900px) {

               .experience-section .experience-card { grid-template-columns: 82px minmax(0, 1fr); gap: 20px; padding: 24px; }

               .experience-section .experience-logo-mark { width: 72px; min-height: 72px; font-size: 17px; }

            }

            @media (max-width: 640px) {

               .experience-section .experience-card { grid-template-columns: 64px minmax(0, 1fr); gap: 14px; padding: 18px; }

               .experience-section .experience-brand { padding-top: 2px; }

               .experience-section .experience-logo-mark { width: 58px; min-height: 58px; padding: 4px; border-radius: 10px; font-size: 14px; }

               .experience-section .experience-card h3 { padding-right: 0; font-size: 19px; }

               .experience-section .experience-description { margin-top: 12px; padding-left: 18px; font-size: 14px; }

            }

         `}</style>

         <style>{`

            .projects-list .project-card {

               display: grid;

               grid-template-columns: 42px minmax(0, 1fr) minmax(250px, 34%) 32px;

               align-items: stretch;

               gap: 28px;

            }

            .projects-list .project-description {

               margin: 14px 0 18px;

               padding-left: 20px;

               color: #62748a;

               font-size: 15px;

               line-height: 1.65;

            }

            .projects-list .project-description li + li {

               margin-top: 5px;

            }

            .projects-list .project-media {

  min-width: 0;

  min-height: 0;

  align-self: center;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: visible;

  border: 0;

  border-radius: 0;

  background: transparent;

}

.projects-list .project-media-content {

  display: block;

  width: 100%;

  height: auto;

  min-height: 0;

  max-height: 300px;

  object-fit: contain;

  border: 0;

  border-radius: 8px;

  box-shadow: none;

}

.projects-list .project-media video {

  background: transparent;

  object-fit: contain;

}

            @media (max-width: 900px) {

               .projects-list .project-card {

                  grid-template-columns: 35px minmax(0, 1fr);

                  gap: 15px;

               }

               .projects-list .project-main {

                  grid-column: 2;

               }

               .projects-list .project-description {

                  font-size: 14px;

                  line-height: 1.6;

                  margin: 12px 0 16px;

               }

               .projects-list .project-media {

  grid-column: 2;

  min-height: 0;

  margin-top: 8px;

}

.projects-list .project-media-content {

  min-height: 0;

  max-height: none;

  width: 100%;

  height: auto;

}

               .projects-list .project-arrow {

                  display: none;

               }

            }

            @media (max-width: 460px) {

  .projects-list .project-media-content {

    max-height: none;

  }

}

         `}</style>

         <style>{`

            /* Skills: simple, centered technology-logo gallery. */

            .skills-section .skills-header {

               display: block;

               margin-bottom: 30px;

            }

            .skills-section .skills-header p { display: none; }

            .skills-section .skill-groups {

               display: grid;

               grid-template-columns: minmax(0, 1fr);

               width: 100%;

               gap: 0;

            }

            .skills-section .skill-group {

               display: block;

               min-width: 0;

               padding: 30px 0 34px;

               border-top: 1px solid rgba(170, 195, 215, 0.7);

               background: transparent;

            }

            .skills-section .skill-group:last-child {

               border-bottom: 1px solid rgba(170, 195, 215, 0.7);

            }

            .skills-section .skill-group-header {

               display: block;

               text-align: center;

               margin: 0 0 26px;

            }

            .skills-section .skill-number,

            .skills-section .skill-group-header p { display: none; }

            .skills-section .skill-group-header h3 {

               margin: 0;

               color: #263548;

               font-size: 15px;

               line-height: 1.4;

               font-weight: 750;

               letter-spacing: .24em;

               text-transform: uppercase;

            }

            .skills-section .skill-items {

               display: grid;

               grid-template-columns: repeat(6, minmax(0, 1fr));

               align-items: start;

               justify-items: center;

               gap: 28px 20px;

               width: 100%;

               min-width: 0;

            }

            .skills-section .skill-item {

               display: flex;

               flex-direction: column;

               align-items: center;

               justify-content: flex-start;

               gap: 12px;

               min-width: 0;

               width: 100%;

               min-height: 94px;

               color: #263548;

               font-size: 12px;

               font-weight: 700;

               letter-spacing: .08em;

               line-height: 1.4;

               text-align: center;

               text-transform: uppercase;

               white-space: normal;

            }

            .skills-section .skill-icon {

               display: grid;

               place-items: center;

               width: 52px;

               height: 52px;

               color: #4776a0;

               font-size: 43px;

               flex: 0 0 52px;

            }

            .skills-section .skill-icon svg {

               display: block;

               width: 100%;

               height: 100%;

               max-width: 100%;

               max-height: 100%;

            }

            @media (max-width: 900px) {

               .skills-section .skill-items { grid-template-columns: repeat(4, minmax(0, 1fr)); }

            }

            @media (max-width: 560px) {

               .skills-section .skills-header { margin-bottom: 22px; }

               .skills-section .skill-group { padding: 24px 0 26px; }

               .skills-section .skill-group-header { margin-bottom: 22px; }

               .skills-section .skill-group-header h3 { font-size: 13px; letter-spacing: .16em; }

               .skills-section .skill-items { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px 10px; }

               .skills-section .skill-icon { width: 44px; height: 44px; font-size: 37px; flex-basis: 44px; }

               .skills-section .skill-item { font-size: 10px; min-height: 82px; }

            }

         `}</style>

         {/* ================= NAVBAR ================= */}

         <header className="navbar">

            <div className="nav-inner">

               <a href="#home" className="brand">

                  SANCHITHA

               </a>

               <nav className="nav-links">

                  <a href="#home">Home</a>

                  <a href="#about">About</a>

                  <a href="#skills">Skills</a>

                  <a href="#experience">Experience</a>

                  <a href="#projects">Projects</a>

                  <a href="#certifications">Certifications</a>

               </nav>

               <a href="#contact" className="nav-contact">

                  Contact

               </a>

            </div>

         </header>

         <main className="page">

            {/* ================= HOME ================= */}

            <section id="home" className="section hero-section">

               <div className="background-circle circle-one"></div>

               <div className="background-circle circle-two"></div>

               <div className="section-inner hero-inner">

                  <div className="hero-photo-column">

                     <div className="photo-frame">

                        <img src="/src/assets/Profile.jpeg" alt="Sanchitha" />

                     </div>

                     <div className="availability">

                        <span></span>

                        Open to opportunities

                     </div>

                  </div>

                  <div className="hero-content">

                     <div className="eyebrow">

                        SOFTWARE DEVELOPER <span>•</span> AI / GENAI

                     </div>

                     <h1>

                        Hi, I'm

                        <br />

                        <strong>Sanchitha.</strong>

                     </h1>

                     <p className="hero-description">

                        I build practical software applications and AI-powered

                        solutions with a focus on clean, reliable and user-friendly

                        experiences.

                     </p>

                     <div className="hero-actions">

                        <a href="#projects" className="button button-primary">

                           View My Work

                           <FiArrowUpRight />

                        </a>

                        <a

                           href="/resume.pdf"

                           className="button button-secondary"

                           target="_blank"

                           rel="noreferrer"

                        >

                           Download Resume

                        </a>

                     </div>

                     <div className="social-links">

                        <a

                           href="https://github.com/Sanchithaaa"

                           target="_blank"

                           rel="noreferrer"

                           aria-label="GitHub"

                        >

                           <FaGithub />

                        </a>

                        <a

                           href="https://www.linkedin.com/in/sanchitha-gowda/"

                           target="_blank"

                           rel="noreferrer"

                           aria-label="LinkedIn"

                        >

                           <FaLinkedin />

                        </a>

                        <a

                           href="https://mail.google.com/mail/?view=cm&fs=1&to=sanchugowda24@gmail.com"

                            target="_blank"

                            rel="noreferrer"

                           aria-label="Email"

                        >

                           <FaEnvelope />

                        </a>

                     </div>

                  </div>

               </div>

            </section>

            {/* ================= ABOUT ================= */}

            <section id="about" className="section about-section">

               <div className="background-circle circle-three"></div>

               <div className="section-inner">

                  <div className="section-heading">

                     <span className="section-number">01</span>

                     <span className="section-label">ABOUT ME</span>

                  </div>

                  <div className="about-layout">

                     <div className="about-intro">

                        <h2>

                           Building software

                           <br />

                           with purpose.

                        </h2>

                        <p>

                           I'm a software developer interested in building reliable

                           applications and exploring practical applications of AI in

                           software development.

                        </p>

                        <p>

                           My interests span backend development, frontend engineering,

                           automation and Generative AI. I enjoy taking an idea from

                           concept to a working product.

                        </p>

                     </div>

                     <div className="about-details">

                        <div className="detail-block">

                           <span className="detail-label">FOCUS AREAS</span>

                           <div className="focus-list">

                              <span>Software Development</span>

                              <span>AI / GenAI</span>

                              <span>Test Automation</span>

                              <span>Full Stack Development</span>

                           </div>

                        </div>

                     </div>

                  </div>

               </div>

            </section>

            {/* ================= EDUCATION ================= */}

            <section id="education" className="section education-section">

               <div className="background-circle circle-four"></div>

               <div className="section-inner">

                  <div className="section-heading">

                     <span className="section-number">02</span>

                     <span className="section-label">EDUCATION</span>

                  </div>

                  <div className="education-header">

                     <h2>My academic <br />background.</h2>

                     <p>My education in AI and software foundations.</p>

                  </div>

                  <div className="education-list">

                     <article className="education-card">

                        <div className="education-period">2021 — 2025</div>

                        <div className="education-content">

                           <span className="education-level">BACHELOR'S DEGREE</span>

                           <h3>Canara Engineering College</h3>

                           <p className="education-course">B.E. — Artificial Intelligence &amp; Machine Learning</p>

                           <div className="education-result">CGPA: 8.45</div>

                        </div>

                        <span className="education-index">01</span>

                     </article>

                     <article className="education-card">

                        <div className="education-period">2019 — 2021</div>

                        <div className="education-content">

                           <span className="education-level">CLASS XII / PU</span>

                           <h3>PRN Amratha Bharathi PU College</h3>

                           <p className="education-course">Pre-University Course</p>

                           <div className="education-result">Score: 85%</div>

                        </div>

                        <span className="education-index">02</span>

                     </article>

                     <article className="education-card">

                        <div className="education-period">2018 — 2019</div>

                        <div className="education-content">

                           <span className="education-level">CLASS X / SSLC</span>

                           <h3>Jnanavahini English Medium High School</h3>

                           <p className="education-course">Secondary School Leaving Certificate</p>

                           <div className="education-result">Score: 89.61%</div>

                        </div>

                        <span className="education-index">03</span>

                     </article>

                  </div>

               </div>

            </section>

            {/* ================= SKILLS ================= */}

            <section id="skills" className="section skills-section">

               <div className="background-circle circle-four"></div>

               <div className="section-inner">

                  <div className="section-heading">

                     <span className="section-number">03</span>

                     <span className="section-label">SKILLS</span>

                  </div>

                  <div className="skills-header">

                     <h2>Technical Skills</h2>

                  </div>

                  <div className="skill-groups">

                     {skillGroups.map((group) => (

                        <div className="skill-group" key={group.number}>

                           <div className="skill-group-header">

                              <span className="skill-number">{group.number}</span>

                              <div>

                                 <h3>{group.title}</h3>

                              </div>

                           </div>

                           <div className="skill-items">

                              {group.skills.map((skill) => (

                                 <div className="skill-item" key={skill.name}>

                                    <div className="skill-icon">{skill.icon}</div>

                                    <span>{skill.name}</span>

                                 </div>

                              ))}

                           </div>

                        </div>

                     ))}

                  </div>

               </div>

            </section>

            {/* ================= EXPERIENCE ================= */}

            <section

               id="experience"

               className="section experience-section"

            >

               <div className="background-circle circle-five"></div>

               <div className="section-inner">

                  <div className="section-heading">

                     <span className="section-number">04</span>

                     <span className="section-label">EXPERIENCE</span>

                  </div>

                  <div className="experience-header">

                     <h2>

                        My professional

                        <br />

                        journey.

                     </h2>

                  </div>

                  <div className="timeline">

                     {experiences.map((experience, index) => (

                        <div

                           className="timeline-item"

                           key={`${experience.company}-${index}`}

                        >

                           <div className="timeline-date">

                              {experience.period}

                           </div>

                           <div className="timeline-line">

                              <span></span>

                           </div>

                           <div className="experience-card">

                              <aside className="experience-brand">

                                 <img

                                    className={`experience-company-logo experience-company-logo-${index + 1}`}

                                    src={experience.logo}

                                    alt={`${experience.company} logo`}

                                    loading="lazy"

                                 />

                              </aside>

                              <div className="experience-main">

                                 <span className="experience-role">

                                    {experience.role}

                                 </span>

                                 <h3>{experience.company}</h3>

                                 <ul className="experience-description">

                                    {experience.description.map((point, pointIndex) => (

                                       <li key={pointIndex}>{point}</li>

                                    ))}

                                 </ul>

                              </div>

                              <span className="experience-number">{String(index + 1).padStart(2, "0")}</span>

                           </div>

                        </div>

                     ))}

                  </div>

               </div>

            </section>

            {/* ================= PROJECTS ================= */}

            <section id="projects" className="section projects-section">

               <div className="background-circle circle-six"></div>

               <div className="section-inner">

                  <div className="section-heading">

                     <span className="section-number">05</span>

                     <span className="section-label">PROJECTS</span>

                  </div>

                  <div className="projects-header">

                     <h2>

                        Things I've

                        <br />

                        built.

                     </h2>

                     <p>

                        Selected projects where I applied software development,

                        automation and AI.

                     </p>

                  </div>

                  <div className="projects-list">

                     {projects.map((project) => (

                        <article

                           className="project-card"

                           key={project.number}

                        >

                           <div className="project-number">

                              {project.number}

                           </div>

                           <div className="project-main">

                              <span className="project-category">

                                 {project.category}

                              </span>

                              <h3>{project.title}</h3>

                              <ul className="project-description">

                                 {project.description.map((point, pointIndex) => (

                                    <li key={`${project.number}-point-${pointIndex}`}>{point}</li>

                                 ))}

                              </ul>

                              <div className="project-technologies">

                                 {project.technologies.map((technology) => (

                                    <span key={technology}>{technology}</span>

                                 ))}

                              </div>

                              <div className="project-links">

                                 {project.github && (

                                    <a

                                       href={project.github}

                                       target="_blank"

                                       rel="noreferrer"

                                    >

                                       GitHub

                                       <FiArrowUpRight />

                                    </a>

                                 )}

                              </div>

                           </div>

                           <div className="project-media">

                              {project.media?.type === "video" ? (

                                 <video

                                    className="project-media-content"

                                    src={project.media.src}

                                    controls

                                    muted

                                    playsInline

                                    preload="metadata"

                                    aria-label={project.media.alt}

                                 />

                              ) : (

                                 <img

                                    className="project-media-content"

                                    src={project.media?.src}

                                    alt={project.media?.alt || `${project.title} preview`}

                                    loading="lazy"

                                 />

                              )}

                           </div>

                        </article>

                     ))}

                  </div>

               </div>

            </section>

            {/* ================= CERTIFICATIONS ================= */}

            <section

               id="certifications"

               className="section certifications-section"

            >

               <div className="background-circle circle-seven"></div>

               <div className="section-inner">

                  <div className="section-heading">

                     <span className="section-number">06</span>

                     <span className="section-label">CERTIFICATIONS</span>

                  </div>

                  <div className="certifications-header">

                     <h2>

                        Learning never

                        <br />

                        stops.

                     </h2>

                     <p>

                        Certifications and continuous learning that support my

                        technical journey.

                     </p>

                  </div>

                  <div className="certification-grid certificate-image-grid">

                     {certifications.map((certificate, index) => (

                        <article className="certificate-card certificate-image-card" key={certificate.title}>

                           <a

                              className="certificate-preview-link"

                              href={certificate.gallery || certificate.file || certificate.link}

                              target="_blank"

                              rel="noreferrer"

                              aria-label={`Open ${certificate.title} certificates in a new tab`}

                           >

                              <img

                                 className="certificate-preview-image"

                                 src={certificate.image}

                                 alt={`${certificate.title} certificate preview`}

                                 loading="lazy"

                              />

                           </a>

                           <div className="certificate-image-details">

                              <span className="certificate-label">CERTIFICATE {String(index + 1).padStart(2, "0")}</span>

                              <h3>{certificate.title}</h3>

                              <p>{certificate.issuer}</p>

                              <a className="certificate-link" href={certificate.gallery || certificate.file || certificate.link} target="_blank" rel="noreferrer">

                                 {certificate.gallery ? "View All Certificates" : certificate.link ? "View Badges" : "View Certificate"} <FiArrowUpRight />

                              </a>

                           </div>

                        </article>

                     ))}

                  </div>

               </div>

            </section>

            {/* ================= CONTACT ================= */}

            <section id="contact" className="section contact-section">

               <div className="background-circle circle-eight"></div>

               <div className="section-inner">

                  <div className="section-heading">

                     <span className="section-number">07</span>

                     <span className="section-label">CONTACT</span>

                  </div>

                  <div className="contact-layout">

                     <div className="contact-intro">

                        <span className="eyebrow">

                           HAVE AN OPPORTUNITY?

                        </span>

                        <h2>

                           Let's build

                           <br />

                           something

                           <br />

                           useful.

                        </h2>

                        <p>

                           Whether it's a software opportunity, an interesting project

                           or simply a conversation about technology, feel free to reach

                           out.

                        </p>

                        <div className="contact-info">

                           <div>

                              <span>EMAIL</span>

                              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sanchugowda24@gmail.com"

                            target="_blank"

                            rel="noreferrer">

                                 sanchugowda24@gmail.com

                              </a>

                           </div>

                           <div>

                              <span>LINKEDIN</span>

                              <a

                                 href="https://www.linkedin.com/in/sanchitha-gowda/"

                                 target="_blank"

                                 rel="noreferrer"

                              >

                                 Connect with me

                              </a>

                           </div>

                           <div>

                              <span>GITHUB</span>

                              <a

                                 href="https://github.com/Sanchithaaa"

                                 target="_blank"

                                 rel="noreferrer"

                              >

                                 View my work

                              </a>

                           </div>

                        </div>

                     </div>

                     <form

                        className="contact-form"

                        onSubmit={handleContactSubmit}

                     >

                        <div className="form-row">

                           <div className="form-group">

                              <label htmlFor="name">YOUR NAME</label>

                              <input

                                 id="name"

                                 name="name"

                                 type="text"

                                 placeholder="Enter your name"

                                 required

                              />

                           </div>

                           <div className="form-group">

                              <label htmlFor="email">YOUR EMAIL</label>

                              <input

                                 id="email"

                                 name="email"

                                 type="email"

                                 placeholder="you@example.com"

                                 required

                              />

                           </div>

                        </div>

                        <div className="form-group">

                           <label htmlFor="message">MESSAGE</label>

                           <textarea

                              id="message"

                              name="message"

                              rows="6"

                              placeholder="Tell me about the opportunity..."

                              required

                           ></textarea>

                        </div>

                        <button

                           type="submit"

                           className="button button-primary submit-button"

                           disabled={isSending}

                        >

                           {isSending ? "Sending..." : "Send Message"}

                           {!isSending && <FiArrowUpRight />}

                        </button>

                        {contactStatus && (

                           <p className="contact-form-status" role="status" aria-live="polite">

                              {contactStatus}

                           </p>

                        )}

                     </form>

                  </div>

               </div>

            </section>

         </main>

         {/* ================= FOOTER ================= */}

         <footer className="footer">

            <div>

               <strong>SANCHITHA</strong>

               <span>Software Developer · AI / GenAI</span>

            </div>

            <div className="footer-socials">

               <a

                  href="https://github.com/Sanchithaaa"

                  target="_blank"

                  rel="noreferrer"

                  aria-label="GitHub"

               >

                  <FaGithub />

               </a>

               <a

                  href="https://www.linkedin.com/in/sanchitha-gowda/"

                  target="_blank"

                  rel="noreferrer"

                  aria-label="LinkedIn"

               >

                  <FaLinkedin />

               </a>

               <a

                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sanchugowda24@gmail.com"

                            target="_blank"

                            rel="noreferrer"

                  aria-label="Email"

               >

                  <FaEnvelope />

               </a>

            </div>

            <p>

               © {new Date().getFullYear()} Sanchitha. All rights reserved.

            </p>

         </footer>

      </div>

   );

}

export default App;
