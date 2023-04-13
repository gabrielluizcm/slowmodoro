import React from 'react';

import { SwitchWrapper, SwitchBall, SwitchSlider } from './styled';

type SwitchProps = {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function Switch(props: SwitchProps) {
  return (
    <SwitchWrapper onClick={props.onClick}>
      <h4>{props.label}</h4>
      <SwitchSlider active={props.active}>
        <SwitchBall active={props.active} />
      </SwitchSlider>
    </SwitchWrapper>
  )
}
