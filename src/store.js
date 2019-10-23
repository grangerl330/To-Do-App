// Imports necessary for Redux
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// Reducer File Imports
import currentUser from './reducers/currentUser.js'

// Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.
import thunk from 'redux-thunk'

// Combining all reducer files into one to be passed in to the createStore function
const reducer = combineReducers({
  currentUser
})

// Added composeEnhancer which allows us to use redux dev tools in console
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating the store
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

// Export the store to be imported by the App
export default store
