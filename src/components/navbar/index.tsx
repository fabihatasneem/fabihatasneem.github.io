const Navbar = () => {
  const scrollToSection = (elementId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1"></div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              onClick={scrollToSection('work')}
              className="btn btn-ghost normal-case cursor-pointer"
            >
              Work
            </a>
          </li>
          <li>
            <a
              onClick={scrollToSection('education')}
              className="btn btn-ghost normal-case cursor-pointer"
            >
              Education
            </a>
          </li>
          <li>
            <a
              onClick={scrollToSection('certification')}
              className="btn btn-ghost normal-case cursor-pointer"
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              onClick={scrollToSection('project')}
              className="btn btn-ghost normal-case cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={scrollToSection('award')}
              className="btn btn-ghost normal-case cursor-pointer"
            >
              Awards
            </a>
          </li>
          <li>
            <a
              onClick={scrollToSection('publication')}
              className="btn btn-ghost normal-case cursor-pointer"
            >
              Publications
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
