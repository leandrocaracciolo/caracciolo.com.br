import React from "react";
import StyledButton from "./styles";

const Button = (props) => {
  return (
    <div>
      <StyledButton>{props.children}</StyledButton>
    </div>
  );
};

export default Button;
