
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Hello, I'm</p>

        <h1 className="hero-title">
          Nitin Kumar
        </h1>

        <h2 className="hero-role">
          Frontend Developer & WordPress Developer
        </h2>

        <p className="hero-description">
          Passionate about building responsive and user-friendly web
          applications using React, JavaScript, PHP and WordPress.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Download Resume
          </button>

          <button className="btn-secondary">
            Contact Me
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
          alt="developer"
        />
      </div>
    </section>
  );
}

export default Hero;