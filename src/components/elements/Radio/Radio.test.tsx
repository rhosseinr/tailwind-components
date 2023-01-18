import React from 'react';
import { render } from '@testing-library/react';
import Radio from './Radio';
import { RadioProps } from './Radio.types';

describe('Test Radio Component', () => {
  let props: RadioProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Radio {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Radio');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
