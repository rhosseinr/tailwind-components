import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';
import { LoadingProps } from './Loading.types';

describe('Test Loading Component', () => {
  let props: LoadingProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Loading {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Loading');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
