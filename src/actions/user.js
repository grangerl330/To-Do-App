// Synchronous action creators

// Accepts argument, user, which is json data of user retrieved from database
export const setCurrentUser = user => {
  // Returns action object - The type will be recognized by the reducer and the user data will be added to the store
  return {
    type: 'SET_CURRENT_USER',
    user
  }
}

// Asynchronous action creators

// This action creator is used when the login form is submitted by a user
export const login = credentials => {
  // Takes in dispatch as an argument to be able to use later
  return dispatch => {
    // fetch sends a request to the backend. The address and type of request are specified
    return fetch('/login', {
      // This is needed for cross-origin requests
      credentials: 'include',
      // POST request because this will be creating a new session in the backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    // This specifies what happens after a response is returned from the backend. .json() formats the repsonse in json
    .then(response => response.json())
    // Now that the response has been turned to json, we call it user because it is data of a user
    .then(user => {
      // If the json response from the backend has an error key, the error will be alerted
      if (user.error) {
        alert(user.error)
      // If no error, the setCurrentUser action with an argument of the user data will be dispatched to the reducers
      } else {
        console.log('setting currentUser', user)
        dispatch(setCurrentUser(user))
      }
    })
  }
}

// This is used when the App.js componentDidMount() function is called - Every time the page loads or reloads, this will be called
export const getCurrentUser = () => {
  // Takes in dispatch as an argument to be able to use later
  return dispatch => {
    // fetch sends a request to the backend. The address and type of request are specified
    return fetch('/get_current_user', {
      // This is needed for cross-origin requests
      credentials: 'include',
      // GET request because this is only retrieving data about the current user
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // This specifies what happens after a response is returned from the backend. .json() formats the repsonse in json
    .then(response => response.json())
    // Now that the response has been turned to json, we call it user because it is data of a user
    .then(user => {
      // If the json response from the backend has an error key, the error will be alerted
      if (user.error) {
        console.log(user.error)
      // If no error, the setCurrentUser action with an argument of the user data will be dispatched to the reducers
      } else {
        dispatch(setCurrentUser(user))
      }
    })
  }
}

// This used when a user submits the sign up form
export const signup = newUserInfo => {
  // Takes in dispatch as an argument to be able to use later
  return dispatch => {
    // fetch sends a request to the backend. The address and type of request are specified
    return fetch('/signup', {
      // This is needed for cross-origin requests
      credentials: 'include',
      // POST request because this will be creating a new session in the backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: newUserInfo
      })
    })
    // This specifies what happens after a response is returned from the backend. .json() formats the repsonse in json
    .then(response => response.json())
    // Now that the response has been turned to json, we call it user because it is data of a user
    .then(user => {
      // If the json response from the backend has an error key, the error will be alerted
      if (user.error) {
        console.log(user.error)
      // If no error, the setCurrentUser action with an argument of the user data will be dispatched to the reducers
      } else {
        dispatch(setCurrentUser(user))
      }
    })
  }
}
