import React, { PureComponent } from 'react'
import { View, Text, Dimensions, StyleSheet, SafeAreaView } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import DropdownAlert from 'react-native-dropdownalert'
const { width } = Dimensions.get('window')
import { NetworkContext } from './context'

export class NetworkProvider extends React.Component {
  state = {
    isInternetReachable: true,
  }

  componentDidMount() {
    this.unsubscribe = NetInfo.addEventListener(state => {
      if (state.isInternetReachable === true && this.state.isInternetReachable === false) {
        this.dropDownAlertRef.alertWithType('success', 'Network Online', 'Your device seems to be online.')
      } else if (state.isInternetReachable === false && this.state.isInternetReachable === true) {
        this.dropDownAlertRef.alertWithType('error', 'Network Offline', 'Your device seems to be offline.')
      }

      this.setState({
        isInternetReachable: !!state.isInternetReachable,
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <NetworkContext.Provider value={this.state}>
        {this.props.children}
        <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
      </NetworkContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
