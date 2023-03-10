import React from 'react';

import { Button } from '../Button';
import { Timer } from '../Timer';

import { useInterval } from '../../hooks/useInterval';

import './style.scss';

type ChillingTimerProps = {
  defaultTime: number;
};

export function ChillingTimer(props: ChillingTimerProps) {
  const [defaultTime, setDefaultTime] = React.useState(props.defaultTime);

  useInterval(() => {
    setDefaultTime(defaultTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <Timer currentTimer={defaultTime} />
      <h1 className="status">Chilling</h1>
      <Button text="Test" onClick={() => console.log(1)}></Button>
    </div>
  );
}
