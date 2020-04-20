import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { Colors, Metrics } from '../../../shared/themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(3),

    backgroundColor: Colors.landingPage,
  },
  form: {
    margin: Metrics.baseMargin,
    borderRadius: 4,
  },
  row: {
    paddingVertical: hp(0.35),
    paddingHorizontal: hp(1.5),
  },
  innerbox: {
    paddingVertical: hp(2.5),
  },
  box: {
    paddingHorizontal: hp(1),
    margin: hp(1),
    backgroundColor: Colors.snow,
    // padding: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.65,
    borderRadius: 4,
    elevation: 5,
  },
  rowLabel: {
    color: Colors.charcoal,
  },
  Text: { textAlign: 'right', color: Colors.charcoal, fontSize: 15 },
  SignUpText: {
    fontWeight: '700',
    textAlign: 'right',
    color: Colors.textField,
    fontSize: 15,
  },
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
})
