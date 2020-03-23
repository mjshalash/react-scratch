import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";

const EffectHook = () => {
  const [name, setName] = useState("World");

  useEffect(() => {
    document.title = "Hello, ${name}";
  });

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => setName("James")}>
        Click me to change the name
      </button>
    </div>
  );
};

export default hot(module)(EffectHook);
