
import Sidebar from "../../components/sidebar";

export default function About() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <div className="topbar">
          <div>
            <p className="breadcrumb">HOME / ABOUT</p>
            <h1>About Me</h1>
          </div>
        </div>

        <section className="hero-card about-hero">
          <div className="hero-text">
            <p className="greeting">GET TO KNOW ME</p>

            <h2>Hello, I'm Anvitha<span>.</span></h2>

            <h3>Engineering Student & Aspiring Developer</h3>

            <p className="description">
              I'm currently pursuing Information Science and
              Engineering at Sahyadri College of Engineering
              and Management, Mangaluru.

              I enjoy exploring technology, learning programming
              and developing projects that help me gain practical
              experience.
            </p>

            <p className="description">
              My goal is to continuously improve my technical
              knowledge, develop problem-solving skills and
              become a confident software professional.
            </p>
          </div>

          <div className="hero-visual about-visual">
            <div className="profile-circle">
              <span>A</span>
            </div>
            <h3>Anvitha</h3>
            <p>Dream • Learn • Grow</p>
          </div>
        </section>

        <section className="overview">
          <div className="overview-card">
            <p>EDUCATION</p>
            <h3>ISE</h3>
            <span>Engineering Student</span>
          </div>

          <div className="overview-card">
            <p>INTERESTS</p>
            <h3>Technology</h3>
            <span>Programming & Development</span>
          </div>

          <div className="overview-card">
            <p>PERSONALITY</p>
            <h3>Curious</h3>
            <span>Always Learning</span>
          </div>
        </section>

        <section className="welcome-card about-goal">
          <p className="greeting">MY GOAL</p>
          <h2>Small steps. Big dreams.</h2>
          <p className="description">
            Every project and every new concept I learn is
            another step towards my future in technology.
          </p>
        </section>
      </main>
    </div>
  );
}
