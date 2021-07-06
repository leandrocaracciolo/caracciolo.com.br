import styled from "styled-components";

export const StyledPost = styled.div`
  height: auto;
  display: flex;
  margin-bottom: 5em;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const StyledMargin = styled.div`
  margin: 1em;
`;
