module.exports = (componentName) => ({
  extension: `.tsx`,
  content: `import React, { forwardRef, useRef, FC } from 'react';
  import cn from 'clsx';
import styles from './${componentName}.module.css';
import { ${componentName}Props } from './${componentName}.types';

const ${componentName}Component = (props: ${componentName}Props, ${componentName}Ref) => {
  const {
    className = '',
    children,
    flat,
    loading = false,
    disabled = false,
    style = {},
    ...rest
  } = props;

  const ref = useRef<typeof Component>(null);

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
      width,
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
  );
};

const ${componentName}: FC<${componentName}Props> = forwardRef((props, ref) => {
  return <${componentName}Component {...props} ref={ref} />;
});

${componentName}.displayName = '${componentName}';
export default ${componentName};
`,
});
