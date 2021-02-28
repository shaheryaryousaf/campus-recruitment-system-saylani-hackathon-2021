import React, { useEffect } from 'react'
import { View } from 'react-native'

// Import Redux Stuff
import { connect } from 'react-redux'
import { checkAuthenticated, load_user } from '../actions/auth'

const Layout = ({ checkAuthenticated, load_user, children }) => {
  useEffect(() => {
    checkAuthenticated()
    load_user()
  })
  return <View>{children}</View>
}

export default connect(null, { checkAuthenticated, load_user })(Layout)
