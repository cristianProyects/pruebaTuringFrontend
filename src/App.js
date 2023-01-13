import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/inicio">
            <Home />
          </Route>
          <Route path="/" exact>
            COMPONENT ROOT
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
