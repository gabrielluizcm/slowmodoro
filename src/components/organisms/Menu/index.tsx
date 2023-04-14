import React, { useState, useContext } from 'react';
import { FaBars, FaCog, FaInfo } from 'react-icons/fa';

import {
  StatusContext,
  PausedContext,
  ReversePomodorosContext,
  ReverseModeContext,
  PomodorosContext
} from '../../App';
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
  const status = useContext(StatusContext);
  const paused = useContext(PausedContext);
  const reversePomodoros = useContext(ReversePomodorosContext);
  const reverseMode = useContext(ReverseModeContext);
  const pomodoros = useContext(PomodorosContext);

  const [opened, setOpened] = useState(false);
  const [modalCogOpen, setModalCogOpen] = useState(false);
  const [modalInfoOpen, setModalInfoOpen] = useState(false);

  const handleIconClick = () => {
    const newOpened = !opened;
    setOpened(newOpened);
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
      <StyledMenu
        status={status}
        paused={paused}
        reverseMode={reverseMode}
        longWork={!!(reversePomodoros && reversePomodoros % 4 === 0)}
        longChill={!!(pomodoros && pomodoros % 4 === 0)}
        onClick={handleIconClick}
      >
        <FaBars />
      </StyledMenu>
      <StyledMenuDrawer
        status={status}
        paused={paused}
        reverseMode={reverseMode}
        longWork={!!(reversePomodoros && reversePomodoros % 4 === 0)}
        longChill={!!(pomodoros && pomodoros % 4 === 0)}
        opened={opened}
      >
        <></>
        <FaCog onClick={handleCogClick} />
        <FaInfo onClick={handleInfoClick} />
      </StyledMenuDrawer>
      <MenuModal
        closeModal={() => setModalCogOpen(false)}
        opened={modalCogOpen}
        height={490}
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
