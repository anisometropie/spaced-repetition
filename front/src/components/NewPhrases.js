import React from 'react'
import { connect } from 'react-redux'
import { addPhrasesAction } from 'reduxStuff/addPhrases'
import './styles/NewPhrases.css'

const defaultState = {
  russianSentences: '',
  englishSentences: '',
}
class NewPhrases extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
  }

  handleRussianChange = event => {
    this.setState({
      russianSentences: event.target.value,
    })
  }

  handleEnglishChange = event => {
    this.setState({
      englishSentences: event.target.value,
    })
  }

  submitPhrases = e => {
    e.preventDefault()
    const { russianSentences, englishSentences } = this.state
    this.props.dispatch(
      addPhrasesAction(
        russianSentences.split(/\n/),
        englishSentences.split(/\n/)
      )
    )
  }

  render() {
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
      </div>
    )
  }
}

export default connect()(NewPhrases)
