import React from 'react';
import {shallow } from 'enzyme';
import {Header} from '../../components/Header';

test('Should render Header correctly', () => {
  const wrapper = shallow( <Header startLogout={() => {}} /> );
  expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow( <Header startLogout={startLogout} /> );
  wrapper.find('button').at(0).simulate('click');
  expect(startLogout).toHaveBeenCalled();
})

