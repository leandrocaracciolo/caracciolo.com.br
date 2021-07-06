import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import StyledHeader from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
};

export default Header;
