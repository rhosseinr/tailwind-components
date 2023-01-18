import React from 'react';
import { render } from '@testing-library/react';
import ColorPicker from './ColorPicker';
import { ColorPickerProps } from './ColorPicker.types';

describe('Test ColorPicker Component', () => {
  let props: ColorPickerProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<ColorPicker {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('ColorPicker');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
