
const education = [
  {
    institute: "Chandigarh University",
    course: "Bachelor of Computer Applications (BCA)",
    year: "2024 - 2027",
    description:
      "Currently pursuing BCA with a focus on web development, programming, database management, and software development."
  },
  {
    institute: "Lord Shiva Institute",
    course: "Diploma in Computer Applications",
    year: "2023 - 2024",
    description:
      "Completed diploma studies with practical knowledge of computer applications, programming fundamentals, and web technologies."
  }
];

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">

        <div className="section-heading text-center">
          <span>My Journey</span>
          <h2>Education</h2>
          <p>
            My educational background and learning journey.
          </p>
        </div>

        <div className="timeline">

          {education.map((item, index) => (
            <div className="education-card" key={index}>
              <div className="education-content">

                <h3>{item.institute}</h3>

                <h4>{item.course}</h4>

                <span>{item.year}</span>

                <p>{item.description}</p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}