import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import NewTeam from '../NewTeam'

import { getTeamRequest, selectTeam } from '../../store/modules/teams/actions'

import styles from './styles';

export default function TeamSwitcher() {
  const [modalOpen, setModalOpen] = useState(false)
  const { teams } = useSelector(state => state.teams )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTeamRequest())
  }, [])

  const handleSelectTeam = (team) => {
    dispatch(selectTeam(team))
  }

  const toggleModal = (value) => {
    setModalOpen(value)
  }

  return (
    <View style={styles.container}>
      { teams.map(team => (
        <TouchableOpacity key={team.id} style={styles.teamContainer} onPress={() => handleSelectTeam(team)}>
          <Image 
            style={styles.teamAvatar} 
            source={{uri: `https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}} />
        </TouchableOpacity>
      )) }

      <TouchableOpacity style={styles.newTeam} onPress={()=> toggleModal(true)}>
        <Icon name="add" size={24} color="#999"/>
      </TouchableOpacity>

      <NewTeam visible={modalOpen} onRequestClose={() => toggleModal(false)} />
    </View>
  );
}
