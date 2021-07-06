import React from "react";
import Button from "../../Button";
import PostNumber from "../../PostNumber";
import PostTitle from "../../PostTitle";
import PostSubtitle from "../../SubTitle";
import { StyledPost, StyledMargin } from "./styles";
import { Link } from "react-router-dom";

const Post02 = () => {
  return (
    <StyledPost>
      <StyledMargin>
        <PostNumber>02</PostNumber>
        <PostTitle>Um novo site para atender novos objetivos.</PostTitle>
        <PostSubtitle>
          Resolvi reformular tudo, pois os objetivos da versão anterior não
          estavam atendendo a demanda que eu necessito atualmente.
        </PostSubtitle>
        <Link to="Post01">
          <Button>+ Veja mais</Button>
        </Link>
      </StyledMargin>
      <img src="/imgs/posts/01/01.png" alt="Destaque" />
    </StyledPost>
  );
};

export default Post02;
