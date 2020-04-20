import { StyleSheet } from 'react-native'

import { ApplicationStyles, Metrics, Colors } from '../../../shared/themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex:1
    // backgroundColor: '#F5FCFF',
    // paddingTop: Constants.statusBarHeight,
  },
  containerStyle: {
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    // backgroundColor: '#F5FCFF',
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    paddingLeft: 14,
    paddingRight: 14,
  },
  contentDetails: {
    padding: 15,
    backgroundColor: '#d6d8da',
    borderColor: '#e1e8ee',
    borderBottomWidth: 1.5,
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderRightWidth: 1.5,
    borderLeftWidth: 1.5
  },

  txdetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  active: {
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text:{
    fontSize:12
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
