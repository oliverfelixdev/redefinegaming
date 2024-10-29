// TiltingElement.js
import React, { useRef } from "react";
import { gsap } from "gsap";

const TiltingElement = () => {
  const containerRef = useRef(null);
  const elementRef = useRef(null);

  // Function to handle mouse movement
  const handleMouseMove = (event) => {
    const container = containerRef.current;
    const element = elementRef.current;

    // Get container dimensions and center
    const { width, height, top, left } = container.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate mouse distance from center
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    // Set max rotation limits
    const maxRotation = 15; // degrees

    // Calculate rotation based on distance, clamping to max rotation
    const rotateX = Math.max(Math.min(deltaY / height * maxRotation, maxRotation), -maxRotation);
    const rotateY = Math.max(Math.min(-deltaX / width * maxRotation, maxRotation), -maxRotation);

    // Apply GSAP transform to element
    gsap.to(element, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 500,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  // Reset the tilt when mouse leaves
  const handleMouseLeave = () => {
    gsap.to(elementRef.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "#f3f3f3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        perspective: "1000px",
      }}
    >
      <div
        ref={elementRef}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#4a90e2",
          borderRadius: "20px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
      </div>
    </div>
  );
};

export default TiltingElement;
