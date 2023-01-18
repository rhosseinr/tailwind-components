import React from 'react';
import { render } from '@testing-library/react';
import List from './List';
import { ListProps } from './List.types';

describe('Test List Component', () => {
  let props: ListProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<List {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('List');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
