import React from "react";
import styled from "styled-components";

/**
 * getStyles
 *
 * @param type [type="root" || type="success" || type="error"]
 * @param theme
 * @returns {*|{}|THEME.root.InfoComponent.root}
 */
const getStyles = (type = "root", theme) => {
  return theme.root.InfoComponent[type] || theme.root.InfoComponent.root;
};

const InfoComponentStyled = styled.section`
  ${props => getStyles(props.type, props.theme)};
`;

export const InfoComponent = ({ text, type }) => (
  <InfoComponentStyled type={type}>{text}</InfoComponentStyled>
);
