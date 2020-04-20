import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import LoginActions from '../modules/login/login.reducer'
import { Icon } from 'react-native-elements'
import colors from '../shared/themes/colors'
import ProfileLandingScreen from './profile-screen'
import Kyc from '../modules/entities/kyc/Kyc'
import OrderRequestEntityEditScreen from '../modules/entities/order-request/order-request-entity-edit-screen'
import OrderRequestEntityScreen from '../modules/entities/order-request/order-request-entity-screen'
import OrderDetailsEntityScreen from '../modules/entities/order-details/order-details-entity-screen'
import UserPointTranEntityDetailScreen from '../modules/entities/user-point-trans/user-point-trans-entity-detail-screen'
import UserCashTranEntityDetailScreen from '../modules/entities/user-point-trans/user-point-trans-entity-detail-screen'
import RewardsScreen from '../modules/entities/rewards-screen'
import UserDetailEntityEditScreen from '../modules/entities/user-details/user-details-entity-edit-screen'
import AddressListViewScreen from '../modules/entities/address/address-entity-screen'
import UserDetailsList from '../modules/entities/user-details/UserDetailsList'
import EditBasicDetails from '../modules/entities/user-details/EditBasicDetails'
import PhoneAddEditScreen from '../modules/entities/phone/phone-add-edit-screen'
import AddressAddEditScreen from '../modules/entities/address/address-entity-edit-screen'
import WalletEntityEditScreen from '../modules/entities/wallet/wallet-entity-edit-screen';
import WalletTxEntityScreen from '../modules/entities/wallet-tx/wallet-tx-entity-screen';

export class HomeScreen extends Component {
  render() {
    const HomeStack = createStackNavigator()
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="encash-my-trash-home"
          component={ProfileLandingScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 25,
              fontSize: 22,
              fontWeight: '400',
            },
            headerTitle: 'Encash My Trash',
            headerLeft: () => (
              <View style={{ paddingHorizontal: 16 }}>
                <Icon name="bars" type="font-awesome" color="white" onPress={() => this.props.navigation.toggleDrawer()} size={28} />
              </View>
            ),
          }}
        />
        <HomeStack.Screen
          name="raise-request"
          component={OrderRequestEntityEditScreen}
          options={{
            title: 'Raise Request',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 50,
              fontSize: 22,
              fontWeight: '400',
            },
          }}
        />
        <HomeStack.Screen
          name="kyc"
          component={Kyc}
          options={{
            title: 'VERIFY YOUR ACCOUNT',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
             // paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '400',
            },
          }}
        />
        <HomeStack.Screen
          name="edit-profile"
          component={UserDetailEntityEditScreen}
          options={{
            title: 'Edit Profile',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 50,
              fontSize: 22,
              fontWeight: '400',
            },
          }}
        />

        <HomeStack.Screen
          name="EditBasicDetails"
          component={EditBasicDetails}
          options={{
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 50,
              fontSize: 22,
              fontWeight: '400',
            },
          }}
        />

        <HomeStack.Screen
          name="mobile-details"
          component={PhoneAddEditScreen}
          options={{
            title: 'Mobile Details',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 50,
              fontSize: 22,
              fontWeight: '400',
            },
          }}
        />

        <HomeStack.Screen
          name="address-list-view"
          component={AddressListViewScreen}
          options={{
            title: 'Manage Address',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 50,
              fontSize: 22,
              fontWeight: '400',
            },
          }}
        />

        <HomeStack.Screen
          name="address-details"
          component={AddressAddEditScreen}
          options={{
            title: 'Address Details',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 50,
              fontSize: 22,
              fontWeight: '400',
            },
          }}
        />

        <HomeStack.Screen
          name="user-profile"
          // component={userDetailsEntityEditScreen}

          component={UserDetailsList}
          options={{
            title: 'Your Profile',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 50,
              fontSize: 22,
              fontWeight: '400',
            },
          }}
        />
        <HomeStack.Screen
          name="request-history"
          component={OrderRequestEntityScreen}
          options={{
            title: 'Request History',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 25,
              fontSize: 22,
              fontWeight: '400',
            },
          }}
        />
        <HomeStack.Screen
          name="view-request-details"
          component={OrderDetailsEntityScreen}
          options={{
            title: 'Request Details',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 25,
              fontSize: 22,
              fontWeight: '400',
            },
          }}
        />
        <HomeStack.Screen
          name="rewards"
          component={WalletEntityEditScreen}
          options={{
            title: ' My Wallet',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 50,
              fontSize: 22,
              fontWeight: '400',
            },
          }}
        />
        <HomeStack.Screen
          name="transaction-details"
          component={WalletTxEntityScreen}
          options={{
            title: 'Recent Transaction',
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 25,
              fontSize: 22,
              fontWeight: '400',
            },
          }}
        />
        <HomeStack.Screen
          name="UserCashTranDetailScreen"
          component={WalletTxEntityScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 50,
              fontSize: 22,
              fontWeight: '400',
            },
          }}
        />
      </HomeStack.Navigator>
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
)(HomeScreen)
