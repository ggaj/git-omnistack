import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import Modal from '../Modal';
import Can from '../Can';
import Members from '../Members';

import {
  getProjectRequest,
  openProjectModal,
  closeProjectModal,
  createProjectRequest,
} from '~/store/modules/projects/actions';
import { openMemberModal } from '~/store/modules/members/actions';

import { Button } from '~/styles/components/Button';
import { Container, Project } from './styles';

export default function Projects() {
  const dispatch = useDispatch();
  const { active } = useSelector(state => state.teams);
  const { projects, projectModalOpen } = useSelector(state => state.projects);
  const { memberModalOpen } = useSelector(state => state.members);

  useEffect(() => {
    if (active) {
      dispatch(getProjectRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenProjectModal = () => {
    dispatch(openProjectModal());
  };

  const handleCloseProjectModal = () => {
    dispatch(closeProjectModal());
  };

  const handleSubmitProject = ({ title }) => {
    dispatch(createProjectRequest(title));
  };

  const handleMembers = () => {
    dispatch(openMemberModal());
  };

  if (!active) return null;

  return (
    <Container>
      <header>
        <h1>{active.name}</h1>
        <div>
          <Can checkPermission="projects_create">
            <Button onClick={handleOpenProjectModal}>+ Novo</Button>
          </Can>
          <Button onClick={handleMembers}>Membros</Button>
        </div>
      </header>
      {projects &&
        projects.map(project => (
          <Project key={project.id}>
            <p>{project.title}</p>
          </Project>
        ))}

      {projectModalOpen && (
        <Modal>
          <h1>Criar projeto</h1>

          <Form onSubmit={handleSubmitProject}>
            <Input name="title" label="Nome" />
            <Button size="big" type="submit">
              Salvar
            </Button>
            <Button color="gray" onClick={handleCloseProjectModal}>
              Cancelar
            </Button>
          </Form>
        </Modal>
      )}
      {memberModalOpen && <Members />}
    </Container>
  );
}
