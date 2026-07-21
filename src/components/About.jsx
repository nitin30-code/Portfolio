
export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-5">
            <div className="about-image">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Nitin Kumar"
              />
            </div>
          </div>

          <div className="col-lg-7">
            <span className="section-subtitle">
              About Me
            </span>

            <h2 className="section-title">
              Frontend Developer & WordPress Developer
            </h2>

            <p className="about-text">
              I am a BCA student with internship experience in
              PHP and WordPress development. I have worked on
              website customization, responsive design,
              Elementor, ACF, and bug fixing.
            </p>

            <p className="about-text">
              I enjoy building modern, responsive, and
              user-friendly web applications using React,
              JavaScript, PHP, and WordPress.
            </p>

            <div className="about-info">
              <div className="info-item">
                <span>Name:</span> Nitin Kumar
              </div>

              <div className="info-item">
                <span>Education:</span> BCA
              </div>

              <div className="info-item">
                <span>Location:</span> Himachal Pradesh
              </div>

              <div className="info-item">
                <span>Experience:</span> PHP & WordPress Internship
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}