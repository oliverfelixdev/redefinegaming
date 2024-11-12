import React, { useRef, useState, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Testing() {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // Start the animation as the container reaches the center of the viewport
        end: "bottom top",   // End the animation when the container leaves the viewport
        scrub: true,         // Ties animation progress to scroll
        markers: true,       // Optional: Shows markers for debugging
      },
    });

    animation
      .from(".demo div", {
        rotationX: -90,
        rotationY: -60,
        opacity: 0,
        stagger: 0.8,
        transformOrigin: "50% 50% -50", // 3D perspective
      })
      .to(".demo div", {
        rotationX: 90,
        rotationY: 45,
        opacity: 0,
        stagger: 0.8,
      }, "+=0.8"); // Starts fade-out after stagger delay

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}> {/* Make the page scrollable */}
      <div ref={containerRef} className="demo" style={{ opacity: 0 }}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </div>
    </div>
  );
}

export default Testing;
