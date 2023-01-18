import React from 'react';
import { render } from '@testing-library/react';
import Rating from './Rating';
import { RatingProps } from './Rating.types';

describe('Test Rating Component', () => {
  let props: RatingProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Rating {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Rating');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
