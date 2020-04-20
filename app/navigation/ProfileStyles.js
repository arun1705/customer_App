import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { StyleSheet } from 'react-native'
import colors from '../shared/themes/colors'

export const styles = StyleSheet.create({
  containerStyle: { flex: 1, backgroundColor: 'white' },
  image: { height: hp('26%'), width: wp('110%'), resizeMode: 'contain' },
  imageIos: { height: hp('20%'), width: wp('110%'), resizeMode: 'contain' },
  buttonStyle: {
    backgroundColor: 'red',
    marginHorizontal: hp(2),
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 5,
  },
  cardStyle: {
    // position: 'absolute',

    // zIndex: 1,
    margin: 0,
    // marginTop: -10,
    height: hp(22),
    width: '100%',
    marginBottom: hp(1),
    // alignItems: 'center',
    backgroundColor: colors.background,
    borderWidth: 10,
    // marginHorizontal:5,
    borderColor: colors.background,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  img: { height: hp(11), width: wp(30), alignSelf: 'center', margin: 15 },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 8 },
  imageStyle: {
    height: hp(9),
    width: hp(9),
    borderRadius: hp(4.5),
    backgroundColor: 'white',
  },
  textName: { fontSize: 32, fontWeight: '600', color: colors.snow },
  item: {
    height: hp(20),
    width: wp(30),
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
    margin: hp(3),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  welcomeText: { fontSize: 18, fontWeight: '500', color: colors.snow },
  title: {
    textAlign: 'center',
    color: colors.coal,
    fontWeight: 'bold',
    fontSize: 14
  },
  overlay: {
    top: -hp(8),
    elevation: 9,
  },
})
