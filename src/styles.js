import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 2em 0;
  grid-template-rows: 20vh 60vh 20vh;
  grid-template-areas:
    "header"
    "main";
`;

export const StyledMain = styled.main`
  grid-area: main;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2em 0;
`;
