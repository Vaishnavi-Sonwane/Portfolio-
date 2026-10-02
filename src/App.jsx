import React, { useState } from "react";
import "./index.css";

/* =========================================================
   AUTOMATICALLY LOAD ALL CERTIFICATE IMAGES
   Folder: src/Certificates/
   ========================================================= */

const certificateFiles = import.meta.glob(
  "./Certificates/*.{jpeg,jpg,png}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

/* Find certificate image by filename keyword */
function getCertificateImage(keyword) {
  const file = Object.entries(certificateFiles).find(([path]) =>
    path.toLowerCase().includes(keyword.toLowerCase())
  );

  return file ? file[1] : "";
}

function App() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  /* =========================================================
     PROJECTS
     ========================================================= */

  const projects = [
    {
      number: "01",
      title: "Personal Finance Tracker",
      description:
        "A Python desktop application for tracking expenses, managing budgets and savings, organizing spending categories, and generating visual financial reports.",
      tags: ["Python", "Tkinter", "OpenPyXL", "Matplotlib"],
    },

    {
      number: "02",
      title: "Data Analytics Dashboard",
      description:
        "An interactive Power BI dashboard built to explore retail data, identify trends, analyze revenue and present useful business insights.",
      tags: ["Power BI", "Power Query", "Excel", "Data Analytics"],
    },

    {
      number: "03",
      title: "Medi-4-U",
      description:
        "A community-focused application concept that helps people donate unused medicines and connect available medicines with people who need them.",
      tags: ["Community", "Healthcare", "Database"],
    },

    {
      number: "04",
      title: "AI-Powered Data Analyst & SQL Copilot",
      description:
        "Built an AI analytics platform that converts natural-language questions into validated SQL, performs automated EDA and anomaly detection, recommends visualizations/KPIs, and generates explainable business insights from uploaded datasets.",
      tags: ["Python", "SQL", "AI", "Data Analytics"],
    },
  ];

  /* =========================================================
     EXPERIENCE
     ========================================================= */

  const experiences = [
    {
      title: "Data Analytics Intern",
      organization: "Cognifyz Technologies",
      period: "Internship",
      description:
        "Worked on data exploration, analysis and visualization tasks using analytical tools and business datasets.",
      tags: ["Data Analytics", "Python", "Power BI"],
    },

    {
      title: "Data Visualization & Analytics Simulations",
      organization: "Forage",
      period: "Virtual Experience",
      description:
        "Completed practical data analytics and visualization simulations involving business scenarios, data interpretation, dashboard creation and analytical insights.",
      tags: ["Data Visualization", "Power BI", "Analytics"],
    },
  ];

  /* =========================================================
     CERTIFICATIONS
     ========================================================= */

  const certificates = [
    {
      title: "Data Analytics Internship",
      organization: "Cognifyz Technologies",
      keyword: "cognifyz",
    },

    {
      title: "Data Analytics Job Simulation",
      organization: "Deloitte",
      keyword: "deloitte",
    },

    {
      title: "EY Techathon 6.0 – Round 2",
      organization: "EY",
      keyword: "ey-techathon",
    },

    {
      title: "Equity Edge E-Summit '25",
      organization: "Jadavpur University",
      keyword: "equity-edge",
    },

    {
      title: "Genathon 3.0 Hack Certificate",
      organization: "IIT Nagpur",
      keyword: "genathon",
    },

    {
      title: "HackIndia Spark-12",
      organization: "HackIndia · BrainForge AI",
      keyword: "hackindia",
    },

    {
      title: "Employment Communication – Elite",
      organization: "NPTEL · IIT Kharagpur",
      keyword: "employment-communication",
    },

    {
      title: "Data Analytics Internship",
      organization: "Persevex",
      keyword: "persevex",
    },

    {
      title: "TATA Crucible Certificate",
      organization: "TATA",
      keyword: "tata-crucible",
    },
  ];

  /* =========================================================
     SKILLS
     ========================================================= */

  const skills = [
    "Python",
    "C",
    "C++",
    "Java",
    "SQL",
    "Power BI",
    "Excel",
    "Power Query",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tkinter",
    "OpenPyXL",
    "Matplotlib",
    "Git",
    "GitHub",
    "Data Analytics",
  ];

  return (
    <div className="portfolio">

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            Vaishnavi<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#certifications">Certifications</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>


      {/* =====================================================
          HOME
          ===================================================== */}

      <section id="home" className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <p className="eyebrow">
              HELLO I'M,
            </p>

            <h1>
              Vaishnavi <span>Sonwane</span>
            </h1>

            <h2>
              Data Analyst & Computer Engineering Student
            </h2>

            <p className="hero-description">
              I enjoy transforming data into meaningful insights and
              building practical technology solutions using Python,
              SQL, Power BI and modern development tools.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="primary-btn">
                View Projects
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>

            </div>

            <div className="social-mini">

              <a
                href="https://github.com/Vaishnavi-Sonwane"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/vaishnavi-sonwane-ba4274342/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>


          <div className="hero-image-wrapper">

            <div className="hero-glow"></div>

            <img
              src="/src/assets/profile.jpg"
              alt="Vaishnavi Sonwane"
              className="hero-image"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
          ===================================================== */}

      <section id="about" className="section">

        <div className="container">

          <p className="section-label">
            ABOUT ME
          </p>

          <h2 className="section-title">
            Turning data into useful solutions.
          </h2>

          <p className="about-text">
            I am a Computer Engineering student interested in Data
            Analytics, Python, SQL, Power BI and AI-driven applications.
            I enjoy working on projects that combine programming, data
            and real-world problem solving.
          </p>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
          ===================================================== */}

      <section id="projects" className="section dark-section">

        <div className="container">

          <p className="section-label">
            MY WORK
          </p>

          <h2 className="section-title">
            Projects
          </h2>

          <div className="projects-grid">

            {projects.map((project) => (

              <div
                key={project.number}
                className="project-card"
              >

                <div className="card-top">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="arrow">
                    ↗
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="tags">

                  {project.tags.map((tag) => (

                    <span key={tag}>
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE
          ===================================================== */}

      <section id="experience" className="section">

        <div className="container">

          <p className="section-label">
            EXPERIENCE
          </p>

          <h2 className="section-title">
            Experience
          </h2>

          <div className="experience-grid">

            {experiences.map((experience, index) => (

              <div
                className="experience-card"
                key={index}
              >

                <div className="experience-number">
                  0{index + 1}
                </div>

                <div className="experience-content">

                  <p className="experience-period">
                    {experience.period}
                  </p>

                  <h3>
                    {experience.title}
                  </h3>

                  <h4>
                    {experience.organization}
                  </h4>

                  <p>
                    {experience.description}
                  </p>

                  <div className="tags">

                    {experience.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CERTIFICATIONS
          ===================================================== */}

      <section
        id="certifications"
        className="section dark-section"
      >

        <div className="container">

          <p className="section-label">
            ACHIEVEMENTS
          </p>

          <h2 className="section-title">
            Certifications
          </h2>

          <p className="section-description">
            Certifications, internships, hackathons and professional
            achievements.
          </p>


          <div className="certificate-grid">

            {certificates.map((certificate) => {

              const image = getCertificateImage(
                certificate.keyword
              );

              return (

                <div
                  key={
                    certificate.title +
                    certificate.organization
                  }
                  className="certificate-card"
                >

                  {/* IMAGE */}

                  <div className="certificate-image-container">

                    {image ? (

                      <img
                        src={image}
                        alt={certificate.title}
                        className="certificate-image"
                      />

                    ) : (

                      <div className="certificate-error">
                        Certificate preview unavailable
                      </div>

                    )}

                  </div>


                  {/* DETAILS */}

                  <div className="certificate-content">

                    <div className="certificate-line"></div>

                    <h3>
                      {certificate.title}
                    </h3>

                    <p>
                      {certificate.organization}
                    </p>

                    <button
                      className="certificate-button"
                      onClick={() =>
                        setSelectedCertificate({
                          ...certificate,
                          image,
                        })
                      }
                    >
                      View Certificate ↗
                    </button>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CERTIFICATE POPUP
          ===================================================== */}

      {selectedCertificate && (

        <div
          className="certificate-modal"
          onClick={() =>
            setSelectedCertificate(null)
          }
        >

          <div
            className="certificate-modal-box"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelectedCertificate(null)
              }
            >
              ×
            </button>

            <div className="modal-heading">

              <p>
                {selectedCertificate.organization}
              </p>

              <h3>
                {selectedCertificate.title}
              </h3>

            </div>

            <div className="modal-image-container">

              {selectedCertificate.image ? (

                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                />

              ) : (

                <p>
                  Certificate image not found.
                </p>

              )}

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          SKILLS
          ===================================================== */}

      <section id="skills" className="section">

        <div className="container">

          <p className="section-label">
            TECHNOLOGIES
          </p>

          <h2 className="section-title">
            Skills
          </h2>

          <div className="skills-container">

            {skills.map((skill) => (

              <span
                className="skill-pill"
                key={skill}
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
          ===================================================== */}

      <section
        id="contact"
        className="section dark-section"
      >

        <div className="container contact-container">

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2 className="section-title">
            Let's Connect
          </h2>

          <p className="contact-text">
            Interested in data analytics, technology and building
            useful projects. Feel free to connect with me.
          </p>


          <div className="contact-buttons">

            <a
              href="mailto:vaishnaviksonwane2006@gmail.com"
              className="primary-btn"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/vaishnavi-sonwane-ba4274342/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Vaishnavi-Sonwane"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub ↗
            </a>

          </div>


          <div className="email-display">
            vaishnaviksonwane2006@gmail.com
          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="footer">

        <p>
          © 2026 Vaishnavi Sonwane. All rights reserved.
        </p>

        <div>

          <a
            href="https://github.com/Vaishnavi-Sonwane"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vaishnavi-sonwane-ba4274342/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;