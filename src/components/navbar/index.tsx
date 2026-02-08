import React, { useState } from 'react';
import { SanitizedThemeConfig } from '../../interfaces/sanitized-config';
import ThemeChanger from '../theme-changer';

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  themeConfig: SanitizedThemeConfig;
}

const Navbar = ({ theme, setTheme, loading, themeConfig }: NavbarProps) => {
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

        // Wait a bit for scroll to start, then find and glow the card
        setTimeout(() => {
          // Find the card element to glow (either the element itself or a card inside it)
          let cardElement: HTMLElement | null = element;

          // If the element with id is a wrapper div, find the card inside
          if (!element.classList.contains('card')) {
            const card = element.querySelector('.card');
            if (card) {
              cardElement = card as HTMLElement;
            }
          }

          // Add glow class to the card
          if (cardElement) {
            cardElement.classList.add('section-glow');

            // Remove glow after animation completes
            setTimeout(() => {
              cardElement?.classList.remove('section-glow');
            }, 800);
          }
        }, 200);
      }
      setOpenDropdown(null);
    };

  return (
    <nav className="navbar bg-base-100 border border-base-300/80 rounded-box min-h-0 h-12 px-3 lg:px-4 gap-1 shadow-sm">
      <div className="navbar-start shrink-0 min-w-0" />
      <div className="navbar-center hidden lg:flex flex-1 justify-center min-w-0">
          <ul className="menu menu-horizontal menu-sm gap-0.5 lg:gap-1 items-center flex-nowrap">
            <li>
              <a
                onClick={scrollToSection('work')}
                className="btn btn-ghost btn-sm normal-case text-sm"
              >
                Work
              </a>
            </li>
            <li>
              <a
                onClick={scrollToSection('education')}
                className="btn btn-ghost btn-sm normal-case text-sm"
              >
                Education
              </a>
            </li>
            <li>
              <a
                onClick={scrollToSection('publication')}
                className="btn btn-ghost btn-sm normal-case text-sm"
              >
                Publications
              </a>
            </li>
            <li className="relative">
              <button
                onClick={() => handleDropdownToggle('achievements')}
                className="btn btn-ghost btn-sm normal-case text-sm flex gap-0.5 items-center"
              >
                Achievements
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
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
                className="btn btn-ghost btn-sm normal-case text-sm flex gap-0.5 items-center"
              >
                Activities
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
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
                className="btn btn-ghost btn-sm normal-case text-sm"
              >
                Contact
              </a>
            </li>
          </ul>
      </div>
      <div className="navbar-end shrink-0 hidden lg:flex order-last">
        <ThemeChanger
          theme={theme}
          setTheme={setTheme}
          loading={loading}
          themeConfig={themeConfig}
        />
      </div>

        <div className="navbar-end lg:hidden flex gap-1 order-last">
          <ThemeChanger
            theme={theme}
            setTheme={setTheme}
            loading={loading}
            themeConfig={themeConfig}
          />
          <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-sm lg:hidden">
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
                  <a onClick={scrollToSection('certification')}>
                    Certifications
                  </a>
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
    </nav>
  );
};

export default Navbar;
