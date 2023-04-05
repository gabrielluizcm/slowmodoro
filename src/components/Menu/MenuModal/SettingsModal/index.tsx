import React from 'react';
import { FaCog, FaExchangeAlt } from 'react-icons/fa';

import { InputWrapper, InputLabel, StyledInput } from './styled';
import { ModalContent } from '../styled';

type SettingsModalProps = {
  chillTime: number;
  shortWorkTime: number;
  longWorkTime: number;
  setChillTime: (minutes: number) => void;
  setShortWorkTime: (minutes: number) => void;
  setLongWorkTime: (minutes: number) => void;
};

export default function SettingsModal(props: SettingsModalProps) {
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
        <StyledInput
          type="number"
          min={0}
          max={59}
          value={props.chillTime}
          onChange={(e) => props.setChillTime(parseInt(e.target.value))}
        />
        <FaExchangeAlt onClick={handleSwapChillShort} />
        <StyledInput
          type="number"
          min={0}
          max={59}
          value={props.shortWorkTime}
          onChange={(e) => props.setShortWorkTime(parseInt(e.target.value))}
        />
        <FaExchangeAlt onClick={handleSwapShortLong} />
        <StyledInput
          type="number"
          min={0}
          max={59}
          value={props.longWorkTime}
          onChange={(e) => props.setLongWorkTime(parseInt(e.target.value))}
        />
      </InputWrapper>
    </ModalContent>
  );
}
