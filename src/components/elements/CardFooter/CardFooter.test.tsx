import React from 'react';
import { render } from '@testing-library/react';
import { CardFooter } from './CardFooter';
import { CardFooterProps } from './CardFooter.types';

describe('Test CardFooter Component', () => {
  let props: CardFooterProps;

  beforeEach(() => {
    props = {
      children: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<CardFooter {...props} />);

  it('should render children correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('CardFooter');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
