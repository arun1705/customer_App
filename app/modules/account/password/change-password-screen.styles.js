import { StyleSheet } from 'react-native'

import { Colors, Metrics } from '../../../shared/themes'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: Colors.silver,
  },
  registerText: { fontWeight: '500', fontSize: 30, color: Colors.background, textAlign: 'center', marginTop: 20 },
  form: {
    margin: Metrics.baseMargin,
    borderRadius: 4,
  },
  row: {
    paddingVertical: hp(0.35),
    paddingHorizontal: hp(1.5),
  },
  rowButton: {
    paddingBottom:20,
    paddingTop:20,
    flexDirection: 'row', 
    justifyContent: 'space-evenly'
  },

  innerbox: {
    paddingVertical: hp(2.5),
  },

  box: {
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: Colors.snow,
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
    fontSize: 15,
    fontWeight: '300',
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
