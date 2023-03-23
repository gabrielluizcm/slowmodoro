import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import { MenuModal } from './MenuModal';

import './style.scss';

export function Menu() {
  const [opened, setOpened] = useState(false);
  const [menuClass, setMenuClass] = useState('');

  const handleIconClick = () => {
    setMenuClass(opened ? 'closing' : 'opening');
    const newOpened = !opened;
    setOpened(newOpened);
    setTimeout(() => setMenuClass(newOpened ? 'opened' : ''), 300);
  };

  return (
    <>
      <div id="menuBackground" className={menuClass}>
        <FaBars onClick={handleIconClick} />
      </div>

      {/* {opened ? <MenuModal closeModal={() => setOpened(false)} /> : false} */}
    </>
  );
}
