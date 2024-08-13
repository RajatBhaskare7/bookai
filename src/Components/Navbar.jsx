import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <nav className="w-full dark:bg-[#1E293B] bg-[#FFFFFF] text-[#000] dark:text-[#e2e8f0] text-[14px] font-semibold py-6 flex justify-center space-x-8">
        <a href="#" className="text-muted-foreground hover:text-primary">OVERVIEW</a>
        <a href="#" className="text-muted-foreground hover:text-primary">AUTHENTICATION</a>
        <a href="#" className="text-muted-foreground hover:text-primary">ENDPOINTS</a>
        <a href="#" className="text-muted-foreground hover:text-primary">TUTORIAL</a>
        <a href="#" className="text-muted-foreground hover:text-primary">CODE EXAMPLES</a>
        <a href="#" className="text-muted-foreground hover:text-primary">PRICING</a>
        <button
          onClick={toggleTheme}
          className="ml-4 bg-[#334155] text-white px-3 py-1 rounded-lg hover:bg-[#475569]"
        >
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </nav>
    </div>
  );
}
