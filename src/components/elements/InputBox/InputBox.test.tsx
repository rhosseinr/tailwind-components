import React from 'react';
import { render } from '@testing-library/react';
import InputBox from './InputBox';
import { InputBoxProps } from './InputBox.types';

describe('Test InputBox Component', () => {
  let props: InputBoxProps;

  beforeEach(() => {
    props = {
      children: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<InputBox {...props} />);

  it('should render children correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('InputBox');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
