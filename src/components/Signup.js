import React, { Component } from 'react';
import { signup } from '../actions/user.js'
import { connect } from 'react-redux'

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()

    console.log("signup form submitted")
    this.props.signup(this.state)
  }

  render() {
    return(
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onChange={this.handleOnChange} onSubmit={this.handleOnSubmit}>
          <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleOnChange} placeholder="First Name" />
          <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleOnChange} placeholder="Last Name" />
          <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange} placeholder="email" />
          <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} placeholder="password" />
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { signup })(Signup)
