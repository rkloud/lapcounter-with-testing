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
  describe('decreaseLaps()', () => {
    test('does not decrease state count lower than zero', () => {
      const wrapper = shallow(<App/>)
      const instance = wrapper.instance()
      expect(instance).toHaveProperty('state.lapCount', 0)
      instance.decreaseLaps()
      expect(instance).toHaveProperty('state.lapCount', 0)
    });
    test('decreases lap by one', () => {
      const wrapper = shallow(<App/>)
      const instance = wrapper.instance()
      instance.state.lapCount = 1;
      expect(instance).toHaveProperty('state.lapCount', 1)
      instance.decreaseLaps()
      expect(instance).toHaveProperty('state.lapCount', 0)
    })
  });
  describe('resetLaps()', () => {
    test('sets lap count to 0', () => {
      const wrapper = shallow(<App/>)
      const instance = wrapper.instance()
      instance.state.lapCount = 1;
      expect(instance).toHaveProperty('state.lapCount', 1)
      instance.resetLaps()
      expect(instance).toHaveProperty('state.lapCount', 0)
    });
  })
  describe('saveLaps()', () => {
    test('it saves previous laps', () => {
      const wrapper = shallow(<App/>)
      const instance = wrapper.instance()
      expect(instance).toHaveProperty('state.lapArray', [])
      instance.saveLaps()
      expect(instance).toHaveProperty('state.lapArray', [0])
    })
  })
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
