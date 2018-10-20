import React, { Component } from 'react';
import PlatformIntro from './components/PlatformIntro';

export default class BalanceCharge extends Component {
  static displayName = 'BalanceCharge';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="balance-charge-page">
        <PlatformIntro />
      </div>
    );
  }
}
