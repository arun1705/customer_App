import React from 'react'

import EmailVerification from './MobileAndEmail'

import { Colors } from '../../../shared/themes'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PancardVerifyEntityEditScreen from '../pancard-verify/pancard-verify-entity-edit-screen'
import BankDetailsVerifyEntityEditScreen from '../bank-details-verify/bank-details-verify-entity-edit-screen'
const Tab = createMaterialTopTabNavigator()

const Kyc = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 16 },
        activeTintColor: Colors.textField,
        inactiveTintColor: 'black',
        indicatorStyle: { backgroundColor: Colors.textField },
      }}>
      <Tab.Screen name="Email" component={EmailVerification} />
      <Tab.Screen name="Pan" component={PancardVerifyEntityEditScreen} />
      <Tab.Screen name="Bank" component={BankDetailsVerifyEntityEditScreen} />
    </Tab.Navigator>
  )
}

export default Kyc
