import React, { Component } from 'react';

function MyMenuItem(props){
  return (
    <li className="submenu" ><a href={"/#/" + props.data}>{props.data}</a></li>
  );
};

export default MyMenuItem;