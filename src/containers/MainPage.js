import React from 'react'
import ToDoCard from '../components/ToDoCard.js'

const MainPage = (props) => {
  const renderLists = props.currentUser.lists.map(list =>
    <div className="list-link" key={list.id}>
      {list.name}
    </div>
  )

  return (
    <div className="main-page">
      <h1>To-Do App</h1>
      <h2>Main Page</h2>
      <p><b>Current User:</b> {props.currentUser.first_name} {props.currentUser.last_name}</p>
      {renderLists}
    </div>
  )
}

export default MainPage
