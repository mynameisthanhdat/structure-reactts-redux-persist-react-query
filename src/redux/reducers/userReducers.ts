import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { AnyAction } from 'redux'
import { SET_USERS_DATA, CLEAR_USERS_DATA } from '../actions/actionTypes'

interface IUser {
  loading: boolean
  data: object
  error: boolean
}

const initialState: IUser = {
  loading: false,
  data: [],
  error: false,
}

const userReducers = (state = initialState, action: AnyAction) => {
  const { payload, type } = action
  if (state === undefined) {
    return initialState
  }
  switch (type) {
    case SET_USERS_DATA:
      return {
        ...state,
        data: payload,
      }
    case CLEAR_USERS_DATA:
      return {
        ...state,
        data: [],
      }
    default:
      return state
  }
}

const persistConfig = {
  key: 'auth',
  storage: storage,
  whiteList: ['data'],
  blacklist: ['loading', 'error'],
}

// export default userReducers
export default persistReducer(persistConfig, userReducers)
