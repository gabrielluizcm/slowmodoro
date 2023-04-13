import styled from 'styled-components';
import colors from '../../utils/colors';

import { Status } from './index';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  color: ${colors.brightSilver};
  height: 100%;
  width: 100%;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;

type BackgroundProps = {
  status: Status;
  paused: boolean;
  longWork: boolean;
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.3s ease-in-out;
  background-color: ${(props: BackgroundProps) => {
    const { status, paused, longWork } = props;
    if (paused) return colors.electricBlue;
    if (status === 'chilling') return colors.electricBlue;
    else if (status === 'working')
      if (longWork) return colors.alizarinCrimson;
      else return colors.goldenYellow;
    else return colors.electricBlue;
  }};
`;

const PomodoroContainer = styled.div`
  padding: 5px 10px;
  background-color: ${colors.transparentBlueishGreen};
  border-radius: 15px;
  box-shadow: 0 4px 30px #00000001;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid ${colors.blueishGreen};
`;

export { Wrapper, Background, PomodoroContainer };
