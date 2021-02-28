import React from 'react'
import { StyleSheet } from 'react-native'

// Import Libraries
import { Field } from 'formik'

const AppFormRadioField = ({ value, text }) => {
  return (
    <label style={{ color: 'white', fontFamily: 'Roboto', fontSize: 13 }}>
      <Field type='radio' name='type' value={value} />
      {text}
    </label>
  )
}

const styles = StyleSheet.create({
  labelText: {
    color: 'white',
  },
})

export default AppFormRadioField
