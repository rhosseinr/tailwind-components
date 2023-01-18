import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';
import { IconProps } from './Icon.types';

describe('Test Icon Component', () => {
  let props: IconProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Icon {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Icon');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
