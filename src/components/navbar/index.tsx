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

      {/* Mobile Menu */}
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* Mobile menu items */}
            <li>
              <a onClick={scrollToSection('work')}>Work</a>
            </li>
            <li>
              <a onClick={scrollToSection('education')}>Education</a>
            </li>
            <li>
              <a onClick={scrollToSection('extraCurricular')}>
                Extra-Curricular
              </a>
            </li>
            <li>
              <a onClick={scrollToSection('certification')}>Certifications</a>
            </li>
            <li>
              <a onClick={scrollToSection('project')}>Projects</a>
            </li>
            <li>
              <a onClick={scrollToSection('award')}>Awards</a>
            </li>
            <li>
              <a onClick={scrollToSection('publication')}>Publications</a>
            </li>
            <li>
              <a onClick={scrollToSection('contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal px-1">
          {/* Main sections */}
          <li>
            <a
              onClick={scrollToSection('work')}
              className="btn btn-ghost normal-case"
            >
              Work
            </a>
          </li>
          <li>
            <a
              onClick={scrollToSection('education')}
              className="btn btn-ghost normal-case"
            >
              Education
            </a>
          </li>

          {/* Achievements Dropdown */}
          <li>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost normal-case">
                Achievements
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a onClick={scrollToSection('certification')}>
                    Certifications
                  </a>
                </li>
                <li>
                  <a onClick={scrollToSection('award')}>Awards</a>
                </li>
                <li>
                  <a onClick={scrollToSection('publication')}>Publications</a>
                </li>
              </ul>
            </div>
          </li>

          {/* Activities Dropdown */}
          <li>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost normal-case">
                Activities
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a onClick={scrollToSection('extraCurricular')}>
                    Extra-Curricular
                  </a>
                </li>
                <li>
                  <a onClick={scrollToSection('project')}>Projects</a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a
              onClick={scrollToSection('contact')}
              className="btn btn-ghost normal-case"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
