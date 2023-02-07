module.exports = (componentName) => ({
  extension: `.tsx`,
  content: `import React from 'react';
import cn from 'clsx';
import styles from './${componentName}.module.css';
import { ${componentName}Props } from './${componentName}.types';

export const ${componentName}: React.FC<${componentName}Props> = (props: ${componentName}Props) => {
  const {
    className = '',
    children,
    flat,
    loading = false,
    disabled = false,
    style = {},
    ...rest
  } = props;

  const rootClassName = cn(
    styles.root,
    {
      [styles.loading]: loading,
      [styles.flat]: flat,
    },
    className
  );

  return (
    <div
      data-test-id="${componentName}"
      className={rootClassName}
      style={{
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
`,
});
