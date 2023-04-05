import React from 'react';

import { FaGithub, FaGithubAlt } from 'react-icons/fa';

import { StyledFooter, GitLinks } from './styled';

export function Footer() {
  return (
    <StyledFooter>
      <GitLinks>
        <a
          href="https://github.com/gabrielluizcm"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt />
        </a>
        <a
          href="https://github.com/gabrielluizcm/reversePomodoro"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </GitLinks>
      <p>
        Made with joy by{' '}
        <a
          href="http://gabrielluizcm.github.io"
          target="_blank"
          rel="noreferrer"
        >
          Gabriel Luiz
        </a>
      </p>
    </StyledFooter>
  );
}
