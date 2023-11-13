import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Switch from "react-switch";
import Brightness3Icon from "@mui/icons-material/Brightness3"; // Moon icon
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Sunlight icon

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = (checked) => {
    setTheme(checked ? "light" : "dark");
  };

  return (
    <Switch
      checked={theme === "light"}
      onChange={toggleTheme}
      uncheckedIcon={
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "1.5px" }}
        >
          <Brightness3Icon style={{ color: "white" }} /> {/* Moon icon */}
        </div>
      }
      checkedIcon={
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "2px" }}
        >
          <WbSunnyIcon style={{ color: "yellow" }} /> {/* Sunlight icon */}
        </div>
      }
    />
  );
};

export default ThemeSwitch;
