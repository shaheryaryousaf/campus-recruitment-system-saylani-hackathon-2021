import { combineReducers } from 'redux'
import Students from './Students'
import Companies from './Companies'
import Jobs from './Jobs'
import Auth from './Auth'

export default combineReducers({ Students, Companies, Jobs, Auth })
