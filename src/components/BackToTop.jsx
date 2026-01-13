import { FaArrowUp } from "react-icons/fa";
import "./BackToTop.css";
import { useEffect, useState } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
}

export default BackToTop;
