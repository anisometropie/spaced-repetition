import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'store'

import NewPhrases from 'components/NewPhrases'
import Revise from 'components/Revise'
import LeftToolbar from 'components/LeftToolbar'
import 'App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="mainContainer">
          <LeftToolbar />
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/addPhrases" component={NewPhrases} />
            <Route path="/revise" component={Revise} />
          </Switch>
        </div>
      </Provider>
    )
  }
}

export default App
