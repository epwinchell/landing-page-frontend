import { configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;

global.fetch = require('jest-fetch-mock');

const returnBlank = () => undefined;

global.window.insights = {
  ...(window.insights || {}),
  chrome: {
    ...((window.insights && window.insights.chrome) || {}),
    init: returnBlank,
    identifyApp: returnBlank,
    isBeta: () => false,
    auth: {
      ...((window.insights &&
        window.insights.chrome &&
        window.insights.chrome) ||
        {}),
      login: returnBlank,
      getUser: () =>
        new Promise((res) =>
          res({
            identity: {
              account_number: '0',
              type: 'User',
            },
          })
        ),
    },
  },
};
