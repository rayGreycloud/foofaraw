export const getFirebaseConfig = () => {
  const firebaseConfig = {
    apiKey: '',
    authDomain: 'ropa-regio.firebaseapp.com',
    databaseURL: 'https://ropa-regio.firebaseio.com',
    projectId: 'ropa-regio',
    storageBucket: '',
    messagingSenderId: '329252153439',
    appId: '1:329252153439:web:f882f68e989f40e3'
  };

  // Check for env var on heroku
  if (process.env.REACT_APP_FIREBASE_API_KEY) {
    // set as api key if found
    firebaseConfig.apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
  } else {
    // otherwise, running local so use local uncommitted file
    firebaseConfig.apiKey = require('../secret.js').FIREBASE_API_KEY;
  }

  return firebaseConfig;
};
