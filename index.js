// import './app/config'
// import { registerScreensAndStartApp } from './app/navigation/layouts'

// // this registers the screens and starts the react-native-navigation process
// registerScreensAndStartApp()

import { AppRegistry, YellowBox } from 'react-native'
import App from './App'
YellowBox.ignoreWarnings(['Require cycle:', 'Remote debugger', 'VirtualizedLists should never be nested'])

AppRegistry.registerComponent('customer_app_v4', () => App)
