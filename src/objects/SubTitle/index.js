import React from "react";
import StyledPostSubtitle from "./styles";

const PostSubtitle = (props) => {
  return (
    <div>
      <StyledPostSubtitle>{props.children}</StyledPostSubtitle>
    </div>
  );
};

export default PostSubtitle;
