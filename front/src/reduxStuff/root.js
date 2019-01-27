import { combineReducers } from 'redux'
import { addPhrases } from './addPhrases'
import { phrasesToRevise } from './fetchPhrasesToRevise'

export default combineReducers({ addPhrases, phrasesToRevise })
