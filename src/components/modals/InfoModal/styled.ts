import styled from 'styled-components';

const StyledHeader = styled.h2`
  align-items: center;
  justify-content: center;
  text-align: center;
  display: inherit;

  svg {
    margin-left: 10px;
  }
`;

const Copyright = styled.span`
  position: absolute;
  bottom: 15px;
  text-align: center;
`;

export { Copyright, StyledHeader };
