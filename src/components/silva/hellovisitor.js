import React, { Component } from "react";

class HelloVisitor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vistor: ""
    };
  }

  render() {
    const { visitor } = this.state;

    return (
      <div>
        <h1>Hello {visitor}</h1>
        <form>
          <input
            type="text"
            value={visitor || ""}
            onChange={e => {
              e.preventDefault();
              this.setState({ visitor: e.target.value });
            }}
          ></input>
          <input
            type="button"
            value="Clear"
            onClick={e => {
              e.preventDefault();
              this.setState({ visitor: "" });
            }}
          ></input>
        </form>
      </div>
    );
  }
}

export default HelloVisitor;
