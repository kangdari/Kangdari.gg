import React from 'react';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import Routes from './pages/Routes'

const App = () => {
  return (
      <>
       <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
       </ThemeProvider>
      </>
    );
}

export default App;
