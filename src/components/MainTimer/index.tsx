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
  const [reversePomodoros, setReversePomodoros] = React.useState(0);
  const [chillingTime, setChillingTime] = React.useState(0);
  const [workingTime, setWorkingTime] = React.useState(0);

  useInterval(() => {
    if (status === 'chilling') setChillTime(chillTime - 1);
    if (status === 'working') setWorkTime(workTime - 1);
  }, 1000);

  const background = setBackground(status);
  const times = {
    chillTime,
    workTime,
  };
  const defaultTimes = {
    chillTime: props.chillTime,
    shortWorkTime: props.shortWorkTime,
    longWorkTime: props.longWorkTime,
  };

  return (
    <>
      <div className={background} />
      <div className="pomodoro">
        <StatusLabel status={status} reversePomodoros={reversePomodoros} />
        <TimerSwitch status={status} times={times} />
        <Button onClick={() => setStatus('chilling')}>Chill</Button>
        <Button onClick={() => setStatus('working')}>Work</Button>
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
