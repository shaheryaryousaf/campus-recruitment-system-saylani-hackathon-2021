import {
  COMPLETE_C_PROFILE_SUCCESS,
  COMPLETE_C_PROFILE_FAIL,
  GET_C_PROFILES_SUCCESS,
  GET_C_PROFILES_FAIL,
} from '../actions/types'

const initialState = {
  companies: [],
  company: {},
}

const Companies = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case COMPLETE_C_PROFILE_SUCCESS:
      return {
        ...state,
        companies: [payload, ...state.companies],
      }
    case GET_C_PROFILES_SUCCESS:
      return {
        ...state,
        companies: payload,
      }
    case COMPLETE_C_PROFILE_FAIL:
    case GET_C_PROFILES_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default Companies
