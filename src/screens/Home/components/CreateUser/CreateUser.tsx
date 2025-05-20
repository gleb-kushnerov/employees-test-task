'use client';

import { useState } from 'react';
import { Button, Modal } from '@/components';
import { CreateUserModal } from './components';

export const CreateUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = () => {
    setIsModalOpen(true);
  };

  const closeHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={clickHandler}>Create</Button>
      <Modal isOpen={isModalOpen} onClose={closeHandler}>
        <CreateUserModal onClose={closeHandler} />
      </Modal>
    </>
  );
};
