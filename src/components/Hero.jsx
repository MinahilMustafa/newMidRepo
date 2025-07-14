function Hero() {
  const handleLearnMore = () => {
    alert(
      "👩‍💻 About Minahil Mustafa\n\n" +
        "I'm a passionate MERN Stack Developer currently studying BSCS at COMSATS (5th Semester).\n" +
        "My expertise includes:\n" +
        "✔️ Frontend: HTML, CSS, JavaScript, React.js, WordPress\n" +
        "✔️ Backend: Node.js, Express.js, Java (OOP) , Python, C/C++(DSA)\n" +
        "✔️ Database: MongoDB, SQL, MySQL\n\n" +
        "I love building user-friendly and efficient web applications."
    );
  };

  const handleContactUs = () => {
    alert(
      "📧 Contact Information\n\n" +
        "Name: Minahil Mustafa\n" +
        "Location: Lahore, Pakistan\n" +
        "Email: minahilmustafa61@gmail.com\n\n" +
        "I'm available for collaborations, freelance work, or professional opportunities. Feel free to reach out!"
    );
  };

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>
            Hello, I'm <span className="highlight">Minahil Mustafa</span>
          </h1>
          <h2>Web Developer</h2>
          <p>
            I am currently in my 5th semester of BSCS at COMSATS. I specialize
            as a Web Developer with strong frontend skills in HTML, CSS, JavaScript and React.js. Additionally, I have a solid foundation in backend
            development with expertise in Java and Object-Oriented Programming
            (OOP). I am passionate about building efficient and scalable web
            applications that deliver exceptional user experiences.
          </p>
          <button className="btn-primary" onClick={handleLearnMore}>
            LEARN MORE
          </button>
          <button className="btn-secondary" onClick={handleContactUs}>
            CONTACT US
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
