import React, { Component } from "react";

class BtnShowResult extends Component {
  render() {
    const { onShow } = this.props;

    return (
      <button onClick={onShow} className="btn-show">
        Show Results
      </button>
    );
  }
}

export default BtnShowResult;
