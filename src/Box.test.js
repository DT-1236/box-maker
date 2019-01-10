import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Box from './Box';

describe('smoke tests for mount/shallow', () => {
  it('renders without crashing', () => {
    shallow(<Box />);
  });

  it('mounts without crashing', () => {
    mount(<Box />);
  });
});

describe('snapshot testing', () => {
  it('passes simple snapshots', () => {
    expect(toJson(shallow(<Box />))).toMatchSnapshot();
    expect(toJson(mount(<Box />))).toMatchSnapshot();
  });

  it('passes snapshots with styling', () => {
    const style = { backgroundColor: '#444444', height: '25px', width: '50px' };
    const wrapper = mount(<Box style={style} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('gives proper style attributes to the rendered Box div and matches the snapshot', () => {
    const style = { backgroundColor: '#444444', height: '25px', width: '50px' };
    const wrapper = mount(<Box style={style} />);
    const mountedBoxStyle = wrapper.find('.Box').props().style;
    expect(mountedBoxStyle).toHaveProperty('height', '25px');
    expect(mountedBoxStyle).toHaveProperty('width', '50px');
    expect(mountedBoxStyle).toHaveProperty('backgroundColor', '#444444');
  });
});
