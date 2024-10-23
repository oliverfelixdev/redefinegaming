import React, { useState } from 'react'

const videos = [
    'hero-cut-1.mp4',
    'hero-cut-2.mp4',
];
function Prism() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const handleVideoChange = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    };
    return (
        <div className='prism'>
            <div className="prism-wrap">
                <div onClick={handleVideoChange} className="window-glimp"></div>
                <div className="content">
                    <div className="data-top content-box">
                        <h1 className='prism-title'><span>REDEFI<span className='ff-prsm__setting'>N</span>E</span></h1>
                        <div className="unleash">
                            <p className="prism-subtitle">Enter the Metagame Layer<br />Unleash the Play Economy</p>
                            <button className="btn-trailer flex items-center justify-center flex-col overflow-hidden">
                                <div className="prsm-btn-top absolute z-20 flex items-center justify-center gap-2">
                                    <div className="btn-prsm__svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="playBtn__icon" width="20" height="20"><defs><symbol viewBox="0 0 20 20" id="icon-arrow-right" fill="#000000"><path d="M17.5 10.0013L2.5 18.3346L6.9697 10.0013L2.5 1.66797L17.5 10.0013Z" fill="#000000" /></symbol></defs><g><path d="M17.5 10.0013L2.5 18.3346L6.9697 10.0013L2.5 1.66797L17.5 10.0013Z" fill="#000000" /></g></svg>
                                    </div>
                                    <span className="bnt-prsm__span text-xs font-semibold font-[Roboto]">WATCH TRAILER</span>
                                </div>
                                <div className="prsm-btn-bottom">
                                    <svg viewBox="0 0 167 51" xmlns="http://www.w3.org/2000/svg" className="btnMain__shapeIcon" strokeWidth="1" width="167" height="51"> <path className="btnMain__shapePath" d="M144.79981074566558,6.377136184325009 L144.79981074566558,6.377136184325009 Q166.0602263109613,6.3702928510701256,166.0602263109613,27.630709517736793 L166.0602263109613,23.431790482263207 Q166.0602263109613,44.692207148929874,144.79981074566558,44.68536381567499 L22.38213476294878,44.64595983740067 Q1.1217191976530785,44.63911650414578,1.1217191976530785,23.378699837479115 L1.1217191976530785,27.683800162520885 Q1.1217191976530785,6.4233834958542175,22.38213476294878,6.416540162599334 Z" fill="#F1FF7E" /></svg>
                                </div>
                            </button>
                        </div>
                        {/* font-feature-settings: "ss01" on; */}
                    </div>
                    <div className="data-bottom content-box">
                        <h1 className="prism-title"><span>G<span className='ff-prsm__setting'>A</span>MING</span></h1>
                    </div>
                </div>
                <div className="prism-video_wrap">
                    <video
                        className='prism-video'
                        src={videos[currentVideoIndex]}
                        autoPlay
                        loop
                        muted
                    />
                </div>
            </div>
        </div>
    )
}

export default Prism
