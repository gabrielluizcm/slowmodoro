import React from 'react';

import { secondsToTime } from '../../../utils/secondsToTime';

import { StyledTimer } from './styled';

type TimerProps = {
  currentTime: number;
};

export function Timer(props: TimerProps) {
  return <StyledTimer>{secondsToTime(props.currentTime)}</StyledTimer>;
}
