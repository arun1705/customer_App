import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
  containerStyle: { flex: 1 },
  image: { height: hp('26%'), width: wp('110%'), resizeMode: 'contain' },
  imageIos: { height: hp('20%'), width: wp('110%'), resizeMode: 'contain' },
  buttonStyle: {
    backgroundColor: 'red',
    marginHorizontal: 15,
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 5,
  },
})
