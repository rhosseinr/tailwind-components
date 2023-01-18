import React from 'react';
import { render } from '@testing-library/react';
import SelectBox from './SelectBox';
import { SelectBoxProps } from './SelectBox.types';

describe('Test SelectBox Component', () => {
  let props: SelectBoxProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<SelectBox {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('SelectBox');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
