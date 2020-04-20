import React from 'react'
import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
import { connect } from 'react-redux'
import AppVersionActions from './app-version.reducer'
import { Navigation } from 'react-native-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { appVersionEntityDetailScreen } from '../../../navigation/layouts'

import t from 'tcomb-form-native'

import styles from './app-version-entity-edit-screen-style'

let Form = t.form.Form

class AppVersionEntityEditScreen extends React.Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      formModel: t.struct({
        id: t.maybe(t.Number),
        appName: t.String,
        appUrl: t.String,
        appVersion: t.String,
        activeValue: t.Boolean,
        createdBy: t.maybe(t.Number),
        createdOn: t.maybe(t.Date),
        modifiedBy: t.maybe(t.Number),
        modifiedOn: t.maybe(t.Date),
      }),
      formValue: { id: null },
      formOptions: {
        fields: {
          id: {
            hidden: true,
          },
          appName: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('appUrl').refs.input.focus(),
            testID: 'appNameInput',
          },
          appUrl: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('appVersion').refs.input.focus(),
            testID: 'appUrlInput',
          },
          appVersion: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('activeValue').refs.input.focus(),
            testID: 'appVersionInput',
          },
          activeValue: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('createdBy').refs.input.focus(),
            testID: 'activeValueInput',
          },
          createdBy: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('createdOn').refs.input.focus(),
            testID: 'createdByInput',
          },
          createdOn: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('modifiedBy').refs.input.focus(),
            testID: 'createdOnInput',
          },
          modifiedBy: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('modifiedOn').refs.input.focus(),
            testID: 'modifiedByInput',
          },
          modifiedOn: {
            returnKeyType: 'done',
            onSubmitEditing: () => this.submitForm(),
            testID: 'modifiedOnInput',
          },
        },
      },
      appVersion: {},
      isNewEntity: true,
    }
    if (props.data && props.data.entityId) {
      this.state.isNewEntity = false
      this.props.getAppVersion(props.data.entityId)
    }

    this.submitForm = this.submitForm.bind(this)
    this.formChange = this.formChange.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.appVersion !== prevState.appVersion && !prevState.isNewEntity) {
      return { formValue: entityToFormValue(nextProps.appVersion), appVersion: nextProps.appVersion }
    }
    return null
  }
  componentDidUpdate(prevProps) {
    if (prevProps.updating && !this.props.updating) {
      if (this.props.error) {
        Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
      } else {
        this.props.getAllAppVersions({ page: 0, sort: 'id,asc', size: 20 })
        const entityId = this.props.appVersion.id
        const alertOptions = [{ text: 'OK' }]
        if (!this.state.formValue.id) {
          alertOptions.push({
            text: 'View',
            onPress: appVersionEntityDetailScreen.bind(this, { entityId }),
          })
        }
        Navigation.pop(this.props.componentId)
        Alert.alert('Success', 'Entity saved successfully', alertOptions)
      }
    }
  }

  submitForm() {
    // call getValue() to get the values of the form
    const appVersion = this.form.getValue()
    if (appVersion) {
      // if validation fails, value will be null
      this.props.updateAppVersion(formValueToEntity(appVersion))
    }
  }

  formChange(newValue) {
    this.setState({
      formValue: newValue,
    })
  }

  render() {
    if (this.props.fetching) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
      <KeyboardAwareScrollView>
        <ScrollView style={styles.container} testID="entityScrollView">
          <Form
            ref={c => {
              this.form = c
            }}
            type={this.state.formModel}
            options={this.state.formOptions}
            value={this.state.formValue}
            onChange={this.formChange}
          />
          <TouchableHighlight style={styles.button} onPress={this.submitForm} underlayColor="#99d9f4" testID="submitButton">
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </ScrollView>
      </KeyboardAwareScrollView>
    )
  }
}
// convenience methods for customizing the mapping of the entity to/from the form value
const entityToFormValue = value => {
  if (!value) {
    return {}
  }
  return {
    id: value.id || null,
    appName: value.appName || null,
    appUrl: value.appUrl || null,
    appVersion: value.appVersion || null,
    activeValue: value.activeValue || null,
    createdBy: value.createdBy || null,
    createdOn: value.createdOn || null,
    modifiedBy: value.modifiedBy || null,
    modifiedOn: value.modifiedOn || null,
  }
}
const formValueToEntity = value => {
  const entity = {
    id: value.id || null,
    appName: value.appName || null,
    appUrl: value.appUrl || null,
    appVersion: value.appVersion || null,
    activeValue: value.activeValue || null,
    createdBy: value.createdBy || null,
    createdOn: value.createdOn || null,
    modifiedBy: value.modifiedBy || null,
    modifiedOn: value.modifiedOn || null,
  }
  return entity
}

const mapStateToProps = state => {
  return {
    appVersion: state.appVersions.appVersion,
    fetching: state.appVersions.fetchingOne,
    updating: state.appVersions.updating,
    error: state.appVersions.errorUpdating,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAppVersion: id => dispatch(AppVersionActions.appVersionRequest(id)),
    getAllAppVersions: options => dispatch(AppVersionActions.appVersionAllRequest(options)),
    updateAppVersion: appVersion => dispatch(AppVersionActions.appVersionUpdateRequest(appVersion)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppVersionEntityEditScreen)
