import { useEffect, useState } from 'react';
import './App.css'

// Student Task Manager
import stmLogin from './assets/projects/student-task-manager/login.png';
import stmDashboard from './assets/projects/student-task-manager/dashboard.jpg';
import stmTasks from './assets/projects/student-task-manager/tasks.jpg';

// UBMSConnect
import ubmsLogin from './assets/projects/ubmsconnect/login.png';
import ubmsDashboard from './assets/projects/ubmsconnect/dashboard.png';
import ubmsVenue from './assets/projects/ubmsconnect/venue.png';

// SwiftPOS
import swiftLogin from './assets/projects/swiftpos/login.png';
import swiftDashboard from './assets/projects/swiftpos/dashboard.png';
import swiftProducts from './assets/projects/swiftpos/products.png';

// Achievements / Certificates
import htmlCssCert from './assets/achievements/html-css-certificate.png';
import securityCert from './assets/achievements/enterprise-security-certificate.png';
import csharpCert from './assets/achievements/csharp-certificate.png';

function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  if (!selectedCertificate) return;

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setSelectedCertificate(null);
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [selectedCertificate]);
  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">
          Portfolio<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About Me</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''}>Achievements</a>
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow"></div>

          <div className="hero-content">
            <div className="intro-label">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="hero-greeting">Hello, I'm</p>

            <h1>
              John Paul
              <br />
              <span>Pascual.</span>
            </h1>

            <h2>IT Student <span>/</span> Aspiring Developer</h2>

            <p className="hero-description">
              Passionate about technology, programming, and building
              digital solutions. Constantly learning, experimenting,
              and turning ideas into functional applications.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                Explore My Work <span>↗</span>
              </a>

              <a href="#about" className="btn-secondary">
                More About Me
              </a>
            </div>

            <div className="hero-footer">
              <span>BASED IN THE PHILIPPINES</span>
              <span>SCROLL TO EXPLORE ↓</span>
            </div>
          </div>

<div className="hero-image-area">
  <div className="abstract-visual">

    <div className="abstract-light light-one"></div>
    <div className="abstract-light light-two"></div>

    <div className="abstract-glow"></div>

    <div className="abstract-orbit orbit-one"></div>
    <div className="abstract-orbit orbit-two"></div>

    <div className="abstract-panel"></div>

    <div className="abstract-tile tile-one"></div>
    <div className="abstract-tile tile-two"></div>
    <div className="abstract-tile tile-three"></div>

    <div className="abstract-dot dot-one"></div>
    <div className="abstract-dot dot-two"></div>
    <div className="abstract-dot dot-three"></div>

    <div className="abstract-particle particle-one"></div>
    <div className="abstract-particle particle-two"></div>
    <div className="abstract-particle particle-three"></div>

  </div>
