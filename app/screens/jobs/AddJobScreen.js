import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Import Configs
import colors from '../../config/colors'

// Import Libraries
import * as yup from 'yup'

// Import Components
import Screen from '../../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../../components/forms'

// import Redux Stuff
import { connect } from 'react-redux'
import { addJob } from '../../actions/jobs'

// Validation Schema
const validationSchema = yup.object().shape({
  title: yup.string().required().label('Job Title'),
  skills: yup.string().required().label('Skills'),
})

const AddJobScreen = ({ navigation, addJob, user }) => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          company_id: user && user.uid,
          title: '',
          description: '',
          availability: '',
          skills: '',
          type: '',
          expected_salary: '',
        }}
        onSubmit={(values) => {
          addJob(values)
          setTimeout(() => {
            navigation.navigate('JobsList')
          }, 2000)
        }}
        validationSchema={validationSchema}
      >
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text>Job Title</Text>
            <AppFormField placeholder='Title' name='title' />
          </View>

          <View style={styles.formGroup}>
            <Text>Description</Text>
            <AppFormField
              placeholder='Description'
              name='description'
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
            <Text>Availability</Text>
            <AppFormField placeholder='Availability' name='availability' />
            <Text style={styles.helpText}>
              in 1 week, in 2 weeks, in a month
            </Text>
          </View>

          <View style={styles.formGroup}>
            <Text>Job Type</Text>
            <AppFormField placeholder='Job Type' name='type' />
            <Text style={styles.helpText}>Fulltime or Part Time</Text>
          </View>

          <View style={styles.formGroup}>
            <Text>Skills</Text>
            <AppFormField placeholder='Skills' name='skills' />
            <Text style={styles.helpText}>
              Please add comma (, ) separated skills
            </Text>
          </View>

          <View style={styles.formGroup}>
            <Text>Expected Salary</Text>
            <AppFormField
              placeholder='Expected Salary'
              name='expected_salary'
            />
          </View>

          <SubmitButton title='Add Job' />
        </View>
      </AppForm>
      <Text
        style={styles.authLinkText}
        onPress={() => navigation.navigate('Login')}
      >
        Already have an account? Login Here
      </Text>
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
  dropdown: {
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
})

// Import States
const mapStateToProps = (state) => ({
  user: state.Auth.user,
})

export default connect(mapStateToProps, { addJob })(AddJobScreen)
