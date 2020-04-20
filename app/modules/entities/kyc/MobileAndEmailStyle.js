import { StyleSheet, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import colors from '../../../shared/themes/colors'
import { ApplicationStyles, Colors } from '../../../shared/themes'

export const styles = StyleSheet.create({
  containerStyle: { flex: 1 },
  card: {
    //   flex:0.98,
    marginVertical: hp(2),
    marginHorizontal: hp(1.5),
    padding: hp(1),
    borderWidth: 2,
    borderRadius: hp(1),
    borderColor: 'white',
  },
  email: {
    height: hp(5),
    width: hp(5),
    //   margin:hp(1)
  },
  textbox:{
     flexDirection: 'column', paddingLeft: hp(1)  
  },
  text: {
    fontSize: 17,
    margin: hp(2),
    fontWeight: '900',
    //   fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined
  },
  emailText: {
    fontSize: 17,
    marginLeft: hp(2),
  },
  row: {
    margin: hp(1),
  },
  resendText: {
    marginVertical: hp(1),
  },
  viewStyle: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginHorizontal: hp(1),
    marginVertical: hp(1.5), 
  },
})
