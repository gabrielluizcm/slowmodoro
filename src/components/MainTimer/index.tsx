import React from 'react';

import { Button } from '../Button';
import { TimerSwitch } from '../TimerSwitch';
import { StatusLabel } from '../StatusLabel';

import { useInterval } from '../../hooks/useInterval';

import './style.scss';

type MainTimerProps = {
  chillTime: number;
  shortWorkTime: number;
  longWorkTime: number;
};

export type Status = 'idle' | 'chilling' | 'working';

export function MainTimer(props: MainTimerProps) {
  const [chillTime, setChillTime] = React.useState(props.chillTime);
  const [workTime, setWorkTime] = React.useState(props.shortWorkTime);
  const [status, setStatus] = React.useState<Status>('idle');
  const [paused, setPaused] = React.useState(false);
  const [reversePomodoros, setReversePomodoros] = React.useState(0);
  const [totalChillingTime, setTotalChillingTime] = React.useState(0);
  const [totalWorkingTime, setTotalWorkingTime] = React.useState(0);

  const background = setBackground(status);
  const times = {
    chillTime,
    workTime,
  };

  const handleChillButton = () => {
    if (status === 'chilling') setPaused(!paused);
    else setPaused(false);

    setStatus('chilling');
  };

  const handleWorkButton = () => {
    if (status === 'working') setPaused(!paused);
    else setPaused(false);

    setStatus('working');
  };

  useInterval(() => {
    if (!paused) {
      if (status === 'chilling') {
        setChillTime(chillTime - 1);
        setTotalChillingTime(totalChillingTime + 1);
      }
      if (status === 'working') {
        setWorkTime(workTime - 1);
        setTotalWorkingTime(totalWorkingTime + 1);
      }
    }
  }, 1000);

  return (
    <>
      <div className={background} />
      <div className="pomodoro">
        <StatusLabel status={status} reversePomodoros={reversePomodoros} />
        <TimerSwitch status={status} times={times} />
        <Button
          onClick={handleChillButton}
          className={status === 'chilling' ? 'active chilling' : ''}
          paused={paused}
        >
          Chill
        </Button>
        <Button
          onClick={handleWorkButton}
          className={status === 'working' ? 'active working' : ''}
          paused={paused}
        >
          Work
        </Button>
      </div>
    </>
  );
}

const setBackground = (status: Status) => {
  let background = 'background';

  if (status === 'chilling') background += ' chillBackground';
  else if (status === 'working') background += ' shortWorkBackground';

  return background;
};
