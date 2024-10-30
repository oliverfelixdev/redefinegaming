import React, { useEffect, useState } from 'react'
import "./App.css"
import Loader from './components/Loader'
import Navigation from './components/Navigation'
import Prism from './components/Prism'
import WlcmZen from './components/WlcmZen'

function App() {

  const [isSoundPlaying, setIsSoundPlaying] = useState(false)
  const audioRef = React.useRef(new Audio('/music_main.mp3'))

  useEffect(() => {
    if (isSoundPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0
    }

    // cleanup
    return () => {
      audioRef.current.pause()
    };
  }, [isSoundPlaying]);

  const handleGlobalClick = () => {
    if (!isSoundPlaying) {
      setIsSoundPlaying(true)
    }
  };


  return (
    <div onClick={handleGlobalClick}>
      <div>
        <Navigation isSoundPlaying={isSoundPlaying} setIsSoundPlaying={setIsSoundPlaying} />
      </div>
      <Prism />
      <WlcmZen />
    </div>
  )
}

export default App