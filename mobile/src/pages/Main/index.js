import React, { useState } from 'react';
import { useSelector } from "react-redux";
import TeamSwitcher from '../../compoenents/TeamSwitcher'
import Projects from '../../compoenents/Projects'
import Members from '../../compoenents/Members'

import { View, TouchableOpacity, Text } from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons";
import SideMenu from 'react-native-side-menu'

import styles from './styles';

export default function Main() {
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)
  const active = useSelector(state => state.teams.active)

  const handle = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  }

  return ( <View style={styles.backgroundWrapper}>
    <SideMenu
      isOpen={leftOpen}
      disableGestures
      onChange={isOpen => setLeftOpen(isOpen)}
      openMenuOffset={70}
      menu={<TeamSwitcher />}
      >
      <SideMenu
        isOpen={rightOpen}
        disableGestures
        onChange={isOpen => setRightOpen(isOpen)}
        openMenuOffset={275}
        menuPosition="right"
        menu={<Members />}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity 
                hitSlop={{ top: 5, bottom: 5, left: 10, right: 10 }} 
                onPress={() => setLeftOpen(true)}
                >
                <Icon name='menu' size={24} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.teamTitle}>{ active ? active.name : 'Selecione um time' }</Text>
              <TouchableOpacity 
                hitSlop={{ top: 5, bottom: 5, left: 10, right: 10 }} 
                onPress={() => setRightOpen(true)}>
                <Icon name='group' size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          <Projects />
        </View>
      </SideMenu>
    </SideMenu>
  </View> );

}


