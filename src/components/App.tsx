import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
};
export default App;
