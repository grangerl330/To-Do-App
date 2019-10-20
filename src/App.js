import React, { Component } from 'react';
// Imports action to fetch the currentUser from the database
import { getCurrentUser } from './actions/currentUser'
// Imports connect function which allows for connection to the Redux store
import { connect } from 'react-redux'
// Imports css file for App
import './App.css';

class App extends Component {
  componentDidMount(){
    // Calls the getCurrentUser() function when the component initially mounts when page loads
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do App</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
