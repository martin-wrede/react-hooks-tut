import React, { useState } from "react";

const StateTutorial2 = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  return (
    <div>
      <input placeholder="enter something.." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial2;
