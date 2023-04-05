import styled from 'styled-components';
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

const StyledMenuDrawer = styled(StyledMenu)`
  z-index: 998;
  justify-content: flex-end;
  transition: height 0.3s ease-in-out;
  height: ${(props: MenuDrawerProps) => (props.opened ? '5.5em' : '50px')};

  svg:first-child {
    margin-bottom: 0.5em;
  }
`;

const Hr = styled.hr`
  width: 500px;
  border-radius: 100% 5px;
  border-color: ${colors.activeButton};
  margin: 10px 0;
`;

export { StyledMenu, StyledMenuDrawer, Hr };
