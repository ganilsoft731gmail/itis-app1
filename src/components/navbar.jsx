import React from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters, totalSubTotItemQty }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="">
        {"                  "}
        itiSS Market Carte
        {"                  "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
        {"                  "}/ Item Types to Sale(s) and Return(s) or Both
        {"                  "}=
        <span className="badge badge-pill badge-secondary">
          {totalSubTotItemQty}
        </span>
        {"                  "}/ Total Items Quantity
      </a>
    </nav>
  );
};

export default NavBar;
