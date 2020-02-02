import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Text, TextInput, TouchableOpacity } from 'react-native';
import Modal from '../../compoenents/Modal';
import styles from './styles';

import { createProjectRequest } from '../../store/modules/projects/actions'

export default function NewProject({visible, onRequestClose}) {
  const dispatch = useDispatch()
  const [newProject, setNewProject] = useState('')

  const handleSubmit = () => {
    dispatch(createProjectRequest(newProject))
    setNewProject('')
    onRequestClose()
  } 

  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <Text style={styles.label}>TÍTULO</Text>
      <TextInput
        style={styles.input}
        autoFocus
        underlineColorAndroid="transparent"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={newProject}
        onChangeText={setNewProject}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>CRIAR PROJETO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancel} onPress={onRequestClose}>
        <Text style={styles.cancelText}>CANCELAR</Text>
      </TouchableOpacity>
    </Modal>
  );
}
