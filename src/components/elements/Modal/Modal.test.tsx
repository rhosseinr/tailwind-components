import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';
import { ModalProps } from './Modal.types';

describe('Test Modal Component', () => {
  let props: ModalProps;

  beforeEach(() => {
    props = {
      children: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Modal {...props} />);

  it('should render children correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Modal');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
