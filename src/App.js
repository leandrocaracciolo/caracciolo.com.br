import React from "react";
import Footer from "./objects/Footer";
import Header from "./objects/Header";
import Home from "./pages/Home";
import { StyledContainer, StyledMain } from "./styles";
import { Switch, Route } from "react-router-dom";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Post01 from "./pages/Post-01";
import Post02 from "./pages/Post-02";
import Post03 from "./pages/Post-03";

export default function App() {
  return (
    <div>
      <StyledContainer>
        <Header />
        <StyledMain>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Sobre" component={Sobre} />
            <Route path="/Contato" component={Contato} />
            <Route path="/Post01" component={Post01} />
            <Route path="/Post02" component={Post02} />
            <Route path="/Post03" component={Post03} />
          </Switch>
        </StyledMain>
      </StyledContainer>
      <Footer />
    </div>
  );
}
