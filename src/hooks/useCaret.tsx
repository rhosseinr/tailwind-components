import React, { useState } from 'react';

export type caretProps = {
  isOpen?: boolean;
};

export default function useCaret(props: caretProps) {
  const [isOpen, setOpenCaret] = useState<boolean>(props?.isOpen || false);

  const children = isOpen ? (
    // eslint-disable-next-line react/button-has-type
    <button className="dorsa-btn dorsa-icon-btn">
      <i className="nf nf-ChevronUp" />
    </button>
  ) : (
    // eslint-disable-next-line react/button-has-type
    <button className="dorsa-btn dorsa-icon-btn">
      <i className="nf nf-ChevronDown" />
    </button>
  );

  return [children, isOpen, setOpenCaret];
}
