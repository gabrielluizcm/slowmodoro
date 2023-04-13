import React from 'react';

import { Status } from '../../organisms/MainTimer';
import { Timer } from '../../atoms/Timer';

type TimerSwitchProps = {
  status: Status;
  times: {
    chillTime: number;
    workTime: number;
  };
};

export function TimerSwitch(props: TimerSwitchProps) {
  const currentTime =
    props.status === 'working' ? props.times.workTime : props.times.chillTime;

  return <Timer currentTime={currentTime} />;
}
