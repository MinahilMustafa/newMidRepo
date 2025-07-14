function About() {
  return (
    <>
      <section className="hero">
        <h1>Minahil's Portfolio</h1>
        <p>
          I'm currently a <strong>5th semester student</strong> pursuing my Bachelor's degree in{" "}
          <strong>Computer Science</strong> at <strong>COMSATS University</strong>. I'm passionate about full-stack
          development, especially using the Web Developing, and enjoy building modern, responsive web applications.
        </p>
      </section>

      <section className="section">
        <a href="/education" className="box-link">View Education</a>
        <a href="/experience" className="box-link">View Experience</a>
        <a href="/skills" className="box-link">View Skills</a>
        <a href="/projects" className="box-link">View Projects</a>
      </section>
    </>
  );
}

export default About;
