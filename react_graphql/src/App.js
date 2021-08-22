import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddOrUpdate from "./Components/AddOrUpdate";
import Delete from "./Components/Delete";
import Detail from "./Components/Detail";
import CustomerPage from "./Pages/CustomerPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CustomerPage} />
        <Route exact path="/AddOrUpdate" component={AddOrUpdate} />
        <Route exact path="/AddOrUpdate/:id" component={AddOrUpdate} />
        <Route exact path="/Customer/:id" component={Detail} />
        <Route exact path="/Customer/Delete/:id" component={Delete} />
      </Switch>
    </Router>
  );
}

export default App;
