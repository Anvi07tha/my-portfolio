
import Sidebar from "../../components/sidebar";

export default function Contact() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <div className="topbar">
          <div>
            <p className="breadcrumb">HOME / CONTACT</p>
            <h1>Contact Me</h1>
          </div>
        </div>

        <section className="welcome-card contact-intro">
          <p className="greeting">GET IN TOUCH</p>
          <h2>Let's Connect!</h2>
          <p className="description">
            I'm always open to connecting with new people,
            learning opportunities and interesting projects.
            Feel free to reach out!
          </p>
        </section>

        <section className="contact-grid">
          <a
            href="mailto:your-email@example.com"
            className="contact-card"
          >
            <div className="contact-icon">✉</div>
            <div>
              <p>Email</p>
              <h3>Send me an email</h3>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/anvitha-kulal-118951388/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">in</div>
            <div>
              <p>LinkedIn</p>
              <h3>Connect with me</h3>
            </div>
          </a>

          <a
            href="https://github.com/Anvi07tha"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">⌘</div>
            <div>
              <p>GitHub</p>
              <h3>Explore my projects</h3>
            </div>
          </a>

          <div className="contact-card">
            <div className="contact-icon">⌖</div>
            <div>
              <p>Location</p>
              <h3>Mangaluru, Karnataka</h3>
            </div>
          </div>
        </section>

        <section className="welcome-card contact-message">
          <p className="greeting">THANK YOU FOR VISITING</p>
          <h2>Have a great day!</h2>
          <p className="description">
            Thank you for taking the time to explore my portfolio.
            I look forward to connecting with you.
          </p>
        </section>
      </main>
    </div>
  );
}
