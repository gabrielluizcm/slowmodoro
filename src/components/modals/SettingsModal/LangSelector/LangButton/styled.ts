import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';
import { TiTick } from 'react-icons/ti';

import colors from '../../../../../utils/colors';

const StyledReactCountryFlag = styled(ReactCountryFlag)`
  background-color: ${colors.deepBlueishPurple};
  padding: 10px;
  border-radius: 50%;
  margin-right: 1em;
  cursor: pointer;
`;

const Tick = styled(TiTick)`
position: absolute;
transform: translate(-45px, 35px);
background-color: ${colors.blueishGreen};
border-radius: 50%;
font-size: 1.1em;
`;

export { StyledReactCountryFlag, Tick };
