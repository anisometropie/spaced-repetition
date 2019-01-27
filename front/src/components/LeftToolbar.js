import React, { Component } from "react";
import { PlusSquare } from "react-feather";
import "./styles/LeftToolbar.css";

class LeftToolbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="leftToolbar">
        <PlusSquare />
      </div>
    );
  }
}

export default LeftToolbar;
