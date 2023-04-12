import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCog, FaExchangeAlt } from 'react-icons/fa';

import { Hr } from '../../styled';

import NumberInput from './NumberInput';
import LangSelector from './LangSelector';

import { InputWrapper, InputLabel } from './styled';
import { ModalContent } from '../styled';

type SettingsModalProps = {
  chillTime: number;
  shortWorkTime: number;
  longWorkTime: number;
  setChillTime: (minutes: number) => void;
  setShortWorkTime: (minutes: number) => void;
  setLongWorkTime: (minutes: number) => void;
};

type HandleControlProps = {
  minutes: number;
  callback: (minutes: number) => void;
};

export default function SettingsModal(props: SettingsModalProps) {
  const { t } = useTranslation();

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

  return (
    <ModalContent>
      <h2>
        {t('settingsLabel')} <FaCog />
      </h2>
      <InputLabel>{t('timersSettingLabel')}</InputLabel>
      <InputWrapper>
        <NumberInput
          label={t('chillingTimerSettingLabel')}
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
          label={t('shortWorkTimerSettingLabel')}
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
          label={t('longWorkTimerSettingLabel')}
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
    </ModalContent>
  );
}
