import React, { useState } from 'react';
import { FaBars, FaCog, FaInfo, FaLink } from 'react-icons/fa';

import { MenuModal } from './MenuModal';

import './style.scss';

export function Menu() {
  const [opened, setOpened] = useState(false);
  const [menuClass, setMenuClass] = useState('');
  const [modalInfoOpen, setModalInfoOpen] = useState(false);

  const handleIconClick = () => {
    setMenuClass(opened ? 'closing' : 'opening');
    const newOpened = !opened;
    setOpened(newOpened);
    setTimeout(() => setMenuClass(newOpened ? 'opened' : ''), 300);
  };

  const handleCogClick = () => {
    handleIconClick();
    setModalInfoOpen(true);
  };

  return (
    <>
      <div id="menuIcon">
        <FaBars onClick={handleIconClick} />
      </div>
      <div id="menuBackground" className={menuClass}>
        <></>
        <FaCog onClick={handleCogClick} />
        <FaInfo />
      </div>

      {modalInfoOpen ? (
        <MenuModal closeModal={() => setModalInfoOpen(false)}>
          <>
            <a
              href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
              title="Pomodoro Technique page on Wikipedia"
            >
              <FaLink />
              What is the Pomodoro Technique?
            </a>
            <hr />
            <a
              href="https://www.tiimoapp.com/blog/reverse-pomodoro-technique/"
              title="Reverse Pomodoro Article on TiimoApp"
            >
              <FaLink />
              About the Reverse Pomodoro Technique
            </a>
            <span className="copyright">
              <a
                href="https://www.flaticon.com/free-icons/pomodoro"
                title="Pomodoro Icons on Flaticon"
              >
                <FaLink />
                Pomodoro icon created by Freepik - Flaticon using online editor
              </a>
            </span>
          </>
        </MenuModal>
      ) : (
        false
      )}
    </>
  );
}
