import React, { Component } from 'react';

class MyButton extends Component{
  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }
  render() {
    return <button onClick={this.handleClick}>{this.props.textButton}</button>;
  }
}

export default MyButton;
