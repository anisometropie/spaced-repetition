import React from 'react'
import { connect } from 'react-redux'
import {
  addPhrasesAction,
  selectors as addPhrasesSelectors
} from 'reduxStuff/actions/addPhrases'
import './styles/NewPhrases.css'
import { isEmpty } from 'lodash'

//FROM CONFIG JSON
const easeFactor = 2.5
const firstRepetitionInterval = 0

const defaultState = {
  russianSentences: '',
  englishSentences: ''
}

class NewPhrases extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
  }

  handleRussianChange = event => {
    this.setState({
      russianSentences: event.target.value
    })
  }

  handleEnglishChange = event => {
    this.setState({
      englishSentences: event.target.value
    })
  }

  submitPhrases = e => {
    e.preventDefault()
    const { russianSentences, englishSentences } = this.state
    this.props.dispatch(
      addPhrasesAction(
        russianSentences.split(/\n/),
        englishSentences.split(/\n/),
        easeFactor,
        firstRepetitionInterval
      )
    )
  }

  render() {
    const { requestStatus, message, added, alreadyExisting } = this.props
    const addedPhrasesJSX = added.map((phrase, index) => {
      return (
        <div key={index}>{`${phrase.original} — ${phrase.translation}`}</div>
      )
    })
    const alreadyExistingPhrasesJSX = alreadyExisting.map((phrase, index) => {
      return (
        <div key={index}>{`${phrase.original} — ${phrase.translation}`}</div>
      )
    })
    return (
      <div className="newPhrasesMainContainer">
        <h1>Input new sentences</h1>
        <form className="phrasesForm">
          <div>
            <textarea
              placeholder="Paste russian phrases"
              className="phrases"
              value={this.state.russianSentences}
              onChange={this.handleRussianChange}
            />
            <textarea
              placeholder="Paste corresponding english phrases"
              className="phrases"
              value={this.state.englishSentences}
              onChange={this.handleEnglishChange}
            />
          </div>
          <button onClick={this.submitPhrases}>Submit</button>
        </form>
        <div>{message}</div>
        <div className="phrases">{addedPhrasesJSX}</div>
        {!isEmpty(alreadyExisting) && (
          <div className="phrases">
            <div>Phrases already added : </div>
            {alreadyExistingPhrasesJSX}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  requestStatus: addPhrasesSelectors.getRequestStatus(state),
  message: addPhrasesSelectors.getMessage(state),
  added: addPhrasesSelectors.getAdded(state),
  alreadyExisting: addPhrasesSelectors.getAlreadyExisting(state)
})

export default connect(mapStateToProps)(NewPhrases)
