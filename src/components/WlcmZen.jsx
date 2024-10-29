import React, { useRef } from 'react'
import { gsap } from 'gsap'
function WlcmZen() {

    // main container ref()
    const containerRef = useRef(null);

    // ref for tilt and float elements
    const tiltElementRef = useRef(null);
    const floatElementRef = useRef(null)
    const imageRef = useRef(null)

    // Mouse Move handle or tilt effect
    const handleTiltEffect = (event) => {
        const container = containerRef.current;
        const tiltElement = tiltElementRef.current;

        const { width, height, top, left } = container.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;

        const maxRotation = 25;
        const rotateX = Math.max(Math.min(deltaY / height * maxRotation, maxRotation), -maxRotation);
        const rotateY = Math.max(Math.min(-deltaX / width * maxRotation, maxRotation), -maxRotation);

        gsap.to(tiltElement, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 500,
            duration: 0.3,
            ease: "power3.out"
        });
    };

    const handleFloatEffect = (event) => {
        const container = containerRef.current;
        const floatElement = floatElementRef.current;

        const { width, height, top, left } = container.getBoundingClientRect();
        const centerY = top + height / 2;
        const centerX = left + width / 2;

        const offsetX = event.clientX - centerX;
        const offsetY = event.clientY - centerY;

        const maxTranslate = 20;
        const translateX = Math.max(Math.min(offsetX / width * maxTranslate, maxTranslate), -maxTranslate);
        const translateY = Math.max(Math.min(offsetY / height * maxTranslate, maxTranslate), -maxTranslate);

        gsap.to(floatElement, {
            x: translateX,
            y: translateY,
            duration: 0.3,
            ease: "power3.out",
        });
    };
    

    // Combined mouse move handler for container
    const handleMouseMove = (event) => {
        handleTiltEffect(event);
        handleFloatEffect(event);
    };

    return (
        <div className='wlcm-zentry' ref={containerRef} onMouseMove={handleMouseMove}>
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
                    <div className="ornament-image" >
                        <img src="https://zentry.com/export/images/home/intro/custom-home-intro-desktop-outer@lg.webp" alt="not found" ref={floatElementRef} />
                    </div>
                    <div className="tilt-svg-wrap" ref={tiltElementRef}>
                        <svg id="Layer_1" height={550} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 439 591">
                            <defs> <style>
                                {`
                                .cls-2 {
                                    fill: none;
                                    stroke: #000;
                                    stroke-miterlimit: 10;
                                    stroke-width: 1px;
                                }
                            `}
                            </style> <clipPath id="clippath"> <path className="cls-2" d="M413.36,556.59l-391.4,24.02c-5.5.34-10.14-4.04-10.12-9.55L13.96,22.05c.02-5.46,4.62-9.79,10.07-9.48l351.62,19.96c4.78.27,8.61,4.04,8.97,8.81l37.66,505.03c.4,5.3-3.62,9.9-8.92,10.22Z" />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#clippath)"> <image ref={imageRef} href="./src/assets/images/wlcm-main.webp" x="0" y="0" width="439" height="591" preserveAspectRatio="xMidYMid slice" /></g>
                            <path className="cls-2" d="M413.36,556.59l-391.4,24.02c-5.5.34-10.14-4.04-10.12-9.55L13.96,22.05c.02-5.46,4.62-9.79,10.07-9.48l351.62,19.96c4.78.27,8.61,4.04,8.97,8.81l37.66,505.03c.4,5.3-3.62,9.9-8.92,10.22Z" />
                        </svg>
                    </div>
                </div>
                <div className="wlcm-bottom">
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