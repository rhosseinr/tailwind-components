module.exports = (componentName) => ({
  extension: `.tsx`,
  content: `import React from 'react';
  import cn from 'clsx';
import styles from './${componentName}.module.css';
import { ${componentName}Props } from './${componentName}.types';

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
  <div data-test-id="${componentName}" className={styles.${componentName}}>
    {foo}
  </div>
);

export default ${componentName};
`,
});
