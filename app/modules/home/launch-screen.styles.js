import { Platform, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Colors, Metrics } from '../../shared/themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.landingPage,
  },
  forgotContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  form: {
    backgroundColor: Colors.snow,
    margin: Metrics.baseMargin,
    borderRadius: 4,
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
  },
  recycleText: {
    textAlign: 'center',
    fontSize: 40,
    textShadowRadius: 3,
    fontWeight: 'bold',
    color: Colors.background,
    backgroundColor: 'transparent',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
  },
  viewStyle: {
    marginTop: hp(2),
    // backgroundColor:'red',
    ...Platform.select({
      ios: {
        marginTop: hp(5),
      },
    }),
  },
  tagLineText: {
    textAlign: 'center',
    fontSize: 22,
    textShadowRadius: 3,
    fontWeight: 'bold',
    marginBottom: Metrics.doubleBaseMargin,
    color: Colors.tagLine,
    elevation: 8,
  },
  nationText: {
    color: Colors.background,
    fontWeight: 'bold',
    fontSize: 20,
  },
  rowLabel: {
    color: Colors.charcoal,
  },
  loginRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    marginTop: -hp(2),
  },
  loginButtonWrapper: {
    flex: 1,
  },
  loginButton: {
    paddingTop: 0,
    backgroundColor: Colors.background,
  },
  loginText: {
    textAlign: 'center',
    color: Colors.landingPage,
    fontSize: 22,
  },
  Text: { textAlign: 'right', color: Colors.background, fontSize: 15 },

  SignUpText: {
    fontWeight: '700',
    textAlign: 'right',
    color: Colors.background,
    fontSize: 15,
  },
  ForgotPasswordText: {
    textAlign: 'left',
    color: Colors.background,
    fontSize: 15,
  },
  centerLogo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: hp(70),
    width: hp(70),
    marginTop:-hp(4),
  },
})
