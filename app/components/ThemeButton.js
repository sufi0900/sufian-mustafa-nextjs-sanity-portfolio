// "use client";
// import React from "react";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import Switch from "react-switch";
// import Brightness3Icon from "@mui/icons-material/Brightness3"; // Moon icon
// import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Sunlight icon

// const ThemeSwitch = () => {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   const toggleTheme = (checked) => {
//     setTheme(checked ? "dark" : "light");
//   };

//   return (
//     <Switch
//       checked={theme === "dark"}
//       onChange={toggleTheme}
//       offColor="#bbbbbb" // Light mode color
//       onColor="#000000" // Dark mode color
//       checkedIcon={
//         <div
//           style={{ display: "flex", alignItems: "center", marginTop: "1.5px" }}
//         >
//           <WbSunnyIcon style={{ color: "yellow" }} /> {/* Sunlight icon */}
//         </div>
//       }
//       uncheckedIcon={
//         <div
//           style={{ display: "flex", alignItems: "center", marginTop: "2px" }}
//         >
//           <Brightness3Icon style={{ color: "white" }} /> {/* Moon icon */}
//         </div>
//       }
//     />
//   );
// };

// export default ThemeSwitch;
