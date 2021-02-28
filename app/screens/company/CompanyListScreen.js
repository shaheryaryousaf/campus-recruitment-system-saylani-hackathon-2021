import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

// Import Components
import SingleCompanyItem from '../../components/company/SingleCompanyItem'
import ListItemSeparator from '../../components/ListItemSeparator'

// Demo Data
const demoData = [
  {
    id: 1,
    name: 'Company IT 1',
    industry: 'IT',
    address: 'Faisalabad',
  },
  {
    id: 2,
    name: 'Company Finance 2',
    industry: 'Finance',
    address: 'Multan',
  },
  {
    id: 3,
    name: 'Company Textile 3',
    industry: 'Textile',
    address: 'Sargodha',
  },
  {
    id: 4,
    name: 'Company Medical 4',
    industry: 'Medical',
    address: 'Gujranwala',
  },
  {
    id: 5,
    name: 'Company Sports 5',
    industry: 'Sports',
    address: 'Quetta',
  },
  {
    id: 6,
    name: 'Company IT 6',
    industry: 'IT',
    address: 'Islamabad',
  },
  {
    id: 7,
    name: 'Company Finance 7',
    industry: 'Finance',
    address: 'Lahore',
  },
  {
    id: 8,
    name: 'Company Textile 8',
    industry: 'Textile',
    address: 'Karachi',
  },
]

const CompanyListScreen = () => {
  return (
    <FlatList
      data={demoData}
      keyExtractor={(d) => d.id.toString()}
      renderItem={({ item }) => (
        <SingleCompanyItem
          name={item.name}
          industry={item.industry}
          address={item.address}
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

export default CompanyListScreen
