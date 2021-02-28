import React from 'react'
import { StyleSheet } from 'react-native'

import AppText from '../AppText'

import colors from '../../config/colors'

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null
  return <AppText style={styles.error}>{error}</AppText>
}

const styles = StyleSheet.create({
  error: {
    color: colors.white,
    fontSize: 14,
  },
})

export default ErrorMessage
