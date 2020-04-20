import React from 'react'
import { ScrollView, Text, View, Linking } from 'react-native'
import { connect } from 'react-redux'
import { Card, Icon } from 'react-native-elements'
import { Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
// Styles
/* eslint-disable no-unused-vars */

/* eslint-enable */

import styles from './rewards-screen.styles'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '../../shared/themes/colors'

var value = 0
value = value.toFixed(2)

class RewardsScreen extends React.Component {
  constructor(props) {
    super(props)

    /* ***********************************************************
     * STEP 1
     * This is an array of objects with the properties you desire
     * Usually this should come from Redux mapStateToProps
     *************************************************************/
    this.state = {
      page: 0,
      sort: 'id,asc',
      size: 20,
      done: false,
      searchTerm: '',
      dataObjects: [],
    }
    // this.fetchOrderRequests()
  }

  handlePressCashTransactions = () => {
    this.props.navigation.navigate('UserCashTranDetailScreen')
    // if (this.validate_field()) {
    //   const { username, password } = this.state
    //   // attempt a login - a saga is listening to pick it up from here.
    //   this.props.register(username, password)
    // }
  }

  handlePressWithdraw = () => {
    // alert('in withdraw')
    Linking.openURL('https://www.flipkart.com/')
    // if (this.validate_field()) {
    //   const { username, password } = this.state
    //   // attempt a login - a saga is listening to pick it up from here.
    //   this.props.register(username, password)
    // }
  }

  handlePressPointsTransactions = () => {
    this.props.navigation.navigate('transaction-details')
    // if (this.validate_field()) {
    //   const { username, password } = this.state
    //   // attempt a login - a saga is listening to pick it up from here.
    //   this.props.register(username, password)
    // }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Card containerStyle={styles.containerStyle}>
            
            <View style={styles.viewStyle}>
              <Text style={styles.totalbalance}>WALLET BALANCE</Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={styles.balanceText}>Rs. {`${value}`}</Text>
            </View>

            

            <View style = {styles.lineStyle} />

            

            <View>
              <Button
                mode="contained"
                uppercase="false"
                color={colors.background}
                style={styles.buttonWrapper}
                // contentStyle={{height:20,width:1}}
                onPress={this.handlePressWithdraw}>
                <Text style={styles.buttonText}>Withdraw</Text>
              </Button>
            </View>
          </Card>

          <Card containerStyle={styles.containerStyle}>
            <TouchableOpacity onPress={this.handlePressPointsTransactions}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.mobileText}>My Recent Transactions</Text>
                <Icon name="angle-right" type="font-awesome" color="#17661e" size={22} />
              </View>
            </TouchableOpacity>
          </Card>

         
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    // for developer convenience
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // for developer convenience
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RewardsScreen)
