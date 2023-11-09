import React from "react";
import Navbar from "./Navbar";

export default function RootLayout({ children, hideNavbar }) {
  return (
    <div>
      {hideNavbar ? null : <Navbar />}
      {children}
    </div>
  );
}
