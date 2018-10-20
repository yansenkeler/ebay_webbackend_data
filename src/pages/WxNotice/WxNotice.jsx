import React, { Component } from 'react';
import BasicDetailInfo from './components/BasicDetailInfo';

export default class WxNotice extends Component {
  static displayName = 'WxNotice';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wx-notice-page">
        <BasicDetailInfo />
      </div>
    );
  }
}
