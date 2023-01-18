// import Icon from 'components/elements/Icon';
import React, { FC, useState } from 'react';
import cn from 'clsx';
import useMeasure from 'react-use-measure';
import { useSpring, a } from '@react-spring/web';
import styles from './Collapse.module.css';
import { CollapseProps } from './Collapse.types';

const Collapse: FC<CollapseProps> = ({ title, children }) => {
  const [isActive, setActive] = useState(false);
  const [ref, { height: viewHeight }] = useMeasure();

  const animProps = useSpring({
    height: isActive ? viewHeight : 0,
    config: { tension: 250, friction: 32, clamp: true, duration: 150 },
    opacity: isActive ? 1 : 0,
  });

  const toggle = () => setActive((x) => !x);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={styles.root}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onClick={toggle}
    >
      <div className={styles.header}>
        {/* <Icon
          Name="ChevronRight"
          className={cn(styles.icon, { [styles.open]: isActive })}
        /> */}
        <span className={styles.label}>{title}</span>
      </div>
      <a.div style={{ overflow: 'hidden', ...animProps }}>
        <div ref={ref} className={styles.content}>
          {children}
        </div>
      </a.div>
    </div>
  );
};

export default React.memo(Collapse);
