import React from 'react';
import { FaLink, FaInfoCircle } from 'react-icons/fa';

import { Copyright, StyledHeader } from './styled';
import { ModalContent } from '../styled';
import { Hr } from '../../styled';

export default function InfoModal() {
  return (
    <ModalContent>
      <StyledHeader>
        Info <FaInfoCircle />
      </StyledHeader>
      <a
        href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
        title="Pomodoro Technique page on Wikipedia"
      >
        <FaLink />
        What is the Pomodoro Technique?
      </a>
      <Hr />
      <a
        href="https://www.tiimoapp.com/blog/reverse-pomodoro-technique/"
        title="Reverse Pomodoro Article on TiimoApp"
      >
        <FaLink />
        About the Reverse Pomodoro Technique
      </a>
      <Copyright>
        <a
          href="https://www.flaticon.com/free-icons/pomodoro"
          title="Pomodoro Icons on Flaticon"
        >
          <FaLink />
          Pomodoro icon created by Freepik - Flaticon using online editor
        </a>
      </Copyright>
    </ModalContent>
  );
}
