module.exports = (componentName) => ({
  extension: `.test.tsx`,
  content: `import React from 'react';
import { render } from '@testing-library/react';
import { ${componentName} } from './${componentName}';
import { ${componentName}Props } from './${componentName}.types';

describe('Test ${componentName} Component', () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      children: 'Im an example component.',
      flat: false,
      loading: false,
      disabled: false,
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it('should render children correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('${componentName}');
    expect(component).toHaveTextContent('Im an example component.');
  });
});
`,
});
