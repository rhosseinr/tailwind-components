import React from 'react';
import { render } from '@testing-library/react';
import Accordion from './Accordion';
import { AccordionProps } from './Accordion.types';

describe('Test Accordion Component', () => {
  let props: AccordionProps;

  beforeEach(() => {
    props = {
      foo: 'Im an example component.',
    };
  });

  const renderComponent = () => render(<Accordion {...props} />);

  it('should render foo correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('Accordion');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
