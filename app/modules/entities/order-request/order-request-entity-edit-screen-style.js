import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { Colors, Metrics } from '../../../shared/themes'

export default StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
  },
  container: {
    // paddingTop: 100,
    backgroundColor: Colors.landingPage,
  },
  form: {
    margin: Metrics.baseMargin,
    borderRadius: 4,
  },
  // row: {
  //   paddingVertical: 10,
  //   paddingHorizontal: 10,
  // },
  row: {
    paddingVertical: hp(0.35),
    paddingHorizontal: hp(1.5),
  },
  innerbox: {
    paddingVertical: hp(2.5),
  },
  radioButton: {
    marginLeft: -20,
  },

  box: {
    paddingHorizontal: 10,
    margin: Metrics.baseMargin,
    backgroundColor: Colors.snow,
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.65,
    borderRadius: 4,
  },
  rowLabel: {
    color: Colors.charcoal,
  },
  text: {
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.textField,
    fontSize: 18,
    paddingBottom: 20,
  },
  textInput: {
    height: 40,
    color: Colors.coal,
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel,
  },
  Text: { textAlign: 'right', color: Colors.charcoal, fontSize: 15 },
  SignUpText: {
    fontWeight: '700',
    textAlign: 'right',
    color: Colors.textField,
    fontSize: 15,
  },
  buttonWrapper: {},
  loginButton: {
    flex: 1,
    borderColor: Colors.background,
    backgroundColor: Colors.background,
    padding: 6,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.silver,
    fontSize: 20,
    fontWeight: '500',
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
})
