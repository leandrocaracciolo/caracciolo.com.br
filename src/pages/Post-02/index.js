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
        Olá, se você costuma aparecer por aqui, com certeza notou que o site
        está de cara nova.
        <br />
        <br />
        Resolvi reformular tudo, pois os objetivos da versão anterior não
        estavam atendendo a demanda que eu necessito atualmente.
        <br />
        <br />
        Quero estudar novas tecnologias além de conceitos de UI/UX e pretendo
        implementar todo o conhecimento adquirido aqui. Do jeito que está
        montado agora eu já consigo fazer isso.
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
