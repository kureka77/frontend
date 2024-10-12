// fasting-diet-app/frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FastingSchedulePage from './pages/FastingSchedulePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/schedule" component={FastingSchedulePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;