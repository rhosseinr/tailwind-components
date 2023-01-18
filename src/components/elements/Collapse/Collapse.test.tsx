import React from 'react';
import { render } from '@testing-library/react';
import Collapse from './Collapse';
import { CollapseProps } from './Collapse.types';

describe('Test Collapse Component', () => {
  let props: CollapseProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Collapse {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Collapse');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
