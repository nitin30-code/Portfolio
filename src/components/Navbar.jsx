import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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

          <div className="col-9">
            <button
              className={`menu-toggle ${isOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`nav-links d-flex justify-content-end ${isOpen ? "open" : ""}`}>
              <li className="nav-item">
                <a href="#home" onClick={closeMenu}>home</a>
              </li>
              <li className="nav-item">
                <a href="#about" onClick={closeMenu}>about</a>
              </li>
              <li className="nav-item">
                <a href="#skills" onClick={closeMenu}>skills</a>
              </li>
              <li className="nav-item">
                <a href="#projects" onClick={closeMenu}>projects</a>
              </li>
              <li className="nav-item">
                <a href="#contact" onClick={closeMenu}>contact</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  );
}