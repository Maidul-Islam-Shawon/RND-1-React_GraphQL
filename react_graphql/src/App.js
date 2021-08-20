import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CustomerPage from './Pages/CustomerPage';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" component={CustomerPage}/>
      </Switch>
    </Router>
  );
}

export default App;
