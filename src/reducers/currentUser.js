// Recieves action object from action creator when action creator is called in componentDidMount() in App.js
export default (state = null, action) => {
  // Checks type property of action object
  switch(action.type) {
    // Returns the user property of the action object, which is the json of the user from the database. This sets the currentUser portion of the Redux state to this data by returning a new object - the original state is not changed, but replaced by this object
    case 'SET_CURRENT_USER':
      return action.user
    // Returns the default state, which sets the currentUser portion of the store to null, effectively removing the currentUser data
    case 'CLEAR_CURRENT_USER':
      return null
    // If the type property does not match anything above, sets to currentUser portion of the store to whatever it currently is, which keeps the data the same
    default:
      return state
  }
}
