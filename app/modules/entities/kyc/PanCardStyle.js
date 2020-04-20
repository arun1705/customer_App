import { StyleSheet, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import colors from '../../../shared/themes/colors'
import { ApplicationStyles, Colors } from '../../../shared/themes'

export const styles = StyleSheet.create({
  containerStyle: { flex: 1 },
  card: {
    marginVertical: hp(2),
    marginHorizontal: hp(1.5),
    padding: hp(3),
  },
  folder: {
    height: hp(4.5),
    width: hp(4.5),
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
  button: {
    marginVertical: hp(1),
  },
  textFieldContainer: {
    marginVertical: hp(1),
  },
  mandatoryText: {
    margin: hp(1),
    textAlign: 'center',
  },
  inst: {
    fontWeight: '800',
    paddingRight: hp(2),
    fontSize: 11,
    marginVertical: wp(1),
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
  },
})
