import styled from 'styled-components';
import colors from '../../../utils/colors';

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    align-items: center;
    justify-content: center;
    text-align: center;
    display: inherit;
    margin-bottom: 20px;

    svg {
      margin-left: 10px;
    }
  }

  a,
  a:visited {
    color: ${colors.brightSilver};
  }
`;

type BackShadowProps = {
  onClick: () => void;
  opened: boolean;
};

const BackShadow = styled.div<BackShadowProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${colors.transparentBlack};
  z-index: 1000;
  transition: all 0.1s ease-in-out;
  opacity: ${(props) => (props.opened ? 1 : 0)};
  transform: ${(props) =>
    props.opened ? 'translateY(0)' : 'translateY(+100vh)'};
`;

type ContentProps = {
  opened: boolean;
  height?: number;
};

const Content = styled.div<ContentProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: ${(props) => `${props.height}px`};
  background: ${colors.electricBlue};
  border-top: 1px solid ${colors.deepBlueishPurple};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 10px 30px;
  flex-direction: column;
  align-items: left;
  z-index: 1001;
  display: inherit;
  transform: ${(props) =>
    props.opened ? 'translateY(0)' : `translateY(+${props.height}px)`};
  transition: transform 0.3s ease-in-out;

  a {
    text-decoration: none;

    &:hover {
      color: ${colors.deepBlueishPurple};
      text-decoration: underline;

      svg {
        fill: ${colors.deepBlueishPurple};
      }
    }

    svg {
      font-size: 12px;
      margin-right: 5px;
    }
  }
`;

const CloseModal = styled.div`
  cursor: pointer;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const Hr = styled.hr`
  width: 350px;
  border-radius: 100% 5px;
  border-color: ${colors.deepBlueishPurple};
  margin: 10px 0;
`;

export { ModalContent, BackShadow, Content, CloseModal, Hr };
