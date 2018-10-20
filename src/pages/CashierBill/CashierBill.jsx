import React, { Component } from 'react';

export default class CashierBill extends Component {
  static displayName = 'CashierBill';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cashier-bill-page">
        收银账单
      </div>
    );
  }
}
