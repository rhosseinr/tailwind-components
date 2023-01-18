import React from 'react';
import { render } from '@testing-library/react';
import FileInput from './FileInput';
import { FileInputProps } from './FileInput.types';

describe('Test FileInput Component', () => {
  let props: FileInputProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<FileInput {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('FileInput');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
