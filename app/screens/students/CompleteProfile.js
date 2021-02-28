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
import { completeStudentProfile } from '../../actions/students'
import { getProfile } from '../../actions/auth'

// Validation Schema
const validationSchema = yup.object().shape({
  first_name: yup.string().required().label('First Name'),
  phone: yup.string().required().label('Phone'),
})

const CompleteProfile = ({
  navigation,
  completeStudentProfile,
  getProfile,
  user,
  profile,
}) => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          student_id: user && user.uid,
          first_name: '',
          last_name: '',
          bio: '',
          dob: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          current_degree: '',
          admission_date: '',
        }}
        onSubmit={(values) => {
          completeStudentProfile(values)
          setTimeout(() => {
            navigation.navigate('Dashboard')
          }, 2000)
        }}
        validationSchema={validationSchema}
      >
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text>First Name</Text>
            <AppFormField placeholder='First Name' name='first_name' />
          </View>

          <View style={styles.formGroup}>
            <Text>Last Name</Text>
            <AppFormField placeholder='Last Name' name='last_name' />
          </View>

          <View style={styles.formGroup}>
            <Text>Bio</Text>
            <AppFormField
              placeholder='Bio'
              name='bio'
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
            <Text>Date of Birth</Text>
            <AppFormField placeholder='Date of Birth' name='dob' />
            <Text style={styles.helpText}>
              Please add job in DD-MM-YYYY format
            </Text>
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
            <Text>City</Text>
            <AppFormField placeholder='City' name='city' />
          </View>

          <View style={styles.formGroup}>
            <Text>State</Text>
            <AppFormField placeholder='State' name='state' />
          </View>

          <View style={styles.formGroup}>
            <Text>Current Degree</Text>
            <AppFormField placeholder='Current Degree' name='current_degree' />
          </View>

          <View style={styles.formGroup}>
            <Text>Admission Date</Text>
            <AppFormField placeholder='Date' name='admission_date' />
            <Text style={styles.helpText}>
              Please add job in DD-MM-YYYY format
            </Text>
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
  profile: state.Auth.profile,
})

export default connect(mapStateToProps, { completeStudentProfile, getProfile })(
  CompleteProfile
)
