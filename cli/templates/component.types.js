module.exports = (componentName) => ({
  extension: `.types.ts`,
  content: `import { HTMLAttributes } from 'react';

export interface ${componentName}Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  flat: boolean;
  loading: boolean;
  disabled: boolean;
}
`,
});
