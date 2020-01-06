import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTeamRequest, selectTeam } from '~/store/modules/teams/actions';
import { Container, TeamList, Team } from './styles';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const { teams } = useSelector(state => state.teams);

  useEffect(() => {
    dispatch(getTeamRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTeamSelected = team => {
    dispatch(selectTeam(team));
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
      </TeamList>
    </Container>
  );
}
