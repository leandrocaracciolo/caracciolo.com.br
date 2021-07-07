import React from "react";
import { StyledImage } from "./styles";
import PostNumber from "../../objects/PostNumber";
const Post01 = () => {
  return (
    <>
      
      <PostNumber>03</PostNumber>
      <h2>Enfim, React.JS</h2>
      <StyledImage src="/imgs/posts/03/03-reactjs.png" alt="Destaque" />
      <p>
      E é com muita alegria que coloco no ar o primeiro site desenvolvido com React.JS, após duas semanas de estudo intenso, trabalho e muito aprendizado.
        <br />
        <br />
       e de início devo dizer o quão dificil foi entender a nova estrutura de um site criado com esse tecnologia.
        <br />
        <br />
até entender 
<br />
        <br />

Foi essencial ter criado a primeira versão com HTML/CSS e Javascript até para entender um pouco mais de grid e flexbox.
<br />
        <br />

O site continua estático e próximo passo é partir para atualizações dinâmicas através de um admin que pretendo criar.

Aos poucos as coisas vão saindo.
      </p>
      <h3>
        Descritivo da primeira versão do site (para efeitos de documentação)
      </h3>
      <p>
        A primeira versão deste site (lançada em 21 de junho de 2021) foi
        construída da forma mais artesanal possível.
        <br />
        <br />
        Criei um esboço do layout utilizando o Figma (a imagem que você vê
        abaixo) e utilizei o Visual Studio Code para montar uma versão inicial
        usando a trinca html, css e javascript. Essa versão é completamente
        estática, usando páginas internas em html simples mesmo. Pretendo em
        breve refazer o site dinamicamente, só não decidi direito que tecnologia
        utilizar. A única certeza que tenho é que quero usar React JS no front.
        <br />
        <br />
        Gastei um bom tempo trabalhando na responsividade do site. Ele deveria
        funcionar direito em qualquer device e dentro do que consigo fazer acho
        que o resultado ficou satisfatório, embora acredito que minha opinião
        vai mudar dentro de algumas semanas. Sei que muita coisa deve ser
        melhorada, mas de qualquer forma aprendi bastante durante o processo de
        construção.
      </p>
    </>
  );
};

export default Post01;
