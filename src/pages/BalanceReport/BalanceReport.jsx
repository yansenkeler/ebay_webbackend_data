import React, { Component } from 'react';
import AccountBadge from './components/AccountBadge';

export default class BalanceReport extends Component {
  static displayName = 'BalanceReport';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="balance-report-page">
        <AccountBadge />
      </div>
    );
  }
}
