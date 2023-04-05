import React from 'react';

import { Status } from '../MainTimer';

import { StyledStatus } from './styled';

type StatusLabelProps = {
  status: Status;
  reversePomodoros: number;
};

export function StatusLabel(props: StatusLabelProps) {
  let status = firstCapital(props.status);
  if (
    status === 'Working' &&
    props.reversePomodoros !== 0 &&
    props.reversePomodoros % 4 === 0
  )
    status = 'Long Working';

  return <StyledStatus>{status}</StyledStatus>;
}

const firstCapital = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
