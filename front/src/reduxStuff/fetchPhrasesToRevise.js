import { api } from 'reduxStuff/api'

export const FETCH_PHRASES_TO_REVISE_PENDING = 'FETCH_PHRASES_TO_REVISE_PENDING'
export const FETCH_PHRASES_TO_REVISE_SUCCESS = 'FETCH_PHRASES_TO_REVISE_SUCCESS'
export const FETCH_PHRASES_TO_REVISE_FAILED = 'FETCH_PHRASES_TO_REVISE_FAILED'

const initialState = { requestStatus: '' }

export const fetchPhrasesToReviseAction = (
  newPhrases,
  translations,
  initialEaseFactor,
  firstRepetitionInterval
) => dispatch => {
  dispatch({ type: FETCH_PHRASES_TO_REVISE_PENDING })
  api
    .fetchPhrasesToRevise(10)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      dispatch({ type: FETCH_PHRASES_TO_REVISE_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: FETCH_PHRASES_TO_REVISE_FAILED })
    })
}

export const phrasesToRevise = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHRASES_TO_REVISE_PENDING:
      return { ...state, requestStatus: 'pending' }
    case FETCH_PHRASES_TO_REVISE_SUCCESS:
      return { ...state, requestStatus: 'success' }
    case FETCH_PHRASES_TO_REVISE_FAILED:
      return { ...state, requestStatus: 'failed' }
    default:
      return state
  }
}
