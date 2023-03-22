import React, { useContext } from 'react';

import { ReversePomodorosContext } from '../App';

import { secondsToTime } from '../../utils/secondsToTime';

import './style.scss';

type CountersProps = {
  totalChillingTime: number;
  totalWorkingTime: number;
};

export function Counters(props: CountersProps) {
  const reversePomodoros = useContext(ReversePomodorosContext);

  return (
    <div className="counters">
      <p>
        <b>Total chilling time:</b> {secondsToTime(props.totalChillingTime)}
      </p>
      <p>
        <b>Total working time:</b> {secondsToTime(props.totalWorkingTime)}
      </p>
      <p>
        <b>Reverse Pomodoros:</b> {reversePomodoros}
      </p>
    </div>
  );
}
