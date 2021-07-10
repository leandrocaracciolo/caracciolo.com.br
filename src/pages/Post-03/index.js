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
      E eis que finalmente consegui colocar meu primeiro site (este) em <a href="https://pt-br.reactjs.org/" target="_blank">React</a> no ar . Foram necessárias duas semanas de estudo intenso, trabalho, cabeçadas e muito aprendizado, mas aqui está o resultado final.
        <br />
        <br />
       Logo de início devo dizer o quão dificil foi entender a nova estrutura de um site criado com esse tecnologia. 
       <br /><br />
       Eu estava com o conhecimento bem defasado, pois como diretor de arte, fica dificil mexer no código e estudar novas tecnologias. O dia a dia é corrido e geralmente damos preferência para o aprimoramento das ferramentas que usamos no trabalho.
       <br /><br />
       A sensação que eu tenho é que saí de uma metodologia que funcionava em 2010 para entrar em... bem... 2018 pelo menos.
      </p>
      <h3>
        Alguns pontos a serem destacados
      </h3>
      <p>
      - Foi essencial ter criado a primeira versão com HTML, CSS e Javascript até para entender um pouco mais de grid e flexbox.<br /><br />
      - Foi a primeira vez que usei <a href="https://styled-components.com/" target="_blank">Styled Components</a> e gostei bastante de mexer com isso, mas algumas coisas ainda estão no css do site antigo. A intenção e ir padronizando aos poucos. <br /><br />
       </p>
      <h3>
        Próximos passos
      </h3>
      <p>
      A intenção agora é dinamizar o site. Criar um admin para automatizar as postagens do site. Para isso, pretendo iniciar os estudos em <a href="https://nodejs.org/en/" target="_blank">Node.JS</a> e algum banco de dados.
      <br/><br/>
      Aos poucos as coisas vão acontecendo.
      </p>
    </>
  );
};

export default Post01;
