import { combineReducers } from 'redux'
import userReducers from './userReducers'

const rootReducers = combineReducers({
  userReducers,
})

export default rootReducers
