import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Admin from "./components/admin";
import "./css/html.css"

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/inicio">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
