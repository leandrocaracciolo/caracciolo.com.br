import React from "react";
import Button from "../../Button";
import PostNumber from "../../PostNumber";
import PostTitle from "../../PostTitle";
import PostSubtitle from "../../SubTitle";
import { StyledPost, StyledMargin } from "./styles";
import { Link } from "react-router-dom";

const Post03 = () => {
  return (
    <StyledPost>
      <img src="/imgs/posts/03/03-reactjs.png" alt="Destaque" />
      <StyledMargin>
        <PostNumber>03</PostNumber>
        <PostTitle>Enfim, React.JS</PostTitle>
        <PostSubtitle>
          E é com muita alegria que coloco no ar o primeiro site desenvolvido com React.JS, após duas semanas de estudo intenso, trabalho e muito aprendizado.
        </PostSubtitle>
        <Link to="Post03">
          <Button>+ Veja mais</Button>
        </Link>
      </StyledMargin>
    </StyledPost>
  );
};

export default Post03;
