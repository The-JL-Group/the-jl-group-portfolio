import React from 'react';
import './header.css';
import useDarkMode from '../../hooks/useDarkMode';

const Toggle = () => {
  const [setTheme, colorTheme] = useDarkMode();
  return (
    <div>
      <label
        for="default-toggle"
        // inline-flex
        className=" relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          id="default-toggle"
          className="sr-only peer"
          onClick={() => setTheme(colorTheme)}
        />
        <div className="w-11 h-6 bg-white rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-blk  dark:after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blk border-2 border-blk dark:border-white outline-0"></div>
      </label>
    </div>
  );
};

export default Toggle;
