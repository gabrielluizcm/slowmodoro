import React, { useState } from 'react';
import { FaBars, FaCog, FaInfo } from 'react-icons/fa';

import { MenuModal } from './MenuModal';
import InfoModal from './MenuModal/InfoModal';
import SettingsModal from './MenuModal/SettingsModal';

import { StyledMenu, StyledMenuDrawer } from './styled';

type MenuProps = {
  chillTime: number;
  shortWorkTime: number;
  longWorkTime: number;
  setChillTime: (minutes: number) => void;
  setShortWorkTime: (minutes: number) => void;
  setLongWorkTime: (minutes: number) => void;
};

export function Menu(props: MenuProps) {
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
        <SettingsModal
          chillTime={props.chillTime}
          shortWorkTime={props.shortWorkTime}
          longWorkTime={props.longWorkTime}
          setChillTime={props.setChillTime}
          setShortWorkTime={props.setShortWorkTime}
          setLongWorkTime={props.setLongWorkTime}
        />
      </MenuModal>
      <MenuModal
        closeModal={() => setModalInfoOpen(false)}
        opened={modalInfoOpen}
      >
        <InfoModal />
      </MenuModal>
    </>
  );
}
