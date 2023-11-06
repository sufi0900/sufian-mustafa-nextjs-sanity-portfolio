"use client";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function AosProvider({ children }) {
  useEffect(() => {
    AOS.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}

export default AosProvider;
