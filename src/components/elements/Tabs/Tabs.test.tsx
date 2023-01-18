import React from 'react';
import { render } from '@testing-library/react';
import Tabs from './Tabs';
import { TabsProps } from './Tabs.types';

describe('Test Tabs Component', () => {
  let props: TabsProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Tabs {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Tabs');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
