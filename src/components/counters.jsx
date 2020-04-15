import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <div>
        <button
          fontWeight="bold"
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset to Zero Item`s Quantity
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} // id == key repeatadely use why?
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
