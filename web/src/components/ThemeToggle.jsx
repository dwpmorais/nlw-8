import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-5">
      {theme === 'dark' ? (
        <div className="text-yellow-400 cursor-pointer">
          <FaSun
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            size="2rem"
          />
        </div>
      ) : (
        <div className="text-gray-800 cursor-pointer ">
          <FaMoon
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            size="2rem"
          />
        </div>
      )}
    </div>
  )
};

export default Toggle;
