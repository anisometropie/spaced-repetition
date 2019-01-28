import { combineReducers } from 'redux'
import { addPhrases } from './actions/addPhrases'
import { phrasesToRevise } from './actions/fetchPhrasesToRevise'

export default combineReducers({ addPhrases, phrasesToRevise })
