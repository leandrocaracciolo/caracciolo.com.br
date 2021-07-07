import styled from "styled-components";

export const StyledImage = styled.img`
  width: 1280px;
  height: 650px;
  max-width: 100%;
  max-height: 30em;
  object-fit: cover;
  object-position: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 28rem;
    object-fit: cover;
    object-position: center;
  }
`;
