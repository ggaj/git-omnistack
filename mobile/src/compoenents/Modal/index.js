import React from 'react';
import { View, Platform, KeyboardAvoidingView, Modal as RNModal } from 'react-native';

import styles from './styles';

export default function Modal({visible, children, onRequestClose}) {
  return (
    <RNModal visible={visible} animationType="slide" transparent onRequestClose={onRequestClose}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null }>
        <View style={styles.content}>{children}</View>
      </KeyboardAvoidingView>
    </RNModal>
  );
}
