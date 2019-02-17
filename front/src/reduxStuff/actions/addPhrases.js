import { api } from 'reduxStuff/api'

export const ADD_PHRASES_PENDING = 'ADD_PHRASES_PENDING'
export const ADD_PHRASES_SUCCESS = 'ADD_PHRASES_SUCCESS'
export const ADD_PHRASES_FAILED = 'ADD_PHRASES_FAILED'

const initialState = {
  requestStatus: '',
  message: '',
  added: [],
  alreadyExisting: []
}

export const addPhrasesAction = (
  newPhrases,
  translations,
  initialEaseFactor,
  firstRepetitionInterval
) => dispatch => {
  dispatch({ type: ADD_PHRASES_PENDING })
  api
    .addPhrases({
      newPhrases,
      translations,
      initialEaseFactor,
      firstRepetitionInterval
    })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: ADD_PHRASES_SUCCESS, payload: data })
    })
    .catch(err => {
      dispatch({ type: ADD_PHRASES_FAILED, payload: err })
    })
}

export const addPhrases = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHRASES_PENDING:
      return { ...state, requestStatus: 'PENDING' }
    case ADD_PHRASES_SUCCESS: {
      const { message, added = [], alreadyExisting = [] } = action.payload
      return {
        ...state,
        requestStatus: 'SUCCESS',
        message,
        added,
        alreadyExisting
      }
    }
    case ADD_PHRASES_FAILED: {
      const { message, added, alreadyExisting } = action.payload
      return {
        ...state,
        requestStatus: 'FAILED',
        message,
        added,
        alreadyExisting
      }
    }
    default:
      return state
  }
}
