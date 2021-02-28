import {
  COMPLETE_C_PROFILE_SUCCESS,
  COMPLETE_C_PROFILE_FAIL,
  GET_C_PROFILES_SUCCESS,
  GET_C_PROFILES_FAIL,
} from './types'
import { firestore } from '../config/firebase'

/* ============================== */
/* CREATE NEW COMPANY PROFILE */
/* ============================== */
export const completeCompProfile = (data) => async (dispatch) => {
  try {
    firestore.collection('companies').add(data)
    dispatch({
      type: COMPLETE_C_PROFILE_SUCCESS,
      payload: res,
    })
  } catch (err) {
    dispatch({
      type: COMPLETE_C_PROFILE_FAIL,
    })
  }
}

/* ============================== */
/* GET ALL COMPANY PROFILES */
/* ============================== */
export const getAllCompanyProfiles = () => async (dispatch) => {
  try {
    firestore.collection('companies').onSnapshot((snapshot) => {
      const postData = []
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }))
      dispatch({
        type: GET_C_PROFILES_SUCCESS,
        payload: postData,
      })
    })
  } catch (error) {
    dispatch({
      type: GET_C_PROFILES_FAIL,
    })
  }
}
