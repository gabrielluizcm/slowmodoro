import React from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

import './style.scss';

type ButtonProps = {
  children: string;
  className: string;
  paused: boolean;
  onClick?: () => void;
};

export function Button(props: ButtonProps): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.className?.includes('active') ? (
        props.paused ? (
          <FaPlay />
        ) : (
          <FaPause />
        )
      ) : (
        props.children
      )}
    </button>
  );
}
