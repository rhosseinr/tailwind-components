import React from 'react';
import { render } from '@testing-library/react';
import Badge from './Badge';
import { BadgeProps } from './Badge.types';

describe('Test Badge Component', () => {
  let props: BadgeProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Badge {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Badge');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
