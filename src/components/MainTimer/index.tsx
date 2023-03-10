import React from 'react';

import { Button } from '../Button';
import { TimerSwitch } from '../TimerSwitch';
import { StatusLabel } from '../StatusLabel';

import { useInterval } from '../../hooks/useInterval';

import './style.scss';
import { reverse } from 'dns';

type MainTimerProps = {
  chillTime: number;
  shortWorkTime: number;
  longWorkTime: number;
};

export type Status = 'idle' | 'chilling' | 'working';

export function MainTimer(props: MainTimerProps) {
  // Too many stuff here, I'll reallocate components after base functionalities are done
  const [chillTime, setChillTime] = React.useState(props.chillTime);
  const [workTime, setWorkTime] = React.useState(props.shortWorkTime);
  const [status, setStatus] = React.useState<Status>('idle');
  const [paused, setPaused] = React.useState(false);
  const [reversePomodoros, setReversePomodoros] = React.useState(0);
  const [totalChillingTime, setTotalChillingTime] = React.useState(0);
  const [totalWorkingTime, setTotalWorkingTime] = React.useState(0);

  const background = setBackground(status);
  const times = {
    chillTime,
    workTime,
  };

  const handleChillButton = () => {
    if (status === 'chilling') setPaused(!paused);
    else setPaused(false);

    setStatus('chilling');
  };

  const handleWorkButton = () => {
    if (status === 'working') setPaused(!paused);
    else setPaused(false);

    setStatus('working');
  };

  const checkChillTimeLeft = () => {
    // Checking against 1 to prevent state change delay from altering counters
    if (chillTime <= 1) {
      const newReversePomodoros = reversePomodoros + 1;
      setReversePomodoros(newReversePomodoros);
      setStatus('working');
      setChillTime(props.chillTime);

      // Using const instead of state to work around state change delay
      if (newReversePomodoros % 4 === 0) setWorkTime(props.longWorkTime);
    }
  };

  const checkWorkTimeLeft = () => {
    // Checking against 1 to prevent state change delay from altering counters
    if (workTime <= 1) {
      setStatus('chilling');
      setWorkTime(props.shortWorkTime);
    }
  };

  useInterval(() => {
    if (!paused) {
      if (status === 'chilling') {
        setChillTime(chillTime - 1);
        setTotalChillingTime(totalChillingTime + 1);
        checkChillTimeLeft();
      }
      if (status === 'working') {
        setWorkTime(workTime - 1);
        setTotalWorkingTime(totalWorkingTime + 1);
        checkWorkTimeLeft();
      }
    }
  }, 1000);

  return (
    <>
      <div className={background} />
      <div className="pomodoro">
        <StatusLabel status={status} reversePomodoros={reversePomodoros} />
        <TimerSwitch status={status} times={times} />
        <Button
          onClick={handleChillButton}
          className={status === 'chilling' ? 'active chilling' : ''}
          paused={paused}
        >
          Chill
        </Button>
        <Button
          onClick={handleWorkButton}
          className={status === 'working' ? 'active working' : ''}
          paused={paused}
        >
          Work
        </Button>
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
