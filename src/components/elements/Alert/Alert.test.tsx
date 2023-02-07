import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert';
import { AlertProps } from './Alert.types';

describe('Test Alert Component', () => {
  let props: AlertProps;

  beforeEach(() => {
    props = {
      children: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Alert {...props} />);

  it('should render children correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Alert');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
