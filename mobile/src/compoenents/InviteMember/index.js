import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Text, TextInput, TouchableOpacity } from 'react-native';
import Modal from '../../compoenents/Modal';
import styles from './styles';

import { inviteMemberRequest } from '../../store/modules/members/actions'

export default function InviteMember({visible, onRequestClose}) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    dispatch(inviteMemberRequest(email))
    setEmail('')
    onRequestClose()
  } 

  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <Text style={styles.label}>E-MAIL</Text>
      <TextInput
        style={styles.input}
        autoFocus
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>CONVIDAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancel} onPress={onRequestClose}>
        <Text style={styles.cancelText}>CANCELAR</Text>
      </TouchableOpacity>
    </Modal>
  );
}
