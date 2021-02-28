import {
  ADD_JOB_SUCCESS,
  ADD_JOB_FAIL,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAIL,
  GET_SINGLE_JOB_SUCCESS,
  GET_SINGLE_JOB_FAIL,
} from './types'
import { firestore } from '../config/firebase'

/* ============================== */
/* ADD NEW JOB */
/* ============================== */
export const addJob = (data) => async (dispatch) => {
  try {
    firestore.collection('jobs').add(data)
    dispatch({
      type: ADD_JOB_SUCCESS,
      payload: res,
    })
  } catch (err) {
    dispatch({
      type: ADD_JOB_FAIL,
    })
  }
}

/* ============================== */
/* GET ALL COMPANY PROFILES */
/* ============================== */
export const getAllJobs = () => async (dispatch) => {
  try {
    firestore.collection('jobs').onSnapshot((snapshot) => {
      const postData = []
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }))
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: postData,
      })
    })
  } catch (error) {
    dispatch({
      type: GET_JOBS_FAIL,
    })
  }
}

/* ============================== */
/* GET SINGLE JOB */
/* ============================== */
export const getJob = (data) => async (dispatch) => {
  try {
    firestore
      .collection('jobs')
      .doc(data)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          dispatch({
            type: GET_SINGLE_JOB_SUCCESS,
            payload: doc.data(),
          })
        } else {
          dispatch({
            type: GET_SINGLE_JOB_FAIL,
          })
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error)
      })
  } catch (err) {
    dispatch({
      type: GET_PROFILE_FAIL,
    })
  }
}
