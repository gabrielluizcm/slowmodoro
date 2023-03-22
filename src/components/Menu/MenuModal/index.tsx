import React from 'react';
import { FaMinus } from 'react-icons/fa';

import './style.scss';

type MenuModalProps = {
  closeModal: () => void;
};

export function MenuModal(props: MenuModalProps) {
  return (
    <>
      <div id="backShadow" onClick={props.closeModal} />
      <div id="content">
        <div id="closeModal" onClick={props.closeModal}>
          <FaMinus />
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
        veritatis? Molestias, at accusantium dolor unde repellat laboriosam
        reiciendis necessitatibus ad sint sequi quos nulla, excepturi, minus
        quis quo doloremque provident!
      </div>
    </>
  );
}
