import {
  COMPLETE_S_PROFILE_SUCCESS,
  COMPLETE_S_PROFILE_FAIL,
  GET_S_PROFILES_SUCCESS,
  GET_S_PROFILES_FAIL,
  GET_SINGLE_S_PROFILE_SUCCESS,
  GET_SINGLE_S_PROFILE_FAIL,
} from './types'
import { firestore } from '../config/firebase'

/* ============================== */
/* CREATE NEW STUDENT PROFILE */
/* ============================== */
export const completeStudentProfile = (data) => async (dispatch) => {
  try {
    firestore.collection('students').add(data)
    dispatch({
      type: COMPLETE_S_PROFILE_SUCCESS,
      payload: res,
    })
  } catch (err) {
    dispatch({
      type: COMPLETE_S_PROFILE_FAIL,
    })
  }
}

/* ============================== */
/* GET ALL STUDENT PROFILES */
/* ============================== */
export const getAllStudentProfiles = () => async (dispatch) => {
  try {
    firestore.collection('students').onSnapshot((snapshot) => {
      const postData = []
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }))
      dispatch({
        type: GET_S_PROFILES_SUCCESS,
        payload: postData,
      })
    })
  } catch (error) {
    dispatch({
      type: GET_S_PROFILES_FAIL,
    })
  }
}

/* ============================== */
/* GET SINGLE USER PROFILE */
/* ============================== */
export const getStudentProfile = (data) => async (dispatch) => {
  try {
    firestore
      .collection('students')
      .doc(data)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          dispatch({
            type: GET_SINGLE_S_PROFILE_SUCCESS,
            payload: doc.data(),
          })
        } else {
          dispatch({
            type: GET_SINGLE_S_PROFILE_FAIL,
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
