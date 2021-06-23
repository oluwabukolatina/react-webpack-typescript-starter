import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};
export default App;
