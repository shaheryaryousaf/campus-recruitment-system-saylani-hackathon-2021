import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

// Import Configs
import colors from '../../config/colors'

// Import Libraries
import { Cell, TableView } from 'react-native-tableview-simple'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getStudentProfile } from '../../actions/students'

const JobDetailScreen = ({ getStudentProfile, student, route }) => {
  useEffect(() => {
    const { student_id } = route.params
    getStudentProfile(student_id)
  }, [])
  console.log(student)
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        {student.first_name && student.first_name}{' '}
        {student.last_name && student.last_name}
      </Text>
      <Text style={styles.description}>{student.bio && student.bio}</Text>

      <View style={styles.details}>
        <Text style={styles.small_heading}>Details</Text>
        <TableView>
          <Cell
            cellStyle='RightDetail'
            title='Date of Birth'
            detail={student.dob && student.dob}
            contentContainerStyle={{
              paddingLeft: 0,
              paddingRight: 0,
            }}
          />
          <Cell
            cellStyle='RightDetail'
            title='Phone'
            detail={student.phone && student.phone}
            contentContainerStyle={{ paddingLeft: 0, paddingRight: 0 }}
          />
          <Cell
            cellStyle='RightDetail'
            title='Address'
            detail={student.address && student.address}
            contentContainerStyle={{ paddingLeft: 0, paddingRight: 0 }}
          />
          <Cell
            cellStyle='RightDetail'
            title='City'
            detail={student.city && student.city}
            contentContainerStyle={{ paddingLeft: 0, paddingRight: 0 }}
          />
          <Cell
            cellStyle='RightDetail'
            title='State'
            detail={student.state && student.state}
            contentContainerStyle={{ paddingLeft: 0, paddingRight: 0 }}
          />
          <Cell
            cellStyle='RightDetail'
            title='Current Degree'
            detail={student.current_degree && student.current_degree}
            contentContainerStyle={{ paddingLeft: 0, paddingRight: 0 }}
          />
          <Cell
            cellStyle='RightDetail'
            title='Admission Date'
            detail={student.admission_date && student.admission_date}
            contentContainerStyle={{ paddingLeft: 0, paddingRight: 0 }}
          />
        </TableView>
      </View>

      <View style={styles.grades}>
        <Text style={styles.small_heading}>Recent Grades</Text>
        <TableView>
          <Cell
            cellStyle='RightDetail'
            title='English'
            detail='A+'
            contentContainerStyle={{
              paddingLeft: 0,
              paddingRight: 0,
            }}
          />
          <Cell
            cellStyle='RightDetail'
            title='Math'
            detail='A+'
            contentContainerStyle={{ paddingLeft: 0, paddingRight: 0 }}
          />
          <Cell
            cellStyle='RightDetail'
            title='Urdu'
            detail='A+'
            contentContainerStyle={{ paddingLeft: 0, paddingRight: 0 }}
          />
          <Cell
            cellStyle='RightDetail'
            title='Physics'
            detail='A+'
            contentContainerStyle={{ paddingLeft: 0, paddingRight: 0 }}
          />
          <Cell
            cellStyle='RightDetail'
            title='Chemistry'
            detail='A+'
            contentContainerStyle={{ paddingLeft: 0, paddingRight: 0 }}
          />
        </TableView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
    display: 'flex',
    flex: 1,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  details: {
    marginTop: 20,
    marginBottom: 10,
  },
  grades: {
    marginBottom: 20,
  },
  small_heading: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  skills: {
    fontStyle: 'italic',
  },
})

// Import States
const mapStateToProps = (state) => ({
  student: state.Students.student,
})

export default connect(mapStateToProps, { getStudentProfile })(JobDetailScreen)
