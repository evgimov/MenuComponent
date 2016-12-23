import React, { Component, PropTypes } from 'react';
import MyMenuItem from './MyMenuItem';

class MyMenu extends Component {
  render() {

    let menuLength = this.props.menuItems;
    let menuItems =  [];
    for(let i = 0; i < menuLength; i++ ) {
      menuItems.push(<MyMenuItem key={'menuitemdata-' + i} data={i + 1} />);
    }
    return (
      <ul className="menu">
        <div className="expand">
          <a href="#">
            <span className="glyphicon glyphicon-plus"></span>
          </a>
        </div>
        <div className="submenu-container">
          {menuItems}
        </div>
      </ul>
    );
  }
}
propTypes: {
  menuLength: PropTypes.number
}
export default MyMenu;

