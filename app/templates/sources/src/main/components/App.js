import React from 'react';

import Title from './Title';
import Input from './Input';

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
  </div>
)

export default App;
