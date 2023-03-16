import React from 'react';

import reversePomodoroImg from '../../images/pomodoro.png';

export function Logo() {
  return (
    <div id="logo">
      <img className="logoImg" src={reversePomodoroImg} alt="Slowmodoro logo" />
      <h1>Slowmodoro</h1>
      <h3>a reverse Pomodoro app</h3>
    </div>
  );
}
