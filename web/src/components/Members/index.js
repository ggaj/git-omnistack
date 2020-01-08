import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal';

import { closeMemberModal } from '~/store/modules/members/actions';
import { Button } from '~/styles/components/Button';
import { Container } from './styles';

export default function Members() {
  const dispatch = useDispatch();
  const { memberModalOpen } = useSelector(state => state.members);
  // const handleOpenModal = () => {
  //   dispatch(openMemberModal());
  // };

  const handleCloseModal = () => {
    dispatch(closeMemberModal());
  };

  return (
    <Container>
      {memberModalOpen && (
        <Modal>
          <Button onClick={handleCloseModal}>Fechar</Button>
        </Modal>
      )}
    </Container>
  );
}
