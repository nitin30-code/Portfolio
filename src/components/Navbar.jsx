import { useState } from "react";


const navItems = ["home", "about", "skills", "projects"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleClick = (item) => {
    setActive(item);
    closeMenu();
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-3">
            <div className="header-logo-col">
              <a className="header-logo" href="/">
                nitin<span>.dev</span>
              </a>
            </div>
          </div>

          <div className="col-9 col-9-div">
            <button
              className={`menu-toggle ${isOpen ? "active" : ""} menu-toggle-custom`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`nav-links justify-content-end ${isOpen ? "open" : ""}`}>
              {navItems.map((item) => (
                <li className="nav-item" key={item}>
                  
                   <a href={`#${item}`}
                    className={active === item ? "active" : ""}
                    onClick={() => handleClick(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a href="#contact" className="contact-btn" onClick={closeMenu}>
                  contact
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  );
}