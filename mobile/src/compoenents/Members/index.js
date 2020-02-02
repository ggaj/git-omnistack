import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import InviteMember from "../InviteMember";
import RoleUpdater from "../RoleUpdater";

import { getMemberRequest } from '../../store/modules/members/actions'

import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';

export default function Members() {
  const [modalOpen, setModalOpen] = useState(false)
  const [roleModalOpen, setRoleModalOpen] = useState(false)
  const [member, setMember] = useState({})
  const { members } = useSelector(state => state.members)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMemberRequest())
  }, [])

  const toggleModal = (value) => {
    setModalOpen(value)
  }

  const roleToggleModal = (value, member = null) => {
    setRoleModalOpen(value)
    if (member) {
      setMember(member)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEMBROS</Text>

      <FlatList
        style={styles.membersList}
        data={members}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <View style={styles.memberContainer}>
            <Text style={styles.memberName}>{item.user.name}</Text>

            <TouchableOpacity 
              hitSlop={{top: 5, right: 5, top: 5, bottom: 5}}
              onPress={() => roleToggleModal(true, item)}>
                <Icon name="settings" size={20} color="#b0b0b0" />
              </TouchableOpacity>
          </View>
        )}
        
        ListFooterComponent={() => (
          <TouchableOpacity onPress={() => toggleModal(true)} style={styles.button}>
            <Text style={styles.buttonText}>Convidar</Text>
          </TouchableOpacity>
        )}>

      </FlatList>
      <InviteMember visible={modalOpen} onRequestClose={() => toggleModal(false)} />
      {member && (<RoleUpdater visible={roleModalOpen} onRequestClose={() => roleToggleModal(false)} member={member} />)}
    </View>
  );
}
