import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { ApplicationStyles, Metrics, Colors } from '../../../shared/themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.silver,
  },
  centerText: {
    textAlign: 'center',
  },
  viewStyle: { marginBottom: 10, color: Colors.textField, flexDirection: 'row', justifyContent: 'center' },

  mobileText: { fontSize: 18, fontWeight: '500', color: Colors.textField },
  balanceText: { fontSize: 26, color: '#374957' },
  totalbalance: { fontSize: 16, color: Colors.textField },
  subText: { fontSize: 18, fontWeight: '500', paddingTop: 10, textAlign: 'center', width: '50%' },
  button: {
    height: 36,
    backgroundColor: Colors.jhipsterBlue,
    borderColor: Colors.jhipsterBlue,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  },
  textInput: {
    marginHorizontal: 10,
  },
  containerStyle: {
    marginVertical: hp(2),
    marginHorizontal: hp(1.5),
    padding: hp(3),
  },
  buttonWrapper: { height: hp(6), width: hp(26), justifyContent: 'center', alignSelf: 'center' },
  buttonText: {
    textAlign: 'center',
    color: Colors.silver,
    fontSize: 10,
    fontWeight: '700',
  },
  minimumRedemptionText: {
    marginTop:10,
    textAlign: 'center',
  },
})
