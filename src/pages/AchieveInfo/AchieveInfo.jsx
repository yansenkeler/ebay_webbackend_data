import React, { Component } from 'react';
import ApplicationProgress from './components/ApplicationProgress';

export default class AchieveInfo extends Component {
  static displayName = 'AchieveInfo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="achieve-info-page">
        <ApplicationProgress />
      </div>
    );
  }
}
