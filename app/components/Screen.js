import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

const Screen = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
})

export default Screen
