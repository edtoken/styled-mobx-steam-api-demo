import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { THEME } from "./config.theme";

import { LayoutContainer } from "./LayoutContainer";
import { MainSearchPage } from "./pages/MainSearch/MainSearchPage";

const render = () => {
  ReactDOM.render(
    <ThemeProvider theme={THEME}>
      <LayoutContainer>
        <MainSearchPage />
      </LayoutContainer>
    </ThemeProvider>,
    document.getElementById("root")
  );
};

render();

if (module.hot) {
  module.hot.accept(
    ["./LayoutContainer", "./pages/MainSearch/MainSearchPage"],
    () => {
      render();
    }
  );
}
