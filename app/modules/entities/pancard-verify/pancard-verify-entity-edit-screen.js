import React from 'react'
import { Alert, ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import PancardVerifyActions from './pancard-verify.reducer'
import WalletActions from '../wallet/wallet.reducer'
import { validatePanCard } from '../../../shared/res/Validate'
import styles from './pancard-verify-entity-edit-screen-style'
import { Card, Button, TextInput, HelperText } from 'react-native-paper'
import Colors from '../../../shared/themes/colors'
import ImagePicker from 'react-native-image-picker'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NetWork from '../../../shared/components/offline/NetWork'
import { NetworkContext } from '../../../shared/components/offline/context'

class PancardVerifyEntityEditScreen extends React.Component {
  static contextType = NetworkContext

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.uploadPanCard = this.uploadPanCard.bind(this)
    this.showAlert = this.showAlert.bind(this)

    this.panNumberErrorMsg = ''
    this.userNameErrorMsg = ''
    this.fileDataErrorMsg = ''
    this.validation = true

    this.state = {
      userName: '',
      panNumber: '',
      avatarSource: null,
      fileData: null,
      fileName: '',
      refresh: true,
      isButtonDisabled: false,
    }
  }

  componentDidMount() {
    if (this.props.account) this.props.getWallet(this.props.account.id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetching && !this.props.fetching && this.props.wallet) {
      this.setState({
        userName: this.props.wallet.pancardVerifyNameOnPacard,
        panNumber: this.props.wallet.pancardVerifyParcardNo,
      })
    }

    if (prevProps.updating && !this.props.updating) {
      if (this.props.error) {
        if (this.props.error.status === 400) {
          Alert.alert('Error', this.props.error.title, [{ text: 'OK' }])
        } else {
          Alert.alert('Error', 'Something went wrong uploading PAN details', [{ text: 'OK' }])
        }
      } else {
        this.props.getWallet(this.props.account.id)
        this.setState({
          userName: '',
          panNumber: '',
          avatarSource: null,
          fileData: null,
          fileName: '',
          refresh: true,
        })
        Alert.alert('Success', 'PAN card details submitted successfully for verification.', [{ text: 'OK' }])
      }
    }
  }

  submit = () => {
    const { panNumber, userName, fileData, fileName } = this.state

    this.validation = true
    if (panNumber === '') {
      this.validation = false
      this.panNumberErrorMsg = 'Please enter PAN number'
    } else if (!validatePanCard(panNumber)) {
      this.validation = false
      this.panNumberErrorMsg = 'Please enter valid PAN number'
    }
    if (userName === '' || userName === null) {
      this.validation = false
      this.userNameErrorMsg = 'Please enter name'
    }
    if (fileData === null) {
      this.validation = false
      this.fileDataErrorMsg = 'Please upload PAN image'
    }

    if (this.validation) {
      this.setState({
        isButtonDisabled: true,
      })

      // **** here's the timeout ****
      setTimeout(() => this.setState({ isButtonDisabled: false }), 5000)

      const fileNameUpdate = 'pancard' + fileName.substring(fileName.lastIndexOf('.'))

      let pancardData = null

      if (this.props.wallet && this.props.wallet.pancardVerifyId && this.props.wallet.pancardVerifyId > 0) {
        pancardData = {
          userId: this.props.account ? this.props.account.id : '0',
          parcardNo: panNumber,
          nameOnPacard: userName,
          fileName: fileNameUpdate,
          fileData: fileData,
          displayName: 'pancard',
          pancardUrl: 'pancardUrl',
          status: 'PENDING',
          reason: 'PAN re-submitted for verification.',
          submittedBy: this.props.account ? this.props.account.id : '0',
          id: this.props.wallet.pancardVerifyId,
        }
      } else {
        pancardData = {
          userId: this.props.account ? this.props.account.id : '0',
          parcardNo: panNumber,
          nameOnPacard: userName,
          fileName: fileNameUpdate,
          fileData: fileData,
          displayName: 'pancard',
          pancardUrl: 'pancardUrl',
          status: 'PENDING',
          reason: 'PAN submitted for verification.',
          submittedBy: this.props.account ? this.props.account.id : '0',
          id: null,
        }
      }

      this.props.updatePancardVerify(pancardData)

      this.refresh()
    } else {
      this.refresh()
    }
  }

  refresh() {
    this.setState(prevState => ({
      refresh: !prevState.refresh,
    }))
  }

  uploadPanCard = () => {
    var options = {
      title: 'Select Image',
      quality: 0.15,
      height: 50,
      width: 50,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        // console.log('User cancelled image picker')
      } else if (response.error) {
        // console.log('Image Picker Error: ', response.error)
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri }

        // console.log(response)
        this.setState({
          avatarSource: source,
          fileData: response.data,
          fileName: response.fileName,
        })
        this.fileDataErrorMsg = ''
      }
    })
  }

  showAlert = () => {
    Alert.alert(
      'Info',
      'Since EnCash My Trash involves money related transactions ,it is mandatory for us to verify your PAN card',
      [{ text: 'OK' }],
      { cancelable: false },
    )
  }

  render() {
    const {
      containerStyle,
      card,
      folder,
      userimage,
      checkimage,
      pancardprocess,
      mandatoryText,
      viewStyle,
      inst,
      text,
      button,
      textFieldContainer,
    } = styles

    if (this.props.fetching) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
      <>
        {this.context.isInternetReachable ? (
          <ScrollView keyboardShouldPersistTaps="always" style={containerStyle}>
            {this.props.wallet && this.props.wallet.pancardVerifyStatus && this.props.wallet.pancardVerifyStatus === 'APPROVED' ? (
              <Card style={card}>
                <Text style={{ textAlign: 'center', fontSize: 16, color: Colors.textField, marginTop: 50 }}>Your PAN is verified</Text>

                <View
                  style={{
                    height: 175,
                    backgroundColor: '#47739c',
                    marginRight: 20,
                    marginBottom: 80,
                    marginLeft: 20,
                    marginTop: 10,
                    borderRadius: 10,
                  }}>
                  <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 15, paddingBottom: 15, fontWeight: '700', color: Colors.snow }}>
                    {this.props.wallet.pancardVerifyNameOnPacard}
                  </Text>
                  <Text style={{ fontSize: 14, paddingLeft: 20, color: Colors.snow }}>Permanent Account No</Text>
                  <Text style={{ fontSize: 16, paddingLeft: 20, fontWeight: '700', color: Colors.snow }}>
                    {this.props.wallet.pancardVerifyParcardNo}
                  </Text>

                  <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingTop: 10, paddingRight: 20 }}>
                    <Image source={require('../../../../images/approved.png')} style={checkimage} />
                    <Image source={require('../../../../images/user.png')} style={userimage} />
                  </View>
                </View>
              </Card>
            ) : null}

            {this.props.wallet && this.props.wallet.pancardVerifyStatus && this.props.wallet.pancardVerifyStatus === 'PENDING' ? (
              <Card style={card}>
                <Text style={{ textAlign: 'center', paddingBottom: 40 }}>
                  <Image source={require('../../../../images/card.png')} style={pancardprocess} />
                </Text>
                <Text style={{ textAlign: 'center', fontSize: 16, color: '#374957', marginBottom: 50 }}>
                  PAN verification is under process, it will take 2-3 working days.
                </Text>
              </Card>
            ) : null}

            {(this.props.wallet && this.props.wallet.pancardVerifyStatus && this.props.wallet.pancardVerifyStatus === 'REJECTED') ||
            this.props.wallet === null ||
            (this.props.wallet &&
              (this.props.wallet.pancardVerifyStatus === null ||
                (this.props.wallet.pancardVerifyStatus && this.props.wallet.pancardVerifyStatus === ''))) ? (
              <Card style={card}>
                {this.props.wallet && this.props.wallet.pancardVerifyStatus === 'REJECTED' ? (
                  <View
                    style={{
                      backgroundColor: '#f8d7da',
                      paddingBottom: 10,
                      paddingTop: 10,
                      paddingLeft: 15,
                      paddingRight: 15,
                      marginBottom: 10,
                      borderRadius: 3,
                    }}>
                    <Text style={{ color: '#a83324' }}>{`REJECTED: ${
                      this.props.wallet ? this.props.wallet.pancardVerifyReason : null
                    }`}</Text>
                  </View>
                ) : null}

                <View style={viewStyle}>
                  <Image source={require('../../../../images/card.png')} style={folder} />
                  <Text style={text}>VERIFY YOUR PAN</Text>
                </View>

                {!this.state.fileData ? (
                  <Button style={button} onPress={this.uploadPanCard} mode="contained" uppercase="false" color={'#374957'}>
                    <Text>UPLOAD PAN CARD IMAGE*</Text>
                  </Button>
                ) : (
                  <Button style={button} onPress={this.uploadPanCard} mode="contained" uppercase="false" color={Colors.background}>
                    <Text> PAN CARD UPLOADED</Text>
                  </Button>
                )}
                {this.validation ? null : (
                  <HelperText type="error" visible={!this.validation}>
                    {this.fileDataErrorMsg}
                  </HelperText>
                )}

                <View style={textFieldContainer}>
                  <TextInput
                    underlineColor="green"
                    mode="outlined"
                    theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                    label="Name*"
                    onChangeText={userName => {
                      //   this.setState({ name })
                      this.userNameErrorMsg = ''

                      this.setState({ userName })
                    }}
                    value={this.state.userName}
                    error={this.userNameErrorMsg}
                    blurOnSubmit={false}
                  />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {this.validation ? null : (
                      <HelperText type="error" visible={!this.validation}>
                        {this.userNameErrorMsg}
                      </HelperText>
                    )}
                    <Text style={inst}>As on PAN card</Text>
                  </View>

                  <TextInput
                    underlineColor="green"
                    mode="outlined"
                    maxLength={10}
                    theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                    label="PAN number*"
                    onChangeText={panNumber => {
                      this.panNumberErrorMsg = ''
                      this.setState({ panNumber })
                    }}
                    autoCapitalize="characters"
                    autoComplete="false"
                    value={this.state.panNumber}
                    error={this.panNumberErrorMsg}
                    blurOnSubmit={false}
                  />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {this.validation ? null : (
                      <HelperText type="error" visible={!this.validation}>
                        {this.panNumberErrorMsg}
                      </HelperText>
                    )}
                    <Text style={inst}>10 digit PAN no</Text>
                  </View>

                  <Text style={mandatoryText}>* All fields are mandatory</Text>

                  <TouchableOpacity onPress={this.showAlert}>
                    <Text style={[mandatoryText, { color: 'blue' }]}> Why should I submit my PAN Card?</Text>
                  </TouchableOpacity>

                  <Button
                    style={button}
                    disabled={this.props.fetching || this.state.isButtonDisabled}
                    onPress={this.submit}
                    mode="contained"
                    uppercase="false"
                    color={Colors.background}>
                    <Text>SUBMIT FOR VERIFICATION</Text>
                  </Button>
                </View>
              </Card>
            ) : null}
          </ScrollView>
        ) : (
          <NetWork />
        )}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    pancardVerify: state.pancardVerifies.pancardVerify,
    wallet: state.wallets.wallet,
    fetching: state.wallets.fetchingOne,
    updating: state.pancardVerifies.updating,
    error: state.pancardVerifies.errorUpdating,
    account: state.account.account,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPancardVerify: id => dispatch(PancardVerifyActions.pancardVerifyRequest(id)),
    getWallet: id => dispatch(WalletActions.walletRequest(id)),
    getAllPancardVerifies: options => dispatch(PancardVerifyActions.pancardVerifyAllRequest(options)),
    updatePancardVerify: pancardVerify => dispatch(PancardVerifyActions.pancardVerifyUpdateRequest(pancardVerify)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PancardVerifyEntityEditScreen)
