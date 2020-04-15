import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };

  // constructor() {
  //   super();
  //console.log("Constructor", this);
  //   this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    console.log("Increment Clicked", this);
    // obj.method();
    // function();
  };

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



/////////////////////////////////////// errors occurs

GaNiS@DESKTOP-EMRFFNL MINGW64 /d/Durg_Technologics/gapps/React4itiSS/REactApp4itiSS/itis-app1
$ npm start

> itis-app1@0.1.0 start D:\Durg_Technologics\gapps\React4itiSS\REactApp4itiSS\itis-app1
> react-scripts start

Starting the development server...

Compiled successfully!

You can now view itis-app1 in the browser.

  http://localhost:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Failed to compile.

./src/components/counter.jsx
Syntax error: D:/Durg_Technologics/gapps/React4itiSS/REactApp4itiSS/itis-app1/src/components/counter.jsx: Unexpected token, expected ; (18:14)

  16 | }
  17 |
> 18 | formatCount() {
     |               ^
  19 |   return this.state.count === 0 ? 'Zero' : this.state.count;
  20 | }
  21 |
Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Failed to compile.

./src/components/counter.jsx
Syntax error: D:/Durg_Technologics/gapps/React4itiSS/REactApp4itiSS/itis-app1/src/components/counter.jsx: Unterminated string constant (19:30)

  17 |   formatCount() {
  18 |     const { count } = this.state;
> 19 |     return count === 0 ? "Zero" : count;
     |                               ^
  20 |   }
  21 | }
  22 |
Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Failed to compile.

./src/components/counter.jsx
Syntax error: D:/Durg_Technologics/gapps/React4itiSS/REactApp4itiSS/itis-app1/src/components/counter.jsx: JSX attributes must only be assigned a non-empty expression (16:21)

  14 |     return (
  15 |       <div>
> 16 |         <span styles={/* this.styles */} className="badge badge-primary m-2">
     |                      ^
  17 |           {this.formatCount()}
  18 |         </span>
  19 |         <button className="btn btn-secondary btn-sm"> + </button>
Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/components/counter.jsx
  Line 16:  'classes' is assigned a value but never used  no-unused-vars

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/components/counter.jsx
  Line 16:  'classes' is assigned a value but never used  no-unused-vars

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/components/counter.jsx
  Line 16:  'classes' is assigned a value but never used  no-unused-vars

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/components/counter.jsx
  Line 17:  'classes' is assigned a value but never used  no-unused-vars

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/components/counter.jsx
  Line 17:  'classes' is assigned a value but never used  no-unused-vars

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/components/counter.jsx
  Line 17:  'classes' is assigned a value but never used  no-unused-vars

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/components/counter.jsx
  Line 17:  'classes' is assigned a value but never used  no-unused-vars

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/components/counter.jsx
  Line 17:  'classes' is assigned a value but never used  no-unused-vars

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/components/counter.jsx
  Line 10:  'classes' is assigned a value but never used  no-unused-vars

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/components/counter.jsx
  Line 10:  'classes' is assigned a value but never used  no-unused-vars

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/components/counter.jsx
  Line 10:  'classes' is assigned a value but never used  no-unused-vars

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Failed to compile.

./src/components/counter.jsx
Syntax error: D:/Durg_Technologics/gapps/React4itiSS/REactApp4itiSS/itis-app1/src/components/counter.jsx: Unexpected token, expected } (12:35)

  10 |     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  11 |
> 12 |     return <ul>{this.state.tags.map{tag => <li key={tag}>{tag}</li>}}</ul>;
     |                                    ^
  13 |   }
  14 |
  15 |   render() {
Compiling...
Failed to compile.

./src/components/counter.jsx
Syntax error: D:/Durg_Technologics/gapps/React4itiSS/REactApp4itiSS/itis-app1/src/components/counter.jsx: Unexpected token, expected } (12:35)

  10 |     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  11 |
> 12 |     return <ul>{this.state.tags.map{tag => <li key={tag}>{tag}</li>}}</ul>;
     |                                    ^
  13 |   }
  14 |
  15 |   render() {
Compiling...
Failed to compile.

./src/components/counter.jsx
Syntax error: D:/Durg_Technologics/gapps/React4itiSS/REactApp4itiSS/itis-app1/src/components/counter.jsx: Unexpected token, expected } (12:35)

  10 |     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  11 |
> 12 |     return <ul>{this.state.tags.map{tag => <li key={tag}>{tag}</li>}}</ul>;
     |                                    ^
  13 |   }
  14 |
  15 |   render() {
Compiling...
Failed to compile.

./src/components/counter.jsx
Syntax error: D:/Durg_Technologics/gapps/React4itiSS/REactApp4itiSS/itis-app1/src/components/counter.jsx: Unexpected token, expected } (12:35)

  10 |     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  11 |
> 12 |     return <ul>{this.state.tags.map{tag => <li key={tag}>{tag}</li>}}</ul>;
     |                                    ^
  13 |   }
  14 |
  15 |   render() {
Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

./src/components/counter.jsx
  Line 9:  'classes' is assigned a value but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Failed to compile.

./src/components/counter.jsx
Syntax error: D:/Durg_Technologics/gapps/React4itiSS/REactApp4itiSS/itis-app1/src/components/counter.jsx: JSX attributes must only be assigned a non-empty expression (16:24)

  14 |       <div>
  15 |         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
> 16 |         <button onClick={} className="btn btn-secondary btn-sm"> + </button>
     |                         ^
  17 |       </div>
  18 |     );
  19 |   }
Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Failed to compile.

./src/components/counter.jsx
Syntax error: D:/Durg_Technologics/gapps/React4itiSS/REactApp4itiSS/itis-app1/src/components/counter.jsx: 'this' is not allowed before super()

   7 |
   8 |   constructor() {
>  9 |     console.log("Constructor", this);
     |                                ^
  10 |   }
  11 |
  12 |   handleIncrement() {
Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

./src/components/counter.jsx
  Line 9:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

./src/components/counter.jsx
  Line 9:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

./src/components/counter.jsx
  Line 9:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Compiling...
Failed to compile.

./src/components/counter.jsx
Syntax error: D:/Durg_Technologics/gapps/React4itiSS/REactApp4itiSS/itis-app1/src/components/counter.jsx: Unexpected token, expected , (9:30)

   7 |
   8 |   handleIncrement = () => {
>  9 |     this.setState( count: this.state.count + 1);
     |                               ^
  10 |   };
  11 |
  12 |   render() {
Compiling...
Compiled with warnings.

./src/index.js
  Line 4:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

http://localhost:3000/
×
←→1 of 2 errors on the page
Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
This screen is visible only in development. It will not appear if the app crashes in production.
Open your browser’s developer console to further inspect this error.

problem with 
       <button
          onClick={this.handleIncrement()} <========---<
          className="btn btn-secondary btn-sm"
        >
		onClick={this.handleIncrement} <=============<

