import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dapp from './components/pages/Dapp';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dapp' component={Dapp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
