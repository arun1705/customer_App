import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import { styles } from './BasicDetailsListStyle'
import { Card, Icon } from 'react-native-elements'

export class BasicDetailsList extends Component {
  render() {
    return (
      <View>
        <View style={styles.userDetailsStartRow}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.userDetailsNameText}>VINAY KAHAR</Text>

            <TouchableOpacity>
              <Icon name="edit" color="#17661e" size={23} onPress={() => console.log('hello')} />
            </TouchableOpacity>
          </View>

          <View style={styles.userDetailsText}>
            <Text>Login Id: </Text>
            <Text>vinay</Text>
          </View>

          <View style={styles.userDetailsText}>
            <Text>Aadhar: </Text>
            <Text>WZEXRCTVYBNJHC</Text>
          </View>

          <View style={styles.userDetailsText}>
            <Text>Pan Card: </Text>
            <Text>REGYHIUGYF</Text>
          </View>
        </View>

        <View style={styles.userDetailsRow}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.userDetailsNameText}>VINAY KAHAR</Text>

            <TouchableOpacity>
              <Icon name="edit" color="#17661e" size={23} onPress={() => console.log('hello')} />
            </TouchableOpacity>
          </View>

          <View style={styles.userDetailsText}>
            <Text>Login Id: </Text>
            <Text>vinay</Text>
          </View>

          <View style={styles.userDetailsText}>
            <Text>Aadhar: </Text>
            <Text>WZEXRCTVYBNJHC</Text>
          </View>

          <View style={styles.userDetailsText}>
            <Text>Pan Card: </Text>
            <Text>REGYHIUGYF</Text>
          </View>
        </View>

        <View style={styles.userDetailsRow}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.userDetailsNameText}>VINAY KAHAR</Text>

            <TouchableOpacity>
              <Icon name="edit" color="#17661e" size={23} onPress={() => console.log('hello')} />
            </TouchableOpacity>
          </View>

          <View style={styles.userDetailsText}>
            <Text>Login Id: </Text>
            <Text>vinay</Text>
          </View>

          <View style={styles.userDetailsText}>
            <Text>Aadhar: </Text>
            <Text>WZEXRCTVYBNJHC</Text>
          </View>

          <View style={styles.userDetailsText}>
            <Text>Pan Card: </Text>
            <Text>REGYHIUGYF</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default BasicDetailsList
