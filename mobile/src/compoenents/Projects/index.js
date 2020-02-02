import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import NewProject from "../NewProject";

import { getProjectRequest } from '../../store/modules/projects/actions'

import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false)
  const { projects } = useSelector(state => state.projects)
  const { active } = useSelector(state => state.teams)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjectRequest())
  }, [])

  const toggleModal = (value) => {
    setModalOpen(value)
  }

  return (
    <>
      { !active ? null : ( <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.projectsList}
          data={projects}
          keyExtractor={item => String(item.id)}
          renderItem={({item})=> (
            <View style={styles.projectContainer}>
              <Text style={styles.projectTitle}>
                {item.title}
              </Text>
            </View>
          )}>

        </FlatList>
        <TouchableOpacity style={styles.newProjectButton} onPress={() => toggleModal(true)}>
          <Icon name="add" size={28} color="#FFF" />
        </TouchableOpacity>

        <NewProject visible={modalOpen} onRequestClose={() => toggleModal(false)} />
      </View> )}
    </> 
  );
}
