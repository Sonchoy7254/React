import React from "react";
import "./styles.css";
import Header from "./header";
import Clock from "./Clock";
import Intro from "./introduction";
import LTime from "./localtime";
import FVCarecter from "./carecter";


function App() {
  return (
    <div>
      <Header />
      <Clock />
      <Intro />
      <LTime />
      <FVCarecter />
    </div>
  );
}

export default App;
