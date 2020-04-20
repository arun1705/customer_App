import { ApplicationStyles, Colors } from '../../../shared/themes'
import { StyleSheet, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
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
  checkimage: {
    marginTop:9,
    height: hp(6),
    width: hp(6),
  },
  userimage: {
    height: hp(7),
    width: hp(7),
  },
  pancardprocess: {
    height: hp(14),
    width: hp(14),
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
    paddingLeft: hp(2),
    fontSize: 11,
    marginVertical: wp(1),
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
  },
})
