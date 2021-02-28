import {
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
} from '../actions/types'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
  user: null,
  isAuthenticated: AsyncStorage.getItem('token') ? true : false,
  token: AsyncStorage.getItem('token'),
  profile: {},
}

const Auth = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      }
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      }
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      }
    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
      }
    case LOGIN_SUCCESS:
      AsyncStorage.setItem('token', payload.refreshToken)
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload,
      }
    case REGISTRATION_FAIL:
    case LOGIN_FAIL:
    case GET_PROFILE_FAIL:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      }
    default:
      return state
  }
}
export default Auth
