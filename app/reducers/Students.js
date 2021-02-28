import {
  COMPLETE_S_PROFILE_SUCCESS,
  COMPLETE_S_PROFILE_FAIL,
  GET_S_PROFILES_SUCCESS,
  GET_S_PROFILES_FAIL,
  GET_SINGLE_S_PROFILE_SUCCESS,
  GET_SINGLE_S_PROFILE_FAIL,
} from '../actions/types'

const initialState = {
  students: [],
  student: {},
}

const Students = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case COMPLETE_S_PROFILE_SUCCESS:
      return {
        ...state,
        students: [payload, ...state.students],
      }
    case GET_S_PROFILES_SUCCESS:
      return {
        ...state,
        students: payload,
      }
    case GET_SINGLE_S_PROFILE_SUCCESS:
      return {
        ...state,
        student: payload,
      }
    case COMPLETE_S_PROFILE_FAIL:
    case GET_S_PROFILES_FAIL:
    case GET_SINGLE_S_PROFILE_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default Students
