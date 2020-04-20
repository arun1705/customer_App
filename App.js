//tracking

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import createStore from './app/shared/reducers'
import StartScreen from './app/navigation/StartScreen'
import { NetworkProvider } from './app/shared/components/offline/networkProvider'

import { Provider } from 'react-redux'

const getActiveRouteName = state => {
  const route = state.routes[state.index]

  if (route.state) {
    return getActiveRouteName(route.state)
  }

  return route.name
}

const store = createStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NetworkProvider>
          <NavigationContainer>
            <StartScreen />
          </NavigationContainer>
        </NetworkProvider>
      </Provider>
    )
  }
}
