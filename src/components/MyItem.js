import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class MyItem extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: ''
    };
  }

  handleBlur = (event) => {
    this.setState({data: event.target.value});
  }

  render () {
    return (
      <li>
        <input type='text' onBlur={this.handleBlur} defaultValue={this.props.data} />
      </li>
    );
  }
};

export default MyItem;