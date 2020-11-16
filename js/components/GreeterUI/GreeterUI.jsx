import React from "react";
import PropTypes from "prop-types";
import Greeter from "greeter";

function GreeterUI({ person }) {
  const greeter = new Greeter(person);

  return <div>{greeter.greet()}</div>;
}

GreeterUI.propTypes = {
  person: PropTypes.string,
};

export default GreeterUI;
