import { useEffect, useRef, useState } from 'react';
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
  const [selectedProject, setSelectedProject] = useState(null);

  // Project carousel drag
  const projectDragStartX = useRef(null);

  // About Me vertical carousel
  const aboutDetailsRef = useRef(null);

  const aboutDragRef = useRef({
    isDragging: false,
    startY: 0,
    scrollTop: 0,
  });

  const handleAboutPointerDown = (event) => {
    if (event.pointerType === 'touch') return;

    aboutDragRef.current = {
      isDragging: true,
      startY: event.clientY,
      scrollTop: aboutDetailsRef.current.scrollTop,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleAboutPointerMove = (event) => {
    if (!aboutDragRef.current.isDragging) return;

    const distance = event.clientY - aboutDragRef.current.startY;

    aboutDetailsRef.current.scrollTop =
      aboutDragRef.current.scrollTop - distance;
  };

  const handleAboutPointerUp = () => {
    aboutDragRef.current.isDragging = false;
  };
  const scrollAboutDetails = (direction) => {
  const container = aboutDetailsRef.current;
  if (!container) return;

  const firstCard = container.querySelector('.about-card');
  const distance = firstCard ? firstCard.offsetHeight + 16 : 200;

  container.scrollBy({
    top: direction * distance,
    behavior: 'smooth',
  });
};

  // Project image groups
  const projectImageGroups = {
    studentTaskManager: [
      { src: stmLogin, alt: 'Student Task Manager Login' },
      { src: stmDashboard, alt: 'Student Task Manager Dashboard' },
      { src: stmTasks, alt: 'Student Task Manager Tasks' },
    ],

    ubmsConnect: [
      { src: ubmsLogin, alt: 'UBMSConnect Login' },
      { src: ubmsDashboard, alt: 'UBMSConnect Dashboard' },
      { src: ubmsVenue, alt: 'UBMSConnect Venue Management' },
    ],

    swiftPOS: [
      { src: swiftLogin, alt: 'SwiftPOS Login' },
      { src: swiftDashboard, alt: 'SwiftPOS Dashboard' },
      { src: swiftProducts, alt: 'SwiftPOS Products' },
    ],
  };
    
    const changeProjectImage = (direction) => {
      setSelectedProject((current) => {
        if (!current) return current;

        const imageCount = current.images.length;
        const nextIndex = (current.index + direction + imageCount) % imageCount;

        return { ...current, index: nextIndex };
      });
    };

    const handleProjectPointerDown = (event) => {
      projectDragStartX.current = event.clientX;
      event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handleProjectPointerUp = (event) => {
      if (projectDragStartX.current === null) return;

      const dragDistance = event.clientX - projectDragStartX.current;
      projectDragStartX.current = null;

      if (Math.abs(dragDistance) > 45) {
        changeProjectImage(dragDistance < 0 ? 1 : -1);
      }
    };

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

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      } else if (event.key === 'ArrowRight') {
        changeProjectImage(1);
      } else if (event.key === 'ArrowLeft') {
        changeProjectImage(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);
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
    Hi! I'm <strong>John Paul Pascual</strong>, an Information Technology
    student at <strong>La Consolacion University Philippines</strong>.
  </p>

  <p>
    My interest in technology started when I was young.
    My uncle introduced me to computers, and ever since
    then, I've always been fascinated by them. I enjoyed
    exploring what computers could do, and over time,
    that curiosity grew into a deeper interest in technology.
  </p>

  <p>
    One of the people who inspired me to explore programming
    was Michael Reeves, a YouTuber known for creating unusual
    and entertaining technology projects. Watching what he
    could build made coding look exciting, and it encouraged
    me to try creating things of my own.
  </p>

  <p>
    As I continued my journey in Information Technology,
    I started working on different projects, from Android
    applications to web-based systems. Each experience has
    helped me learn something new and develop my skills
    along the way.
  </p>

  <p>
    I'm still exploring, experimenting, and discovering
    what I'm capable of building. For me, that's what makes
    learning technology exciting.
  </p>
</div>

            
<div className="about-details-shell">
  <button
    className="about-carousel-arrow about-carousel-arrow-up"
    type="button"
    onClick={() => scrollAboutDetails(-1)}
    aria-label="Scroll up"
  >
    ↑
  </button>

<div
  className="about-details"
  ref={aboutDetailsRef}
  onPointerDown={handleAboutPointerDown}
  onPointerMove={handleAboutPointerMove}
  onPointerUp={handleAboutPointerUp}
  onPointerCancel={handleAboutPointerUp}
>
  <div className="about-carousel">
    <div className="about-carousel-track">

  {/* What Inspires Me */}
  <div className="about-card">
    <span className="about-icon">💡</span>
    <div>
      <h4>What Inspires Me</h4>
      <p>Creative Technology and Programming</p>
      <span>Inspired by creators like Michael Reeves</span>
    </div>
  </div>

  {/* Education */}
  <div className="about-card">
    <span className="about-icon">🎓</span>
    <div>
      <h4>Education</h4>
      <p>Bachelor of Science in Information Technology</p>
      <span>La Consolacion University Philippines</span>
    </div>
  </div>

  {/* Area of Interest */}
  <div className="about-card">
    <span className="about-icon">💻</span>
    <div>
      <h4>Area of Interest</h4>
      <p>Web and Software Development</p>
      <span>Building practical digital solutions</span>
    </div>
  </div>

  {/* Current Status */}
  <div className="about-card">
    <span className="about-icon">🚀</span>
    <div>
      <h4>Current Status</h4>
      <p>BSIT Student</p>
      <span>Graduating 2027</span>
    </div>
  </div>

  {/* Future Goals */}
  <div className="about-card">
    <span className="about-icon">🎯</span>
    <div>
      <h4>Future Goals</h4>
      <p>Become a Skilled Developer</p>
      <span>Keep learning and building useful applications</span>
      </div>
    </div>
  </div>
</div>
</div>

  <button
    className="about-carousel-arrow about-carousel-arrow-down"
    type="button"
    onClick={() => scrollAboutDetails(1)}
    aria-label="Scroll down"
  >
    ↓
  </button>
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
                  {projectImageGroups.studentTaskManager.map((image, index) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      onClick={() =>
                        setSelectedProject({
                          title: 'Student Task Manager',
                          images: projectImageGroups.studentTaskManager,
                          index,
                        })
                      }
                    />
                  ))}
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
                {projectImageGroups.ubmsConnect.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    onClick={() =>
                      setSelectedProject({
                        title: 'UBMSConnect',
                        images: projectImageGroups.ubmsConnect,
                        index,
                      })
                    }
                  />
                ))}
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
                {projectImageGroups.swiftPOS.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    onClick={() =>
                      setSelectedProject({
                        title: 'SwiftPOS',
                        images: projectImageGroups.swiftPOS,
                        index,
                      })
                    }
                  />
                ))}
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



