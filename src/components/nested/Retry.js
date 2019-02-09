import React from "react";
import Button from "../atomic/Button";
import Block from "../atomic/Block";
import PropTypes from "prop-types";

function Retry({ retryAction }) {
  return (
    <Block>
      Sometimes something wents wrong!
      <Button onClick={retryAction} text="Retry" iconName="refresh" />>
    </Block>
  );
}

Retry.propType = {
  retryAction: PropTypes.func
};

export default Retry;
