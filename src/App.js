import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage/';
import SigninPage from './pages/SigninPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninPage} />
      </Switch>
    </div>
  );
}

export default App;
