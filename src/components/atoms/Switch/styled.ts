import styled from 'styled-components';

import colors from '../../../utils/colors';

const SwitchWrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  margin-top: 5px;

  h4 {
    font-size: 12px;
  }
`;

type SwitchProps = {
  active: boolean;
};

const SwitchSlider = styled.div<SwitchProps>`
  cursor: pointer;
  width: 40px;
  height: 25px;
  background-color: ${(props) => props.active ? colors.orangeishPink : colors.flatGrey};
  border: 1px solid ${colors.electricBlue};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 2px;
  transition: background-color 0.3s ease-out;
`;

const SwitchBall = styled.div<SwitchProps>`
  background-color: ${colors.brightSilver};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  position: relative;
  left: ${(props) => props.active ? '14px' : 0};
  transition: left 0.3s ease-in-out;
`;

export { SwitchWrapper, SwitchSlider, SwitchBall };
