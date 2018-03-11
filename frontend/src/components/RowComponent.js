import React from "react";
import styled from "styled-components";

const RowComponentStyled = styled.section`
  margin: 0 auto;
  width: 100%;
  ${props => props.theme.root.RowComponent.root};
`;

export const RowComponent = ({ children }) => (
  <RowComponentStyled>{children}</RowComponentStyled>
);
