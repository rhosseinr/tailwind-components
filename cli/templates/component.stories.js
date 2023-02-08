module.exports = (componentName) => ({
  extension: `.stories.tsx`,
  content: `import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ${componentName} } from './${componentName}';
import { ${componentName}Props } from './${componentName}.types';

export default {
  title: '${componentName}',
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

export const Default: ComponentStory<typeof ${componentName}> = (args: ${componentName}Props) => (
  <${componentName} {...args} />
);

Default.args = {
  children: '${componentName} Title',
};
`,
});
