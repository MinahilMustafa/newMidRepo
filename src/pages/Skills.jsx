function Skills() {
  return (
    <section className="skills-section">
      <h1 className="section-header">My Technical Skills</h1>
      <p
        style={{
          maxWidth: "700px",
          fontSize: "1.1em",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Below are the core technologies and tools I've worked with during my journey as a developer.
      </p>

      <div className="skills-card">
        <h2>Frontend Development</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Bootstrap, Java Spring Boot</li>
        </ul>
      </div>

      <div className="skills-card">
        <h2>Backend Development</h2>
        <ul>
          <li>Node.js, Express.js</li>
          <li>Java OOP</li>
          <li>C++, C, DSA</li>
          <li>Python</li>
        </ul>
      </div>

      <div className="skills-card">
        <h2>Database & Tools</h2>
        <ul>
          <li>MongoDB</li>
          <li>Git, GitHub</li>
          <li>SQL, MySQL</li>
          <li>VS Code</li>
        </ul>
      </div>

      <div className="skills-card">
        <h2>Soft Skills</h2>
        <ul>
          <li>Team Collaboration</li>
          <li>Problem Solving</li>
          <li>Agile & Scrum Methodologies</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
