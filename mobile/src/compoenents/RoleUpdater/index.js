import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { View, Text, TouchableOpacity, Switch } from 'react-native';

import { updateMemberRequest } from "../../store/modules/members/actions";

import Modal from '../Modal'
import api from "../../services/api";

import styles from './styles';
import colors from '../../styles/colors';

export default function RoleUpdater({visible, onRequestClose, member}) {
  const [roles, setRoles] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    async function loadRoles() {
      const response = await api.get('roles')
      setRoles(response.data)
    }
    loadRoles();
  }, [])

  const handleRoleChange = (value, role) => {
    const roles = value
      ? [...member.roles, role]
      : member.roles.filter(memberRole => memberRole.id !== role.id )

    dispatch(updateMemberRequest(member.id, roles))  
    onRequestClose();
  }

  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <View>
        {roles && roles.map(role => (
          <View key={role.id} style={styles.roleContainer}>
            <Text style={styles.roleText}>{role.name}</Text>
            <Switch 
              trackColor={{ true: colors.primary }}
              value={member.roles && !!member.roles.find(memberRole => memberRole.id === role.id)}
              onValueChange={value => handleRoleChange(value, role)}  
            />
          </View>
        ))}
      </View>

      <TouchableOpacity onPress={onRequestClose} style={styles.cancel}>
          <Text style={styles.cancelText}>VOLTAR</Text>
      </TouchableOpacity>
    </Modal>
  );
}
