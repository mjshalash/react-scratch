import React, { Component } from "react";

class FizzBuzz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
  }

  render() {
    const { number } = this.state;

    var numToShow = number;

    // Set Divisbility Flags
    if (number !== 0) {
      if (number % 3 === 0 && number % 5 === 0) {
        numToShow = "FizzBuzz";
      } else if (number % 3 === 0) {
        numToShow = "Fizz";
      } else if (number % 5 === 0) {
        numToShow = "Buzz";
      }
    }

    return (
      <div>
        <h1>Number: {numToShow}</h1>
        <form>
          <input
            type="button"
            value="Increment"
            onClick={() => {
              this.setState({ ...this.state, number: number + 1 });
            }}
          ></input>
          <input
            type="button"
            value="Decrement"
            onClick={() => {
              this.setState({ ...this.state, number: number - 1 });
            }}
          ></input>
        </form>
      </div>
    );
  }
}

export default FizzBuzz;
