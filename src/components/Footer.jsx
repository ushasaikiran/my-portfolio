import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-name">Usha Sai Kiran</div>
          <div className="footer-sub">Data Analyst • Portfolio</div>
        </div>

        <div className="footer-center">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-right">
          <a
            href="https://github.com/ushasaikiran"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ushasaikiran/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/us_k1021/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Usha Sai Kiran</span>
        <span className="footer-built">Built with React + Vite</span>
      </div>
    </footer>
  );
}

export default Footer;
