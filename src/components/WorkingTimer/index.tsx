import React from 'react';

import { Button } from '../Button';
import { Timer } from '../Timer';

import { useInterval } from '../../hooks/useInterval';

import './style.scss';

type WorkingTimerProps = {
  defaultTime: number;
  long?: boolean;
};

export function WorkingTimer(props: WorkingTimerProps) {
  const [defaultTime, setDefaultTime] = React.useState(props.defaultTime);

  useInterval(() => {
    setDefaultTime(defaultTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h1 className="status">{props.long ? 'Long work' : 'Short work'}</h1>
      <Timer currentTimer={defaultTime} />
      <Button onClick={() => console.log('chill')}>Chill</Button>
      <Button onClick={() => console.log('work')}>Work</Button>
    </div>
  );
}
