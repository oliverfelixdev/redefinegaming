import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion'
function WlcmZen() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 })
    const handleMouseMove = (e) => {
        const container = e.currentTarget.getBoundingClientRect();
        const containerXPos = e.pageX - container.left;
        const containerYPos = e.pageY - container.top;

        const xPos = ((containerXPos / container.width) - 0.5) * 2;
        const yPos = ((containerYPos / container.height) - 0.5) * 2;

        const rotationX = 25 * yPos
        const rotationY = -25 * xPos

        setRotation({ x: rotationX, y: rotationY })
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };
    return (
        <div className='wlcm-zentry' /* onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} */>
            <div className="wlcm-wrap h-full w-full">
                <div className="wlcm-top w-full flex items-center justify-center flex-col pt-40">
                    <span className='wlcm-span'>WELCOME TO ZENTRY</span>
                    <h1 className="wlcm-title">
                        <span>
                            Disc<span className='ff-prsm__setting'>o</span>ver the world's
                            largest shared <span className='ff-prsm__setting'>a</span>dventure,
                            crafted by ev<span className='ff-prsm__setting'>e</span>ryone
                        </span>
                    </h1>
                </div>
                <div className="wlcm-middle">
                    <motion.div
                        className="tilting-image-container"
                        animate={{ rotateX: rotation.x, rotationY: rotation.y }}
                        trnasition={{duration: 0.5, ease: [0.19, 1, 0.22, 1]}}
                    >
                        <img className='tilting_image' src="./src/assets/images/wlcm-main.webp" alt="" />
                    </motion.div>
                </div>
                <div className="wlcm-middle">
                    <p className='wlcm-subtitle'>
                        <span className='wlcm-subtitle-bold'>The Game of Games begins—your life, now an epic MMORPG</span>
                        <span className='wlcm-subtitle-regular'>Zentry unites the every players from countless games and platforms, both digital and physical, into a unified Play Economy</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WlcmZen