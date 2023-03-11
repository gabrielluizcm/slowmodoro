import React from 'react';

import { FaGithub, FaGithubAlt } from 'react-icons/fa';

import './style.scss';

export function Footer() {
  return (
    <footer>
      <p className="gitLinks">
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
      </p>
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
    </footer>
  );
}
