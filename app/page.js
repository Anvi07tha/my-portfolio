
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <div className="topbar">
          <div>
            <p className="breadcrumb">HOME / DASHBOARD</p>
            <h1>Welcome to My Portfolio</h1>
          </div>

          <div className="topbar-right">
            <span className="status-dot"></span>
            <span>Open to opportunities</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero-card">
          <div className="hero-text">
            <p className="greeting">HELLO THERE, I'M</p>

            <h2>
              Anvitha<span>.</span>
            </h2>

            <h3>Information Science & Engineering Student</h3>

            <p className="description">
              Passionate about technology, programming and creating
              meaningful digital experiences. I'm constantly exploring
              new technologies, improving my skills and turning ideas
              into reality.
            </p>

            <div className="hero-buttons">
              <a href="/projects" className="primary-btn">
                Explore Projects →
              </a>

              <a href="/contact" className="secondary-btn">
                Get in Touch
              </a>
            </div>

            {/* GitHub and LinkedIn Buttons */}
            <div className="social-buttons">
              <a
                href="https://github.com/Anvi07tha"
                target="_blank"
                rel="noreferrer"
                className="social-btn github-btn"
              >
                <span className="social-symbol">⌘</span>
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/anvitha-kulal-118951388/"
                target="_blank"
                rel="noreferrer"
                className="social-btn linkedin-btn"
              >
                <span className="social-symbol">in</span>
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-circle">
              <span>A</span>
            </div>

            <h3>Anvitha</h3>
            <p>Dream • Code • Create</p>
            <div className="star-decoration">✦</div>
          </div>
        </section>

        {/* Overview Cards */}
        <section className="overview">
          <div className="overview-card">
            <p>EDUCATION</p>
            <h3>Engineering</h3>
            <span>Information Science & Engineering</span>
          </div>

          <div className="overview-card">
            <p>INTEREST</p>
            <h3>Technology</h3>
            <span>Programming & Development</span>
          </div>

          <div className="overview-card">
            <p>MY JOURNEY</p>
            <h3>Learning</h3>
            <span>Growing Every Day</span>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="dashboard-bottom">
          <div className="welcome-card">
            <p className="greeting">ABOUT ME</p>
            <h2>A Little About Myself</h2>

            <p className="description">
              I'm an engineering student who enjoys learning
              technology, exploring programming and working
              on projects that improve my practical knowledge.
            </p>

            <a href="/about" className="text-link">
              Know More About Me →
            </a>
          </div>

          <div className="quote-card">
            <h2>My Philosophy</h2>
            <p>
              "Small steps every day lead to big achievements."
            </p>
            <span>— Anvitha</span>
          </div>
        </section>
      </main>
    </div>
  );
}
