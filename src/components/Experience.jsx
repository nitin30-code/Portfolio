
const experience = [
  {
    company: "42Works",
    role: "Web Trainee",
    duration: "7 Months",
    description:
      "Worked on multiple live web projects in a real-world development environment. Implemented client feedback and resolved issues using BugHerd. Improved website performance, usability, and responsiveness through debugging and fixes."
  },
  {
    company: "Excellence Technology, Hamirpur",
    role: "Industrial Trainee",
    duration: "6 Months",
    description:
      "Developed backend functionalities using PHP and MySQL. Built responsive user interfaces using HTML, CSS, and JavaScript. Participated in testing and maintenance of web applications."
  }
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">

        <div className="section-heading text-center">
          <span>My Professional Journey</span>
          <h2>Experience</h2>
          <p>
            Internship and industrial training experience in web development.
          </p>
        </div>

        <div className="experience-timeline">

          {experience.map((item, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-content">

                <h3>{item.company}</h3>

                <h4>{item.role}</h4>

                <span>{item.duration}</span>

                <p>{item.description}</p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}