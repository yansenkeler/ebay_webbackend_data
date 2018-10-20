import React, { Component } from 'react';
import AssetInfoDisplay from './components/AssetInfoDisplay';

export default class FanReport extends Component {
  static displayName = 'FanReport';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="fan-report-page">
        <AssetInfoDisplay />
      </div>
    );
  }
}
