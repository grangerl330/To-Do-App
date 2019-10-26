import React from 'react'

const MainPage = (props) => {
  return (
    <div className="main-page">
      <h1>Main Page</h1>
      {props.currentUser.first_name} {props.currentUser.last_name}
    </div>
  )
}

export default MainPage
