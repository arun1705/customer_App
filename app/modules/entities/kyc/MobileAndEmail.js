import React, { useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, TextInput, HelperText, Button } from 'react-native-paper'
import { styles } from './MobileAndEmailStyle'
import Colors from '../../../shared/themes/colors'
import { validateEmail, validateMobNum, validateMobNumLength } from '../../../shared/res/Validate'
import { connect } from 'react-redux'
import UserDetailsAction from '../user-details/user-details.reducer'
import NetWork from '../../../shared/components/offline/NetWork'
import { NetworkContext } from '../../../shared/components/offline/context'

class EmailVerification extends React.Component {
  static contextType = NetworkContext

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUserDetail(this.props.account ? this.props.account.id : 0)
  }

  render() {
    const { containerStyle, card, email, text, viewStyle, emailText, row, resendText, textbox } = styles
    return (
      <View style={containerStyle}>
        <ScrollView keyboardShouldPersistTaps="always">
          {this.context.isInternetReachable ? (
            <Card style={card}>
              <View style={viewStyle}>
                <Image source={require('../../../../images/mail.png')} style={email} />
                <View style={textbox}>
                  <Text style={emailText}>Your email address is verifed</Text>
                  <Text style={[emailText, { color: '#04a262' }]}>{this.props.userDetail ? this.props.userDetail.loginId : ''} </Text>
                </View>
              </View>
            </Card>
          ) : (
            <NetWork />
          )}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: state.account.account,
    userDetail: state.userDetails.userDetail,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserDetail: id => dispatch(UserDetailsAction.userDetailRequest(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmailVerification)
