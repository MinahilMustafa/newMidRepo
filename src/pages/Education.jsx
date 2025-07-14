function Education() {
  return (
    <section className="education-section">
      <h1 className="section-header">
        <span className="highlight">My Educational Journey</span>
      </h1>
      <p style={{ maxWidth: "700px", fontSize: "1.1em", textAlign: "center", marginBottom: "40px" }}>
        I have a strong academic background rooted in engineering and computer science. My journey reflects passion,
        consistency, and technical excellence that drives my future as a developer.
      </p>

      <div className="education-card">
        <h2>Intermediate - FSC Pre-Engineering</h2>
        <p>
          I completed my Intermediate education in FSC Pre-Engineering from <strong>STARS ACADEMY Shadhra</strong>.
          I achieved an <strong>A+</strong> grade, laying a strong foundation in mathematics, physics, and chemistry.
          This early academic success gave me the analytical skills I now apply in problem-solving and programming.
        </p>
      </div>

      <div className="education-card">
        <h2>Comsats University Islamabad</h2>
        <p>
          I am currently pursuing a Bachelor's degree in Computer Science (BSCS) at{" "}
          <strong>Comsats University Islamabad</strong>. I’m in my <strong>4th semester</strong>, focusing on full-stack
          web development using the MERN stack, mastering data structures, and excelling in object-oriented programming using Java.
        </p>
      </div>
    </section>
  );
}

export default Education;
