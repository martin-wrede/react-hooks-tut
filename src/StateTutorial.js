import React, { useState } from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(2);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {counter}
      <button onClick={increment}>Incr+</button>
    </div>
  );
};

export default StateTutorial;