{selectedProject && (
  <div
    className="project-preview-modal"
    onClick={() => setSelectedProject(null)}
  >
    <button
      className="project-preview-close"
      onClick={() => setSelectedProject(null)}
      aria-label="Close project preview"
    >
      ×
    </button>

    <div
      className="project-preview-content"
      onClick={(event) => event.stopPropagation()}
    >
      <h3>{selectedProject.title}</h3>

      <div className="project-preview-viewer">
        <button
          className="project-preview-arrow"
          onClick={() => changeProjectImage(-1)}
          aria-label="Previous project image"
        >
          ‹
        </button>

        <div
          className="project-preview-image-wrap"
          onPointerDown={handleProjectPointerDown}
          onPointerUp={handleProjectPointerUp}
          onPointerCancel={() => {
            projectDragStartX.current = null;
          }}
        >
          <img
            src={selectedProject.images[selectedProject.index].src}
            alt={selectedProject.images[selectedProject.index].alt}
            draggable="false"
          />
        </div>

        <button
          className="project-preview-arrow"
          onClick={() => changeProjectImage(1)}
          aria-label="Next project image"
        >
          ›
        </button>
      </div>

      <p className="project-preview-counter">
        {selectedProject.index + 1} / {selectedProject.images.length}
      </p>
    </div>
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
