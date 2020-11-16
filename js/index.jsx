import React, { useState } from "react";
import { render } from "react-dom";
import Button from "./components/Button/Button";
import GreeterUI from "./components/GreeterUI/GreeterUI";

function App() {
  return (
    <div className="main-page-wrapper">
      <Button
        onClick={() => {
          alert("Test!");
        }}
      >
        Test Button
      </Button>
      <GreeterUI person="Fred" />
    </div>
  );
}

render(<App />, document.getElementById("root"));
