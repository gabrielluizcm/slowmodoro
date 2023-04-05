import styled from 'styled-components';
import colors from '../../../../utils/colors';

const InputWrapper = styled.div`
  width: 300px;
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
  width: 300px;
  font-weight: bold;
  font-size: 1.1em;
`;

const StyledInput = styled.input`
  width: 80px;
  font-size: 1.1em;
  color: ${colors.blackText};
  padding: 5px;
  border: ${colors.blackText} 1px solid;
  border-radius: 5px;
  background: ${colors.darkenedRegularText};
`;

export { InputWrapper, InputLabel, StyledInput };
