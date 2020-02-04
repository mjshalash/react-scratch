import React, { Component } from "react";
import { hot } from "react-hot-loader";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: [],
      itemToAdd: { key: "", item: "", dueDate: "" }
    };

    this.handleAddItemClick = this.handleAddItemClick.bind(this);
  }

  // Handle Add Item Click
  handleAddItemClick = () => {
    const { itemList, itemToAdd } = this.state;

    var newKey = itemList.length++;
    itemToAdd.key = newKey;

    var newList = itemList;
    newList.push(itemToAdd);

    this.setState({ itemList: newList });

    // Clear Fields
    this.setState({ itemToAdd: { key: "", item: "", dueDate: "" } });
  };

  render() {
    const { itemList } = this.state;

    return (
      <div className="d-flex flex-column w-50">
        {itemList.map(x => {
          return (
            <div key={x.key} className="d-flex flex-row">
              <div className="d-flex flex-column">{x.item}</div>
              <div className="d-flex flex-column ml-auto">{x.dueDate}</div>
            </div>
          );
        })}
        <div className="d-flex flex-row mt-4">
          <input
            className="d-flex flex-column form-control mx-2 my-auto"
            placeholder="Item"
            value={this.state.itemToAdd.item}
            onChange={e => {
              this.setState({
                itemToAdd: { ...this.state.itemToAdd, item: e.target.value }
              });
            }}
          ></input>
          <input
            className="d-flex flex-column form-control my-auto"
            placeholder="Due Date"
            value={this.state.itemToAdd.dueDate}
            onChange={e => {
              this.setState({
                itemToAdd: { ...this.state.itemToAdd, dueDate: e.target.value }
              });
            }}
          ></input>
          <div
            className="d-flex flex-column btn btn-primary w-25 ml-2"
            onClick={this.handleAddItemClick}
          >
            Add Item
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
