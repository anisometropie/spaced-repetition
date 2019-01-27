export const ADD_PHRASES_PENDING = 'ADD_PHRASES_PENDING'
export const ADD_PHRASES_SUCCESS = 'ADD_PHRASES_SUCCESS'
export const ADD_PHRASES_FAILED = 'ADD_PHRASES_FAILED'

const initialState = { status: '' }

export const addPhrasesAction = (newPhrases, translations) => dispatch => {
  dispatch({ type: ADD_PHRASES_PENDING })
  fetch('http://localhost:3001/addPhrases', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ newPhrases, translations }),
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
      return { ...state, status: 'pending' }
    case ADD_PHRASES_SUCCESS:
      return { ...state, status: 'success' }
    case ADD_PHRASES_FAILED:
      return { ...state, status: 'failed' }
    default:
      return state
  }
}
