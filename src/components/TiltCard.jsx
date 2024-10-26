import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TiltCard = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const containerXPos = e.pageX - container.left;
    const containerYPos = e.pageY - container.top;

    const xPos = ((containerXPos / container.width) - 0.5) * 2;
    const yPos = ((containerYPos / container.height) - 0.5) * 2;

    const rotationX = 25 * yPos;
    const rotationY = -25 * xPos;

    setRotation({ x: rotationX, y: rotationY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="container"
      onMouseMove={handleMouseMove}
    //   onMouseLeave={handleMouseLeave}
      style={{
        perspective: 900,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.div
        className="card"
        style={{
          width: '300px',
          height: '400px',
          backgroundColor: '#ccc',
          transformOrigin: 'center center -10px',
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          duration: 0.5,
          ease: [0.19, 1, 0.22, 1],
        }}
      >
        {/* Your card content here */}
      </motion.div>
    </div>
  );
};

export default TiltCard;
