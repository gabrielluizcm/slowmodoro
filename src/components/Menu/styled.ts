import styled, { keyframes, css } from 'styled-components';
import colors from '../../utils/colors';

const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 2em;
  height: 2em;
  margin: 15px;
  font-size: 1.5em;
  cursor: pointer;
  background-color: ${colors.activeButton};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50px;
  z-index: 999;
`;

type MenuDrawerProps = {
  opened: boolean;
  transition: string;
};

const openMenu = keyframes`
  from {
    height: 2em;
  }

  to {
    height: 5.5em;
  }
`;

const StyledMenuDrawer = styled(StyledMenu)`
  z-index: 998;
  justify-content: flex-end;
  height: ${(props: MenuDrawerProps) => (props.opened ? '5.5em' : '50px')};
  animation: ${(props: MenuDrawerProps) =>
    props.transition !== 'none'
      ? props.transition === 'opening'
        ? css`
            ${openMenu} .3s forwards ease-out
          `
        : css`
            ${openMenu} .3s forwards reverse ease-out
          `
      : 'none'};

  svg:first-child {
    margin-bottom: 0.5em;
  }
`;

const Hr = styled.hr`
  width: 100%;
  border-radius: 100% 5px;
  border-color: ${colors.activeButton};
  margin: 10px 0;
`;

const Copyright = styled.span`
  position: absolute;
  bottom: 15px;
`;

export { StyledMenu, StyledMenuDrawer, Hr, Copyright };
