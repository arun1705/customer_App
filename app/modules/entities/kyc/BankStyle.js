import { StyleSheet, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import colors from '../../../shared/themes/colors'
import { ApplicationStyles, Colors } from '../../../shared/themes'

export const styles = StyleSheet.create({
  containerStyle: { flex: 1 },
  card: {
    // flex: 0.98,
    marginVertical: hp(2),
    marginHorizontal: hp(1.5),
    padding: hp(3),
  },
  folder: {
    height: hp(4),
    width: hp(4),
    //   margin:hp(1)
  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: hp(2),
    fontSize: 16,
  },
  verifyText: {
    fontSize: 12,
    marginLeft: hp(6),
    fontWeight: '800',
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
  },
  instruction: {
    marginVertical: hp(1),
    fontWeight: '800',
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
  },

  button: {
    marginVertical: hp(1),
  },
  textFieldContainer: {
    marginVertical: hp(0.5),
  },
  mandatoryText: {
    margin: hp(1),
    textAlign: 'center',
  },
  inst: {
    fontWeight: '800',
    paddingLeft: hp(2),
    paddingRight: hp(2),
    fontSize: 11,
    marginVertical: wp(1),
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
  },
})
