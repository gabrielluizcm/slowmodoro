import React from 'react';
import { useInterval } from '../../hooks/useInterval';

type TimerProps = {
  defaultTime: number;
};

export function Timer(props: TimerProps) {
  const [defaultTime, setDefaultTime] = React.useState(props.defaultTime);

  useInterval(() => {
    setDefaultTime(defaultTime - 1);
  }, 1000);

  return <div>{defaultTime}</div>;
}
