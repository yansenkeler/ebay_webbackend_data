import React, { Component } from 'react';
import AccountStatus from './components/AccountStatus';

export default class CardReport extends Component {
  static displayName = 'CardReport';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card-report-page">
        <AccountStatus />
      </div>
    );
  }
}
