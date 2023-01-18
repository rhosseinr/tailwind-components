import React from 'react';
import { render } from '@testing-library/react';
import Container from './Container';
import { ContainerProps } from './Container.types';

describe('Test Container Component', () => {
  let props: ContainerProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Container {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Container');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
