import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Import Configs
import colors from '../../config/colors'

// Import Libraries
import * as yup from 'yup'
import { SimpleLineIcons } from '@expo/vector-icons'

// Import Components
import Layout from '../../components/Layout'
import {
  AppForm,
  AppFormField,
  AppFormRadioField,
  SubmitButton,
} from '../../components/forms'

// Import Redux Stuff
import { connect } from 'react-redux'
import { registerUser } from '../../actions/auth'

// Validation Schema
const validationSchema = yup.object().shape({
  username: yup.string().required().label('Username'),
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().min(6).label('Password'),
  password2: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const RegisterScreen = ({ navigation, registerUser }) => {
  return (
    <View style={styles.container}>
      <SimpleLineIcons name='graduation' size={124} color='white' />
      <Text style={styles.heading}>Register Here</Text>
      <AppForm
        initialValues={{
          username: '',
          email: '',
          password: '',
          password2: '',
          type: '',
        }}
        onSubmit={(values) => {
          registerUser(
            values.username,
            values.email,
            values.password,
            values.password2,
            values.type
          )
        }}
        validationSchema={validationSchema}
      >
        <View style={styles.form}>
          <AppFormField
            icon='account-outline'
            placeholder='Username'
            name='username'
          />
          <AppFormField
            icon='email'
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            name='email'
          />
          <AppFormField
            icon='lock'
            placeholder='Password'
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry
            name='password'
          />
          <AppFormField
            icon='lock'
            placeholder='Confirm Password'
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry
            name='password2'
          />
          <View style={{ marginBottom: '0.5rem' }}>
            <Text style={styles.userType}>Select User Type</Text>
            <AppFormRadioField value='student' text='Student' />
            <AppFormRadioField value='company' text='Company' />
          </View>
          <SubmitButton title='Register' />
        </View>
      </AppForm>
      <Text
        style={styles.authLinkText}
        onPress={() => navigation.navigate('Login')}
      >
        Already have an account? Login Here
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.medium,
  },
  heading: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    marginVertical: 8,
    paddingRight: 25,
    paddingLeft: 25,
  },
  authLinkText: {
    marginTop: 5,
    color: colors.white,
    textAlign: 'left',
    width: '84%',
  },
  userType: {
    color: colors.white,
    marginBottom: 3,
    fontWeight: 'bold',
  },
})

export default connect(null, { registerUser })(RegisterScreen)
