import React from 'react';
import { render } from '@testing-library/react';
import Progress from './Progress';
import { ProgressProps } from './Progress.types';

describe('Test Progress Component', () => {
  let props: ProgressProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Progress {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Progress');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
