import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "bootstrap/dist/css/bootstrap.min.css";

import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import Routes from "./pages/Routes";

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
