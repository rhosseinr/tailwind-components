import React from 'react';
import { render } from '@testing-library/react';
import DropDown from './DropDown';
import { DropDownProps } from './DropDown.types';

describe('Test DropDown Component', () => {
  let props: DropDownProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<DropDown {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('DropDown');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
