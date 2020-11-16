import React, { useState } from "react";
import { render } from "react-dom";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import GreeterUI from "./components/GreeterUI/GreeterUI";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="main-page-wrapper">
      <Button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show a cool modal!
      </Button>
      <GreeterUI person="Fred" />
      <Modal show={showModal} onClickOutside={() => setShowModal(false)}>
        Close the modal by clicking outside of the modal : )
      </Modal>
    </div>
  );
}

render(<App />, document.getElementById("root"));
