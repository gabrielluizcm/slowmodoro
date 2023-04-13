import React, { useState } from 'react';
import { FaBars, FaCog, FaInfo } from 'react-icons/fa';

import MenuModal from '../../molecules/MenuModal';
import InfoModal from '../../modals/InfoModal';
import SettingsModal from '../../modals/SettingsModal';

import { StyledMenu, StyledMenuDrawer } from './styled';

type MenuProps = {
  chillTime: number;
  shortWorkTime: number;
  longWorkTime: number;
  setChillTime: (minutes: number) => void;
  setShortWorkTime: (minutes: number) => void;
  setLongWorkTime: (minutes: number) => void;
  toggleAutoPlay: () => void;
  toggleEnableSounds: () => void;
  toggleReverseMode: () => void;
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
        height={470}
      >
        <SettingsModal
          chillTime={props.chillTime}
          shortWorkTime={props.shortWorkTime}
          longWorkTime={props.longWorkTime}
          setChillTime={props.setChillTime}
          setShortWorkTime={props.setShortWorkTime}
          setLongWorkTime={props.setLongWorkTime}
          toggleAutoPlay={props.toggleAutoPlay}
          toggleEnableSounds={props.toggleEnableSounds}
          toggleReverseMode={props.toggleReverseMode}
        />
      </MenuModal>
      <MenuModal
        closeModal={() => setModalInfoOpen(false)}
        opened={modalInfoOpen}
        height={300}
      >
        <InfoModal />
      </MenuModal>
    </>
  );
}
