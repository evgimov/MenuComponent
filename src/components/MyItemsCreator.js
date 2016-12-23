import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MyMenu from './MyMenu';
import MyButton from './MyButton';
import MyTextField from './MyTextField';
import MyLabel from './MyLabel';


class MyItemsCreator extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: '1',
      items: 1
    };
  }

  handleClick = () => {
    this.setState({items: parseInt(this.state.data)});

  }

  handleChange = (newValue) => {
    this.setState({data: newValue});

  }

  render() {
    return (
      <div className='items-container'>
        <div className='add-item'>
          <MyLabel textLabel="Enter the number of menu items" />
          <MyTextField onChange={this.handleChange} />
          <MyButton textButton="Add" onClick={this.handleClick} />
        </div>
        <div className="menu-container">
          <div className="inner">
            <MyMenu menuItems={this.state.items} />
          </div>
        </div>
      </div>
    );
  }

};

MyItemsCreator.propTypes = {
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  children: PropTypes.any
};
MyItemsCreator.defaultProps = {

};
export default MyItemsCreator;