import React, { Component } from 'react';
import './App.css';
import PureRenderMixin from 'react-addons-pure-render-mixin';


function MyLabel(props) {
  return <div>{props.textLabel}</div>;
};

class MyButton extends Component{
  onButtonClicked = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    return <button onClick={this.onButtonClicked}>{this.props.textButton}</button>;
  }
}


class MyTextField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '1'
    };
  }

  onEntryChanged = (e) => {

    let val = e.target.value;
    let validated = '1';

    if (!(isNaN(val) || (parseInt(val) > 9 ) || (parseInt(val) < 1)))   {
      validated = val;
    }

    this.setState({data: validated});

    if (this.props.onChange) {
      this.props.onChange(validated);
    }
  }

  render() {
    return <input type='text' onChange={this.onEntryChanged} value={this.state.data} />;
  }
};

MyTextField.propTypes = { maxVal: React.PropTypes.number };
MyTextField.defaultProps = { maxVal: 0 };


class MyItem extends Component {
  render() {
    return (
      <li>
        <input type='text' value={this.props.data}/>
      </li>
    );
  }
};

class ItemsList extends Component {
  render() {
    let items =  [];

    for(let i = 0; i < this.props.items; i++ ) {
      items.push(<MyItem key={'rowdata-' + i} data={i + 1} />);
    }
    return <ul>{items}</ul>;
  }
};

class ItemsCreator extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: '1',
      items: 1
    }
  }

  onButtonClicked = () => {
    this.setState({items: parseInt(this.state.data)});
  }

  onDataChanged = (newValue) => {
    this.setState({data: newValue});
  }

  render() {
    return (
      <div className='items-container'>
        <div className='add-item'>
          <MyLabel textLabel="Enter the number of menu items" />
          <MyTextField onChange={this.onDataChanged} />
          <MyButton textButton="Add" onClick={this.onButtonClicked} />
        </div>
        <div className='item-names'>
          <ItemsList items={this.state.items} />
        </div>
      </div>
    )
  }

};

class MenuItem extends Component {
  render () {
    return (
      <li>
        <input type='text' value={this.props.data}/>
      </li>
    );
  }
};




class App extends Component {
  render() {
    return (
      <div className="main-container col-sm-6 text-center">
        <ItemsCreator />
      </div>
    );
  }
};

export default App;
