import styled from 'styled-components';
import colors from '../../../utils/colors';

import { Status } from '../../App/index';

interface StyledMenuProps {
  status: Status;
  paused: boolean;
  reverseMode: boolean;
  longWork: boolean;
  longChill: boolean;
};

const StyledMenu = styled.div<StyledMenuProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 2em;
  height: 2em;
  margin: 15px;
  font-size: 1.5em;
  cursor: pointer;
  background-color: ${(props) => {
    if (props.paused || props.status === 'idle')
      return colors.deepBlueishPurple;

    if (!props.reverseMode) {
      if (props.status === 'chilling') return colors.deepPurple;
      else
        if (props.longWork) return colors.goldenYellow;
        else return colors.alizarinCrimson;
    }

    if (props.status === 'chilling') return colors.alizarinCrimson;
    else
      if (props.longChill) return colors.green;
      else return colors.deepPurple;
  }};;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50px;
  z-index: 999;
  transition: background-color 0.3s ease-in-out;
`;

interface StyledMenuDrawerProps extends StyledMenuProps {
  opened: boolean;
}

const StyledMenuDrawer = styled(StyledMenu) <StyledMenuDrawerProps>`
  z-index: 998;
  justify-content: flex-end;
  transition: all 0.3s ease-in-out;
  height: ${(props) => (props.opened ? '5.5em' : '50px')};

  svg:first-child {
    margin-bottom: 0.5em;
  }
`;

export { StyledMenu, StyledMenuDrawer };
