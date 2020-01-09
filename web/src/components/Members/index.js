/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Select from 'react-select';

import { Form } from '@rocketseat/unform';
import Modal from '../Modal';

import {
  getMemberRequest,
  closeMemberModal,
  updateMemberRequest,
} from '~/store/modules/members/actions';
import api from '~/services/api';

import { Button } from '~/styles/components/Button';
import { MemberList } from './styles';

export default function Members() {
  const dispatch = useDispatch();
  const [roles, setRoles] = useState();
  const { members } = useSelector(state => state.members);

  const handleCloseModal = () => {
    dispatch(closeMemberModal());
  };

  useEffect(() => {
    dispatch(getMemberRequest());

    async function loadRoles() {
      const response = await api.get('roles');
      setRoles(response.data);
    }

    loadRoles();
  }, []);

  const handleRolesChange = (id, rolesUser) => {
    dispatch(updateMemberRequest(id, rolesUser));
  };

  return (
    <Modal size="big">
      <h1>Membros</h1>

      <Form>
        <MemberList>
          {members &&
            members.map(member => (
              <li key={member.id}>
                <strong>{member.user.name}</strong>
                <Select
                  isMulti
                  options={roles}
                  value={member.roles}
                  getOptionLabel={role => role.name}
                  getOptionValue={role => role.id}
                  onChange={value => handleRolesChange(member.id, value)}
                />
              </li>
            ))}
        </MemberList>
        <Button onClick={handleCloseModal} color="gray" filled={false}>
          Fechar
        </Button>
      </Form>
    </Modal>
  );
}
