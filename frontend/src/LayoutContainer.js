import React from "react";
import styled, { injectGlobal } from "styled-components";
import { THEME } from "./config.theme";
import { RowComponent } from "./components/RowComponent";

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    height:100%;
    min-height:100%;
    
    font-family: 'Roboto', sans-serif;
    ${THEME.body};
  }
`;

// PageComponent
const PageTitleStyled = styled.h1`
  margin: 0;
  padding: 1.5rem 0 1rem;
  font-weight: normal;
  text-align: center;
  ${props => props.theme.overrides.PageTitle.root};
`;

const PageComponentStyled = styled.section``;

const PageComponent = ({ children }) => (
  <PageComponentStyled>
    <RowComponent>
      <PageTitleStyled>
        Insert link to profiles and get play now!
      </PageTitleStyled>
    </RowComponent>
    {children}
  </PageComponentStyled>
);

// LayoutComponent
const LayoutHeaderStyled = styled.section`
  text-align: center;
  font-size: 2rem;
  padding: 3rem 0;
  ${props => props.theme.overrides.LayoutHeader.root};
`;

const LayoutHeader = () => (
  <LayoutHeaderStyled>
    <RowComponent>GET PLAY</RowComponent>
  </LayoutHeaderStyled>
);

const LayoutStyled = styled.section``;

export const LayoutContainer = ({ children }) => (
  <LayoutStyled>
    <LayoutHeader />
    <PageComponent>{children}</PageComponent>
  </LayoutStyled>
);
