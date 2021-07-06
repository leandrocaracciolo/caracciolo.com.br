import React from "react";

const PostNumber = (props) => {
  const postNumber = {
    fontweight: "600",
    color: "#E95378",
    margin: "0 auto",
    fontSize: "50px",
  };

  return (
    <div>
      <h1 style={postNumber}>{props.children}</h1>
    </div>
  );
};

export default PostNumber;

{
  /* 
import React from 'react'
import StyledNumberTitle from './styles'

const PostNumber = (props) => {
    return (
        <div><StyledNumberTitle>{props.children}</StyledNumberTitle></div>
    )
}

export default PostNumber

*/
}
