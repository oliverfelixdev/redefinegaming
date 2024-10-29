import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TiltedSVG = () => {
    const svgRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const svgElement = svgRef.current;
        const imageElement = imageRef.current;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate tilt values based on mouse position for SVG
            const tiltX = ((clientY / innerHeight) * 20 - 10).toFixed(2); // Range: -10 to 10
            const tiltY = ((clientX / innerWidth) * 20 - 10).toFixed(2); // Range: -10 to 10

            // Apply the tilt transformation to the SVG
            gsap.to(svgElement, {
                rotationX: tiltX,
                rotationY: tiltY,
                transformPerspective: 1000,
                duration: 0.5,
            });

            // Calculate parallax effect for the image
            const parallaxX = ((clientX / innerWidth) * 10 - 3).toFixed(2); // Range: -5 to 5
            const parallaxY = ((clientY / innerHeight) * 10 - 3).toFixed(2); // Range: -5 to 5

            // Apply the parallax transformation to the image
            gsap.to(imageElement, {
                x: parallaxX,
                y: parallaxY,
                duration: 0.5,
            });
        };

        // Add event listener for mouse move
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Cleanup the event listener on unmount
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <svg
                ref={svgRef}
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 439 591"
                height={450}
                style={{ overflow: 'visible' }} // Ensures visibility for transformed elements
            >
                <defs>
                    <style>
                        {`.cls-2 {
                            fill: none;
                            stroke: #000;
                            stroke-miterlimit: 10;
                            stroke-width: 2px;
                        }`}
                    </style>
                    <clipPath id="clippath">
                        <path className="cls-2" d="M413.36,556.59l-391.4,24.02c-5.5.34-10.14-4.04-10.12-9.55L13.96,22.05c.02-5.46,4.62-9.79,10.07-9.48l351.62,19.96c4.78.27,8.61,4.04,8.97,8.81l37.66,505.03c.4,5.3-3.62,9.9-8.92,10.22Z" />
                    </clipPath>
                </defs>
                <g clipPath="url(#clippath)">
                    <image
                        ref={imageRef}
                        xlinkHref="https://images.unsplash.com/photo-1594740929989-6f9582ee2f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                        x="0"
                        y="0"
                        width="439"
                        height="591"
                        preserveAspectRatio="xMidYMid slice"
                    />
                </g>
                <path className="cls-2" d="M413.36,556.59l-391.4,24.02c-5.5.34-10.14-4.04-10.12-9.55L13.96,22.05c.02-5.46,4.62-9.79,10.07-9.48l351.62,19.96c4.78.27,8.61,4.04,8.97,8.81l37.66,505.03c.4,5.3-3.62,9.9-8.92,10.22Z" />
            </svg>
        </div>
    );
};

export default TiltedSVG;
