import React from 'react'
import Component from './index'
import { render, screen } from '@testing-library/react';

describe('Renders', () => {
  test('displays an empty list of laps', () => {
    render(<Component lapArray={[]}/>)
    expect(screen.queryAllByRole("listitem")).toHaveLength(0)
  });
  test('displays a list of laps', () => {
    render(<Component lapArray={[1,2,3,4]}/>)
    expect(screen.queryAllByRole("listitem")).toHaveLength(4)

  });
});