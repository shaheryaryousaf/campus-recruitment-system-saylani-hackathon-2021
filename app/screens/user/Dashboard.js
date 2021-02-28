import React, { Fragment, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

// Import Configs
import colors from '../../config/colors'

// Import Components
import Screen from '../../components/Screen'

// Import Libraries
import { FontAwesome } from '@expo/vector-icons'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getProfile } from '../../actions/auth'

const Dashboard = ({ navigation, user, getProfile, profile }) => {
  console.log(user && user.uid)
  useEffect(() => {
    getProfile(user && user.uid)
  }, [])
  console.log(profile)
  return (
    <Screen>
      <View style={styles.container}>
        {profile && profile.type === 'admin' ? (
          <Fragment>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('StudentsList')}
            >
              <View style={styles.studentsBlock}>
                <FontAwesome name='users' size={48} color='white' />
                <View style={styles.blockText}>
                  <Text style={styles.heading}>Registered Students</Text>
                  <Text style={styles.count}>100</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('CompaniesList')}
            >
              <View style={styles.companyBlock}>
                <FontAwesome name='building-o' size={48} color='white' />
                <View style={styles.blockText}>
                  <Text style={styles.heading}>Registered Companies</Text>
                  <Text style={styles.count}>30</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('JobsList')}
            >
              <View style={styles.jobsBlock}>
                <FontAwesome name='briefcase' size={48} color='white' />
                <View style={styles.blockText}>
                  <Text style={styles.heading}>Posted Jobs</Text>
                  <Text style={styles.count}>150</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('AddJob')}
            >
              <Text style={styles.completeProfileBtn}>ADD NEW JOB</Text>
            </TouchableWithoutFeedback>
          </Fragment>
        ) : (
          ''
        )}

        {profile && profile.type === 'student' ? (
          <Fragment>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('CompaniesList')}
            >
              <View style={styles.companyBlock}>
                <FontAwesome name='building-o' size={48} color='white' />
                <View style={styles.blockText}>
                  <Text style={styles.heading}>Registered Companies</Text>
                  <Text style={styles.count}>30</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('JobsList')}
            >
              <View style={styles.jobsBlock}>
                <FontAwesome name='briefcase' size={48} color='white' />
                <View style={styles.blockText}>
                  <Text style={styles.heading}>Posted Jobs</Text>
                  <Text style={styles.count}>150</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('CompleteProfile')}
            >
              <Text style={styles.completeProfileBtn}>
                COMPLETE STUDENT PROFILE
              </Text>
            </TouchableWithoutFeedback>
          </Fragment>
        ) : (
          ''
        )}

        {profile && profile.type === 'company' ? (
          <Fragment>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('StudentsList')}
            >
              <View style={styles.studentsBlock}>
                <FontAwesome name='users' size={48} color='white' />
                <View style={styles.blockText}>
                  <Text style={styles.heading}>Registered Students</Text>
                  <Text style={styles.count}>100</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('JobsList')}
            >
              <View style={styles.jobsBlock}>
                <FontAwesome name='briefcase' size={48} color='white' />
                <View style={styles.blockText}>
                  <Text style={styles.heading}>Posted Jobs</Text>
                  <Text style={styles.count}>150</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('CompleteCompanyProfile')}
            >
              <Text style={styles.completeProfileBtn}>
                COMPLETE COMPANY PROFILE
              </Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('AddJob')}
            >
              <Text style={styles.completeProfileBtn}>ADD NEW JOB</Text>
            </TouchableWithoutFeedback>
          </Fragment>
        ) : (
          ''
        )}
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  studentsBlock: {
    padding: 20,
    backgroundColor: colors.light,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
  },
  companyBlock: {
    padding: 20,
    backgroundColor: colors.medium,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
  },
  jobsBlock: {
    padding: 20,
    backgroundColor: colors.primary,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
  },
  blockText: {
    marginLeft: 15,
  },
  heading: {
    fontSize: 14,
    color: colors.white,
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  completeProfileBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    color: colors.white,
    display: 'flex',
    flex: 1,
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
})

// Import States
const mapStateToProps = (state) => ({
  user: state.Auth.user,
  profile: state.Auth.profile,
})

export default connect(mapStateToProps, { getProfile })(Dashboard)
