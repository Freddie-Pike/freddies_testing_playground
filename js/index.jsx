import React, { useState } from "react";
import { render } from "react-dom";
import Button from "./components/Button/Button";

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
    </div>
  );
}

render(<App />, document.getElementById("root"));
