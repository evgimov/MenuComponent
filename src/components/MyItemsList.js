import React, { Component } from 'react';
import MyItem from './MyItem';

class MyItemsList extends Component {
  render() {
    let items =  [];

    for(let i = 0; i < this.props.items; i++ ) {
      items.push(<MyItem key={'itemdata-' + i} data={i + 1} />);
    }
    return <ul>{items}</ul>;
  }
};

export default MyItemsList;