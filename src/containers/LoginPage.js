import React from 'react'
import Signup from '../components/Signup.js'
import Login from '../components/Login.js'

const LoginPage = (props) => {
  return (
    <div className="login-page">
      <Login />
      or
      <Signup />
    </div>
  )
}

export default LoginPage
