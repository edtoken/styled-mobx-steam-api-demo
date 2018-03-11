import React from "react";
import styled from "styled-components";

const PaperComponentStyled = styled.section`
  border: 1px solid transparent;
  padding: 0.8rem;
  ${props => props.theme.root.PaperComponent.root};
`;

export const PaperComponent = ({ children }) => (
  <PaperComponentStyled>{children}</PaperComponentStyled>
);
