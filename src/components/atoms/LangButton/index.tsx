import React from 'react';

import { StyledReactCountryFlag, Tick } from './styled';

type LangButtonProps = {
  countryCode: string;
  active: boolean;
  onClick: () => void;
}

export default function LangButton(props: LangButtonProps) {
  return (
    <div onClick={props.onClick}>
      <StyledReactCountryFlag countryCode={props.countryCode} svg />
      {props.active && <Tick />}
    </div>
  )
}
