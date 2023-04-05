import React from 'react';
import { FaCog, FaExchangeAlt, FaPlus, FaMinus } from 'react-icons/fa';

import {
  InputWrapper,
  InputLabel,
  NumberInputWrapper,
  NumberInputDisplay,
  NumberInputIncrease,
  NumberInputDecrease,
} from './styled';
import { ModalContent } from '../styled';

type SettingsModalProps = {
  chillTime: number;
  shortWorkTime: number;
  longWorkTime: number;
  setChillTime: (minutes: number) => void;
  setShortWorkTime: (minutes: number) => void;
  setLongWorkTime: (minutes: number) => void;
};

type NumberInputProps = {
  label: string;
  value: number;
  onIncreaseClick: () => void;
  onDecreaseClick: () => void;
};

type HandleControlProps = {
  minutes: number;
  callback: (minutes: number) => void;
};

function NumberInput(props: NumberInputProps) {
  return (
    <NumberInputWrapper>
      <h4>{props.label}</h4>
      <NumberInputIncrease onClick={props.onIncreaseClick}>
        <FaPlus />
      </NumberInputIncrease>
      <NumberInputDisplay>{props.value}</NumberInputDisplay>
      <NumberInputDecrease onClick={props.onDecreaseClick}>
        <FaMinus />
      </NumberInputDecrease>
    </NumberInputWrapper>
  );
}

export default function SettingsModal(props: SettingsModalProps) {
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
        Settings <FaCog />
      </h2>
      <InputLabel>Timers (minutes)</InputLabel>
      <InputWrapper>
        <NumberInput
          label="Chilling"
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
          label="Short Work"
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
          label="LongWork"
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
    </ModalContent>
  );
}
