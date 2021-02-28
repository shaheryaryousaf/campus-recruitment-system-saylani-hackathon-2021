import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import colors from '../config/colors'

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 13,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 3,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
})

export default AppButton
