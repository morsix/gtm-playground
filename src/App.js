import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import {CssBaseline,Container}  from "@material-ui/core";
import theme from "./theme";

import Home from "./views/pages/Home";
import About from "./views/pages/About";
import Header from "./views/components/Layout/Header";
import Shortlist from './views/pages/Shortlist';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/shortlist">
              <Shortlist />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
};

export default App;
