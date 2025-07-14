import { NavLink } from 'react-router-dom';

function Header() {
  const handleLetsTalk = () => {
    alert('You can contact me at: minahilmustafa61@gmail.com');
  };

  return (
    <header>
      <div className="logo">Web Developer</div>
      <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/education" className="nav-link">Education</NavLink>
        <NavLink to="/experience" className="nav-link">Experience</NavLink>
        <NavLink to="/skills" className="nav-link">Skills</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
      </nav>
      <button className="btn-primary" onClick={handleLetsTalk}>LET'S TALK</button>
    </header>
  );
}

export default Header;
