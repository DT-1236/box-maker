import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewBoxForm from './NewBoxForm';

describe('smoke tests for mount/shallow', () => {
  it('renders without crashing', () => {
    shallow(<NewBoxForm />);
  });

  it('mounts without crashing', () => {
    mount(<NewBoxForm />);
  });
});

describe('snapshot testing', () => {
  it('passes simple snapshots', () => {
    expect(toJson(shallow(<NewBoxForm />))).toMatchSnapshot();
    expect(toJson(mount(<NewBoxForm />))).toMatchSnapshot();
  });
});

describe('updating form and state on change events', () => {
  it('updates state and input element values on change events', () => {
    const wrapper = mount(<NewBoxForm />);
    let heightInput = wrapper.find('[name="height"]');
    heightInput.simulate('change', { target: { name: 'height', value: 30 } });
    let widthInput = wrapper.find('[name="width"]');
    widthInput.simulate('change', { target: { name: 'width', value: 65 } });
    let colorInput = wrapper.find('[name="backgroundColor"]');
    colorInput.simulate('change', {
      target: { name: 'backgroundColor', value: '#678901' }
    });
    heightInput = wrapper.find('[name="height"]');
    widthInput = wrapper.find('[name="width"]');
    colorInput = wrapper.find('[name="backgroundColor"]');
    expect(wrapper.state()).toHaveProperty('height', 30);
    expect(wrapper.state()).toHaveProperty('width', 65);
    expect(wrapper.state()).toHaveProperty('backgroundColor', '#678901');
    expect(heightInput.props()).toHaveProperty('value', 30);
    expect(widthInput.props()).toHaveProperty('value', 65);
    expect(colorInput.props()).toHaveProperty('value', '#678901');
  });
});
