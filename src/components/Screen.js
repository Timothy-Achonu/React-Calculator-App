import React, { Component } from "react";

class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <div>  {this.props.values.content} </div>
        <div className="answer"> {this.props.values.answer} </div>
      </div>
    );
  }
}

export default Screen;
