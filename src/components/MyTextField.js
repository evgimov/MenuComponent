import React, { Component } from 'react';

class MyTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '1'
    };
  }

  handleChange = (e) => {

    let val = e.target.value;
    let validated = '1';

    if (!(isNaN(val) || (parseInt(val) > 5) || (parseInt(val) < 1)))   {
      validated = val;
    }

    this.setState({data: validated});

    if (this.props.onChange) {
      this.props.onChange(validated);
    }
  }

  render() {
    return <input type='text' onChange={this.handleChange} value={this.state.data} />;
  }
};

export default MyTextField;