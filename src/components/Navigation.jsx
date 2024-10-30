import React, { useEffect, useRef, useState } from 'react'

function Navigation({ isSoundPlaying, setIsSoundPlaying }) {
  // sound and animation state
  const [isAnimating, setIsAnimating] = useState(false)
  const handleClick = () => {
    setIsAnimating(!isAnimating);
    setIsSoundPlaying(!isAnimating); // Toggle both sound and animation
  }

  const toggleIndicAnimation = () => {
      setIsAnimating(!isAnimating)
  }

  return (
    <div className='navigation-main'>
      <div className="navigation-wrap flex items-center justify-between rounded-lg">
        <div className="navigation-left flex gap-10 items-center justify-between w-fit">
          <img className='h-9' src="./src/assets/images/logonav.svg" alt="Logo" />
          <button className='btn_main__animated'>
            <div className="btn-main__content">
              <span className="btn__content-span">PRODUCTS</span>
              <div className="btn__content-svg">
                <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                  <defs>
                    <symbol viewBox="0 0 7.5 6.75" id="icon-arrowdown-narrow">
                      <path d="m3.75,6.75L0,0l3.75,2.01L7.5,0l-3.75,6.75Z"></path>
                    </symbol>
                  </defs>
                  <g>
                    <path d="m3.75,6.75L0,0l3.75,2.01L7.5,0l-3.75,6.75Z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="btn-main__svg">
              <svg
                viewBox="0 0 102 40"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                className="btnMain__shapeIcon"
                strokeWidth="1"
                width="102"
                height="40"
              >
                <path
                  className="btnMain__shapePath"
                  d="M85.59974969712675,4.95639215411867 L85.59974969712675,4.95639215411867 Q100.65528561395072,4.861825001568418,100.82628517745542,19.916686802275837 L100.82228470533079,19.564483827369237 Q100.99328426883548,34.61934562807666,85.93830609367556,34.779772666249535 L16.060682794658387,35.524394146931435 Q1.0057046194984736,35.68482118510431,0.8651188202173368,20.629644656011116 L0.8643255448657248,20.544693682898853 Q0.723739745584588,5.4895171538056555,15.779275662408564,5.3949500012554035 Z"
                  fill="#DFDFF2"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="navigation-right">
          {["Nexus", "Vault", "Prologue", "About", "Contact"].map((item, index) => (
            <a key={index} href='#' className='nav-link'>
              {item}
              {(item === "Nexus" || item === "Vault") && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="bigger"
                  width="10.11"
                  height="6.27"
                  fill='#dadada'
                >
                  <defs>
                    <symbol viewBox="0 0 10.11 6.27" id="icon-arrow-up-right">
                      <path d="m10.07,0h.04c-1.35,2.09-2.69,4.18-4.03,6.27-.17-.91-.35-1.82-.53-2.73,0-.03-.02-.04-.04-.05-1.84,0-3.67,0-5.51,0,1.83-.64,3.66-1.27,5.49-1.9,1.53-.52,3.05-1.06,4.58-1.59Z"></path>
                    </symbol>
                  </defs>
                  <use xlinkHref="#icon-arrow-up-right" />
                </svg>
              )}
            </a>
          ))}

          <button className="navigation__soundbar-btn" onClick={handleClick}>
            <div className={`indictor-line ${isAnimating ? 'animate' : ''}`}></div>
            <div className={`indictor-line ${isAnimating ? 'animate' : ''}`}></div>
            <div className={`indictor-line ${isAnimating ? 'animate' : ''}`}></div>
            <div className={`indictor-line ${isAnimating ? 'animate' : ''}`}></div>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Navigation
