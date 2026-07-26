import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-box text-center">
          <span className="section-tag">Get In Touch</span>
          <h2>Let's build something together</h2>
          <p>
            I'm open to internship and entry-level opportunities.
            Feel free to reach out.
          </p>

          <div className="contact-links">
            <a href="mailto:nitin.webde04@gmail.com">
              <FaEnvelope /> nitin.webde04@gmail.com
            </a>
            <a href="https://github.com/nitin30-code/" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nitin-kumar-a87380369/" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <p>$ echo "made with React by Nitin Kumar"</p>
      </footer>
    </section>
  );
}   