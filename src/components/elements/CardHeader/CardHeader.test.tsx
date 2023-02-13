import React from 'react';
import { render } from '@testing-library/react';
import CardHeader from './CardHeader';
import { CardHeaderProps } from './CardHeader.types';

describe('Test CardHeader Component', () => {
  let props: CardHeaderProps;

  beforeEach(() => {
    props = {
      children: 'Im an example component.',
      flat: false,
      loading: false,
      disabled: false,
    };
  });

  const renderComponent = () => render(<CardHeader {...props} />);

  it('should render children correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('CardHeader');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
