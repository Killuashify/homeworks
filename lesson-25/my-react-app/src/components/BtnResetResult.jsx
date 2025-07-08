import React, { Component } from "react";

class BtnResetResult extends Component {
  render() {
    const { onReset } = this.props;

    return (
      <button onClick={onReset} className="btn-reset">
        Clear results
      </button>
    );
  }
}

export default BtnResetResult;
