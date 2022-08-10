import React from 'react';
import './header.css';
import useDarkMode from '../../hooks/useDarkMode';

const Toggle = () => {
  const [setTheme, colorTheme] = useDarkMode();
  return (
    <div className="toggle-button">
      <div className="flex justify-center">
        <div className="form-check form-switch mb-7">
          <input
            className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-black bg-no-repeat bg-contain  focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault56"
            onClick={() => setTheme(colorTheme)}
          />
        </div>
      </div>
    </div>
  );
};

export default Toggle;
