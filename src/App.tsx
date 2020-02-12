import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { DetailPage, HomePage } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/company/:abn">
            <DetailPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
