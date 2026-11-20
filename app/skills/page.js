
import Sidebar from "../../components/sidebar";

const skills = [
  {
    category: "Programming Languages",
    items: ["C Programming", "Java", "JavaScript"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "React", "Next.js"],
  },
  {
    category: "Tools & Technologies",
    items: ["VS Code", "GitHub", "MySQL"],
  },
];

export default function Skills() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <div className="topbar">
          <div>
            <p className="breadcrumb">HOME / SKILLS</p>
            <h1>My Skills</h1>
          </div>
        </div>

        <section className="welcome-card skills-intro">
          <p className="greeting">WHAT I KNOW</p>
          <h2>My Technical Skills</h2>
          <p className="description">
            These are the programming languages, technologies
            and tools I have explored during my engineering journey.
            I am continuously learning and improving my skills.
          </p>
        </section>

        <section className="skills-grid">
          {skills.map((skill) => (
            <div className="overview-card skill-card" key={skill.category}>
              <p>{skill.category}</p>

              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="welcome-card skills-goal">
          <p className="greeting">CURRENT FOCUS</p>
          <h2>Learning by Building</h2>
          <p className="description">
            I believe in strengthening my fundamentals through
            practice, problem-solving and building real-world projects.
          </p>
        </section>
      </main>
    </div>
  );
}
