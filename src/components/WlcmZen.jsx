import React, { useRef, useState } from "react";
import { gsap } from "gsap";
function WlcmZen() {

  return (
    <div className="wlcm-zentry">
      <div className="wlcm-wrap h-full w-full">
        <div className="wlcm-top w-full flex items-center justify-center flex-col pt-40">
          <span className="wlcm-span">WELCOME TO ZENTRY</span>
          <h1 className="wlcm-title">
            <span>
              Disc<span className="ff-prsm__setting">o</span>ver the world's
              largest shared <span className="ff-prsm__setting">a</span>
              dventure, crafted by ev<span className="ff-prsm__setting">e</span>
              ryone
            </span>
          </h1>
        </div>
        <div className="wlcm-middle">
          <div className="ornament-image">
            <img
              src="https://zentry.com/export/images/home/intro/custom-home-intro-desktop-outer@lg.webp"
              alt="not found"
            />
          </div>
          <div className="tilt-svg-wrap">
            <svg
              id="Layer_1"
              height={550}
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 439 591"
            >
              <defs>
                <style>
                  {`
                        .cls-2 {
                            fill: none;
                            stroke: #000;
                            stroke-miterlimit: 10;
                            stroke-width: 1px;
                        }
                 `}
                </style>
                <clipPath id="clippath">
                  <path
                    className="cls-2"
                    d="M413.36,556.59l-391.4,24.02c-5.5.34-10.14-4.04-10.12-9.55L13.96,22.05c.02-5.46,4.62-9.79,10.07-9.48l351.62,19.96c4.78.27,8.61,4.04,8.97,8.81l37.66,505.03c.4,5.3-3.62,9.9-8.92,10.22Z"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#clippath)">
                <image
                  href="./src/assets/images/wlcm-main.webp"
                  x="0"
                  y="0"
                  width="439"
                  height="591"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
              <path
                className="cls-2"
                d="M413.36,556.59l-391.4,24.02c-5.5.34-10.14-4.04-10.12-9.55L13.96,22.05c.02-5.46,4.62-9.79,10.07-9.48l351.62,19.96c4.78.27,8.61,4.04,8.97,8.81l37.66,505.03c.4,5.3-3.62,9.9-8.92,10.22Z"
              />
            </svg>
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
