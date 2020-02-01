import React, { Component } from "react";
import { hot } from "react-hot-loader";

class Ticker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tick: 0
    };
  }

  render() {
    return (
      <div>
        <h5>Ticker Amount: {this.state.tick}</h5>
        <input
          type="button"
          value="TICK"
          onClick={() => {
            this.setState(state => ({
              tick: state.tick + 1
            }));
          }}
        ></input>
        <input
          type="button"
          value="RESET"
          onClick={() => {
            this.setState(state => ({
              tick: 0
            }));
          }}
        ></input>
      </div>
    );
  }
}

export default Ticker;
