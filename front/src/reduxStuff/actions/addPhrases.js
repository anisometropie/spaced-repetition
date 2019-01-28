import { api } from 'reduxStuff/api'

export const ADD_PHRASES_PENDING = 'ADD_PHRASES_PENDING'
export const ADD_PHRASES_SUCCESS = 'ADD_PHRASES_SUCCESS'
export const ADD_PHRASES_FAILED = 'ADD_PHRASES_FAILED'

const initialState = { requestStatus: '' }

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
      firstRepetitionInterval,
    })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: ADD_PHRASES_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: ADD_PHRASES_FAILED })
    })
}

export const addPhrases = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHRASES_PENDING:
      return { ...state, requestStatus: 'pending' }
    case ADD_PHRASES_SUCCESS:
      return { ...state, requestStatus: 'success' }
    case ADD_PHRASES_FAILED:
      return { ...state, requestStatus: 'failed' }
    default:
      return state
  }
}
