import React from 'react'
import { StyleSheet, Text, View ,Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const NetWork = () => {
  const {noInternetContainer,noInternetText,noInternetImage}=styles;
  return (
    <View style={noInternetContainer}>
      <Image source={require('../../../../images/nointernet.png')} style={noInternetImage} resizeMode="contain" />
      {/* <Text style={noInternetText}> Something went wrong </Text> */}
    </View>
  )
}


const styles = StyleSheet.create({
  noInternetImage: {
    height: hp(60),
    width: hp(50),
  },
  noInternetContainer: {
    flex: 1,
  },
  noInternetText: {},
})

export default NetWork

