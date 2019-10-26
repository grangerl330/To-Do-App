// Import React and Component to be able to use a React component
import React, { Component } from 'react';
// Import login action to be called when user submits login form
import { login } from '../actions/user.js'
// Import connect to be able to connect to the Redux store
import { connect } from 'react-redux'

// Make the Login component a React component so it can have its own state to hold form data
class Login extends Component {
  // Constructor is called when this component loads - It creates the initial state
  constructor(props) {
    super(props)

    // Setting initial state of the component
    this.state = {
      email: "",
      password: ""
    }
  }

  // This is called when a user types something into a form input
  handleOnChange = event => {
    // Captures the name and value properties of the input when this every time a user types something
    const {name, value} = event.target
    // Sets the state where the key is the name of the input and the value is what the user has typed in
    this.setState({
      [name]: value
    })
  }

  // This is called when a user submits the form
  handleOnSubmit = event => {
    // Prevents the default action of the submit button for the form
    event.preventDefault()

    // Calls the login() function with the component's state as an argument - The state contains the data to be sent to backend for authentication
    this.props.login(this.state)
  }

  // The render function renders what is actually shown on the page
  render() {
    // Returns the JSX that will create the html to be displayed on the page
    return(
      <div className="login-form">
        <h2>Login</h2>
        <form onChange={this.handleOnChange} onSubmit={this.handleOnSubmit}>
          <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange} placeholder="email" />
          <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

// Connect is passed in arguments - The first is mapStateToProps, which does not exist here so null is passed in instead. The second is shorthand for mapDispatchToProps with the login function
export default connect(null, { login })(Login)
