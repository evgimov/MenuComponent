import React, {
  Component,
  PropTypes,
} from 'react';
import {Link} from 'react-router';

class Page extends Component {
  render() {
    let pageName = this.props.params.id;
    return (
      <div>
        <h1>Hello from {pageName}</h1>
        <a href="/">Back</a>
      </div>
    );
  }
}

Page.propTypes = {};
Page.defaultProps = {};

export default Page;
