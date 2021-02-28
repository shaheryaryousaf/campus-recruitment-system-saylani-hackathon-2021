import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Import Configs
import colors from '../../config/colors'

// Import Libraries
import * as yup from 'yup'
import { SimpleLineIcons } from '@expo/vector-icons'

// Import Components
import Layout from '../../components/Layout'
import { AppForm, AppFormField, SubmitButton } from '../../components/forms'

// Import Redux Stuff
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

// Validation Schema
const validationSchema = yup.object().shape({
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().min(6).label('Password'),
})

const LoginScreen = ({ navigation, login }) => {
  return (
    <View style={styles.container}>
      <SimpleLineIcons name='graduation' size={124} color='white' />
      <Text style={styles.heading}>Login Here</Text>
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          login(values.email, values.password)
          setTimeout(() => {
            navigation.navigate('Dashboard')
          }, 2000)
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        <View style={styles.form}>
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
          <SubmitButton title='Login' />
        </View>
      </AppForm>
      <Text
        style={styles.authLinkText}
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Don't have an account? Register Here
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
})

export default connect(null, { login })(LoginScreen)
