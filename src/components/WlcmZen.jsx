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
          <div className="con0">
            <img src="" alt="not found" />
          </div>
          <div className="con1">
            <div className="card-body">
              <img src="./src/assets/images/wlcm-main.webp" alt="" className="card-image" />
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
