import React, { Component } from 'react';
// Import all containers that will be displayed
import LoginPage from './containers/LoginPage.js'
// Imports action to fetch the currentUser from the database
import { getCurrentUser } from './actions/user.js'
// Imports connect function which allows for connection to the Redux store
import { connect } from 'react-redux'
// Imports css file for App
import './App.css';

class App extends Component {
  componentDidMount(){
    // Calls the getCurrentUser() function when the component initially mounts when page loads. This is an action creator imported from the actions folder
    this.props.getCurrentUser()
  }

  // Renders what is actually seen on the webpage
  render() {
    return (
      <div className="App">
        <h1>To-Do App</h1>
        <LoginPage />
      </div>
    );
  }
}

// Maps the currentUser portion of the redux store to props so that the data is avaiable to use in this component
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

// Pass the mapStateToProps and mapDispatchToProps functions into connect for connection to the Redux store
// `{ getCurrentUser }`  is ES6 shorthand for passing a mapDispatchToProps function into connect. The getCurrentUser function is imported from the /actions folder
export default connect(mapStateToProps, { getCurrentUser })(App);
