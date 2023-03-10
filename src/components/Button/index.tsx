import React from 'react';

import './style.scss';

type ButtonProps = {
  children: string;
  className?: string;
  onClick?: () => void;
};

export function Button(props: ButtonProps): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.children}
    </button>
  );
}
