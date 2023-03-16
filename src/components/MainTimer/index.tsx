import React, { useContext } from 'react';

import { StatusContext, PausedContext, ReversePomodorosContext } from '../App';

import { Button } from '../Button';
import { TimerSwitch } from '../TimerSwitch';
import { StatusLabel } from '../StatusLabel';

import { useInterval } from '../../hooks/useInterval';
import { secondsToTime } from '../../utils/secondsToTime';

type MainTimerProps = {
  chillTime: number;
  shortWorkTime: number;
  longWorkTime: number;
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setReversePomodoros: React.Dispatch<React.SetStateAction<number>>;
  increaseTotalChillingTime: () => void;
  increaseTotalWorkingTime: () => void;
};

export type Status = 'idle' | 'chilling' | 'working';

export function MainTimer(props: MainTimerProps) {
  // Too many stuff here, I'll reallocate components after base functionalities are done
  const [chillTime, setChillTime] = React.useState(props.chillTime);
  const [workTime, setWorkTime] = React.useState(props.shortWorkTime);

  const status = useContext(StatusContext);
  const paused = useContext(PausedContext);
  const reversePomodoros = useContext(ReversePomodorosContext);

  const times = {
    chillTime,
    workTime,
  };

  const increaseAndCheckReversePomodoros = () => {
    const newReversePomodoros = reversePomodoros + 1;
    props.setReversePomodoros(newReversePomodoros);

    // Using const instead of state to work around state change delay
    if (newReversePomodoros % 4 === 0) setWorkTime(props.longWorkTime);
  };

  const resetChill = () => {
    setChillTime(props.chillTime);
    props.setPaused(false);
    increaseAndCheckReversePomodoros();
    props.setStatus('working');
  };

  const resetWork = () => {
    props.setPaused(false);
    setWorkTime(props.shortWorkTime);
    props.setStatus('chilling');
  };

  const handleChillButton = () => {
    if (status === 'working')
      if (
        confirm(
          'Are you sure you want to skip into chilling? Timers will be reset!'
        )
      )
        return resetWork();
      else return;

    if (status === 'chilling') props.setPaused(!paused);
    else props.setPaused(false);

    props.setStatus('chilling');
  };

  const handleWorkButton = () => {
    if (status === 'chilling')
      if (
        confirm(
          'Are you sure you want to skip into working? Timers will be reset!'
        )
      )
        return resetChill();
      else return;

    if (status === 'working') props.setPaused(!paused);
    else props.setPaused(false);

    props.setStatus('working');
  };

  const checkChillTimeLeft = () => {
    // Checking against 1 to prevent state change delay from altering counters
    if (chillTime <= 1) {
      resetChill();
    }
  };

  const checkWorkTimeLeft = () => {
    // Checking against 1 to prevent state change delay from altering counters
    if (workTime <= 1) {
      resetWork();
    }
  };

  // Timer on tab is 1 second late when not paused, will try to fix eventually
  const updateTabTitle = () => {
    let title = 'Slowmodoro - a reverse Pomodoro';

    if (status === 'chilling') title = `Chilling - ${secondsToTime(chillTime)}`;
    else if (status === 'working')
      title = `Working - ${secondsToTime(workTime)}`;

    if (paused) title = `PAUSED | ${title}`;

    document.title = title;
  };

  useInterval(() => {
    if (!paused) {
      if (status === 'chilling') {
        setChillTime(chillTime - 1);
        props.increaseTotalChillingTime();
        checkChillTimeLeft();
      }
      if (status === 'working') {
        setWorkTime(workTime - 1);
        props.increaseTotalWorkingTime();
        checkWorkTimeLeft();
      }
    }
    updateTabTitle();
  }, 1000);

  return (
    <>
      <StatusLabel status={status} reversePomodoros={reversePomodoros} />
      <TimerSwitch status={status} times={times} />
      <Button
        onClick={handleChillButton}
        className={status === 'chilling' ? 'active chilling' : ''}
      >
        Chill
      </Button>
      <Button
        onClick={handleWorkButton}
        className={status === 'working' ? 'active working' : ''}
      >
        Work
      </Button>
    </>
  );
}
