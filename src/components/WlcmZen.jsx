import React, { useEffect, useRef, useState } from "react";
import { gsap, Circ } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WlcmZen() {
  // --------------------------------------------------------------------Mouse Card Move
  const smoothFactor = 0.1;
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = (clientX - centerX) / centerX;
      const deltaY = (clientY - centerY) / centerY;

      // Calculate the rotation values
      const rotateX = deltaY * 10;
      const rotateY = deltaX * 10;

      gsap.to(".card-body", {
        rotationX: rotateX + 10,
        rotationY: rotateY + 8,
        ease: "power3.out",
        duration: 0.3,
      });

      const imageX = deltaX * 10;
      const imageY = deltaY * 10;

      gsap.to(".card-image", {
        x: imageX,
        y: imageY,
        ease: "power3.out",
        duration: 0.3,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // ----------------------------------------------------Slide Animation Card (ScrollTrigger)
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(cardRef.current,{
      y: 400,
      opacity: 0,
      scale: 0.8,
    },{
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom",
        end: "top bottom",
        scrub: 2,
      }
    })
  }, [])

  // -------------------------------------------------------------------Mouse Image Move
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleImageMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", handleImageMove);

    return () => {
      window.removeEventListener("mousemove", handleImageMove);
    };
  }, []);

  const imageMovement = {
    transform: `translate(${
      (mousePosition.x - window.innerWidth / 2) / 200
    }px, ${(mousePosition.y - window.innerHeight / 2) / 200}px)`,
    transition: "transform 0.4s ease-out",
  };

  // ----------------------------------------------------Title Animation (ScrollTrigger)
  const textRef = useRef(null);
  useEffect(() => {
    const animation = gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 100,
        x: -100,
        rotateY: -50,
        rotateX: -40,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power1.in",
        x: 0,
        rotateY: 0,
        rotateX: 0,
        duration: 5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "top bottom",
          scrub: 1,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="wlcm-zentry">
      <div className="wlcm-wrap h-full w-full">
        <div className="wlcm-top w-full flex items-center justify-center flex-col pt-40">
          <span className="wlcm-span">WELCOME TO ZENTRY</span>
          <h1 className="context__title opacity-0" ref={textRef}>
            <span>
              Disc<span className="ff-prsm__setting">o</span>ver the world's
              largest shared <span className="ff-prsm__setting">a</span>
              dventure, crafted by ev<span className="ff-prsm__setting">e</span>
              ryone
            </span>
          </h1>
        </div>
        <div className="wlcm-middle">
          <div className="con0">
            <img
              src="./src/assets/images/ornament-image-wlcm.webp"
              alt="not found"
              style={{
                ...imageMovement,
              }}
            />
          </div>
          <div className="con1">
            <div className="card-body" ref={cardRef}>
              <img
                src="./src/assets/images/wlcm-main.webp"
                alt=""
                className="card-image"
                style={{ transform: `scale(2)` }}
              />
            </div>
          </div>
        </div>
        <div className="wlcm-bottom">
          <p className="wlcm-subtitle">
            <span className="wlcm-subtitle-bold">
              The Game of Games begins—your life, now an epic MMORPG
            </span>
            <span className="wlcm-subtitle-regular">
              Zentry unites the every players from countless games and
              platforms, both digital and physical, into a unified Play Economy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WlcmZen;
