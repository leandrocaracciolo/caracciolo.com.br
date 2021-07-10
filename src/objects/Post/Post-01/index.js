import React from "react";
import Button from "../../Button";
import PostNumber from "../../PostNumber";
import PostTitle from "../../PostTitle";
import PostSubtitle from "../../SubTitle";
import { StyledPost, StyledMargin } from "./styles";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <StyledPost>
      <img src="/imgs/posts/01/01-intro.png" alt="Código Fonte" />
      <StyledMargin>
        <PostNumber>01</PostNumber>
        <PostTitle>Um novo site para atender novos objetivos.</PostTitle>
        <PostSubtitle>
          Resolvi reformular tudo, pois os objetivos da versão anterior não
          estavam atendendo a demanda que eu necessito atualmente.
        </PostSubtitle>
        <Link to="Post01">
          <Button>+ Veja mais</Button>
        </Link>
      </StyledMargin>
    </StyledPost>
  );
};

export default Post;
