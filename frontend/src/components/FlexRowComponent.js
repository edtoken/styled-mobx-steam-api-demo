import React from "react";
import styled from "styled-components";

const FlexRowComponentStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexRowComponent = ({ children }) => (
  <FlexRowComponentStyled>{children}</FlexRowComponentStyled>
);
