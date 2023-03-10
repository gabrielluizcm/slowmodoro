import React from 'react';

import { Button } from '../Button';
import { Timer } from '../Timer';

import { useInterval } from '../../hooks/useInterval';

import './style.scss';

type MainTimerProps = {
  chillTime: number;
  shortWorkTime: number;
  longWorkTime: number;
};

type Status = 'idle' | 'chilling' | 'working';

export function MainTimer(props: MainTimerProps) {
  const [chillTime, setChillTime] = React.useState(props.chillTime);
  const [shortWorkTime, setShortWorkTime] = React.useState(props.shortWorkTime);
  const [longWorkTime, setLongWorkTime] = React.useState(props.longWorkTime);
  const [status, setStatus] = React.useState<Status>('idle');
  const [reversePomodoros, setReversePomodoros] = React.useState(0);
  const [chillingTime, setChillingTime] = React.useState(0);
  const [workingTime, setWorkingTime] = React.useState(0);

  useInterval(() => {
    setChillTime(chillTime - 1);
  }, 1000);

  const background = setBackground(status);

  return (
    <>
      <div className={background} />
      <div className="pomodoro">
        <h1 className="status">Chilling</h1>
        <Timer currentTimer={chillTime} />
        <Button onClick={() => console.log('chill')}>Chill</Button>
        <Button onClick={() => console.log('work')}>Work</Button>
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
