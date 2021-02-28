import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Import Configs
import colors from '../../config/colors'

// Import Libraries
import { SimpleLineIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SimpleLineIcons name='graduation' size={180} color='white' />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome to </Text>
        <Text style={styles.text}>Campus Recruitment System</Text>
      </View>
      <Entypo
        name='chevron-with-circle-right'
        size={56}
        color={colors.white}
        onPress={() => navigation.navigate('Login')}
      />
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
  textContainer: {
    marginVertical: '1.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  text: {
    color: colors.white,
    fontSize: 26,
  },
})

export default WelcomeScreen
