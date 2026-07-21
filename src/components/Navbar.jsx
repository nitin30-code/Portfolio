export default function Navbar() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-3">
            <div className="header-logo-col">
              <a className="header-logo" href="/">
                Nitin<span>.</span>
              </a>
            </div>
          </div>

          <div className="col-9">
            <ul className="nav-links d-flex justify-content-end">
              <li className="nav-item">
                <a href="#home">Home</a>
              </li>

              <li className="nav-item">
                <a href="#about">About</a>
              </li>

              <li className="nav-item">
                <a href="#skills">Skills</a>
              </li>

              <li className="nav-item">
                <a href="#projects">Projects</a>
              </li>

              <li className="nav-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  );
}