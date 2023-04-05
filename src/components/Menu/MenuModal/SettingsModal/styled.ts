import styled from 'styled-components';
import colors from '../../../../utils/colors';

const InputWrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  svg {
    color: ${colors.glassBorder};
    cursor: pointer;
  }
`;

const InputLabel = styled.div`
  width: 280px;
  font-weight: bold;
  font-size: 1.1em;
`;

const NumberInputWrapper = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h4 {
    font-size: 10px;
  }

  svg {
    color: ${colors.blackText};
    transform: scale(0.8);
  }
`;

const NumberInputDisplay = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blackText};
  background: ${colors.darkenedRegularText};
  pointer-events: none;
`;

const NumberInputControl = styled.button`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blackText};
  cursor: pointer;
  border: none;
`;

const NumberInputIncrease = styled(NumberInputControl)`
  background: ${colors.shortWorkBackground};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const NumberInputDecrease = styled(NumberInputControl)`
  background: ${colors.longWorkBackground};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export {
  InputWrapper,
  InputLabel,
  NumberInputWrapper,
  NumberInputDisplay,
  NumberInputIncrease,
  NumberInputDecrease,
};
