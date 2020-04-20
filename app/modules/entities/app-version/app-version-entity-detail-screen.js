import React from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import { appVersionEntityEditScreen } from '../../../navigation/layouts'

import AppVersionActions from './app-version.reducer'
import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
import styles from './app-version-entity-detail-screen-style'

class AppVersionEntityDetailScreen extends React.Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.props.getAppVersion(this.props.data.entityId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deleting && !this.props.deleting) {
      if (this.props.errorDeleting) {
        Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
      } else {
        this.props.getAllAppVersions()
        Navigation.pop(this.props.componentId)
      }
    }
  }

  confirmDelete = () => {
    Alert.alert(
      'Delete AppVersion?',
      'Are you sure you want to delete the AppVersion?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => {
            this.props.deleteAppVersion(this.props.data.entityId)
          },
        },
      ],
      { cancelable: false },
    )
  }

  render() {
    if (!this.props.appVersion) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <Text>ID: {this.props.appVersion.id}</Text>
        <Text testID="appName">AppName: {this.props.appVersion.appName}</Text>
        <Text testID="appUrl">AppUrl: {this.props.appVersion.appUrl}</Text>
        <Text testID="appVersion">AppVersion: {this.props.appVersion.appVersion}</Text>
        <Text testID="activeValue">ActiveValue: {this.props.appVersion.activeValue}</Text>
        <Text testID="createdBy">CreatedBy: {this.props.appVersion.createdBy}</Text>
        <Text testID="createdOn">CreatedOn: {String(this.props.appVersion.createdOn)}</Text>
        <Text testID="modifiedBy">ModifiedBy: {this.props.appVersion.modifiedBy}</Text>
        <Text testID="modifiedOn">ModifiedOn: {String(this.props.appVersion.modifiedOn)}</Text>
        <RoundedButton text="Edit" onPress={appVersionEntityEditScreen.bind(this, { entityId: this.props.appVersion.id })} />
        <RoundedButton text="Delete" onPress={this.confirmDelete} />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    appVersion: state.appVersions.appVersion,
    deleting: state.appVersions.deleting,
    errorDeleting: state.appVersions.errorDeleting,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAppVersion: id => dispatch(AppVersionActions.appVersionRequest(id)),
    getAllAppVersions: options => dispatch(AppVersionActions.appVersionAllRequest(options)),
    deleteAppVersion: id => dispatch(AppVersionActions.appVersionDeleteRequest(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppVersionEntityDetailScreen)
