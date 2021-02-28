import React, { useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'

// Import Components
import SingleJobItem from '../../components/jobs/SingleJobItem'
import ListItemSeparator from '../../components/ListItemSeparator'

// Import Redux Stuff
import { connect } from 'react-redux'
import { getAllJobs } from '../../actions/jobs'

const JobsListScreen = ({ navigation, getAllJobs, jobs }) => {
  useEffect(() => {
    getAllJobs()
  }, [getAllJobs])
  return (
    <FlatList
      data={jobs}
      keyExtractor={(d) => d.id.toString()}
      renderItem={({ item }) => (
        <SingleJobItem
          title={item.title}
          description={item.description}
          expected_salary={item.expected_salary}
          onPress={() => navigation.navigate('JobDetail', { job_id: item.id })}
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
  jobs: state.Jobs.jobs,
})

export default connect(mapStateToProps, { getAllJobs })(JobsListScreen)
