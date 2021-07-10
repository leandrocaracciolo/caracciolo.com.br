import React from "react";
import Button from "../../Button";
import PostNumber from "../../PostNumber";
import PostTitle from "../../PostTitle";
import PostSubtitle from "../../SubTitle";
import { StyledPost, StyledMargin, StyledImg } from "./styles";
import { Link } from "react-router-dom";

const Post02 = () => {
  return (
    <StyledPost>
      <StyledMargin>
        <PostNumber>02</PostNumber>
        <PostTitle>Subindo versões do site no Git Hub</PostTitle>
        <PostSubtitle>
        E após algumas tentativas, acredito que consegui criar um repositório decente no GitHub para controlar versões deste site.
        </PostSubtitle>
        <Link to="Post02">
          <Button>+ Veja mais</Button>
        </Link>
      </StyledMargin>
      <StyledImg src="/imgs/posts/02/02-github.png" />
    </StyledPost>
  );
};

export default Post02;
