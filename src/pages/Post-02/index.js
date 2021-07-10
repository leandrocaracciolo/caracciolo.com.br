import React from "react";
import { StyledImage } from "./styles";
import PostNumber from "../../objects/PostNumber";
const Post01 = () => {
  return (
    <>
      
      <PostNumber>02</PostNumber>
      <h2>Subindo versões do site no Git Hub</h2>
      <StyledImage src="/imgs/posts/02/02-github.png" alt="Destaque" />
      <p>
        E após algumas tentativas, acredito que consegui criar um repositório decente no GitHub para controlar versões deste site.
        <br /><br />
        Estou refazendo tudo em React e passei por momentos complicados por conta de alguns elementos do Styled components. Demora um pouco para entender a estrutura das coisas e em um determinado momento pensei que poderia perder tudo.
        <br/><br/>
        Por sorte, tenho amigos como o <a href="https://github.com/gmobrice" target="_blank">Gustavo Mobrice</a>, que me ajudou a resolver os problemas e fez tudo voltar aos trilhos. Obrigado novamente.
        <br/><br/>
        Desnecessário dizer que, após o susto, entendi a importância do sistema de controle de versão, o que teria me poupado um bocado de dor de cabeça.
        <br/><br/>
        Lição aprendida, <a href="https://github.com/leandrocaracciolo/caracciolo.com.br" target="_blank">segue o link do repositório</a> com a promessa de que ele será constantemente atualizado.   
      </p>
    </>
  );
};

export default Post01;
