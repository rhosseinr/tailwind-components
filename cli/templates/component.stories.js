module.exports = (componentName) => ({
  extension: `.stories.tsx`,
  content: `import React from 'react';
import ${componentName} from './${componentName}';

export default {
  title: '${componentName}',
  component: ${componentName},
};

export const Default = (args:${componentName}Props) => <${componentName} {...args} />;
`,
});
