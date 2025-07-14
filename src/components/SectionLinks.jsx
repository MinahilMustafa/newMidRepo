import { Link } from 'react-router-dom';

function SectionLinks() {
  return (
    <section className="section">
      <Link to="/education" className="box-link">View Education</Link>
      <Link to="/experience" className="box-link">View Experience</Link>
      <Link to="/skills" className="box-link">View Skills</Link>
      <Link to="/projects" className="box-link">View Projects</Link>
    </section>
  );
}

export default SectionLinks;
