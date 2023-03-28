import React from 'react';
import { FaMinus } from 'react-icons/fa';

import './style.scss';

type MenuModalProps = {
  children: JSX.Element;
  closeModal: () => void;
};

export function MenuModal(props: MenuModalProps) {
  return (
    <>
      <div className="backShadow" onClick={props.closeModal} />
      <div className="content">
        <div className="closeModal" onClick={props.closeModal}>
          <FaMinus />
        </div>
        {props.children}
      </div>
    </>
  );
}
