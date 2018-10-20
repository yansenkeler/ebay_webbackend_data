import React, { Component } from 'react';
import AblityItems from './components/AblityItems';

export default class MemberReport extends Component {
  static displayName = 'MemberReport';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="member-report-page">
        <AblityItems />
      </div>
    );
  }
}
