import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
