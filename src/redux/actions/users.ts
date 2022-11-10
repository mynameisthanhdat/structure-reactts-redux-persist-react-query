import { SET_USERS_DATA, CLEAR_USERS_DATA } from './actionTypes'

//USER
export const setUsersData = (payload: string | object) => {
  return {
    type: SET_USERS_DATA,
    payload: payload,
  }
}

export const clearUsersData = () => {
  return {
    type: CLEAR_USERS_DATA,
  }
}
