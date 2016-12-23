import React, { Component } from 'react';
import './App.css';
import MyItemsCreator from './components/MyItemsCreator';


class App extends Component {
  render() {
    return (
      <div className="main-container text-center">
        <div className="items-container col-sm-6">
          <MyItemsCreator />
        </div>

      </div>
    );
  }
};

export default App;
