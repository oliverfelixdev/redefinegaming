import React, { useEffect, useRef } from "react";
import { gsap, Circ } from "gsap";

const BentoCards = () => {
  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset the video to the beginning
    }
  };

  const c1Ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      c1Ref.current,
      {
        y: 10,
        opacity: 0,
        scale: 0.99,
        rotateX: 45,
      },
      {
        rotationX: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.1,
        ease: "sine.in",
        scrollTrigger: {
          trigger: c1Ref.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      }
    );
  }, []);

  const c2Ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      c2Ref.current,
      {
        y: 10,
        opacity: 0,
        scale: 0.99,
        rotateX: 45,
      },
      {
        rotationX: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.1,
        ease: "sine.in",
        scrollTrigger: {
          trigger: c2Ref.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <div className="bento_cards__body">
      <div className="t__data">
        <span className="subtitle__main">
          Dive into the 'Game of Games' Universe
          <span className="subtitle__main">
            Immerse yourself in a rich and ever-expanding ecosystem where a
            vibrant array of products converge into an interconnected universe.
          </span>
        </span>
      </div>
      <div className="bento__grid">
        <div id="grid-container">
          <div
            className="grid-item item1"
            ref={c1Ref}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="video-container">
              <video
                loop
                muted
                // autoPlay
                src="./radiant_desktop.mp4"
                poster="./src/assets/images/radient-cover-template.webp"
                className="radiant_video"
              ></video>
            </div>
            <div className="content-container">
              <div className="top">
                <h3 className="card__title">
                  RADIA<span className="ff-prsm__setting">N</span>T
                </h3>
                <span className="grid__subtitle">
                  A cross-platform metagame app, turning your activities across
                  Web2 and Web3 games into a rewarding adventure.
                </span>
              </div>
              <div className="bottom">
                <button className="btn__grid w-fit flex items-center justify-center flex-col overflow-hidden">
                  <div className="prsm-btn-top absolute z-20 flex items-center justify-center gap-2">
                    <div className="btn-prsm__svg flex items-center justify-center">
                      <svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-e9efd6ee=""
                        aria-hidden="true"
                        class="bigger"
                        width="10.11"
                        height="6.27"
                      >
                        <defs>
                          <symbol
                            viewBox="0 0 10.11 6.27"
                            id="icon-arrow-up-right"
                            fill="#898995"
                          >
                            <path
                              d="m10.07,0h.04c-1.35,2.09-2.69,4.18-4.03,6.27-.17-.91-.35-1.82-.53-2.73,0-.03-.02-.04-.04-.05-1.84,0-3.67,0-5.51,0,1.83-.64,3.66-1.27,5.49-1.9,1.53-.52,3.05-1.06,4.58-1.59Z"
                              fill="#898995"
                            ></path>
                          </symbol>
                        </defs>
                        <g>
                          <path
                            d="m10.07,0h.04c-1.35,2.09-2.69,4.18-4.03,6.27-.17-.91-.35-1.82-.53-2.73,0-.03-.02-.04-.04-.05-1.84,0-3.67,0-5.51,0,1.83-.64,3.66-1.27,5.49-1.9,1.53-.52,3.05-1.06,4.58-1.59Z"
                            fill="#898995"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <span className="text-[.7vw] text-[#898995] font-semibold font-[Roboto]">
                      COMING SOON
                    </span>
                  </div>
                  <div className="prsm-btn-bottom">
                    <svg
                      viewBox="0 0 129 40"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      class="btnMain__shapeIcon"
                      stroke-width="1"
                      data-v-e9efd6ee=""
                      width="129"
                      height="40"
                    >
                      <path
                        class="btnMain__shapePath"
                        data-v-e9efd6ee=""
                        d="M111.21041666666667,5.214374999999999 L111.21041666666667,5.214374999999999 Q127.8125,5.214374999999999,127.8125,21.81645833333333 L127.8125,18.49604166666667 Q127.8125,35.098125,111.21041666666667,35.098125 L17.602083333333333,35.098125 Q1,35.098125,1,18.49604166666667 L1,21.81645833333333 Q1,5.214374999999999,17.602083333333333,5.214374999999999 Z"
                        stroke-opacity="0.25"
                        stroke="#DFDFF2"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div
            className="grid-item item3"
            ref={c2Ref}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="video-container">
              <video
                loop
                muted
                // autoPlay
                src="./zigma_desktop_homepage-lg.mp4"
                poster="./src/assets/images/zigma_poster.webp"
                className="radiant_video"
              ></video>
            </div>
            <div className="content-container">
              <div className="top">
                <h3 className="card__title">
                  ZIG<span className="ff-prsm__setting">M</span>A
                </h3>
                <span className="grid__subtitle w-[44%]">
                  An anime and gaming-inspired NFT collection - the IP primed
                  for expansion.
                </span>
              </div>
              <div className="bottom">
                <button className="btn__grid w-fit flex items-center justify-center flex-col overflow-hidden">
                  <div className="prsm-btn-top absolute z-20 flex items-center justify-center gap-2">
                    <div className="btn-prsm__svg flex items-center justify-center">
                      <svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-e9efd6ee=""
                        aria-hidden="true"
                        class="bigger"
                        width="10.11"
                        height="6.27"
                      >
                        <defs>
                          <symbol
                            viewBox="0 0 10.11 6.27"
                            id="icon-arrow-up-right"
                            fill="#898995"
                          >
                            <path
                              d="m10.07,0h.04c-1.35,2.09-2.69,4.18-4.03,6.27-.17-.91-.35-1.82-.53-2.73,0-.03-.02-.04-.04-.05-1.84,0-3.67,0-5.51,0,1.83-.64,3.66-1.27,5.49-1.9,1.53-.52,3.05-1.06,4.58-1.59Z"
                              fill="#898995"
                            ></path>
                          </symbol>
                        </defs>
                        <g>
                          <path
                            d="m10.07,0h.04c-1.35,2.09-2.69,4.18-4.03,6.27-.17-.91-.35-1.82-.53-2.73,0-.03-.02-.04-.04-.05-1.84,0-3.67,0-5.51,0,1.83-.64,3.66-1.27,5.49-1.9,1.53-.52,3.05-1.06,4.58-1.59Z"
                            fill="#898995"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <span className="text-[.7vw] text-[#898995] font-semibold font-[Roboto]">
                      COMING SOON
                    </span>
                  </div>
                  <div className="prsm-btn-bottom">
                    <svg
                      viewBox="0 0 129 40"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      class="btnMain__shapeIcon"
                      stroke-width="1"
                      data-v-e9efd6ee=""
                      width="129"
                      height="40"
                    >
                      <path
                        class="btnMain__shapePath"
                        data-v-e9efd6ee=""
                        d="M111.21041666666667,5.214374999999999 L111.21041666666667,5.214374999999999 Q127.8125,5.214374999999999,127.8125,21.81645833333333 L127.8125,18.49604166666667 Q127.8125,35.098125,111.21041666666667,35.098125 L17.602083333333333,35.098125 Q1,35.098125,1,18.49604166666667 L1,21.81645833333333 Q1,5.214374999999999,17.602083333333333,5.214374999999999 Z"
                        stroke-opacity="0.25"
                        stroke="#DFDFF2"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div
            className="grid-item item2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="video-container">
              <video
                loop
                muted
                // autoPlay
                src="./zoltan_desktop.mp4"
                poster="./src/assets/images/zoltan_template.webp"
                className="radiant_video"
              ></video>
            </div>
            <div className="content-container">
              <div className="top">
                <h3 className="card__title">
                  N<span className="ff-prsm__setting">E</span>XUS
                </h3>
                <span className="grid__subtitle w-[38%]">
                  A gamified social hub, adding a new dimension of play to your
                  identity, Web3 engagement and social interaction
                </span>
              </div>
              <div className="bottom">
                <button className="btn__grid w-fit flex items-center justify-center flex-col overflow-hidden">
                  <div className="prsm-btn-top absolute z-20 flex items-center justify-center gap-2">
                    <div className="btn-prsm__svg flex items-center justify-center">
                      <svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-e9efd6ee=""
                        aria-hidden="true"
                        class="bigger"
                        width="10.11"
                        height="6.27"
                      >
                        <defs>
                          <symbol
                            viewBox="0 0 10.11 6.27"
                            id="icon-arrow-up-right"
                            fill="#898995"
                          >
                            <path
                              d="m10.07,0h.04c-1.35,2.09-2.69,4.18-4.03,6.27-.17-.91-.35-1.82-.53-2.73,0-.03-.02-.04-.04-.05-1.84,0-3.67,0-5.51,0,1.83-.64,3.66-1.27,5.49-1.9,1.53-.52,3.05-1.06,4.58-1.59Z"
                              fill="#898995"
                            ></path>
                          </symbol>
                        </defs>
                        <g>
                          <path
                            d="m10.07,0h.04c-1.35,2.09-2.69,4.18-4.03,6.27-.17-.91-.35-1.82-.53-2.73,0-.03-.02-.04-.04-.05-1.84,0-3.67,0-5.51,0,1.83-.64,3.66-1.27,5.49-1.9,1.53-.52,3.05-1.06,4.58-1.59Z"
                            fill="#898995"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <span className="text-[.7vw] text-[#898995] font-semibold font-[Roboto]">
                      COMING SOON
                    </span>
                  </div>
                  <div className="prsm-btn-bottom">
                    <svg
                      viewBox="0 0 129 40"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      class="btnMain__shapeIcon"
                      stroke-width="1"
                      data-v-e9efd6ee=""
                      width="129"
                      height="40"
                    >
                      <path
                        class="btnMain__shapePath"
                        data-v-e9efd6ee=""
                        d="M111.21041666666667,5.214374999999999 L111.21041666666667,5.214374999999999 Q127.8125,5.214374999999999,127.8125,21.81645833333333 L127.8125,18.49604166666667 Q127.8125,35.098125,111.21041666666667,35.098125 L17.602083333333333,35.098125 Q1,35.098125,1,18.49604166666667 L1,21.81645833333333 Q1,5.214374999999999,17.602083333333333,5.214374999999999 Z"
                        stroke-opacity="0.25"
                        stroke="#DFDFF2"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div
            className="grid-item item4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="video-container">
              <video
                loop
                muted
                // autoPlay
                src="./azul_desktop.mp4"
                poster="./src/assets/images/azul_poster.webp"
                className="radiant_video"
              ></video>
            </div>
            <div className="content-container">
              <div className="top">
                <h3 className="card__title">
                  AZ<span className="ff-prsm__setting">U</span>L
                </h3>
                <span className="grid__subtitle w-[44%]">
                  A cross-world AI Agent - elevating your gameplay to be more
                  fun and productive
                </span>
              </div>
              <div className="bottom">
                <button className="btn__grid w-fit flex items-center justify-center flex-col overflow-hidden">
                  <div className="prsm-btn-top absolute z-20 flex items-center justify-center gap-2">
                    <div className="btn-prsm__svg flex items-center justify-center">
                      <svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-e9efd6ee=""
                        aria-hidden="true"
                        class="bigger"
                        width="10.11"
                        height="6.27"
                      >
                        <defs>
                          <symbol
                            viewBox="0 0 10.11 6.27"
                            id="icon-arrow-up-right"
                            fill="#898995"
                          >
                            <path
                              d="m10.07,0h.04c-1.35,2.09-2.69,4.18-4.03,6.27-.17-.91-.35-1.82-.53-2.73,0-.03-.02-.04-.04-.05-1.84,0-3.67,0-5.51,0,1.83-.64,3.66-1.27,5.49-1.9,1.53-.52,3.05-1.06,4.58-1.59Z"
                              fill="#898995"
                            ></path>
                          </symbol>
                        </defs>
                        <g>
                          <path
                            d="m10.07,0h.04c-1.35,2.09-2.69,4.18-4.03,6.27-.17-.91-.35-1.82-.53-2.73,0-.03-.02-.04-.04-.05-1.84,0-3.67,0-5.51,0,1.83-.64,3.66-1.27,5.49-1.9,1.53-.52,3.05-1.06,4.58-1.59Z"
                            fill="#898995"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <span className="text-[.7vw] text-[#898995] font-semibold font-[Roboto]">
                      COMING SOON
                    </span>
                  </div>
                  <div className="prsm-btn-bottom">
                    <svg
                      viewBox="0 0 129 40"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      class="btnMain__shapeIcon"
                      stroke-width="1"
                      data-v-e9efd6ee=""
                      width="129"
                      height="40"
                    >
                      <path
                        class="btnMain__shapePath"
                        data-v-e9efd6ee=""
                        d="M111.21041666666667,5.214374999999999 L111.21041666666667,5.214374999999999 Q127.8125,5.214374999999999,127.8125,21.81645833333333 L127.8125,18.49604166666667 Q127.8125,35.098125,111.21041666666667,35.098125 L17.602083333333333,35.098125 Q1,35.098125,1,18.49604166666667 L1,21.81645833333333 Q1,5.214374999999999,17.602083333333333,5.214374999999999 Z"
                        stroke-opacity="0.25"
                        stroke="#DFDFF2"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item split-placeholder-1">
            <div className="top">
              <h1 className="card__title">
                M<span className="ff-prsm__setting">O</span>RE
              </h1>
              <h1 className="card__title">
                CO<span className="ff-prsm__setting">M</span>ING
              </h1>
              <h1 className="card__title">
                S<span className="ff-prsm__setting">O</span>ON
              </h1>
            </div>
            <div className="bottom">
              <svg
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="nav__icon"
                data-v-49408b60=""
                width="66.49"
                height="72.76"
              >
                <defs>
                  <symbol
                    viewBox="0 0 66.49 72.76"
                    id="icon-arrow-icon"
                    fill="#000000"
                  >
                    <path
                      d="m62.12,0h.27c-8.31,14.06-16.59,28.15-24.89,42.23-1.07-6.14-2.16-12.27-3.26-18.4-.02-.2-.11-.3-.27-.3-11.33-.03-22.65.03-33.98-.02,11.28-4.3,22.58-8.53,33.86-12.82,9.43-3.53,18.83-7.14,28.26-10.68Z"
                      fill="#000000"
                    ></path>
                    <path
                      d="m27.56,32.86c.48-.81,1.02-1.59,1.41-2.46.29.94.37,1.93.56,2.89.76,4.32,1.51,8.65,2.28,12.97.17.94.28,1.9.53,2.82,11.38.08,22.77-.02,34.15.05-5.5,2.14-11.06,4.15-16.56,6.28-14.4,5.42-28.78,10.9-43.18,16.31-.86.38-1.75.66-2.6,1.04.15-.52.48-.93.74-1.39,7.53-12.86,15.13-25.66,22.67-38.52Z"
                      fill="#000000"
                    ></path>
                  </symbol>
                </defs>
                <g>
                  <path
                    d="m62.12,0h.27c-8.31,14.06-16.59,28.15-24.89,42.23-1.07-6.14-2.16-12.27-3.26-18.4-.02-.2-.11-.3-.27-.3-11.33-.03-22.65.03-33.98-.02,11.28-4.3,22.58-8.53,33.86-12.82,9.43-3.53,18.83-7.14,28.26-10.68Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="m27.56,32.86c.48-.81,1.02-1.59,1.41-2.46.29.94.37,1.93.56,2.89.76,4.32,1.51,8.65,2.28,12.97.17.94.28,1.9.53,2.82,11.38.08,22.77-.02,34.15.05-5.5,2.14-11.06,4.15-16.56,6.28-14.4,5.42-28.78,10.9-43.18,16.31-.86.38-1.75.66-2.6,1.04.15-.52.48-.93.74-1.39,7.53-12.86,15.13-25.66,22.67-38.52Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="grid-item split-placeholder-2">
            <video loop autoPlay muted src="./trailer-md.mp4"></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoCards;
