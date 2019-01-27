import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SquareButtonWithTooltip } from 'components/core.ui/SquareButtonWithTooltip'
import { PlusSquare, BookOpen } from 'react-feather'
import './styles/LeftToolbar.css'

class LeftToolbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="leftToolbar">
        <SquareButtonWithTooltip
          tooltipTitle="Add new Phrases"
          className="buttons"
        >
          <Link to="addPhrases">
            <PlusSquare />
          </Link>
        </SquareButtonWithTooltip>
        <SquareButtonWithTooltip
          tooltipTitle="Revise Phrases"
          className="buttons"
        >
          <Link to="revise">
            <BookOpen />
          </Link>
        </SquareButtonWithTooltip>
      </div>
    )
  }
}

export default LeftToolbar
