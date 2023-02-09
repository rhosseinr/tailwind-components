import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import { CardProps } from './Card.types';

describe('Test Card Component', () => {
  let props: CardProps;

  beforeEach(() => {
    props = {
      children: 'Im an example component.',
      flat: false,
      loading: false,
      disabled: false,
    };
  });

  const renderComponent = () => render(<Card {...props} />);

  it('should render children correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Card');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
