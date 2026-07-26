function DevAvatar() {
  return (
    <svg viewBox="0 0 680 560" xmlns="http://www.w3.org/2000/svg" role="img">
      <title>Developer coding avatar illustration</title>
      <rect x="0" y="0" width="680" height="560" rx="16" fill="#0d1117"/>
      <rect x="20" y="20" width="640" height="520" rx="12" fill="#12181f" stroke="#232b36" strokeWidth="1"/>
      <circle cx="340" cy="230" r="150" fill="#161d26"/>
      <rect x="270" y="150" width="140" height="150" rx="70" fill="#e6b877"/>
      <path d="M270 190 Q270 120 340 118 Q410 120 410 190 L410 178 Q408 145 340 143 Q272 145 270 178 Z" fill="#2b2118"/>
      <circle cx="308" cy="205" r="6" fill="#2b2118"/>
      <circle cx="372" cy="205" r="6" fill="#2b2118"/>
      <path d="M318 232 Q340 244 362 232" stroke="#a3703f" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M405 175 Q425 190 420 215 L400 215 Q398 190 405 175 Z" fill="#232b36"/>
      <rect x="180" y="330" width="320" height="130" rx="8" fill="#1b232d"/>
      <path d="M180 330 L340 380 L500 330 L500 460 L180 460 Z" fill="#e3b341"/>
      <rect x="270" y="360" width="140" height="95" rx="6" fill="#0d1117"/>
      <rect x="285" y="378" width="60" height="6" rx="2" fill="#6bcf9e"/>
      <rect x="285" y="392" width="90" height="6" rx="2" fill="#6fa8dc"/>
      <rect x="285" y="406" width="45" height="6" rx="2" fill="#e08fb0"/>
      <rect x="285" y="420" width="75" height="6" rx="2" fill="#6bcf9e"/>
      <rect x="235" y="460" width="210" height="14" rx="4" fill="#2b3542"/>
      <circle cx="340" cy="230" r="150" fill="none" stroke="#232b36" strokeWidth="2"/>
      <circle cx="90" cy="90" r="4" fill="#6bcf9e"/>
      <circle cx="580" cy="130" r="4" fill="#6fa8dc"/>
      <circle cx="600" cy="440" r="4" fill="#e3b341"/>
      <text x="80" y="470" fontFamily="monospace" fontSize="14" fill="#7c8794">{"</>"}</text>
      <text x="560" y="500" fontFamily="monospace" fontSize="14" fill="#7c8794">{"{ }"}</text>
    </svg>
  );
}
export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-5">
            <div className="about-image">
               {/* <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Nitin Kumar"
              /> */}
              <DevAvatar />
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
