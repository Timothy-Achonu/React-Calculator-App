import React, { Component } from 'react'

class Screen extends Component {
  render() {
    return (
      <div className='screen'>
         {this.props.content}
      </div>
    )
  }
}

export default Screen
