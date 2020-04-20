import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../../shared/themes'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    padding: 20,
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
    padding: 20,
    marginTop: 15,
  },

  userDetailsStartRow: {
    backgroundColor: Colors.snow,
    padding: 20,
  },

  userDetailsText: {
    marginTop: 5,
    fontSize: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  userDetailsNameText: {
    fontSize: 20,
    fontWeight: '400',
  },
})
