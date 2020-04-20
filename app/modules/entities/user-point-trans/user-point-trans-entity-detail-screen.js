import React from 'react'
import { Switch, ScrollView, Alert, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Card, Icon } from 'react-native-elements'
import UserPointTranActions from './user-point-trans.reducer'
import styles from './user-point-trans-entity-detail-screen-style'
import Accordion from 'react-native-collapsible/Accordion'
import * as Animatable from 'react-native-animatable'

const CONTENT = [
  {
    title: '24 pts',
    content: { TxiD: 111, TxDate: ' 26 jan 9:50 pm' },
  },
  {
    title: '34 pts',
    content: { TxiD: 112, TxDate: ' 26 jan 9:50 pm' },
  },
  {
    title: '24 pts',
    content: { TxiD: 113, TxDate: ' 26 jan 9:50 pm' },
  },
  {
    title: '23 pts',
    content: { TxiD: 114, TxDate: ' 26 jan 9:50 pm' },
  },
  {
    title: '29 pts',
    content: { TxiD: 115, TxDate: ' 26 jan 9:50 pm' },
  },
]

class UserPointTranEntityDetailScreen extends React.Component {
  constructor(props) {
    super(props)
    // this.props.getUserPointTran(this.props.data.entityId)
    this.state = {
      activeSections: [],
      collapsed: true,
      multipleSelect: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deleting && !this.props.deleting) {
      if (this.props.errorDeleting) {
        Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
      } else {
        this.props.getAllUserPointTrans()
      }
    }
  }

  confirmDelete = () => {
    Alert.alert(
      'Delete UserPointTran?',
      'Are you sure you want to delete the UserPointTran?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => {
            this.props.deleteUserPointTran(this.props.data.entityId)
          },
        },
      ],
      { cancelable: false },
    )
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
    })
  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    })
  }

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View duration={400} style={[styles.header]} transition="backgroundColor">
        <Card containerStyle={styles.containerStyle}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.headerText}>{section.title}</Text>
            <Icon name="angle-down" type="font-awesome" color="#17661e" size={22} />
          </View>
        </Card>
      </Animatable.View>
    )
  }

  renderContent(section, _, isActive) {
    console.log(section)

    return (
      <Animatable.View duration={400} style={[styles.content]} transition="backgroundColor">
        <View style={styles.contentDetails}>
          <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>TxiD : {section.content.TxiD}</Animatable.Text>
          <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>TxDate : {section.content.TxDate}</Animatable.Text>
        </View>
      </Animatable.View>
    )
  }

  render() {
    const { multipleSelect, activeSections } = this.state
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    userPointTran: state.userPointTrans.userPointTran,
    deleting: state.userPointTrans.deleting,
    errorDeleting: state.userPointTrans.errorDeleting,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserPointTran: id => dispatch(UserPointTranActions.userPointTranRequest(id)),
    getAllUserPointTrans: options => dispatch(UserPointTranActions.userPointTranAllRequest(options)),
    deleteUserPointTran: id => dispatch(UserPointTranActions.userPointTranDeleteRequest(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPointTranEntityDetailScreen)
