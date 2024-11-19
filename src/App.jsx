import React, { useEffect, useState } from "react";
import "./App.css";
import "./utils.css";
import Navigation from "./components/Navigation";
import Prism from "./components/Prism";
import WlcmZen from "./components/WlcmZen";
import BentoCards from "./components/BentoCards";
import StoryRealm from "./components/StoryRealm";

function App() {
  return (
    <div /* onClick={handleGlobalClick} */>
      <Navigation />

      <Prism />
      <WlcmZen />
      <BentoCards />
      <StoryRealm />
    </div>
  );
}

export default App;
