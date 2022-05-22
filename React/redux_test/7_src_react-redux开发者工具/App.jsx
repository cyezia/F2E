import React, { Component } from 'react';
import Count from './containers/Count';
import Person from './containers/Person';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count />
        <hr />
        <Person />
      </div>
    )
  }
}