import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaPhp,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMysql,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiGit,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaWordpress />, name: "WordPress" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiGit />, name: "Git" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPostman />, name: "Postman" },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-4">
            <span className="section-tag">My Skills</span>
            <h2>Technologies I Work With</h2>
            <p>
              I build responsive and modern web applications
              using frontend and backend technologies.
            </p>
          </div>

          <div className="col-lg-8">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}