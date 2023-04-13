import styled from 'styled-components';
import colors from '../../../utils/colors';

const InputWrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  & > svg {
    color: ${colors.blueishGreen};
    cursor: pointer;
  }
`;

const InputLabel = styled.div`
  width: 280px;
  font-weight: bold;
  font-size: 1.1em;
`;

export { InputWrapper, InputLabel };
