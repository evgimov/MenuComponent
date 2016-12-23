import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MyItemsList from './MyItemsList';
import MyMenuItemsList from './MyMenuItemsList';
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
        <div className='item-names'>
          <MyItemsList items={this.state.items} />
        </div>
        <div className="menu-container">
          <div className="inner">
            <MyMenuItemsList menuItems={this.state.items} />
          </div>
        </div>
      </div>


    );
  }

};

export default MyItemsCreator;