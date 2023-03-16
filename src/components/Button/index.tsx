import React, { useContext } from 'react';
import { FaPause, FaPlay, FaStepForward } from 'react-icons/fa';

import { StatusContext, PausedContext } from '../App';

import './style.scss';

type ButtonProps = {
  children: string;
  className: string;
  onClick?: () => void;
};

export function Button(props: ButtonProps): JSX.Element {
  const status = useContext(StatusContext);
  const paused = useContext(PausedContext);

  return (
    <button onClick={props.onClick} className={props.className}>
      {props.className.includes('active') ? (
        paused ? (
          <FaPlay />
        ) : (
          <FaPause />
        )
      ) : status === 'idle' ? (
        props.children
      ) : (
        <FaStepForward />
      )}
    </button>
  );
}
