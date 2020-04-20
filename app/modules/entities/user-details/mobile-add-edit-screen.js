import React, { Component } from 'react'
import { Text, View, StatusBar, ScrollView, Switch, TouchableOpacity } from 'react-native'
import { TextInput as TextInputPaper, Button, HelperText, Card, Title, Paragraph } from 'react-native-paper'
import styles from './EditMobileDetailsStyle'
import { validateEmail, validateMobNum, validateMobNumLength } from '../../../shared/res/Validate'
// import colors from '../../../shared/themes/colors';
import { Colors, Metrics } from '../../../shared/themes'
import Accordion from 'react-native-collapsible/Accordion'
import * as Animatable from 'react-native-animatable'
import { Dropdown } from 'react-native-material-dropdown'

import Collapsible from 'react-native-collapsible'
const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. '
let data = [
  {
    value: 'Home',
  },
  {
    value: 'Work',
  },
  {
    value: 'Primary',
  },
]

const CONTENT = [
  {
    title: 'primary',
    content: BACON_IPSUM,
  },
  {
    title: 'Home',
    content: BACON_IPSUM,
  },
  {
    title: 'Personal',
    content: BACON_IPSUM,
  },
]
const {
  container1,
  container,
  selectors,
  active,
  inactive,
  buttonWrapper,
  buttonText,
  row,
  box,
  multipleToggle,
  header,
  selector,
  content,
  headerText,
  multipleToggle__title,
  selectTitle,
  activeSelector,
  type,
} = styles

export class EditMobileDetails extends Component {
  constructor(props) {
    super(props)
    // Navigation.events().bindComponent(this)
    this.mobileNoErrorMsg = ''
    this.submitUpdate = this.submitUpdate.bind(this)

    this.typeErrorMsg = ''
    this.lastNameErrorMsg = ''
    this.emailIdErrorMsg = ''
    this.state = {
      type: '',
      mobile: '',
      refresh: true,
    }
  }
  refresh() {
    this.setState(prevState => ({
      refresh: !prevState.refresh,
    }))
  }
  submitUpdate() {
    const { mobile, type } = this.state
    this.validation = true

    if (mobile === '') {
      this.mobileNoErrorMsg = 'Please Enter Mobile No'
      this.validation = false
    } else if (!validateMobNumLength(mobile)) {
      this.mobileNoErrorMsg = 'Mobile No is not valid'
      this.validation = false
    } else if (!validateMobNum(mobile)) {
      this.mobileNoErrorMsg = 'Mobile No is not valid'
      this.validation = false
    }

    if (type === '') {
      this.typeErrorMsg = 'Enter the  first name'
      this.validation = false
    }

    if (this.validation) {
      // alert("success")
      const userDetail = { type: type, mobile: mobile }
      console.log('val', userDetail)
      // this.props.register(userDetail)
      // }
    } else {
      this.refresh()
    }
  }

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    })
  }
  Selectedtype(value, index, data) {
    this.setState({
      type: value,
    })
  }
  render() {
    const { multipleSelect, activeSections } = this.state
    return (
      <View style={container}>
        <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
        <View style={row}>
          <View style={type}>
            <Dropdown
              label="Type"
              data={data}
              value={this.state.type}
              selectedItemColor={Colors.statusBar}
              onChangeText={this.Selectedtype.bind(this)}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <TextInputPaper
              underlineColor="green"
              mode="outlined"
              keyboardType="numeric"
              maxLength={10}
              theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
              label="Mobile"
              onChangeText={mobile => {
                this.mobileNoErrorMsg = ''
                this.setState({ mobile: mobile.replace(/[^0-9]/g, '') })
              }}
              value={this.state.mobile}
              error={this.mobileNoErrorMsg}
            />
          </View>
        </View>

        <Button mode="contained" uppercase="false" color={Colors.background} style={buttonWrapper} onPress={this.submitUpdate}>
          <Text style={buttonText}>Add </Text>
        </Button>
      </View>
    )
  }
}

export default EditMobileDetails
