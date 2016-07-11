'use strict';

// Require all the necessary objects
require('./setup.less');

// Make React globally available
import React from 'react';
global.React = React;

// Make chai globally available
import { expect } from 'chai';
global.expect = expect;

// Make Enzyme globally available
import { mount, shallow, render } from 'enzyme';
global.shallow = shallow;
global.render = render;
// By default mount components into "#root"
global.mount = function(component, opts) {
  return mount(component, { attachTo: document.getElementById('root'), ...opts });
}

// Make mockStore available for test
import configureStore from 'redux-mock-store';
global.mockStore = configureStore();

// Require all tests
var context = require.context('.', true, /.+\.test\.js?$/);
context.keys().forEach(context);
module.exports = context;
