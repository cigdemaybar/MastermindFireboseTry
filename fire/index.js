const firebase = require('firebase')

// -- // -- // -- // Firebase Config // -- // -- // -- //
const config = {
  apiKey: 'AIzaSyAijUtA3VW4C-Wqv5XfVPD6rkgAZIL_J6Y',
  authDomain: 'mastermind-d9756.firebaseapp.com',
  databaseURL: 'https://mastermind-d9756.firebaseio.com',
  projectId: 'mastermind-d9756',
  storageBucket: 'mastermind-d9756.appspot.com',
  messagingSenderId: '419664501247'
}
// -- // -- // -- // -- // -- // -- // -- // -- // -- //

// Initialize the app, but make sure to do it only once.
//   (We need this for the tests. The test runner busts the require
//   cache when in watch mode; this will cause us to evaluate this
//   file multiple times. Without this protection, we would try to
//   initialize the app again, which causes Firebase to throw.
//
//   This is why global state makes a sad panda.)
firebase.__bonesApp || (firebase.__bonesApp = firebase.initializeApp(config))

module.exports = firebase
