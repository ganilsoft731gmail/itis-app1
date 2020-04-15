import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters /* : counters */ });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id} // id == key repeatadely use why?
            onDelete={this.handleDelete}
            value={counter.value}						//	u
            id={counter.id} // missing for error		//	gl
            selected={counter.selected}					//	y
          />
        ))}
      </div>
    );
  }
}
