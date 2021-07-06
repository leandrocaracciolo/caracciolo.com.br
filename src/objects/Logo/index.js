import React from "react";
import StyledLogo from "./styles";
import { Link } from "react-router-dom";

const PostTitle = () => {
  return (
    <div>
      <StyledLogo>
        {" "}
        <Link to="/">Caracciolo</Link>
      </StyledLogo>
    </div>
  );
};

export default PostTitle;
