import React from 'react';

import { StyledLogo } from './styled';

import reversePomodoroImg from '../../images/pomodoro.png';

export function Logo() {
  return (
    <StyledLogo>
      <img className="logoImg" src={reversePomodoroImg} alt="Slowmodoro logo" />
      <h1>Slowmodoro</h1>
      <h3>a reverse Pomodoro app</h3>
    </StyledLogo>
  );
}
