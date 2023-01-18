import React from 'react';
import { render } from '@testing-library/react';
import Avatar from './Avatar';
import { AvatarProps } from './Avatar.types';

describe('Test Avatar Component', () => {
  let props: AvatarProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Avatar {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Avatar');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
