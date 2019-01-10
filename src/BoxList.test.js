import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import BoxList from './BoxList';

describe('smoke tests for mount/shallow', () => {
  it('renders without crashing', () => {
    shallow(<BoxList />);
  });

  it('mounts without crashing', () => {
    mount(<BoxList />);
  });
});

describe('snapshot testing', () => {
  it('passes simple snapshots', () => {
    expect(toJson(shallow(<BoxList />))).toMatchSnapshot();
    expect(toJson(mount(<BoxList />))).toMatchSnapshot();
  });
});

describe('it creates and deletes boxes', () => {
  var wrapper;
  beforeEach(() => {
    //   Make a test box
    wrapper = mount(<BoxList />);
    const heightInput = wrapper.find('[name="height"]');
    const widthInput = wrapper.find('[name="width"]');
    const colorInput = wrapper.find('[name="backgroundColor"]');
    heightInput.simulate('change', { target: { name: 'height', value: 30 } });
    widthInput.simulate('change', { target: { name: 'width', value: 65 } });
    colorInput.simulate('change', {
      target: { name: 'backgroundColor', value: '#678901' }
    });
    const newBoxForm = wrapper.find('form');
    newBoxForm.simulate('submit');
  });

  afterEach(() => {
    //   Remove all boxes
    wrapper.setState({ boxes: {} });
  });

  it('makes boxes', () => {
    expect(Object.keys(wrapper.state().boxes)).toHaveLength(1);
    expect(Object.values(wrapper.state().boxes)[0]).toHaveProperty(
      'backgroundColor',
      '#678901'
    );
    expect(Object.values(wrapper.state().boxes)[0]).toHaveProperty(
      'height',
      '30px'
    );
    expect(Object.values(wrapper.state().boxes)[0]).toHaveProperty(
      'width',
      '65px'
    );

    const box = wrapper.find('.Box');
    const boxStyle = box.props().style;
    expect(boxStyle).toHaveProperty('height', '30px');
    expect(boxStyle).toHaveProperty('width', '65px');
    expect(boxStyle).toHaveProperty('backgroundColor', '#678901');
  });

  it('deletes a box', () => {
    expect(Object.keys(wrapper.state().boxes)).toHaveLength(1);
    const deleteButton = wrapper.find('.delete-button');
    deleteButton.simulate('click');
    expect(Object.keys(wrapper.state().boxes)).toHaveLength(0);
  });
});
