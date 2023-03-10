import React from 'react';

import { secondsToTime } from '../../utils/secondsToTime';

import './style.scss';

type TimerProps = {
  currentTime: number;
};

export function Timer(props: TimerProps) {
  return <div className="timer">{secondsToTime(props.currentTime)}</div>;
}
