import React, { useState } from 'react'

const videos = [
    'hero-cut-1.mp4',
    'hero-cut-2.mp4',
    'hero-cut-3.mp4',
    'hero-cut-4.mp4',
];
function Prism() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const handleVideoChange = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }
    return (
        <div onClick={handleVideoChange} className='prism'>
            <div className="prism-wrap">
                <div className="prism-content">
                    <div className="pr-ct__top">
                        <h1 className='prism-title'>REDEFINE</h1>
                        <p className="prism-subtitle">Enter the Metagame Layer Unleash the Play Economy</p>
                        <button className='mt-5 py-[.6vw] px-6 bg-[var(--tertiary-color)] rounded-full text-[var(--primary-color)] font-[Roboto] font-semibold text-xs'>Watch Trailer</button>
                    </div>
                    <div className="pr-ct__bottom">
                        <div className="prism-title">GAMING</div>
                    </div>
                </div>
                <div className="hit__area"></div>
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