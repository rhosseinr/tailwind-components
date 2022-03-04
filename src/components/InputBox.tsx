import React, { memo, useMemo } from 'react';
import * as uuid from 'uuid';

type inputbox = {
  customOnChange?: any;
  label?: string;
  icon?: string;
  type?: 'text' | 'serach' | 'number' | 'email' | 'tel' | 'file' | string;
  placeholder?: string;
  value?: string;
  autoFocus?: boolean;
  required?: boolean;
};

const InputBox = ({
  customOnChange,
  label,
  icon,
  autoFocus = false,
  required = false,
  type = 'text',
  placeholder = '',
  value = '',
}: inputbox) => {
  const id = useMemo(() => uuid.v4(), []);

  return (
    <div className="w-full my-2">
      {label && (
        <label htmlFor={id} className='font-bold mb-1 text-sm block dark:text-gray-200 text-gray-800'>
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="mt-1 flex rounded shadow-sm">
        {icon && (
          <span className='inline-flex items-center px-3 rounded-r border border-l-0 border-neutral-300 bg-neutral-100 text-gray-500 dark:bg-neutral-600 dark:text-gray-200 dark:border-neutral-500 text-sm'>
            <i className={'text-light ms-Icon ms-Icon--' + icon} />
          </span>
        )}
        <input
          id={id}
          className='p-2 outline-none border bg-neutral-50 dark:bg-neutral-600 dark:text-gray-200 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l sm:text-sm border-neutral-300 dark:border-neutral-500'
          type={type}
          value={value}
          autoFocus={autoFocus}
          onChange={(e) => {
            customOnChange && customOnChange(e);
          }}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
export default memo(InputBox);
