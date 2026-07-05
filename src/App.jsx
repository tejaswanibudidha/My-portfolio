import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowUp, FaCode, FaBrain, FaReact, FaDatabase } from 'react-icons/fa';
import { SiFastapi, SiTensorflow, SiKeras, SiOpencv, SiTailwindcss } from 'react-icons/si';

const resumeUrl = '/resume/Tejaswani_Budidha_Resume.pdf';
const profileUrl = '/images/tejaswani-profile.jpg';
const linkedInUrl = 'https://www.linkedin.com/in/tejaswani-budidha';
const githubUrl = 'https://github.com/tejaswanibudidha';

const navItems = ['About', 'Education', 'Projects', 'Skills', 'Contact'];

const projects = [
  {
    title: 'TalentForge AI',
    description: 'An AI-powered recruitment platform where recruiters post jobs, candidates apply, resumes are analyzed using AI, applicants are ranked based on skill matching, and interview workflows are managed.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/tejaswanibudidha/TalentForge-AI',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Dermavision',
    description: 'An AI-based skin disease detection system using deep learning to identify multiple skin diseases and provide confidence scores with disease information.',
    tech: ['Python', 'TensorFlow', 'EfficientNet', 'Flask'],
    github: 'https://github.com/tejaswanibudidha/Dermavision',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Library Management System',
    description: 'A web-based Library Management System developed during internship for managing books, members, issue/return records, and administrators.',
    tech: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/tejaswanibudidha/Library-Management-System',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Smart Kirana AI',
    description: 'An AI-powered smart grocery management platform with inventory management, analytics, and intelligent business insights.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'AI'],
    github: 'https://github.com/tejaswanibudidha/Smart-Kirana-AI',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Portfolio Website',
    description: 'My personal developer portfolio showcasing my skills, projects, education, certifications, internship experience, and contact information.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/tejaswanibudidha/portfolio-',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'
  }
];

const skills = [
  { title: 'Languages', items: ['Java', 'Python', 'SQL'], icon: <FaCode /> },
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'], icon: <FaReact /> },
  { title: 'Backend', items: ['FastAPI', 'Django', 'REST APIs'], icon: <FaDatabase /> },
  { title: 'Machine Learning', items: ['TensorFlow', 'Keras', 'EfficientNet', 'OpenCV'], icon: <FaBrain /> }
];

const certifications = [
  'Python with Django Internship',
  'AWS Generative AI Foundations',
  'NPTEL Industry 4.0'
];

const leadership = ['Coordinator, Entrepreneurship Development Cell', 'Coordinator, STEPCONE 2025', 'Coordinator, STEPCONE 2026'];

const timeline = [
  { role: 'Python & Django Intern', company: 'Topnotch Softwares Pvt Ltd', period: '2025', description: 'Built backend solutions and strengthened full-stack confidence through practical development work.' }
];

