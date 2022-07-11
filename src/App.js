import React, { useState } from "react";
import StateTutorial from "./StateTutorial.js";
import StateTutorial2 from "./StateTutorial2.js";
import StateTutorial3 from "./StateTutorial3.js";
import ReducerTutorial from "./ReducerTutorial.js";
import EffectTutorial from "./EffectTutorial.js";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      StateTutorial
      <StateTutorial />
      <br />
      StateTutorial2
      <StateTutorial2 />
      <br />
      StateTutorial3
      <StateTutorial3 />
      <br />
      ReducerTut
      <ReducerTutorial /> <br />
      EffectTutorial
      <EffectTutorial />
    </div>
  );
}
