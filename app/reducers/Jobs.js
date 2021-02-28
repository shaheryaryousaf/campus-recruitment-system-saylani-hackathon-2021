import {
  ADD_JOB_SUCCESS,
  ADD_JOB_FAIL,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAIL,
  GET_SINGLE_JOB_SUCCESS,
  GET_SINGLE_JOB_FAIL,
} from '../actions/types'

const initialState = {
  jobs: [],
  job: {},
}

const Jobs = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_JOB_SUCCESS:
      return {
        ...state,
        jobs: [payload, ...state.jobs],
      }
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        jobs: payload,
      }
    case GET_SINGLE_JOB_SUCCESS:
      return {
        ...state,
        job: payload,
      }
    case ADD_JOB_FAIL:
    case GET_JOBS_FAIL:
    case GET_SINGLE_JOB_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default Jobs
