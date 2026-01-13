import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (!homeSection) return;

      const homeHeight = homeSection.offsetHeight;
      const scrollY = window.scrollY;

      // Show navbar only while user is in Home section
      setShowNav(scrollY < homeHeight - 80);
    };

    handleScroll(); // run once on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNav ? "nav-show" : "nav-hide"}`}>
      <div className="nav-left"></div>

      <ul className="nav-links">
        <li
          onClick={() =>
            document.getElementById("home").scrollIntoView({ behavior: "smooth" })
          }
        >
          Home
        </li>

        <li
          onClick={() =>
            document
              .getElementById("experience")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Experience & Education
        </li>

        <li
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Projects
        </li>

        <li
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact Me
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
