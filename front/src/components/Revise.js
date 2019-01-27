import React from 'react'
import { connect } from 'react-redux'
import { fetchPhrasesToReviseAction } from 'reduxStuff/fetchPhrasesToRevise'
import './styles/NewPhrases.css'

//FROM CONFIG JSON
const defaultNumberOfPhraseToRevise = 10

const defaultState = {}

class Revise extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
  }

  ComponentDidMount() {}

  fetchPhrasesToRevise = () => {
    this.props.dispatch(
      fetchPhrasesToReviseAction(defaultNumberOfPhraseToRevise)
    )
  }

  render() {
    return <button onclick={this.fetchPhrasesToRevise} />
  }
}

export default connect()(Revise)
