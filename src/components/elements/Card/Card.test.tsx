import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import { CardProps } from './Card.types';

describe('Test Card Component', () => {
  let props: CardProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Card {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Card');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
