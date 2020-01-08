import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import {
  getTeamRequest,
  selectTeam,
  openTeamModal,
  closeTeamModal,
  createTeamRequest,
} from '~/store/modules/teams/actions';

import { signOut } from '~/store/modules/auth/actions';

import { Button } from '~/styles/components/Button';
import { Container, TeamList, Team, NewTeam, Logout } from './styles';
import Modal from '../Modal';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const { teams, teamModalOpen } = useSelector(state => state.teams);

  useEffect(() => {
    dispatch(getTeamRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTeamSelected = team => {
    dispatch(selectTeam(team));
  };

  const handleOpenTeamModal = () => {
    dispatch(openTeamModal());
  };

  const handleCloseTeamModal = () => {
    dispatch(closeTeamModal());
  };

  const handleSubmitTeam = ({ name }) => {
    dispatch(createTeamRequest(name));
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <TeamList>
        {teams &&
          teams.map(team => (
            <Team key={team.id} onClick={() => handleTeamSelected(team)}>
              <img
                alt={team.name}
                src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
              />
            </Team>
          ))}
        <NewTeam onClick={handleOpenTeamModal}>NOVO</NewTeam>

        {teamModalOpen && (
          <Modal>
            <h1>Criar time</h1>

            <Form onSubmit={handleSubmitTeam}>
              <Input name="name" label="Nome" />
              <Button size="big" type="submit">
                Salvar
              </Button>
              <Button size="big" color="gray" onClick={handleCloseTeamModal}>
                Cancelar
              </Button>
            </Form>
          </Modal>
        )}
      </TeamList>

      <Logout onClick={handleLogout}>SAIR</Logout>
    </Container>
  );
}
