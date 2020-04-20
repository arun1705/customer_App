import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import colors from '../../../shared/themes/colors'
import { ApplicationStyles, Colors } from '../../../shared/themes'

export const styles = StyleSheet.create({
  containerStyle: { flex: 1 },
  innercontainer: {
   
    marginVertical: hp(1),
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: colors.background,
    borderRadius: hp(2),
    margin: hp(1),
    padding:hp(1)

  },
  itemStyle: {
    height: hp(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    height: hp(6),
    width: hp(6),
    resizeMode: 'cover',
    // alignSelf:'center',
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
  },
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    padding: 20,
  },
  fab: {
    shadowColor: '#fff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
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

  userDetailsRow: {
    backgroundColor: Colors.snow,
    padding: 10,
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',  
    justifyContent: 'space-between',
    marginBottom: 0.6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },

  header: {
    padding: 8,
    paddingLeft: 20,
    backgroundColor: colors.silver,
    
  },

  headerAddress: {
    padding: 8,
    paddingLeft: 20,
    backgroundColor: colors.silver,
  },

  userDetailsStartRow: {
    backgroundColor: Colors.snow,
    padding: 15,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },

  userDetailsText: {
    marginTop: 5,
    fontSize: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  addressText: {
    marginTop: 5,
    fontSize: 15,
    justifyContent: 'flex-start',
  },

  userDetailsNameText: {
    fontSize: 20,
    fontWeight: '400',
  },
  text: {
    fontSize:15,
    fontWeight:'400',
    color: colors.coal,
  }
  
})
