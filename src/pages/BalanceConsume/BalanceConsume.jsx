import React, { Component } from 'react';
import SearchTable from './components/SearchTable';

export default class BalanceConsume extends Component {
  static displayName = 'BalanceConsume';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="balance-consume-page">
        <SearchTable />
      </div>
    );
  }
}
