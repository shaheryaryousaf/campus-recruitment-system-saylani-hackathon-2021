import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Import Configs
import colors from '../../config/colors'

// Import Libraries
import * as yup from 'yup'

// Import Components
import Screen from '../../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../../components/forms'

// Import Redux Stuff
import { connect } from 'react-redux'
import { completeCompProfile } from '../../actions/companies'

// Validation Schema
const validationSchema = yup.object().shape({
  name: yup.string().required().label('First Name'),
  phone: yup.string().required().label('Phone'),
})

const CompleteCompanyProfile = ({ navigation, completeCompProfile }) => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          company_id: 123,
          name: '',
          about: '',
          phone: '',
          address: '',
          industry: '',
          website_link: '',
          twitter_link: '',
          linkedin_link: '',
        }}
        onSubmit={(values) => {
          completeCompProfile(values)
          setTimeout(() => {
            navigation.navigate('Dashboard')
          }, 2000)
        }}
        validationSchema={validationSchema}
      >
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text>Name</Text>
            <AppFormField placeholder='Name' name='name' />
          </View>

          <View style={styles.formGroup}>
            <Text>About</Text>
            <AppFormField
              placeholder='About'
              name='about'
              multiline={true}
              numberOfLines={5}
              style={{
                minHeight: 200,
                textAlignVertical: 'top',
                justifyContent: 'flex-start',
              }}
            />
          </View>

          <View style={styles.formGroup}>
            <Text>Phone</Text>
            <AppFormField placeholder='Phone' name='phone' />
          </View>

          <View style={styles.formGroup}>
            <Text>Address</Text>
            <AppFormField placeholder='Address' name='address' />
          </View>

          <View style={styles.formGroup}>
            <Text>Industry</Text>
            <AppFormField placeholder='Industry' name='industry' />
          </View>

          <View style={styles.formGroup}>
            <Text>Website Link</Text>
            <AppFormField placeholder='Website Link' name='website_link' />
          </View>

          <View style={styles.formGroup}>
            <Text>Twitter Link</Text>
            <AppFormField placeholder='Twitter Link' name='twitter_link' />
          </View>

          <View style={styles.formGroup}>
            <Text>Linkedin Link</Text>
            <AppFormField placeholder='Linkedin Link' name='linkedin_link' />
          </View>

          <SubmitButton title='Complete Profile' />
        </View>
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
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
  helpText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'gray',
  },
  formGroup: {
    marginBottom: 5,
  },
  form: {
    padding: 20,
  },
})

export default connect(null, { completeCompProfile })(CompleteCompanyProfile)
