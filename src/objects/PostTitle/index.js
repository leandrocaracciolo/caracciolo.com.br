import React from "react";
import StyledPostTitle from "./styles";

const PostTitle = (props) => {
  return (
    <div>
      <StyledPostTitle>{props.children}</StyledPostTitle>
    </div>
  );
};

export default PostTitle;
