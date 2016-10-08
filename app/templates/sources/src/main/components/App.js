import React from 'react';

import Title from './Title';
import Input from './Input';
import Counter from './Counter';

import css from './App.less'

/**
 * Main application component
 *
 * @class App
 */
const App = () => (
  <div class={css.component}>
    <Input />
    <Title />
    <Counter />
  </div>
)

export default App;
