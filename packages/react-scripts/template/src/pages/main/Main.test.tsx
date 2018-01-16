import * as React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Home from './Home';

const setup = () => {
  const store = configureStore()({});
  const props = {
    onSumit: jest.fn()
  };
  const wrapper = mount(<Home />, { context: store });
  return {
    props,
    wrapper
  };
};

describe('首页', () => {
  const { wrapper, props } = setup();

  test('组件载入', () => {
    expect(wrapper.find('input').first().exists());
  });
});
