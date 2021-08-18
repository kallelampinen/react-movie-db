import React from "react";
//Component
import Header from "./components/Header/index";
import Home from "./components/Home";

//Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <div>
    <Header />
    <Home />
    <GlobalStyle />
  </div>
);

export default App;
