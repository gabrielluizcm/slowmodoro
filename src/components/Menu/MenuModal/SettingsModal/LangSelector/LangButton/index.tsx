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
      <StyledReactCountryFlag countryCode={props.countryCode} style={{ fontSize: '1.8em' }} />
      {props.active && <Tick />}
    </div>
  )
}
