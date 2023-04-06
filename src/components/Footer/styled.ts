import styled from 'styled-components';
import colors from '../../utils/colors';

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  a {
    color: ${colors.activeButton};
    text-decoration: none;
  }
`;

const GitLinks = styled.p`
  font-size: 2em;

  svg {
    color: ${colors.regularText};
  }

  a {
    margin: 0 10px;
  }
`;

export { StyledFooter, GitLinks };
