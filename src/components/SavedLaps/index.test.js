import React from 'react'
import Component from './index'
import { render, getAllByRole } from '@testing-library/react';

describe('Renders', () => {
  test('displays an empty list of laps', () => {
    const { getAllBy } = render(<Component lapArray={[]}/>)
    expect(getAllBy("ul")).toHaveLength(0)
  });
});