</div>
        </section>


        {/* ABOUT ME SECTION */}
        <section className="about-section reveal" id="about">
          <div className="section-heading">
            <span className="section-label">GET TO KNOW ME</span>
            <h2>About <span>Me.</span></h2>
            <p>A little introduction about who I am and what I do.</p>
          </div>

          <div className="about-content">
            <div className="about-text">
              <h3>Turning curiosity into creativity.</h3>

              <p>
                I'm John Paul Pascual, an Information Technology
                student at La Consolacion University Philippines.
                I have a strong interest in technology, programming,
                and software development.
              </p>

              <p>
                Throughout my academic journey, I've worked on
                different projects that helped me develop my
                technical skills and understand how technology
                can solve real-world problems.
              </p>

              <p>
                I'm continuously learning, exploring new
                technologies, and improving my abilities as
                an aspiring developer.
              </p>
            </div>

            <div className="about-details">

              <div className="about-card">
                <span className="about-icon">🎓</span>
                <div>
                  <h4>Education</h4>
                  <p>Bachelor of Science in Information Technology</p>
                  <span>La Consolacion University Philippines</span>
                </div>
              </div>

              <div className="about-card">
                <span className="about-icon">💻</span>
                <div>
                  <h4>Area of Interest</h4>
                  <p>Web and Software Development</p>
                  <span>Building practical digital solutions</span>
                </div>
              </div>

              <div className="about-card">
                <span className="about-icon">🚀</span>
                <div>
                  <h4>Current Status</h4>
                  <p>BSIT Student</p>
                  <span>Graduating 2026</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        
        {/* SKILLS SECTION */}
        <section className="skills-section reveal" id="skills">
          <div className="section-heading">
            <span className="section-label">WHAT I WORK WITH</span>
            <h2>My <span>Skills.</span></h2>
            <p>Technologies and tools I've used throughout my learning journey.</p>
          </div>

          <div className="skills-grid">

            <div className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">⌨</span>
                <h3>Programming Languages</h3>
              </div>
              <p>Languages I've worked with in academic and personal projects.</p>
              <div className="skill-tags">
                <span>Java</span>
                <span>JavaScript</span>
                <span>PHP</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">🌐</span>
                <h3>Web Development</h3>
              </div>
              <p>Technologies for creating websites and interactive applications.</p>
              <div className="skill-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>React</span>
                <span>Vite</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">🗄️</span>
                <h3>Database Management</h3>
              </div>
              <p>Working with databases to store and manage application data.</p>
              <div className="skill-tags">
                <span>MySQL</span>
                <span>SQLite</span>
                <span>phpMyAdmin</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">🛠️</span>
                <h3>Development Tools</h3>
              </div>
              <p>Tools and environments used for development and testing.</p>
              <div className="skill-tags">
                <span>VS Code</span>
                <span>Android Studio</span>
                <span>XAMPP</span>
                <span>Git</span>
              </div>
            </div>

          </div>
        </section>

        <section className="projects-section reveal" id="projects">
          <div className="section-heading">
            <span className="section-label">MY RECENT WORK</span>
            <h2>Featured <span>Projects.</span></h2>
            <p>A collection of applications and systems I've developed throughout my IT journey.</p>
          </div>

          <div className="projects-grid">

            {/* Student Task Manager */}
            <div className="project-card">
              <div className="project-images">
                <img src={stmLogin} alt="Student Task Manager Login" />
                <img src={stmDashboard} alt="Student Task Manager Dashboard" />
                <img src={stmTasks} alt="Student Task Manager Tasks" />
              </div>
              <div className="project-info">
                <span className="project-type">ANDROID APPLICATION</span>
                <h3>Student Task Manager</h3>
                <p>An Android application designed to help students organize, manage, and track their daily academic tasks.</p>
                <div className="skill-tags">
                  <span>Java</span>
                  <span>SQLite</span>
                  <span>Android Studio</span>
                </div>
              </div>
            </div>

            {/* UBMSConnect */}
            <div className="project-card">
              <div className="project-images">
                <img src={ubmsLogin} alt="UBMSConnect Login" />
                <img src={ubmsDashboard} alt="UBMSConnect Dashboard" />
                <img src={ubmsVenue} alt="UBMSConnect Venue Management" />
              </div>
              <div className="project-info">
                <span className="project-type">WEB APPLICATION</span>
                <h3>UBMSConnect</h3>
                <p>A web-based system for monitoring university events, staff tasks, and venue and utility availability.</p>
                <div className="skill-tags">
                  <span>PHP</span>
                  <span>JavaScript</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>

            {/* SwiftPOS */}
            <div className="project-card">
              <div className="project-images">
                <img src={swiftLogin} alt="SwiftPOS Login" />
                <img src={swiftDashboard} alt="SwiftPOS Dashboard" />
                <img src={swiftProducts} alt="SwiftPOS Products" />
              </div>
              <div className="project-info">
                <span className="project-type">WEB APPLICATION</span>
                <h3>SwiftPOS</h3>
                <p>A point-of-sale system designed to manage products and streamline sales transactions.</p>
                <div className="skill-tags">
                  <span>PHP</span>
                  <span>JavaScript</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="achievements-section reveal" id="achievements">
  <div className="section-heading">
    <span className="section-label">MILESTONES & LEARNING</span>
    <h2>Certifications & <span>Achievements.</span></h2>
    <p>Certifications I've earned through continuous learning and skill development.</p>
  </div>

  <div className="achievements-grid">

  <div className="achievement-card">
    <img
      src={htmlCssCert}
      alt="HTML/CSS Skill Assessment Certificate"
      onClick={() =>
        setSelectedCertificate({
          src: htmlCssCert,
          alt: 'HTML/CSS Skill Assessment Certificate',
        })
      }
    />
    <div className="achievement-info">
      <span>WEB DEVELOPMENT</span>
      <h3>HTML/CSS Skill Assessment</h3>
      <p>TestDome</p>
      <small>August 8, 2026</small>
    </div>
  </div>

  <div className="achievement-card">
    <img
      src={securityCert}
      alt="Fundamentals of Enterprise Security Certificate"
      onClick={() =>
        setSelectedCertificate({
          src: securityCert,
          alt: 'Fundamentals of Enterprise Security Certificate',
        })
      }
    />
    <div className="achievement-info">
      <span>CYBERSECURITY</span>
      <h3>Fundamentals of Enterprise Security</h3>
      <p>CloudSywft</p>
      <small>April 22, 2026</small>
    </div>
  </div>

  <div className="achievement-card">
    <img
      src={csharpCert}
      alt="Foundational C# With Microsoft Certificate"
      onClick={() =>
        setSelectedCertificate({
          src: csharpCert,
          alt: 'Foundational C# With Microsoft Certificate',
        })
      }
    />
    <div className="achievement-info">
      <span>PROGRAMMING</span>
      <h3>Foundational C# With Microsoft</h3>
      <p>freeCodeCamp</p>
      <small>October 11, 2025</small>
    </div>
  </div>

</div>
</section>

{selectedCertificate && (
  <div
    className="certificate-modal"
    onClick={() => setSelectedCertificate(null)}
  >
    <button
      className="certificate-modal-close"
      onClick={() => setSelectedCertificate(null)}
      aria-label="Close certificate preview"
    >
      ×
    </button>

    <img
      src={selectedCertificate.src}
      alt={selectedCertificate.alt}
      onClick={(event) => event.stopPropagation()}
    />
  </div>
)}


        <section className="contact-section reveal" id="contact">
          <div className="contact-content">
            <span className="section-label">GET IN TOUCH</span>

            <h2>Let's Work <span>Together.</span></h2>

            <p>
              I'm always open to new opportunities, collaborations,
              and meaningful projects. Feel free to reach out!
            </p>

            <div className="contact-email">
              <span>EMAIL ME AT</span>
              <a href="mailto:johnpaul.pascual@email.lcup.edu.ph">
                johnpaul.pascual@email.lcup.edu.ph
              </a>
            </div>

            <div className="contact-buttons">
              <a
                href="mailto:johnpaul.pascual@email.lcup.edu.ph"
                className="contact-primary"
              >
                Send Me an Email ↗
              </a>

              <a
                href="https://github.com/Kenchum"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-secondary"
              >
                Visit My GitHub ↗
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© 2026 John Paul Pascual. All rights reserved.</p>
          <a href="#home">Back to Top ↑</a>
        </footer>



      </main>
    </>
  )
}

export default App
