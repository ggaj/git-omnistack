import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Text, TextInput, TouchableOpacity } from 'react-native';
import Modal from '../../compoenents/Modal';
import styles from './styles';

import { createTeamRequest } from '../../store/modules/teams/actions'

export default function NewTeam({visible, onRequestClose}) {
  const dispatch = useDispatch()
  const [newTeam, setNewTeam] = useState('')

  const handleSubmit = () => {
    dispatch(createTeamRequest(newTeam))
    setNewTeam('')
    onRequestClose()
  } 

  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <Text style={styles.label}>NOME</Text>
      <TextInput
        style={styles.input}
        autoFocus
        underlineColorAndroid="transparent"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={newTeam}
        onChangeText={setNewTeam}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>CRIAR TIME</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancel} onPress={onRequestClose}>
        <Text style={styles.cancelText}>CANCELAR</Text>
      </TouchableOpacity>
    </Modal>
  );
}
