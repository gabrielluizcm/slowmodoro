import React, { useState } from 'react';
import { FaBars, FaCog, FaInfo, FaLink } from 'react-icons/fa';

import { MenuModal } from './MenuModal';

import { StyledMenu, StyledMenuDrawer, Hr, Copyright } from './styled';

export function Menu() {
  const [opened, setOpened] = useState(false);
  const [transition, setTransition] = useState('none');
  const [modalCogOpen, setModalCogOpen] = useState(false);
  const [modalInfoOpen, setModalInfoOpen] = useState(false);

  const handleIconClick = () => {
    setTransition(opened ? 'closing' : 'opening');
    const newOpened = !opened;
    setOpened(newOpened);
    setTimeout(() => setTransition('none'), 300);
  };

  const handleCogClick = () => {
    handleIconClick();
    setModalCogOpen(true);
  };

  const handleInfoClick = () => {
    handleIconClick();
    setModalInfoOpen(true);
  };

  return (
    <>
      <StyledMenu onClick={handleIconClick}>
        <FaBars />
      </StyledMenu>
      <StyledMenuDrawer opened={opened} transition={transition}>
        <></>
        <FaCog onClick={handleCogClick} />
        <FaInfo onClick={handleInfoClick} />
      </StyledMenuDrawer>
      <MenuModal
        closeModal={() => setModalCogOpen(false)}
        opened={modalCogOpen}
      >
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          aperiam ipsum animi perspiciatis asperiores dignissimos error, neque
          esse laudantium sequi voluptate itaque dolorem vitae praesentium
          reiciendis. Quos eligendi illo repudiandae.
        </>
      </MenuModal>
      <MenuModal
        closeModal={() => setModalInfoOpen(false)}
        opened={modalInfoOpen}
      >
        <>
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
        </>
      </MenuModal>
    </>
  );
}
