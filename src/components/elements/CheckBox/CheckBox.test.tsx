import React from 'react';
import { render } from '@testing-library/react';
import CheckBox from './CheckBox';
import { CheckBoxProps } from './CheckBox.types';

describe('Test CheckBox Component', () => {
  let props: CheckBoxProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<CheckBox {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('CheckBox');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
