// import { ReactDOM } from "react";
import "./App.css";

import React, { Component, Fragment } from "react";
import Nav from "./Nav";

export default class WithComp extends Component {
  constructor(a) {
    super(a);
    this.state = {
      items: [
        { name: "yousef", id: 1 },
        { name: "sayed", id: 2 },
        { name: "rayed", id: 3 },
      ],
      item: {
        id: 0, //Math.random(),
        name: "",
      },
    };
    // // // //
    this.change = (e) => {
      this.setState({
        item: {
          name: e.target.value,
        },
      });
    };
    // // // //
    this.add = (e) => {
      e.preventDefault();
      this.state.item.id = Math.random();
      let items = [...this.state.items, this.state.item];
      this.setState({
        item: "",
        items,
      });
      document.querySelector("input[type='text']").value = "";
    };
    // // // //

    this.delete = (ele) => {
      let items = [...this.state.items];
      let Items = items.filter((item) => item.id !== ele);
      this.setState({
        items: Items,
      });
    };
    // // // //
  }
  render() {
    return (
      <div className="app">
        <Nav />
        <form onSubmit={this.add}>
          <input
            type="text"
            onChange={this.change}
            placeholder="type what you want"
            required
          />
          <input type="submit" />
        </form>
        {this.state.items.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.name}</span>
              <button key={item.id} onClick={() => this.delete(item.id)}>
                delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