function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const resumeButtons = useMemo(() => [
    { label: 'View Resume', href: resumeUrl, target: '_blank', rel: 'noreferrer' },
    { label: 'Download Resume', href: resumeUrl, download: 'Tejaswani_Budidha_Resume.pdf' }
  ], []);

  return (
    <div className="page-shell">
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <header className="topbar">
        <a href="#hero" className="brand">Tejaswani</a>
        <nav className="nav-links">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
          {resumeButtons.map((button) => (
            <a key={button.label} href={button.href} target={button.target} rel={button.rel} download={button.download} className="pill-btn small">
              {button.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="hero" className="hero section">
          <motion.div className="hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow">Hello, I’m</p>
            <h1>Tejaswani Budidha</h1>
            <div className="typing-text">Aspiring Software Engineer • Machine Learning Engineer • Full Stack Developer</div>
            <p className="hero-copy">I build thoughtful, scalable digital experiences that blend modern web development with machine learning and real-world problem solving.</p>
            <div className="button-row">
              <a href="#contact" className="primary-btn">Hire Me</a>
              <a href="#contact" className="secondary-btn">Contact</a>
              {resumeButtons.map((button) => (
                <a key={button.label} href={button.href} target={button.target} rel={button.rel} download={button.download} className="glass-btn">
                  {button.label}
                </a>
              ))}
            </div>
            <div className="social-row">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="mailto:tejaswanibudidha27@gmail.com" aria-label="Email"><FaEnvelope /></a>
              <a href="tel:+919391643833" aria-label="Phone"><FaPhone /></a>
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <motion.div className="orb orb-one" animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 8 }} />
            <motion.div className="orb orb-two" animate={{ y: [0, 16, 0], rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 10 }} />
            <motion.div className="image-card" style={{ y }}>
              <img src={profileUrl} alt="Tejaswani Budidha" />
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="section about-section">
          <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <p className="eyebrow">About Me</p>
            <h2>Crafting intelligent solutions with purpose and precision.</h2>
          </motion.div>
          <motion.div className="about-grid" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="glass-card large-card">
              <p>I am an aspiring software engineer with a strong foundation in machine learning, full-stack development, and product-minded problem solving. I enjoy turning complex ideas into polished, impactful experiences that connect technology and user needs.</p>
              <div className="tag-row">
                {['Machine Learning', 'Python', 'Java', 'React', 'FastAPI', 'Problem Solving', 'Continuous Learning'].map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
            <div className="glass-card stats-card">
              <div className="stat-box"><strong>3</strong><span>Projects</span></div>
              <div className="stat-box"><strong>3</strong><span>Certifications</span></div>
              <div className="stat-box"><strong>2+</strong><span>Leadership Roles</span></div>
            </div>
          </motion.div>
        </section>

        <section id="education" className="section">
          <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <p className="eyebrow">Education & Experience</p>
            <h2>Academic background and practical exposure.</h2>
          </motion.div>
          <div className="timeline-grid">
            <motion.div className="glass-card timeline-card" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <h3>Education</h3>
              <p><strong>B.Tech in Information Technology</strong><br />GMR Institute of Technology<br />Ongoing • 2023–2027</p>
            </motion.div>
            <motion.div className="glass-card timeline-card" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <h3>Internship</h3>
              <p><strong>Python & Django Intern</strong><br />Topnotch Softwares Pvt Ltd<br />2025</p>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="section">
          <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <p className="eyebrow">Projects</p>
            <h2>Selected work that demonstrates depth and versatility.</h2>
          </motion.div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article className="project-card glass-card" key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} whileHover={{ y: -8, scale: 1.02, rotate: -1 }}>
                <img src={project.image} alt={project.title} />
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tech.map((tech) => <span key={tech} className="tag">{tech}</span>)}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="primary-btn full"><FaGithub /> GitHub</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <p className="eyebrow">Technical Skills</p>
            <h2>Skills built for modern product and AI-driven development.</h2>
          </motion.div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div className="glass-card skill-card" key={skill.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} whileHover={{ scale: 1.03, y: -4 }}>
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <div className="tag-row">
                  {skill.items.map((item) => <span key={item} className="tag">{item}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section">
          <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <p className="eyebrow">Certifications</p>
            <h2>Recognitions that reflect continuous growth.</h2>
          </motion.div>
          <div className="cards-grid">
            {certifications.map((cert) => <motion.div className="glass-card small-card" key={cert}>{cert}</motion.div>)}
          </div>
        </section>

        <section className="section">
          <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <p className="eyebrow">Leadership Experience</p>
            <h2>Leadership roles that strengthened collaboration and initiative.</h2>
          </motion.div>
          <div className="cards-grid">
            {leadership.map((item) => <motion.div className="glass-card small-card" key={item}>{item}</motion.div>)}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <motion.div className="contact-card glass-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s create something meaningful together.</h2>
              <p>Reach out for collaborations, internships, full-time opportunities, or exciting product ideas.</p>
              <div className="contact-list">
                <a href="mailto:tejaswanibudidha27@gmail.com"><FaEnvelope /> tejaswanibudidha27@gmail.com</a>
                <a href="tel:+919391643833"><FaPhone /> +91 9391643833</a>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
              </div>
              <div className="button-row">
                {resumeButtons.map((button) => (
                  <a key={button.label} href={button.href} target={button.target} rel={button.rel} download={button.download} className="primary-btn">
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <div>© 2026 Tejaswani Budidha. Crafted with care.</div>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#hero" className="back-top"><FaArrowUp /></a>
      </footer>
    </div>
  );
}

export default App;