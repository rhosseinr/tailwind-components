import React from 'react';
import { render } from '@testing-library/react';
import Switch from './Switch';
import { SwitchProps } from './Switch.types';

describe('Test Switch Component', () => {
  let props: SwitchProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Switch {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Switch');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
