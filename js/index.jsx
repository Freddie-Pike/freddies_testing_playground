import { render } from "react-dom";
import React from "react";

function App() {
  return (
    <div className="main-page-wrapper">
      <div className="main-page-container">ABCS</div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
