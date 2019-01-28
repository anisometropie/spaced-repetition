import React from 'react'
import { connect } from 'react-redux'
import { fetchPhrasesToReviseAction } from 'reduxStuff/actions/fetchPhrasesToRevise'
import './styles/Revise.css'

//FROM CONFIG JSON
const defaultNumberOfPhraseToRevise = 10

const defaultState = {}

class Revise extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
  }

  ComponentDidMount() {
    this.fetchPhrasesToRevise()
  }

  fetchPhrasesToRevise = () => {
    this.props.dispatch(
      fetchPhrasesToReviseAction(defaultNumberOfPhraseToRevise)
    )
  }

  render() {
    return <button onClick={this.fetchPhrasesToRevise} />
  }
}

export default connect()(Revise)
