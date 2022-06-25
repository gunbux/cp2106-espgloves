import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";
import {nordTheme} from "./styles/Nordic";
import store from './store/store'
import Home from './home/Home'
import Configurator from './configurator/Configurator'
import Navigation from "./common/components/Navigation";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={nordTheme}>
          {renderApp()}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

function renderApp() {
  return (
    <React.Fragment>
      <Navigation/>
      {renderRoutes()}
    </React.Fragment>
  )
}

function renderRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/config" element={<Configurator/>}/>
    </Routes>
  )
}

export default App;
