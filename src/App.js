import React, { Component, useState } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

// import Ticker from "./components/sandbox/ticker";

// ##### Silva Challenges #####
// import HelloWorld from "./components/silva/helloworld";
// import HelloVisitor from "./components/silva/hellovisitor";
// import FizzBuzz from "./components/silva/fizzbuzz";
// import Todo from "./components/sandbox/todo";

// ##### Hook Stuff #####
// import SimpleHook from "./components/hooks/simplehook";
import EffectHook from "./components/hooks/effecthook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <EffectHook></EffectHook>
      </div>
    );
  }
}

export default hot(module)(App);
