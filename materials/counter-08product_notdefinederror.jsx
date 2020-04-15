import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

/////////////////////////////error
Failed to compile
./src/components/counter.jsx
  Line 18:  'product' is not defined  no-undef

Search for the keywords to learn more about each error.
This error occurred during the build time and cannot be dismissed.


Compiled successfully!
Compiling...
Failed to compile.

./src/components/counter.jsx
  Line 17:  'product' is not defined  no-undef

Search for the keywords to learn more about each error.
Compiling...
Failed to compile.

./src/components/counter.jsx
  Line 18:  'product' is not defined  no-undef

Search for the keywords to learn more about each error.

Compiling...
Failed to compile.

./src/components/counter.jsx
  Line 18:  'product' is not defined  no-undef

Search for the keywords to learn more about each error.
Compiling...
Failed to compile.

./src/components/counter.jsx
  Line 18:  'product' is not defined  no-undef

Search for the keywords to learn more about each error.
Compiling...
Failed to compile.

./src/components/counter.jsx
  Line 18:  'product' is not defined  no-undef

Search for the keywords to learn more about each error.
Compiling...
Failed to compile.

./src/components/counter.jsx
  Line 18:  'product' is not defined  no-undef

Search for the keywords to learn more about each error.
Compiling...
Failed to compile.

./src/components/counter.jsx
  Line 18:  'product' is not defined  no-undef

Search for the keywords to learn more about each error.
Compiling...
Compiled successfully!
Compiling...
^CTerminate batch job (Y/N)?
GaNiS@DESKTOP-EMRFFNL MINGW64 /d/Durg_Technologics/gapps/React4itiSS/REactApp4itiSS/itis-app1
$

