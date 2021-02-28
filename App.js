import React from 'react'

// Import Configs
import colors from './app/config/colors'

// Import Screens
import WelcomeScreen from './app/screens/pages/WelcomeScreen'
import LoginScreen from './app/screens/auth/LoginScreen'
import RegisterScreen from './app/screens/auth/RegisterScreen'
import AddJobScreen from './app/screens/jobs/AddJobScreen'
import JobDetailScreen from './app/screens/jobs/JobDetailScreen'
import JobsListScreen from './app/screens/jobs/JobsListScreen'
import StudentDetailScreen from './app/screens/students/StudentDetailScreen'
import StudentsListScreen from './app/screens/students/StudentsListScreen'
import CompleteProfile from './app/screens/students/CompleteProfile'
import CompleteCompanyProfile from './app/screens/company/CompleteCompanyProfile'
import CompanyListScreen from './app/screens/company/CompanyListScreen'
import Dashboard from './app/screens/user/Dashboard'

// Import Libraries
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

// Import Redux Stuff
import { Provider } from 'react-redux'
import store from './app/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.blood,
            },
            headerTintColor: colors.white,
          }}
        >
          <Stack.Screen
            name='Welcome'
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='RegisterScreen'
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Dashboard'
            component={Dashboard}
            options={{
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: colors.white,
              title: 'Dashboard',
            }}
          />
          <Stack.Screen
            name='StudentsList'
            component={StudentsListScreen}
            options={{
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: colors.white,
              title: 'Students List',
            }}
          />
          <Stack.Screen
            name='StudentDetail'
            component={StudentDetailScreen}
            options={{
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: colors.white,
              title: 'Student Detail',
            }}
          />
          <Stack.Screen
            name='CompleteProfile'
            component={CompleteProfile}
            options={{
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: colors.white,
              title: 'Complete Profile',
            }}
          />
          <Stack.Screen
            name='CompaniesList'
            component={CompanyListScreen}
            options={{
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: colors.white,
              title: 'Companies List',
            }}
          />
          <Stack.Screen
            name='CompleteCompanyProfile'
            component={CompleteCompanyProfile}
            options={{
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: colors.white,
              title: 'Complete Company Profile',
            }}
          />
          <Stack.Screen
            name='JobsList'
            component={JobsListScreen}
            options={{
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: colors.white,
              title: 'Jobs List',
            }}
          />
          <Stack.Screen
            name='JobDetail'
            component={JobDetailScreen}
            options={{
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: colors.white,
              title: 'Job Detail',
            }}
          />
          <Stack.Screen
            name='AddJob'
            component={AddJobScreen}
            options={{
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: colors.white,
              title: 'Job Detail',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
