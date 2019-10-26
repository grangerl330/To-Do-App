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

export const login = credentials => {
  console.log("calling login with", credentials)
  return dispatch => {
    return fetch('/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        console.log('setting currentUser', user)
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch('/get_current_user', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        console.log(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}

export const signup = newUserInfo => {
  return dispatch => {
    return fetch('/signup', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: newUserInfo
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}
