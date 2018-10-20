import React, { Component } from 'react';

export default class ReceiveDevice extends Component {
  static displayName = 'ReceiveDevice';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="receive-device-page">
        收款设备
      </div>
    );
  }
}
