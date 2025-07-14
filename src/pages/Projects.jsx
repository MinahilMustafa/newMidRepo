function Projects() {
  return (
    <section className="projects-section">
      <h1 className="section-header">My Projects</h1>
      <p
        style={{
          maxWidth: "700px",
          fontSize: "1.1em",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Here are a few sample projects showcasing my development skills and practical experience with different technologies.
      </p>

      <div className="project-card">
        <h2>Portfolio Website</h2>
        <p>
          A fully responsive personal website built using HTML, CSS, and JavaScript to showcase my skills, experience, and portfolio.
        </p>
      </div>

      <div className="project-card">
        <h2>Flex Management System (Java OOP)</h2>
        <p>
          Developed an efficient and modular Flex Management System using Java and Object-Oriented Programming (OOP) principles.
          This project features a multi-role architecture with dedicated modules for HOD, Admin, Teachers, and Students, each offering
          specific functionalities such as flex approval, scheduling, user management, and attendance tracking. Emphasizing code reusability,
          encapsulation, and clean structure, the system ensures streamlined academic coordination and real-time updates.
          This project not only sharpened my OOP skills but also reflected practical application of software design in real-world educational workflows.
        </p>
      </div>

      <div className="project-card">
        <h2>Hadith Authenticity Checker</h2>
        <p>
          An AI-powered Python app using Arabic BERT to classify Hadiths into Sahih, Hasan, Da’if, or Mawdu‘ categories,
          featuring an interactive Gradio interface.
        </p>
      </div>

      <div className="project-card">
        <h2>DSA-Based Job Portal System</h2>
        <p>
          A C++ project showcasing core data structures and algorithms (DSA) concepts to build a functional job portal.
          The system uses AVL trees for efficient job storage and retrieval, queues for managing job applications, and structs
          for user and job profiles. This project emphasizes practical application of BST, AVL rotations, and custom memory
          management techniques to simulate a real-world job application process.
        </p>
      </div>
    </section>
  );
}

export default Projects;
