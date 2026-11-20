
import Sidebar from "../../components/sidebar";

export default function Education() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <div className="topbar">
          <div>
            <p className="breadcrumb">HOME / EDUCATION</p>
            <h1>My Education</h1>
          </div>
        </div>

        <section className="welcome-card education-intro">
          <p className="greeting">MY ACADEMIC JOURNEY</p>
          <h2>Learning Today, Building Tomorrow</h2>
          <p className="description">
            My academic journey has helped me build a strong
            foundation and develop an interest in technology.
          </p>
        </section>

        <section className="education-timeline">
          <div className="education-card">
            <div className="education-icon">01</div>
            <div>
              <p className="greeting">CURRENTLY PURSUING</p>
              <h2>Bachelor of Engineering</h2>
              <h3>Information Science and Engineering</h3>
              <p className="description">
                Sahyadri College of Engineering and Management,
                Mangaluru.
              </p>
              <span className="education-tag">
                Second Year Engineering
              </span>
            </div>
          </div>

          <div className="education-card">
            <div className="education-icon">02</div>
            <div>
              <p className="greeting">PRE-UNIVERSITY EDUCATION</p>
              <h2>PUC</h2>
              <h3>Mother Teresa's PU College</h3>
              <p className="description">
                Shankaranarayana
              </p>
              <span className="education-tag">
                93% Score
              </span>
            </div>
          </div>

          <div className="education-card">
            <div className="education-icon">03</div>
            <div>
              <p className="greeting">SECONDARY EDUCATION</p>
              <h2>SSLC / 10th Standard</h2>
              <h3>Karnataka Public School</h3>
              <p className="description">
                Bidkalkatte
              </p>
              <span className="education-tag">
                Completed
              </span>
            </div>
          </div>
        </section>

        <section className="welcome-card education-goal">
          <p className="greeting">BEYOND CLASSROOMS</p>
          <h2>Learning Never Stops</h2>
          <p className="description">
            I believe in continuous learning, practical
            experience and improving my skills every day.
          </p>
        </section>
      </main>
    </div>
  );
}
