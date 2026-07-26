import { useEffect, useState } from "react";

const sections = ["home", "about", "skills", "education", "experience", "projects", "contact"];

function SectionDots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let current = 0;
      sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          current = i;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="section-dots">
      {sections.map((id, i) => (
        <div
          key={id}
          className={`dot ${active === i ? "active" : ""}`}
          onClick={() => scrollToSection(id)}
          title={id}
        />
      ))}
    </div>
  );
}

export default SectionDots;