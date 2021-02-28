import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
})

export default AppText
