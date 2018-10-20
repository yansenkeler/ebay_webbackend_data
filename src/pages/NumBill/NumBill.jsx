import React, { Component } from 'react';
import ContentList from './components/ContentList';

export default class NumBill extends Component {
  static displayName = 'NumBill';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="num-bill-page">
        <ContentList />
      </div>
    );
  }
}
