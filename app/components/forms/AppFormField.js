import React from 'react'

import AppTextInput from './AppTextInput'
import ErrorMessage from './ErrorMessage'

import { useFormikContext } from 'formik'

const AppFormField = ({ name, ...otherProps }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext()
  return (
    <>
      <AppTextInput
        {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormField
