import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { Colors, Metrics } from '../../../shared/themes'

export default StyleSheet.create({
  container: {
    // paddingTop: 10,
    margin: 20,
    // flex: 1,
    backgroundColor: Colors.landingPage,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    borderRadius: 15,

    elevation: 13,
  },
  registerText: { fontWeight: '500', fontSize: 30, color: Colors.background, textAlign: 'center', marginTop: 20 },
  form: {
    margin: Metrics.baseMargin,
    borderRadius: 4,
  },
  row: {
    paddingVertical: hp(1),
    paddingHorizontal: 10,
  },
  type: {
    marginVertical: hp(2),
  },

  box: {
    paddingHorizontal: 10,
    margin: 10,
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
  buttonWrapper: {
    margin: hp(2),
    marginTop: hp(5),
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
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  container1: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
})
