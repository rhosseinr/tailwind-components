// import rangeMap from 'utils/range-map';
import React, { FC, memo } from 'react';
// import Icon from 'components/elements/Icon';
import cn from 'clsx';
import { RatingProps } from './Rating.types';
import styles from './Rating.module.css';

const Rating: FC<RatingProps> = ({ value = 5 }) => (
  <div className="flex flex-row py-6 text-accent-9">
    {/* TODO: fix this */}
    {/* {rangeMap(5, (i) => (
      <span
        key={`star_${i}`}
        className={cn('inline-block ml-1 ', {
          'text-accent-5': i >= Math.floor(value),
        })}
      >
        <Icon Name="Star" />
      </span>
    ))} */}
  </div>
);

export default memo(Rating);
