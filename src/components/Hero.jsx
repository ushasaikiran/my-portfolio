import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Hero.css";
import profile from "../assets/formal.PNG";


function Hero() {
  return (
    <section id="home" className ="hero">
      {/* Left Social Bar */}
      <div className="social-rail">
        <a href="https://github.com/ushasaikiran" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">
  <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ushasaikiran/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
  <FaLinkedinIn />
        </a>
        <a  href="https://www.instagram.com/us_k1021/"
  target="_blank"
  rel="noreferrer"
  aria-label="Instagram"
  className="social-icon">
  <FaInstagram />
        </a>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="welcome">Welcome !</h1>

          <div className="intro-line">
            <span className="im-text">I'm</span>
            <span className="name-pill">
              Usha Sai Kiran 
            </span>
          </div>

          <h2 className="role">Data Analyst</h2>

          <p className="subtitle">
            Data science practitioner and web developer who builds modern web apps,
            dashboards, and scalable solutions using React and data-driven thinking.
          </p>

          <div className="hero-mini-icons">
            <FaGithub />
            <FaLinkedinIn />
            <FaInstagram />
          </div>

          <div className="hero-buttons">
            <button className="btn primary"
  onClick={() =>
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }
>
  Contact me</button>
            <a
  className="btn outline"
  href={`${import.meta.env.BASE_URL}Resume.pdf`}
  target="_blank"
  rel="noreferrer"
>
  See my resume
</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="avatar-circle">
           <img src={profile} alt="Profile" className="avatar-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
