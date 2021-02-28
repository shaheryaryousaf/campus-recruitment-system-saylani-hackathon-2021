import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

// Import Configs
import colors from '../../config/colors'

// Import Libraries
import { Cell, TableView } from 'react-native-tableview-simple'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getJob } from '../../actions/jobs'

const JobDetailScreen = ({ job, getJob, route }) => {
  useEffect(() => {
    const { job_id } = route.params
    getJob(job_id)
  }, [])
  console.log(job)
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{job && job.title}</Text>
      <Text style={styles.description}>{job && job.description}</Text>

      <View>
        <Text style={styles.small_heading}>Skills</Text>
        <Text style={styles.skills}>{job && job.skills}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.small_heading}>Details</Text>
        <TableView>
          <Cell
            cellStyle='RightDetail'
            title='Job Type'
            detail={job && job.type}
            contentContainerStyle={{
              paddingLeft: 0,
              paddingRight: 0,
            }}
          />
          <Cell
            cellStyle='RightDetail'
            title='Availability'
            detail={job && job.availability}
            contentContainerStyle={{ paddingLeft: 0, paddingRight: 0 }}
          />
          <Cell
            cellStyle='RightDetail'
            title='Expected Salary'
            detail={job && job.expected_salary}
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
    marginBottom: 10,
  },
  details: {
    marginTop: 20,
  },
  small_heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  skills: {
    fontStyle: 'italic',
  },
})

// Import States
const mapStateToProps = (state) => ({
  job: state.Jobs.job,
})

export default connect(mapStateToProps, { getJob })(JobDetailScreen)
