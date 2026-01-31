import "./Portfolio.css";



export default function Portfolio() {
  return (

    <div className="portfolio">
   <nav className="navbar">
  <div className="nav-container">
    <div className="nav-links">
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#certifications">Certifications</a>
    </div>

    <button
      className="logout-btn"
      onClick={() => {
        localStorage.clear();
        window.location.href = "/";
      }}
    >
      Logout
    </button>
  </div>
</nav>



      {/* HERO SECTION */}
      <section className="hero">
  <div className="hero-content">
    <img src="/profile.jpg" alt="Akshata" className="hero-img" />

    <h1>Akshata B Managanvi</h1>

    <p className="hero-sub">
      A final-year B.Tech Computer Science Engineering student at
      M. S. Ramaiah University of Applied Sciences, Bangalore.
    </p>

    <p className="hero-desc">
      Full Stack Developer | UI/UX Designer | AI Enthusiast
    </p>

    <p className="location">
      Bangalore, Karnataka, India
    </p>
  </div>
</section>


      {/* ABOUT */}
    <section id="about" className="section about-section">

  <h2>About Me</h2>

  <div className="about-content">
    <p>
      I’m Akshata Managanvi, a final-year B.Tech Computer Science Engineering
      student from M. S. Ramaiah University of Applied Sciences, Bangalore.
    </p>

    <p>
      I have hands-on experience as a full-stack developer, where I’ve worked
      independently on projects using React for frontend, Flask for backend,
      and MySQL for database. Through these projects, I gained strong practical
      exposure to computer fundamentals like DBMS, OS, networking, and OOPs,
      and how they come together in real-world applications.
    </p>

    <p>
      I’ve also completed internships in web development and UI/UX, which helped
      me build user-focused and well-structured applications. I enjoy learning
      new technologies, understanding how systems work end-to-end, and applying
      concepts practically rather than just theoretically.
    </p>
  </div>
</section>



      {/* EDUCATION */}
      <section id="education" className="section">

        <h2>Education</h2>
        <div className="edu-grid">
  <div className="edu-card">
    <h3>B.Tech – Computer Science Engineering</h3>
    <p>M. S. Ramaiah University of Applied Sciences, Bangalore</p>
    <span>2022 – 2026 | CGPA: 9.2 / 10</span>
  </div>

  <div className="edu-card">
    <h3>Pre-University Course (PUC) – PCMB</h3>
    <p>Alva’s Pre-University College, Moodbidri</p>
    <span>Percentage: 92%</span>
  </div>
</div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section">

  <h2>Skills</h2>

  <div className="skills-grid">

    <div className="skill-card">
      <h3>Frontend Development</h3>
      <p>HTML, CSS, JavaScript, React</p>
    </div>

    <div className="skill-card">
      <h3>Backend Development</h3>
      <p>Python, Flask</p>
    </div>

    <div className="skill-card">
      <h3>Databases</h3>
      <p>MySQL, MongoDB</p>
    </div>

    <div className="skill-card">
      <h3>Cloud & Tools</h3>
      <p>AWS (EC2, S3), Git, Postman</p>
    </div>

    <div className="skill-card">
      <h3>Computer Fundamentals</h3>
      <p>
        Operating Systems, Computer Networks,<br />
        Database Management Systems (DBMS), DSA
      </p>
    </div>

    <div className="skill-card">
      <h3>Soft Skills</h3>
      <p>
        Communication, Leadership, Public Speaking,<br />
        Team Collaboration, Problem Solving
      </p>
    </div>

  </div>
</section>


      {/* PROJECTS */}
      <section id="projects" className="section">

  <h2>Projects</h2>

  <div className="projects-grid">

    <div className="project-card">
      <h3>AI-Powered HRMS Web Application</h3>
      <p className="project-desc">
        Designed and developed an AI-enabled Human Resource Management System
        featuring resume parsing, hiring forecast, attrition prediction,
        leave management, and payroll modules.
      </p>
      <p className="project-tech">
        <strong>Technologies:</strong> React, Flask, MySQL, Machine Learning
      </p>
    </div>

    <div className="project-card">
      <h3>EchoShop – Eco-friendly Product Platform</h3>
      <p className="project-desc">
        Built a full-stack web application that recommends eco-friendly products
        to promote sustainable consumer choices with an intuitive user interface.
      </p>
      <p className="project-tech">
        <strong>Technologies:</strong> React, Flask, SQL
      </p>
    </div>

    <div className="project-card">
      <h3>Medical Diagnostics – ML Projects</h3>
      <p className="project-desc">
        Implemented machine learning models for medical diagnosis, including
        Breast Cancer Detection and Heart Disease Prediction to support
        data-driven healthcare decisions.
      </p>
      <p className="project-tech">
        <strong>Technologies:</strong> Python, Scikit-learn, Random Forest,
        Logistic Regression, Bayesian Networks
      </p>
    </div>

  </div>
</section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">

  <h2>Certifications</h2>

  <div className="cert-grid">

    <div className="cert-badge">
      <span className="cert-icon">🎓</span>
      <h4>IBM Frontend Development</h4>
      <p>IBM Skills Network</p>
    </div>

    <div className="cert-badge">
      <span className="cert-icon">🤖</span>
      <h4>IBM Generative AI for Developers</h4>
      <p>IBM Skills Network</p>
    </div>

    <div className="cert-badge">
      <span className="cert-icon">☁️</span>
      <h4>AWS Cloud Practitioner Essentials</h4>
      <p>AWS Training & Certification</p>
    </div>

    <div className="cert-badge">
      <span className="cert-icon">🧠</span>
      <h4>AI Workshop</h4>
      <p>Broadridge & MSRUAS</p>
    </div>

  </div>
</section>


      {/* FOOTER */}
      <footer>
        <p>© 2026 Akshata B Managanvi</p>
        
      </footer>

    </div>
  );
}
