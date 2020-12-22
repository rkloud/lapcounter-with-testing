import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import { render } from '@testing-library/react';

describe('Methods', () => {
  describe('addLaps()', () => {
    test('increments state count by one', () => {
      const wrapper = shallow(<App/>)
      const instance = wrapper.instance()
      expect(instance).toHaveProperty('state.lapCount', 0)
      instance.addLaps()
      expect(instance).toHaveProperty('state.lapCount', 1)
    });
  });
});

describe('Renders', () => {
  describe('buttons', () => {
    test('"Add Lap" button', () => {
      const { getByText } = render(<App />);
      const addButton = getByText("Add Lap");
      expect(addButton).toBeInTheDocument();
    });
  })
  describe('"Add Lap" when clicked increments lap count', () => {
    // Here to demonstrate the difference in testing with Testing Library with the different in ideology
    // TODO: Convert to Testing Library
    test('changes "Current Laps: 0" to "Current Laps: 1"', () => {
      const wrapper = shallow(<App/>)
      expect(wrapper.text()).toContain('Current Laps: 0')
      wrapper.instance().addLaps()
      expect(wrapper.text()).not.toContain('Current Laps: 0')
      expect(wrapper.text()).toContain('Current Laps: 1')
    });
  });
});
