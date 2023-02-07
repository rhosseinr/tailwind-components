import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

describe('Test Button Component', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      children: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it('should render children correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Button');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
