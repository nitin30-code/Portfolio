import VantaBackground from "./VantaBackground";

function Hero() {
  return (

    <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
      <VantaBackground />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center">

          <div className="col-lg-7">
            <div className="hero-content">
              <p className="hero-subtitle fade-up d1">Hello, I'm</p>

              <h1 className="hero-title fade-up d2">Nitin Kumar</h1>

              <h2 className="hero-role fade-up d3">
                Web Developer
              </h2>

              <p className="hero-description fade-up d4">
                Passionate about building responsive and user-friendly web
                applications using React, JavaScript, PHP and WordPress.
              </p>

              <div className="hero-buttons fade-up d5">
                <button
                  className="btn btn-primary"
                  onClick={() => window.open("/resume/Nitin_Kumar_Resume.pdf", "_blank")}
                >
                  Download Resume
                </button>
                <button className="btn-secondary">Contact Me</button>
                <a
                  href="https://github.com/YourUsername"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary btn-git-project"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-terminal fade-up d3">
              <div className="terminal-bar">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="terminal-file">about-me.js</span>
              </div>
              <pre className="terminal-body">
{`const developer = {
  name: "Nitin Kumar",
  role: "Web Developer",
  stack: ["React", "PHP", "WordPress"],
};`}
                <span className="cursor">_</span>
              </pre>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;