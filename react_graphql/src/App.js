import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddOrUpdate from "./Components/AddOrUpdate";
import CustomerPage from "./Pages/CustomerPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CustomerPage} />
        <Route exact path="/AddOrUpdate" component={AddOrUpdate} />
      </Switch>
    </Router>
  );
}

export default App;
