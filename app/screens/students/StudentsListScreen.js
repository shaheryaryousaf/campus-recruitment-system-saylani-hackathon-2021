import React, { useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'

// Import Components
import SingleStudentItem from '../../components/students/SingleStudentItem'
import ListItemSeparator from '../../components/ListItemSeparator'

// Demo Data
const demoData = [
  {
    id: 1,
    name: 'John Dor',
    degree: 'Engineering',
  },
  {
    id: 2,
    name: 'John Bruce',
    degree: 'Medical',
  },
  {
    id: 3,
    name: 'John Smith',
    degree: 'Engineering',
  },
  {
    id: 4,
    name: 'Bruce Wayne',
    degree: 'Medical',
  },
  {
    id: 5,
    name: 'Kent Clark',
    degree: 'Engineering',
  },
  {
    id: 6,
    name: 'Steve Rogers',
    degree: 'Medical',
  },
  {
    id: 7,
    name: 'Tony Stark',
    degree: 'Engineering',
  },
  {
    id: 8,
    name: 'Berry Allen',
    degree: 'Medical',
  },
]

// Import Redux Stuff
import { connect } from 'react-redux'
import { getAllStudentProfiles } from '../../actions/students'

const StudentsListScreen = ({
  navigation,
  getAllStudentProfiles,
  students,
}) => {
  useEffect(() => {
    getAllStudentProfiles()
  }, [getAllStudentProfiles])
  return (
    <FlatList
      data={students}
      keyExtractor={(d) => d.id.toString()}
      renderItem={({ item }) => (
        <SingleStudentItem
          first_name={item.first_name}
          last_name={item.last_name}
          current_degree={item.current_degree}
          onPress={() =>
            navigation.navigate('StudentDetail', { student_id: item.id })
          }
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
})

// Import States
const mapStateToProps = (state) => ({
  students: state.Students.students,
})

export default connect(mapStateToProps, { getAllStudentProfiles })(
  StudentsListScreen
)
