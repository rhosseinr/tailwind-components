import React from 'react';
import { render } from '@testing-library/react';
import BreadCrumb from './BreadCrumb';
import { BreadCrumbProps } from './BreadCrumb.types';

describe('Test BreadCrumb Component', () => {
  let props: BreadCrumbProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<BreadCrumb {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('BreadCrumb');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
