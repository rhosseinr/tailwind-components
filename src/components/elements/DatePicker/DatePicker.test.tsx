import React from 'react';
import { render } from '@testing-library/react';
import DatePicker from './DatePicker';
import { DatePickerProps } from './DatePicker.types';

describe('Test DatePicker Component', () => {
  let props: DatePickerProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<DatePicker {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('DatePicker');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
