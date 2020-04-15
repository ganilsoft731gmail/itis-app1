import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0 /* 1/0 */,
    tags: ["tag1", "tag2", "tag3"]
  };

  /*   styles = {
    fontWeight: "bold",
    fontSize: 31
  }; */

  render() {
    // let classes = "badge m-2 badge-"; // refactor convert to class method these two lines
    // classes += this.state.count === 0 ? "warning" : "pramary";
    let classes = this.getBadgeClasses();

    return (
      <div>
        <span
          /* styles={/* this.styles / { fontSize: 50 }}*/
          className={/* classes */ this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm"> + </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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

export default Counter;
