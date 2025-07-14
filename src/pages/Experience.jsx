function Experience() {
  return (
    <section className="experience-section">
      <h1 className="section-header">My Learning Journey</h1>
      <p
        style={{
          maxWidth: "700px",
          fontSize: "1.1em",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        As a Computer Science undergraduate, I may not have industry experience yet,
        but I have gained solid practical knowledge and skills through academic projects,
        self-learning, and personal exploration of various development domains.
      </p>

      <div className="experience-card">
        <h2>Backend Development with Java OOP</h2>
        <p>
          <strong>Duration:</strong> 2023 – Present
        </p>
        <p>
          Built multiple backend modules using Java and Object-Oriented Programming (OOP),
          including a Flex Management System with Admin, HOD, Teacher, and Student modules.
          These projects helped me understand key programming principles such as encapsulation,
          inheritance, and modular design in real-world scenarios.
        </p>
      </div>

      <div className="experience-card">
        <h2>Frontend & UI/UX Design</h2>
        <p>
          <strong>Duration:</strong> 2023 – Present
        </p>
        <p>
          Proficient in creating responsive user interfaces using HTML, CSS, and JavaScript.
          I am currently enhancing my UI/UX skills by designing intuitive user flows and layouts
          using tools like Figma and Adobe XD, with a focus on accessibility and user-centered design.
        </p>
      </div>

      <div className="experience-card">
        <h2>Learning AI with Python & DSA with C++</h2>
        <p>
          <strong>Duration:</strong> 2024 – Present
        </p>
        <p>
          Exploring Artificial Intelligence and Machine Learning concepts through Python
          while strengthening my core computer science fundamentals by solving Data Structures
          and Algorithms problems using C++. This combination is building my analytical thinking
          and programming logic.
        </p>
      </div>
    </section>
  );
}

export default Experience;
