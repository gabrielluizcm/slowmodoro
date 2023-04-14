import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCog, FaExchangeAlt } from 'react-icons/fa';

import {
  StatusContext,
  AutoPlayContext,
  EnableSoundsContext,
  ReverseModeContext
} from '../../App';

import NumberInput from '../../atoms/NumberInput';
import Switch from '../../atoms/Switch';
import LangSelector from '../../molecules/LangSelector';

import { ModalContent, Hr } from '../../molecules/MenuModal/styled';
import { InputWrapper, InputLabel } from './styled';
import { Exception } from 'sass';
import { ExecException } from 'child_process';

type SettingsModalProps = {
  chillTime: number;
  shortWorkTime: number;
  longWorkTime: number;
  setChillTime: (minutes: number) => void;
  setShortWorkTime: (minutes: number) => void;
  setLongWorkTime: (minutes: number) => void;
  toggleAutoPlay: () => void;
  toggleEnableSounds: () => void;
  toggleReverseMode: () => void;
};

type HandleControlProps = {
  minutes: number;
  callback: (minutes: number) => void;
};

export default function SettingsModal(props: SettingsModalProps) {
  const { t } = useTranslation();
  const status = useContext(StatusContext);
  const autoPlay = useContext(AutoPlayContext);
  const enableSounds = useContext(EnableSoundsContext);
  const reverseMode = useContext(ReverseModeContext);

  const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null);
  const [wakeLockMode, setWakeLockMode] = useState(false);

  useEffect(() => {
    return () => {
      if (wakeLock) {
        wakeLock.release().then(() => {
          console.log('Wake Lock was successfully released');
        });
      }
    };
  }, []);

  const handleIncrease = (handleProps: HandleControlProps) => {
    if (handleProps.minutes === 59) return;
    handleProps.callback(handleProps.minutes + 1);
  };

  const handleDecrease = (handleProps: HandleControlProps) => {
    if (handleProps.minutes === 1) return;
    handleProps.callback(handleProps.minutes - 1);
  };

  const handleSwapChillShort = () => {
    const temp = props.shortWorkTime;
    props.setShortWorkTime(props.chillTime);
    props.setChillTime(temp);
  };

  const handleSwapShortLong = () => {
    const temp = props.longWorkTime;
    props.setLongWorkTime(props.shortWorkTime);
    props.setShortWorkTime(temp);
  };

  const handleToggleMode = () => {
    const confirmText = t('confirmToggleReverseMode');
    if (status !== 'idle' && !confirm(confirmText))
      return;

    props.toggleReverseMode();
  }

  const handleToggleWakeMode = () => {
    const requestWakeLock = async () => {
      try {
        const wakeLock = await navigator.wakeLock.request('screen');
        setWakeLock(wakeLock);
      } catch (err: any) {
        console.error(`${err.name}, ${err.message}`);
      }
    }

    if (wakeLock) {
      return wakeLock.release().then(() => {
        setWakeLockMode(false);
        setWakeLock(null);
      })
    }

    if (navigator.wakeLock && 'request' in navigator.wakeLock) {
      requestWakeLock();
      setWakeLockMode(true);
    }
    else
      console.error(`Not supported`);
  }

  return (
    <ModalContent>
      <h2>
        {t('settingsLabel')} <FaCog />
      </h2>
      <InputLabel>{t('timersSettingLabel')}</InputLabel>
      <InputWrapper>
        <NumberInput
          label={!reverseMode
            ? t('chillingTimerSettingLabel')
            : t('workingTimerSettingLabel')
          }
          value={props.chillTime}
          onIncreaseClick={() =>
            handleIncrease({
              minutes: props.chillTime,
              callback: (minutes) => props.setChillTime(minutes),
            })
          }
          onDecreaseClick={() =>
            handleDecrease({
              minutes: props.chillTime,
              callback: (minutes) => props.setChillTime(minutes),
            })
          }
        />
        <FaExchangeAlt onClick={handleSwapChillShort} />
        <NumberInput
          label={!reverseMode
            ? t('shortWorkTimerSettingLabel')
            : t('shortChillTimerSettingLabel')
          }
          value={props.shortWorkTime}
          onIncreaseClick={() =>
            handleIncrease({
              minutes: props.shortWorkTime,
              callback: (minutes) => props.setShortWorkTime(minutes),
            })
          }
          onDecreaseClick={() =>
            handleDecrease({
              minutes: props.shortWorkTime,
              callback: (minutes) => props.setShortWorkTime(minutes),
            })
          }
        />
        <FaExchangeAlt onClick={handleSwapShortLong} />
        <NumberInput
          label={!reverseMode
            ? t('longWorkTimerSettingLabel')
            : t('longChillTimerSettingLabel')
          }
          value={props.longWorkTime}
          onIncreaseClick={() =>
            handleIncrease({
              minutes: props.longWorkTime,
              callback: (minutes) => props.setLongWorkTime(minutes),
            })
          }
          onDecreaseClick={() =>
            handleDecrease({
              minutes: props.longWorkTime,
              callback: (minutes) => props.setLongWorkTime(minutes),
            })
          }
        />
      </InputWrapper>
      <Hr />
      <InputLabel>{t('langSettingLabel')}</InputLabel>
      <InputWrapper>
        <LangSelector />
      </InputWrapper>
      <Hr />
      <InputLabel>Misc</InputLabel>
      <Switch label={t('autoplayLabel')} active={autoPlay} onClick={props.toggleAutoPlay} />
      <Switch label={t('silentModeLabel')} active={enableSounds} onClick={props.toggleEnableSounds} />
      <Switch label={t('reverseModeLabel')} active={reverseMode} onClick={handleToggleMode} />
      <Switch label={t('wakeModeLabel')} active={wakeLockMode} onClick={handleToggleWakeMode} />
    </ModalContent>
  );
}
