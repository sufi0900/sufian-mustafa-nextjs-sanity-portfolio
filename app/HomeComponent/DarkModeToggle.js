import React, { useEffect } from "react";
import useDarkMode from "use-dark-mode";
import Brightness3Icon from "@mui/icons-material/Brightness3"; // Moon icon
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Sunlight icon
import dynamic from "next/dynamic";

const DynamicSwitch = dynamic(() => import("react-switch"), { ssr: false });

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  // Check if dark mode is enabled when the component mounts
  useEffect(() => {
    if (darkMode.value) {
      darkMode.toggle(); // If in dark mode, switch to light mode
    }
  }, []);

  return (
    <DynamicSwitch
      checked={darkMode.value}
      onChange={darkMode.toggle}
      offColor="#bbbbbb" // Light mode color
      onColor="#000000" // Dark mode color
      checkedIcon={
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "1.5px" }}
        >
          <WbSunnyIcon /> {/* Sunlight icon */}
        </div>
      }
      uncheckedIcon={
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "2px" }}
        >
          <Brightness3Icon style={{ color: "white" }} /> {/* Moon icon */}
        </div>
      }
    />
  );
};

export default DarkModeToggle;
