import React, { Component } from 'react';

import css from './Counter.less'

/**
 * Counter component. Renders a counter using component's internal state
 *
 * @class Counter
 */
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h2 class={css.component}>Counter: {this.state.counter}</h2>
   );
  }
}

