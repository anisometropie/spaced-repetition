import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "store";

import NewPhrases from "components/NewPhrases";
import LeftToolbar from "components/LeftToolbar";
import "App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="mainContainer">
          <LeftToolbar />
          <NewPhrases />
        </div>
      </Provider>
    );
  }
}

export default App;
