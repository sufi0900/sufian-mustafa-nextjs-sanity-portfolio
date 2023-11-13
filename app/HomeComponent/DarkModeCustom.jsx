import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Dark Mode</button>
    </div>
  );
};

export default DarkModeToggle;
