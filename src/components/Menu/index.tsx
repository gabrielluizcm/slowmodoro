import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import { MenuModal } from './MenuModal';

import './style.scss';

export function Menu() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div id="menuButton" onClick={() => setOpened(!opened)}>
        <FaBars />
      </div>

      {opened ? <MenuModal closeModal={() => setOpened(false)} /> : false}
    </>
  );
}
