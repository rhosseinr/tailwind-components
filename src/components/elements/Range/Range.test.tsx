import React from 'react';
import { render } from '@testing-library/react';
import Range from './Range';
import { RangeProps } from './Range.types';

describe('Test Range Component', () => {
  let props: RangeProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Range {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Range');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
