import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  StatusContext,
  PausedContext,
  ReversePomodorosContext,
  PomodorosContext,
  AutoPlayContext,
  EnableSoundsContext,
  ReverseModeContext
} from '../../App';

import { Button } from '../../atoms/Button';
import { TimerSwitch } from '../../molecules/TimerSwitch';
import { StatusLabel } from '../../atoms/StatusLabel';

import { useInterval } from '../../../hooks/useInterval';
import { secondsToTime } from '../../../utils/secondsToTime';

import timerStartClick from '../../../sounds/timerStart.mp3';
import timerResumeClick from '../../../sounds/timerResume.mp3';
import timerPauseClick from '../../../sounds/timerPause.mp3';
import startChillAlert from '../../../sounds/startChillAlert.mp3';
import startWorkAlert from '../../../sounds/startWorkAlert.mp3';

type MainTimerProps = {
  chillTime: number;
  shortWorkTime: number;
  longWorkTime: number;
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setReversePomodoros?: React.Dispatch<React.SetStateAction<number>>;
  setPomodoros?: React.Dispatch<React.SetStateAction<number>>;
  increaseTotalChillingTime: () => void;
  increaseTotalWorkingTime: () => void;
};

export type Status = 'idle' | 'chilling' | 'working';

export function MainTimer(props: MainTimerProps) {
  const { t } = useTranslation();
  const autoPlay = useContext(AutoPlayContext);
  const enableSounds = useContext(EnableSoundsContext);
  const reverseMode = useContext(ReverseModeContext);
  const status = useContext(StatusContext);
  const paused = useContext(PausedContext);
  const reversePomodoros = useContext(ReversePomodorosContext);
  const pomodoros = useContext(PomodorosContext);

  const [chillTime, setChillTime] = React.useState(props.chillTime);
  const [workTime, setWorkTime] = React.useState(props.shortWorkTime);

  const times = {
    chillTime,
    workTime,
  };

  useEffect(() => {
    setChillTime(props.chillTime);
  }, [props.chillTime, reverseMode]);

  useEffect(() => {
    const workTime = reverseMode
      ? pomodoros !== 0 && pomodoros % 4 === 0
        ? props.longWorkTime
        : props.shortWorkTime
      : reversePomodoros !== 0 && reversePomodoros % 4 === 0
        ? props.longWorkTime
        : props.shortWorkTime;
    setWorkTime(workTime);
  }, [props.shortWorkTime, props.longWorkTime, reverseMode]);

  const increaseAndCheckReversePomodoros = () => {
    if (!props.setReversePomodoros) return;

    const newReversePomodoros = reversePomodoros + 1;
    props.setReversePomodoros(newReversePomodoros);

    // Using const instead of state to work around state change delay
    if (newReversePomodoros % 4 === 0) setWorkTime(props.longWorkTime);
  };

  const increaseAndCheckPomodoros = () => {
    if (!props.setPomodoros) return;

    const newPomodoros = pomodoros + 1;
    props.setPomodoros(newPomodoros);

    // Using const instead of state to work around state change delay
    if (newPomodoros % 4 === 0) setWorkTime(props.longWorkTime);
  };

  const resetChill = () => {
    setChillTime(props.chillTime);
    props.setPaused(!autoPlay);
    if (!reverseMode)
      increaseAndCheckReversePomodoros();
    else
      increaseAndCheckPomodoros();
    props.setStatus('working');
  };

  const resetWork = () => {
    props.setPaused(!autoPlay);
    setWorkTime(props.shortWorkTime);
    props.setStatus('chilling');
  };

  const startTimer = () => {
    if (enableSounds) new Audio(timerStartClick).play();
    props.setPaused(false);
  };

  const timerPauseSwitch = () => {
    if (enableSounds) {
      let audio = new Audio(timerResumeClick);
      if (!paused) audio = new Audio(timerPauseClick);
      audio.play();
    }

    props.setPaused(!paused);
  };

  const handleChillButton = () => {
    const confirmText = t('toChillSkip');
    if (status === 'working')
      if (confirm(confirmText)) {
        startTimer();
        return resetWork();
      } else return;

    if (status === 'chilling') timerPauseSwitch();
    else startTimer();

    props.setStatus('chilling');
  };

  const handleWorkButton = () => {
    const confirmText = t('toWorkSkip');
    if (status === 'chilling')
      if (confirm(confirmText)) {
        startTimer();
        return resetChill();
      } else return;

    if (status === 'working') timerPauseSwitch();
    else startTimer();

    props.setStatus('working');
  };

  const checkChillTimeLeft = () => {
    // Checking against 1 to prevent state change delay from altering counters
    if (chillTime <= 1) {
      if (enableSounds) new Audio(startWorkAlert).play();
      resetChill();
    }
  };

  const checkWorkTimeLeft = () => {
    // Checking against 1 to prevent state change delay from altering counters
    if (workTime <= 1) {
      if (enableSounds) new Audio(startChillAlert).play();
      resetWork();
    }
  };

  // Timer on tab is 1 second late when not paused, will try to fix eventually
  const updateTabTitle = () => {
    let title = `Slowmodoro - ${t('subtitle')}`;

    if (status === 'chilling') title = `${t('statusChill')} - ${secondsToTime(chillTime)}`;
    else if (status === 'working')
      title = `${t('statusShortWork')} - ${secondsToTime(workTime)}`;

    if (paused) title = `${t('paused')} | ${title}`;

    document.title = title;
  };

  useInterval(() => {
    if (!paused) {
      if (status === 'chilling') {
        setChillTime(chillTime - 1);
        if (!reverseMode)
          props.increaseTotalChillingTime();
        else
          props.increaseTotalWorkingTime();
        checkChillTimeLeft();
      }
      if (status === 'working') {
        setWorkTime(workTime - 1);
        if (!reverseMode)
          props.increaseTotalWorkingTime();
        else
          props.increaseTotalChillingTime();
        checkWorkTimeLeft();
      }
    }
    updateTabTitle();
  }, 1000);

  return (
    <>
      <StatusLabel />
      <TimerSwitch status={status} times={times} />
      <Button onClick={handleChillButton} active={status === 'chilling'}>
        {!reverseMode ? t('chillButton') : t('workButton')}
      </Button>
      <Button onClick={handleWorkButton} active={status === 'working'}>
        {!reverseMode ? t('workButton') : t('chillButton')}
      </Button>
    </>
  );
}
