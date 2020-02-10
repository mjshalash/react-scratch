import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

// import Ticker from "./components/sandbox/ticker";

// ##### Silva Challenges #####
// import HelloWorld from "./components/silva/helloworld";
// import HelloVisitor from "./components/silva/hellovisitor";
// import FizzBuzz from "./components/silva/fizzbuzz";
// import Todo from "./components/sandbox/todo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default hot(module)(App);
