import React from 'react';
import { FaPause, FaPlay, FaStepForward } from 'react-icons/fa';

import { Status } from '../MainTimer';

import './style.scss';

type ButtonProps = {
  status: Status;
  children: string;
  className: string;
  paused: boolean;
  onClick?: () => void;
};

export function Button(props: ButtonProps): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.className.includes('active') ? (
        props.paused ? (
          <FaPlay />
        ) : (
          <FaPause />
        )
      ) : props.status === 'idle' ? (
        props.children
      ) : (
        <FaStepForward />
      )}
    </button>
  );
}
