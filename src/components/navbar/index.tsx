import React, { useState } from 'react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const scrollToSection =
    (elementId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setOpenDropdown(null);
    };

  return (
    <div className="navbar bg-base-100 px-4 w-full max-w-screen-xl mx-auto">
      <div className="navbar-start"></div>

      <div className="navbar-center hidden lg:flex w-full justify-center">
        <ul className="menu menu-horizontal gap-x-4 items-center">
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
          <li>
            <a
              onClick={scrollToSection('publication')}
              className="btn btn-ghost normal-case"
            >
              Publications
            </a>
          </li>
          <li className="relative">
            <button
              onClick={() => handleDropdownToggle('achievements')}
              className="btn btn-ghost normal-case"
            >
              Achievements
            </button>
            {openDropdown === 'achievements' && (
              <ul className="absolute top-full left-1/2 transform -translate-x-1/2 p-2 shadow menu z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a onClick={scrollToSection('certification')}>
                    Certifications
                  </a>
                </li>
                <li>
                  <a onClick={scrollToSection('award')}>Awards</a>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button
              onClick={() => handleDropdownToggle('activities')}
              className="btn btn-ghost normal-case"
            >
              Activities
            </button>
            {openDropdown === 'activities' && (
              <ul className="absolute top-full left-1/2 transform -translate-x-1/2 p-2 shadow menu z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a onClick={scrollToSection('extraCurricular')}>
                    Extra-Curricular
                  </a>
                </li>
                <li>
                  <a onClick={scrollToSection('project')}>Projects</a>
                </li>
              </ul>
            )}
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

      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
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
    </div>
  );
};

export default Navbar;
