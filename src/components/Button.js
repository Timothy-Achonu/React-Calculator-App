import React, { Component } from 'react'

class Button extends Component {
  
  
  render() {
    let className = "";
    if(this.props.textContent === "x" || this.props.textContent === "=") {
       className = 'bigButton';
    }
    return (
      <button 
        className={`button ${className}`}
        onClick={this.props.handleClick}
       >
         {this.props.textContent}
      </button>
    )
  }
}

export default Button
