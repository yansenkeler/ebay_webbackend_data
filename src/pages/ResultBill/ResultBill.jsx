import React, { Component } from 'react';
import GeneralWidget from './components/GeneralWidget';

export default class ResultBill extends Component {
  static displayName = 'ResultBill';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="result-bill-page">
        <GeneralWidget />
      </div>
    );
  }
}
