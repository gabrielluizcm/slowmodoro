import React from 'react';

import { secondsToTime } from '../../utils/secondsToTime';

import './style.scss';

type CountersProps = {
  totalChillingTime: number;
  totalWorkingTime: number;
  reversePomodoros: number;
};

export function Counters(props: CountersProps) {
  return (
    <div className="counters">
      <p>
        <b>Total chilling time:</b> {secondsToTime(props.totalChillingTime)}
      </p>
      <p>
        <b>Total working time:</b> {secondsToTime(props.totalWorkingTime)}
      </p>
      <p>
        <b>Reverse Pomodoros:</b> {props.reversePomodoros}
      </p>
    </div>
  );
}
