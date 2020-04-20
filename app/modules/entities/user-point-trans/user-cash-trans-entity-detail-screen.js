import React from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'

import UserPointTranActions from './user-point-trans.reducer'
import { List, Checkbox } from 'react-native-paper'
import styles from './user-point-trans-entity-detail-screen-style'

class UserCashTranEntityDetailScreen extends React.Component {
  constructor(props) {
    super(props)
    // this.props.getUserPointTran(this.props.data.entityId)
    this.state = {
      expanded: true,
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

  render() {
    return (
      <ScrollView style={styles.container}>
        <List.Section title="Accordions">
          <List.Accordion title="Uncontrolled Accordion" left={props => <List.Icon {...props} icon="folder" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={this.state.expanded}
            onPress={this._handlePress}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
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
)(UserCashTranEntityDetailScreen)
