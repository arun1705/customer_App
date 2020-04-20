import { StyleSheet } from 'react-native'

import { ApplicationStyles, Metrics, Colors } from '../../../shared/themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
  },
  label: {
    textAlign: 'center',
    color: Colors.snow,
  },
  listContent: {
    marginTop: Metrics.baseMargin,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  textViewStyle: {
    marginVertical: 5,
  },
  subStyle: { fontSize: 18, fontWeight: '500',alignSelf:'center',backgroundColor:'red' },
  labelTextStyle: { fontSize: 16 },

  deleteButtonStyle: {
    backgroundColor: Colors.snow,
    marginBottom: 10,
    borderColor: Colors.fire,
    borderWidth: 1,
    marginTop: 10,
  },
  buttonTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.fire,
  },
  buttonStyle: { borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 0, fontSize: 28 },
})
