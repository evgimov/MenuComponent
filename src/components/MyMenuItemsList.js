import React, { Component } from 'react';
import MyMenuItem from './MyMenuItem';

class MyMenuItemList extends Component {
  render() {
    let menuItems =  [];
    for(let i = 0; i < this.props.menuItems; i++ ) {
      menuItems.push(<MyMenuItem key={'menuitemdata-' + i} data={i + 1} />);
    }
    return (
      <ul className="menu">
        <li className="expand">
          <a href="#">
            <span className="glyphicon glyphicon-plus"></span>
          </a>
        </li>
        {menuItems}
      </ul>
    );
  }
}

export default MyMenuItemList;