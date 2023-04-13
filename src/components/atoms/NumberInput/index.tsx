import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

import {
  NumberInputWrapper,
  NumberInputIncrease,
  NumberInputDisplay,
  NumberInputDecrease,
} from './styled';

type NumberInputProps = {
  label: string;
  value: number;
  onIncreaseClick: () => void;
  onDecreaseClick: () => void;
};

export default function NumberInput(props: NumberInputProps) {
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
