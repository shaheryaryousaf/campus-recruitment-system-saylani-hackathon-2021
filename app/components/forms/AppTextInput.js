import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

//  Import Configs
import colors from '../../config/colors'

//  Import Libraries
import { MaterialCommunityIcons } from '@expo/vector-icons'

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons style={styles.icon} name={icon} size={20} />
      )}
      <TextInput {...otherProps} style={styles.textInput} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
    paddingLeft: 12,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    borderColor: colors.medium,
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: colors.white,
    minHeight: 47,
  },
  icon: {
    marginRight: 5,
    color: colors.medium,
  },
  textInput: {
    borderColor: colors.black,
    width: '90%',
    backgroundColor: colors.white,
  },
})

export default AppTextInput
