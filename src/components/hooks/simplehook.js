import React, { useState } from "react";
import { hot } from "react-hot-loader";

const SimpleHook = () => {
  const [name, setName] = useState("World");
  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <button onClick={() => setName("James")}>
        Click me to change the name
      </button>
    </div>
  );
};

export default hot(module)(SimpleHook);
