import React, { useContext } from 'react';
import { FaPause, FaPlay, FaStepForward } from 'react-icons/fa';

import { StatusContext, PausedContext } from '../App';

import { StyledButton, ButtonFace } from './styled';

type ButtonProps = {
  children: string;
  active: boolean;
  onClick?: () => void;
};

export function Button(props: ButtonProps): JSX.Element {
  const status = useContext(StatusContext);
  const paused = useContext(PausedContext);

  return (
    <StyledButton onClick={props.onClick} active={props.active}>
      <ButtonFace active={props.active} paused={paused}>
        {props.active ? (
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
      </ButtonFace>
    </StyledButton>
  );
}
