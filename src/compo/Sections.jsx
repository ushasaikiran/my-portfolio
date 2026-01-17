import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Sections.css";

import drugpricingbehaviourImg from "../assets/projects/drugpricingbehaviour.png";
import carcrashImg from "../assets/projects/carcrashdb.png";
import ccfraudImg from "../assets/projects/ccfraud.jpg";

function ProjectCard({ title, desc, tags, github, live, image, meta }) {
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

      {meta && (
        <div className="project-meta">
          <span className="meta-pill">{meta}</span>
        </div>
      )}

      <p className="project-desc">{desc}</p>

      <div className="project-tags">
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      {image && (
        <div className="project-media">
          <img src={image} alt={`${title} preview`} loading="lazy" />
        </div>
      )}
    </div>
  );
}

function Sections() {
  return (
    <div className="page-wrap">
      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <h2>Experience & Education</h2>
        <p className="section-sub">A quick snapshot of my academic background.</p>

        <div className="edu-timeline">
          <div className="edu-item">
            <div className="edu-marker">
              <span className="edu-dot" />
              <span className="edu-line" />
            </div>

            <div className="edu-content">
              <div className="edu-top">
                <h3>Master of Professional Studies in Data Science</h3>
                <span className="edu-date">Jan 2024 – Dec 2025</span>
              </div>
              <div className="edu-org">University of Maryland Baltimore County, USA</div>
              <div className="edu-desc">
                Relevant coursework: Data Analytics, Machine Learning, Statistics, Database Systems.
              </div>
            </div>
          </div>

          <div className="edu-item">
            <div className="edu-marker">
              <span className="edu-dot" />
              <span className="edu-line" />
            </div>

            <div className="edu-content">
              <div className="edu-top">
                <h3>Bachelor’s Degree in Electronics</h3>
                <span className="edu-date">Jun 2018 – May 2022</span>
              </div>
              <div className="edu-org">JNTUH</div>
              <div className="edu-desc">
                Focus: VLSI, Logic Gates, Circuit Design, Programming, and analytics-focused projects.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <p className="section-sub">
          A few projects showcasing dashboards, analytics, and full-stack work.
        </p>

        <div className="projects-grid">
          <ProjectCard
            title="Pharmaceutical Drug Price Prediction"
            meta="Machine Learning + Forecasting"
            desc="Developed a machine learning model to predict pharmaceutical drug price fluctuations by integrating Medicare Part D, AMP, and recall datasets. Analyzed the impact of patent expirations and regulatory actions using Random Forest and Stacking Regressor models to improve forecasting accuracy and policy insights."
            tags={["ML Algorithms", "Random Forest", "Stacking Regressor"]}
            github="https://github.com/Shirisha-18/pharmaceutical-drug-price-prediction"
            live=""
            image={drugpricingbehaviourImg}
          />

          <ProjectCard
            title="Big Data"
            meta="AWS + Streaming Analytics"
            desc="Built a large-scale data processing pipeline on AWS using Hadoop and Kafka to ingest, store, and analyze real-time car crash datasets. Enabled efficient streaming, pattern detection, and trend analysis, and transformed raw streaming data into curated analytical datasets for reporting."
            tags={["AWS Glue", "Kafka", "Hadoop", "Power BI"]}
            github="https://github.com/"
            live=""
            image={carcrashImg}
          />

          <ProjectCard
            title="Credit Card Fraud Detection"
            meta="Classification + Imbalanced Data"
            desc="Developed a machine learning model to detect fraudulent credit card transactions using an imbalanced dataset of about 284K records. Applied PCA-transformed features, resampling techniques, and classification models to improve fraud detection while minimizing false positives."
            tags={["Python", "Pandas", "Google Colab", "Classification"]}
            github="https://github.com/"
            live=""
            image={ccfraudImg}
          />
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <h2>Certifications and Badges</h2>
        <p className="section-sub">
          Professional certifications that strengthen my analytics and technical foundation.
        </p>

        <div className="certifications-grid">
          <div className="cert-card">
            <h3>AWS Certified Data Engineer - Associate</h3>
            <p className="cert-org">Amazon Web Services</p>
            <span className="cert-year">2025</span>
          </div>

          <div className="cert-card">
            <h3>Google Cloud Computing Foundations</h3>
            <p className="cert-org">Google</p>
            <span className="cert-year">2021</span>
          </div>

          <div className="cert-card">
            <h3>Data Analysis using MATLAB</h3>
            <p className="cert-org">Coursera</p>
            <span className="cert-year">2020</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <h2>Contact</h2>
        <p className="section-sub">
          Feel free to reach out for opportunities, collaborations, or a quick chat.
        </p>

        <div className="contact-wrapper">
          <div className="contact-left">
            <p>
              I’m always open to discussing data analytics projects, dashboarding work, and full-stack ideas.
              If you have something in mind, let’s talk.
            </p>
          </div>

          <div className="contact-right">
            <div className="contact-row">
              <span className="label">Email</span>
              <a href="mailto:uppala.usk@email.com">uppala.usk@email.com</a>
            </div>

            <div className="contact-row">
              <span className="label">LinkedIn</span>
              <a href="https://www.linkedin.com/in/YOUR_USERNAME/" target="_blank" rel="noreferrer">
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
    </div>
  );
}

export default Sections;
