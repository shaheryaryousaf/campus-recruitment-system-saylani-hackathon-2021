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
} from './types'
import { auth, firebase2, db, firestore } from '../config/firebase'

// ========================================
// Get Browser Cookies
// ========================================
const getCookie = (name) => {
  var cookieValue = null
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';')
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim()
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
        break
      }
    }
  }
  return cookieValue
}

// ========================================
// Set Loading Function
// ========================================
export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_AUTH_LOADING,
  })
}

// ========================================
// Check if User is Authenticated or Not
// ========================================
export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    }

    const body = JSON.stringify({ token: localStorage.getItem('access') })

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/jwt/verify/`,
        body,
        config
      )

      if (res.data.code !== 'token_not_valid') {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        })
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL,
        })
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      })
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL,
    })
  }
}

// ========================================
// Load Logged In User
// ========================================
export const load_user = () => async (dispatch) => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/users/me/`,
        config
      )
      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      })
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    })
  }
}

export const registerUser = (
  username,
  email,
  password,
  password2,
  type
) => async (dispatch) => {
  try {
    if (password !== password2) {
      alert("Passwords don't match.")
      return
    }
    await firebase2
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const data = {
          id: uid,
          email,
          username,
          type,
        }
        const usersRef = firestore.collection('profiles')
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            console.log(response)
          })
          .catch((error) => {
            alert(error)
          })
      })
      .catch((error) => {
        alert(error)
      })
  } catch (error) {
    var errorCode = error.code
    var errorMessage = error.message
    console.log(errorCode)
    console.log(errorMessage)
    dispatch({
      type: REGISTRATION_FAIL,
    })
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    await firebase2
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const usersRef = firestore.collection('profiles')
        usersRef
          .doc(uid)
          .get()
          .then((userData) => {
            if (!userData.exists) {
              alert('User does not exist anymore.')
              return
            }
            const user = userData.data()
            dispatch({
              type: LOGIN_SUCCESS,
              payload: response.user,
            })
          })
          .catch((error) => {
            alert(error)
          })
      })
      .catch((error) => {
        alert(error)
      })
  } catch (error) {
    console.log(error)
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

export const getProfile = (data) => async (dispatch) => {
  try {
    firestore
      .collection('profiles')
      .doc(data)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: doc.data(),
          })
        } else {
          dispatch({
            type: GET_PROFILE_FAIL,
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
