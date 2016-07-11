import React from 'react';

import Title from './Title';
import Input from './Input';

import css from './App.less'

const App = () => (
  <div class={css.component}>
    <Input />
    <Title />
  </div>
)

export default App;
