import React, { Component } from 'react';
import NotPermission from './components/NotPermission';

export default class PayReport extends Component {
  static displayName = 'PayReport';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pay-report-page">
        <NotPermission />
      </div>
    );
  }
}
