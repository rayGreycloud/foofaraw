import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/';
import HatsPage from './pages/HatsPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
