import { AiOutlineControl } from 'react-icons/ai';
import { SanitizedThemeConfig } from '../../interfaces/sanitized-config';
import { LOCAL_STORAGE_KEY_NAME } from '../../constants';
import { skeleton } from '../../utils';
import { MouseEvent } from 'react';

/**
 * Renders a theme changer component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.theme - The current theme.
 * @param {function} props.setTheme - A function to set the theme.
 * @param {boolean} props.loading - Whether the component is in a loading state.
 * @param {SanitizedThemeConfig} props.themeConfig - The theme configuration object.
 * @return {JSX.Element} The rendered theme changer component.
 */
const ThemeChanger = ({
  theme,
  setTheme,
  loading,
  themeConfig,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  themeConfig: SanitizedThemeConfig;
}) => {
  const changeTheme = (
    e: MouseEvent<HTMLAnchorElement>,
    selectedTheme: string,
  ) => {
    e.preventDefault();

    document.querySelector('html')?.setAttribute('data-theme', selectedTheme);

    typeof window !== 'undefined' &&
      localStorage.setItem(LOCAL_STORAGE_KEY_NAME, selectedTheme);

    setTheme(selectedTheme);
  };

  // Custom theme display names
  const getThemeDisplayName = (themeName: string) => {
    const themeDisplayMap: { [key: string]: string } = {
      sunset: 'Dark',
      cupcake: 'Light',
    };

    return themeDisplayMap[themeName] || themeName;
  };

  if (loading) {
    return skeleton({
      widthCls: 'w-10',
      heightCls: 'h-10',
      className: 'rounded-full',
    });
  }

  return (
    <div title="Change Theme" className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} className="btn btn-ghost btn-circle theme-changer-btn">
        <AiOutlineControl className="w-5 h-5" />
      </div>
      <div
        tabIndex={0}
        className="mt-2 overflow-y-auto shadow-2xl dropdown-content max-h-96 w-52 rounded-lg bg-base-200 text-base-content z-10 theme-changer-dropdown"
      >
        <ul className="p-4 menu compact">
          {[
            themeConfig.defaultTheme,
            ...themeConfig.themes.filter(
              (item) => item !== themeConfig.defaultTheme,
            ),
          ].map((item, index) => (
            <li key={index}>
              <a
                onClick={(e) => changeTheme(e, item)}
                className={`${theme === item ? 'active' : ''}`}
              >
                <span className="opacity-60 capitalize">
                  {getThemeDisplayName(item)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThemeChanger;
