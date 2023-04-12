import styled from 'styled-components';
import colors from '../../utils/colors';

const StyledButton = styled.button`
  font-size: 1.5em;
  width: 150px;
  border-radius: 10px;
  box-shadow: none;
  border: none;
  background-color: ${(props: { active: boolean; onClick?: () => void }) =>
    props.active ? colors.darkenedActiveButton : colors.darkenedRegularText};
  margin: 0 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  svg {
    fill: ${colors.regularBackground};
  }
`;

type ButtonFaceProps = {
  active: boolean;
  paused: boolean;
};

const ButtonFace = styled.span`
  display: inline-block;
  width: 150px;
  height: 68.3px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props: ButtonFaceProps) =>
    props.active ? colors.activeButton : colors.regularText};
  color: ${(props: ButtonFaceProps) =>
    props.active ? colors.regularText : colors.regularBackground};
  transform: ${(props: ButtonFaceProps) =>
    props.active && !props.paused ? 'translateY(-5px)' : 'translateY(-10px)'};
  transition: all 0.3s ease-in-out;

  svg {
    fill: ${(props: ButtonFaceProps) =>
    props.active ? colors.regularText : colors.regularBackground};
  }
`;

export { StyledButton, ButtonFace };
