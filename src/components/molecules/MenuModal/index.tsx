import React from 'react';
import { FaMinus } from 'react-icons/fa';

import { BackShadow, Content, CloseModal } from './styled';

type MenuModalProps = {
  closeModal: () => void;
  opened: boolean;
  children: JSX.Element;
  height: number;
};

export default function MenuModal(props: MenuModalProps) {
  return (
    <>
      <BackShadow onClick={props.closeModal} opened={props.opened} />
      <Content opened={props.opened} height={props.height}>
        <CloseModal onClick={props.closeModal}>
          <FaMinus />
        </CloseModal>
        {props.children}
      </Content>
    </>
  );
}