
import Sidebar from "../../components/sidebar";

const projects = [
  {
    number: "01",
    title: "KHOJ GLOBAL",
    type: "Frontend Development",
    description:
      "A platform designed to showcase Indian brands to a global audience, helping people discover brands and connect with them.",
    technologies: ["Next.js", "React", "CSS"],
    status: "In Progress",
  },
  {
    number: "02",
    title: "Complaint Management System",
    type: "Web Development",
    description:
      "A web application that helps users submit complaints and makes it easier to manage and track them.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Project",
  },
  {
    number: "03",
    title: "Dasara Crowd Safety",
    type: "Major Project",
    description:
      "A project concept focused on improving crowd safety and visitor experience during the Dasara Jamboo Savari procession.",
    technologies: ["IoT", "Crowd Monitoring"],
    status: "Prototype Concept",
  },
];

export default function Projects() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <div className="topbar">
          <div>
            <p className="breadcrumb">HOME / PROJECTS</p>
            <h1>My Projects</h1>
          </div>
        </div>

        <section className="welcome-card projects-intro">
          <p className="greeting">WHAT I'VE WORKED ON</p>
          <h2>Turning Ideas Into Projects</h2>
          <p className="description">
            Here are some of the projects I have worked on
            during my engineering journey. Each project helps
            me learn new concepts and improve my skills.
          </p>
        </section>

        <section className="projects-list">
          {projects.map((project) => (
            <div className="project-card" key={project.number}>
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">
                <p className="greeting">{project.type}</p>
                <h2>{project.title}</h2>

                <p className="description">
                  {project.description}
                </p>

                <div className="skill-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <p className="project-status">
                  {project.status}
                </p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
