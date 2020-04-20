import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import LoginActions from '../modules/login/login.reducer'

export class LogoutScreen extends Component {
  componentDidMount() {
    this.props.logout()
    // this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View>
        <Text> </Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: state.account.account,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(LoginActions.logoutRequest()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogoutScreen)
