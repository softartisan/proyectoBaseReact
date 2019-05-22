import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashboardPage from '../../components/DashboardPage';

test('Should render dashboard', () => {
  const wrapper = shallow(<ExpenseDashboardPage/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});