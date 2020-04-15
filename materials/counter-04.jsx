import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement() {
    console.log("Increment Clicked", this.state.count);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "pramary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
