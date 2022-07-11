import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API was called");
      });
    //  console.log("Hello world")
    // },[]);
  }, [count]); // [] empty array, um 2.rendern zuverhindern
  return <div> Hello World {data} </div>;
}

export default EffectTutorial;
