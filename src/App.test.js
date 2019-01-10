import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('smoke tests for mount/shallow', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('mounts without crashing', () => {
    mount(<App />);
  });
});
