import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/Header';
import HomePage from './pages/HomePage/';
import SigninPage from './pages/SigninPage';
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckoutPage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.actions';
import { GlobalStyle } from './styled.global-style';

// Setting up firebase collections db
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
// import { addCollectionAndDocuments } from './firebase/firebase.utils';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);

      // load shop data from firebase
      // addCollectionAndDocuments(
      //   'collections',
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log(this.state.currentUser);
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() => (currentUser ? <Redirect to='/' /> : <SigninPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
