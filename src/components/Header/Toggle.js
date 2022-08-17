import React from 'react';
import './header.css';
import useDarkMode from '../../hooks/useDarkMode';

const Toggle = () => {
  const [setTheme, colorTheme] = useDarkMode();
  return (
    <div>
      <label
        for="default-toggle"
        class="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          class="sr-only peer"
          onClick={() => setTheme(colorTheme)}
        />
        <div class="w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-org dark:peer-focus:ring-ltPnk rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blk"></div>
      </label>
    </div>
  );
};

export default Toggle;
