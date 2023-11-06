"use client";
import React, { useEffect, useRef } from "react";
import "animate.css"; // Make sure to import the animate.css library

const AnimatedDiv = ({ className, animationClass, children }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // 0.5 means the element is considered visible when at least 50% is in the viewport
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the div is in the viewport, add the animate.css class to trigger the animation
          divRef.current.classList.add("animate__animated", animationClass);
          observer.unobserve(entry.target); // Stop observing once the animation has been triggered
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      observer.disconnect(); // Clean up the observer when the component is unmounted
    };
  }, [animationClass]);

  return (
    <div ref={divRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedDiv;
