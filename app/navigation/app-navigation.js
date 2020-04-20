import { createAppContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LaunchScreen from '../container/launch-screen'

// import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      // headerStyle: styles.header
    },
  },
)

export default createAppContainer(PrimaryNav)
