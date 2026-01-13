import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Sections.css";

function ProjectCard({ title, desc, tags, github, live }) {
  return (
    <div className="project-card">
      <div className="project-top">
        <h3>{title}</h3>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" aria-label="Live Demo">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>

      <p className="project-desc">{desc}</p>

      <div className="project-tags">
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Sections() {
  return (
    <>
      <section id="experience" className="section">
  <h2>Experience & Education</h2>
  <p className="section-sub">
    A quick snapshot of my academic background. 
  </p>

  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-dot"></div>

      <div className="timeline-content">
        <div className="timeline-top">
          <h3>Master of Professional Studies</h3>
          <span className="timeline-date">2023 – 2025</span>
        </div>
        <p className="timeline-org">University of Maryland Baltimore County</p>
        <p className="timeline-desc">
          Relevant coursework: Data Analytics, Machine Learning, Statistics, Database Systems.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>

      <div className="timeline-content">
        <div className="timeline-top">
          <h3>Bachelor’s Degree</h3>
          <span className="timeline-date">2018 – 2022</span>
        </div>
        <p className="timeline-org">JNTUH</p>
        <p className="timeline-desc">
          Focus: Data structures, SQL, Python, and business-focused analytics projects.
        </p>
      </div>
    </div>
  </div>
</section>


      <section id="projects" className="section">
        <h2>Projects</h2>
        <p className="section-sub">
          A few projects showcasing dashboards, analytics, and full-stack work.
        </p>

        <div className="projects-grid">
          <ProjectCard
            title="Pharmaceutical Drug Price Prediction"
            desc="Built an interactive dashboard to track revenue, conversion, and funnel performance with automated refresh and drilldowns."
            tags={["Power BI", "SQL", "DAX", "ETL"]}
            github="https://github.com/"
            live="https://example.com"
          />

          <ProjectCard
            title="Big data"
            desc="Developed clustering-based segmentation and automated reporting to support targeting strategies and retention insights."
            tags={["Python", "Pandas", "Scikit-learn", "Tableau"]}
            github="https://github.com/"
            live="https://example.com"
          />

          <ProjectCard
            title="Credit Card Fraud detection"
            desc="Designed and built a responsive portfolio with smooth scroll navigation, glass UI, and reusable components."
            tags={["React", "Vite", "CSS", "UI"]}
            github="https://github.com/"
            live="https://example.com"
          />
        </div>
      </section>

      <section id="contact" className="section contact-section">
   <h2>Contact</h2>
  <p className="section-sub">
    Feel free to reach out for opportunities, collaborations, or a quick chat.
  </p>

  <div className="contact-wrapper">
    <div className="contact-left">
      <p>
        I’m always open to discussing data analytics projects, dashboarding work,
        and full-stack ideas. If you have something in mind, let’s talk.
      </p>
    </div>

    <div className="contact-right">
      <div className="contact-row">
        <span className="label">Email</span>
        <a href="mailto:yourname@email.com">uppala.usk@email.com</a>
      </div>

      <div className="contact-row">
        <span className="label">LinkedIn</span>
        <a
          href="https://www.linkedin.com/in/YOUR_USERNAME/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/ushasaikiran
        </a>
      </div>

      <div className="contact-row">
        <span className="label">Location</span>
        <span>United States</span>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Sections;
