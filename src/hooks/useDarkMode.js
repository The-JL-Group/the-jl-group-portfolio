import React, { useEffect, useState } from 'react';

// SHORTCUT = "RFCE"
function useDarkMode() {
  // SHORTCUT = "useStateSnippet"
  // use state returns value (theme) & a function to change that value (setTheme)
  // giving it a value (light)
  const [theme, setTheme] = useState('light');

  // checking to see if theme is = to light, if yes then change to dark, if not then light
  const colorTheme = theme === 'light' ? 'dark' : 'light';

  // hook runs code when only we need it. in this case it's when theme is rendered or re-rendered
  useEffect(() => {
    const root = window.document.documentElement;

    // adding theme (value) to the root component
    root.classList.add(theme);
    // remove colorTheme from the root component. if we don't it'll keep switching from dark to light. line 11 keeps checking.
    root.classList.remove(colorTheme);
  }, [setTheme, colorTheme]);

  return [setTheme, colorTheme];
}

export default useDarkMode;
