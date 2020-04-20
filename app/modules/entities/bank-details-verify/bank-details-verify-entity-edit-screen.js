import React from 'react'
import { Alert, ScrollView, Text, TouchableHighlight, View, Image } from 'react-native'
import { connect } from 'react-redux'
import BankDetailsVerifyActions from './bank-details-verify.reducer'
import WalletActions from '../wallet/wallet.reducer'
import styles from './bank-details-verify-entity-edit-screen-style'
import { Card, Button, TextInput, HelperText } from 'react-native-paper'
import ImagePicker from 'react-native-image-picker'
import { validIfscCode, validateMobNum, validateMobNumLength, validAccountNumber } from '../../../shared/res/Validate'
import Colors from '../../../shared/themes/colors'

class BankDetailsVerifyEntityEditScreen extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.uploadBankDetails = this.uploadBankDetails.bind(this)

    this.bankAccountNoErrorMsg = ''
    this.userNameErrorMsg = ''
    this.confirmBankAccountNoErrorMsg = ''
    this.ifscCodeErrorMsg = ''
    this.mobileNumberErrorMsg = ''
    this.vpaErrorMsg = ''
    this.fileDataErrorMsg = ''
    this.validation = true

    this.state = {
      userName: '',
      bankAccountNo: '',
      confirmBankAccountNo: '',
      ifscCode: '',
      mobileNumber: '',
      vpa: '',
      avatarSource: null,
      fileData: null,
      fileName: '',
      refresh: true,
      isButtonDisabled: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetching && !this.props.fetching && this.props.wallet) {
      this.setState({
        userName: this.props.wallet.bankDetailsVerifyUserName,
        bankAccountNo: this.props.wallet.bankDetailsVerifyBankAccountNo,
        confirmBankAccountNo: this.props.wallet.bankDetailsVerifyBankAccountNo,
        ifscCode: this.props.wallet.bankDetailsVerifyIfsc,
        mobileNumber: this.props.wallet.bankDetailsVerifyPhone,
        vpa: this.props.wallet.bankDetailsVerifyVpa,
      })
    }

    if (prevProps.updating && !this.props.updating) {
      if (this.props.error) {
        if (this.props.error.status === 400) {
          Alert.alert('Error', this.props.error.title, [{ text: 'OK' }])
        } else {
          Alert.alert('Error', 'Something went wrong uploading Bank details', [{ text: 'OK' }])
        }
      } else {
        this.props.getWallet(this.props.account.id)
        this.setState({
          userName: '',
          bankAccountNo: '',
          confirmBankAccountNo: '',
          ifscCode: '',
          mobileNumber: '',
          vpa: '',
          avatarSource: null,
          fileData: null,
          fileName: '',
          refresh: true,
        })
        Alert.alert('Success', 'Bank details submitted successfully for verification.', [{ text: 'OK' }])
      }
    }
  }

  submit = () => {
    const { userName, bankAccountNo, confirmBankAccountNo, ifscCode, mobileNumber, vpa, fileData, fileName } = this.state
    this.validation = true

    if (bankAccountNo === '' || bankAccountNo === null) {
      this.validation = false
      this.bankAccountNoErrorMsg = 'Please enter account no.'
    } else if (!validAccountNumber(bankAccountNo)) {
      this.validation = false
      this.bankAccountNoErrorMsg =
        'Please enter valid acc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ount no.'
    }

    if (userName === '' || userName === null) {
      this.validation = false
      this.userNameErrorMsg = 'Please enter your name'
    }

    if (confirmBankAccountNo === '' || confirmBankAccountNo === null) {
      this.validation = false
      this.confirmBankAccountNoErrorMsg = ' Please enter account no.'
    } else if (bankAccountNo !== confirmBankAccountNo) {
      this.validation = false
      this.confirmBankAccountNoErrorMsg = 'Account no. does not match'
    }

    if (ifscCode === '' || ifscCode === null) {
      this.validation = false
      this.ifscCodeErrorMsg = 'Please Enter IFSC code'
    } else if (!validIfscCode(ifscCode)) {
      this.validation = false
      this.ifscCodeErrorMsg = 'Please Enter Valid IFSC code'
    }

    if (mobileNumber === '' || mobileNumber === null) {
      this.validation = false
      this.mobileNumberErrorMsg = 'Please enter mobile no.'
    }

    if (vpa === '' || vpa === null) {
      this.validation = false
      this.vpaErrorMsg = 'Please enter VPA (UPI ID)'
    }

    if (fileData === null) {
      this.validation = false
      this.fileDataErrorMsg = 'Please Upload account proof'
    }

    // console.log(1,userName)
    if (this.validation) {
      this.setState({
        isButtonDisabled: true,
      })

      // **** here's the timeout ****
      setTimeout(() => this.setState({ isButtonDisabled: false }), 5000)

      const fileNameUpdate = 'bankfile' + fileName.substring(fileName.lastIndexOf('.'))

      let bankData = null

      if (this.props.wallet && this.props.wallet.bankDetailsVerifyId && this.props.wallet.bankDetailsVerifyId > 0) {
        bankData = {
          group: 'CUSTOMER',
          userId: this.props.account ? this.props.account.id : '0',
          phone: mobileNumber,
          userName: userName,
          fileName: fileNameUpdate,
          fileData: fileData,
          vpa: vpa,
          bankAccountNo: bankAccountNo,
          ifsc: ifscCode,
          displayName: 'bankdoc',
          emailId: this.props.account ? this.props.account.login : 'test@test.com',
          status: 'PENDING',
          bankDocUrl: 'bankDocUrl',
          reason: 'Bank details re-submitted for verification.',
          submittedBy: this.props.account ? this.props.account.id : '0',
          id: this.props.wallet.bankDetailsVerifyId,
        }
      } else {
        bankData = {
          group: 'CUSTOMER',
          userId: this.props.account ? this.props.account.id : '0',
          phone: mobileNumber,
          userName: userName,
          fileName: fileNameUpdate,
          fileData: fileData,
          vpa: vpa,
          bankAccountNo: bankAccountNo,
          ifsc: ifscCode,
          displayName: 'bankdoc',
          emailId: this.props.account ? this.props.account.login : 'test@test.com',
          status: 'PENDING',
          bankDocUrl: 'bankDocUrl',
          reason: 'Bank details submitted for verification.',
          submittedBy: this.props.account ? this.props.account.id : '0',
          id: null,
        }
      }

      console.log(bankData)

      this.props.updateBankDetailsVerify(bankData)

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

  uploadBankDetails = () => {
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

        console.log(response)
        this.setState({
          avatarSource: source,
          fileData: response.data,
          fileName: response.fileName,
        })
        this.fileDataErrorMsg = ''
      }
    })
  }

  render() {
    const {
      ContainerStyle,
      viewStyle,
      card,
      text,
      folder,
      verifyText,
      instruction,
      bankprocess,
      checkimage,
      userimage,
      containerStyle,
      mandatoryText,
      inst,
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
      <ScrollView style={ContainerStyle}>
        {this.props.wallet === null ||
        (this.props.wallet && this.props.wallet.pancardVerifyStatus == null) ||
        (this.props.wallet && this.props.wallet.pancardVerifyStatus && this.props.wallet.pancardVerifyStatus === 'PENDING') ||
        (this.props.wallet && this.props.wallet.pancardVerifyStatus && this.props.wallet.pancardVerifyStatus === 'REJECTED') ? (
          <Card style={card}>
            <View style={viewStyle}>
              <Image source={require('../../../../images/bank.png')} style={folder} />
              <Text style={text}>VERIFY YOUR ACCOUNT</Text>
            </View>

            <Text style={[verifyText]}>(Verify your account to withdraw money)</Text>
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
              <Image source={require('../../../../images/error.png')} style={folder} />
              <View style={{ marginLeft: 10 }}>
                <Text>To transfer winnings to your bank account, please complete the steps mentioned below: </Text>
                <View style={{ alignItems: 'baseline' }}>
                  <Text style={instruction}>{'\u2022'} Verify your Email ID </Text>
                  <Text style={instruction}>{'\u2022'} Verify your PAN CARD </Text>
                  <Text style={instruction}>{'\u2022'} Verify your Bank Account Details </Text>
                </View>
              </View>
            </View>
          </Card>
        ) : null}

        {this.props.wallet &&
        this.props.wallet.pancardVerifyStatus &&
        this.props.wallet.pancardVerifyStatus === 'APPROVED' &&
        this.props.wallet.bankDetailsVerifyStatus &&
        this.props.wallet.bankDetailsVerifyStatus === 'APPROVED' ? (
          <Card style={card}>
            <Text style={{ textAlign: 'center', fontSize: 16, color: Colors.textField, marginTop: 40 }}>Your Bank details is verified</Text>

            <View
              style={{
                height: 200,
                backgroundColor: '#47739c',
                marginRight: 10,
                marginBottom: 40,
                marginLeft: 20,
                marginTop: 10,
                borderRadius: 3,
              }}>
              <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 15, paddingBottom: 10, fontWeight: '700', color: Colors.snow }}>
                {this.props.wallet ? this.props.wallet.bankDetailsVerifyUserName : null}
              </Text>
              <Text style={{ fontSize: 12, paddingLeft: 20, color: Colors.snow }}>
                {this.props.wallet ? this.props.wallet.bankDetailsVerifyPhone : null}
              </Text>
              <Text style={{ fontSize: 12, paddingLeft: 20, marginBottom: 15, color: Colors.snow }}>
                {this.props.wallet ? this.props.wallet.bankDetailsVerifyVpa : null}
              </Text>

              <Text style={{ fontSize: 14, paddingLeft: 20, color: Colors.snow }}>Account No</Text>
              <Text style={{ fontSize: 16, paddingLeft: 20, fontWeight: '700', color: Colors.snow }}>
                {this.props.wallet ? this.props.wallet.bankDetailsVerifyBankAccountNo : null}
              </Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingTop: 10, paddingRight: 20 }}>
                <View>
                  <Text style={{ fontSize: 14, color: Colors.snow }}>IFSC Code</Text>
                  <Text style={{ fontSize: 16, fontWeight: '700', color: Colors.snow }}>
                    {this.props.wallet ? this.props.wallet.bankDetailsVerifyIfsc : null}
                  </Text>
                </View>
                <Image source={require('../../../../images/approved.png')} style={checkimage} />
              </View>
            </View>
          </Card>
        ) : null}

        {this.props.wallet &&
        this.props.wallet.pancardVerifyStatus &&
        this.props.wallet.pancardVerifyStatus === 'APPROVED' &&
        this.props.wallet.bankDetailsVerifyStatus &&
        this.props.wallet.bankDetailsVerifyStatus === 'PENDING' ? (
          <Card style={card}>
            <Text style={{ textAlign: 'center', paddingBottom: 50 }}>
              <Image source={require('../../../../images/bank.png')} style={bankprocess} />
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 16, color: '#374957', marginBottom: 50 }}>
              Bank details verification is under process, it will take 2-3 working days.
            </Text>
          </Card>
        ) : null}

        {this.props.wallet &&
        this.props.wallet.pancardVerifyStatus &&
        this.props.wallet.pancardVerifyStatus === 'APPROVED' &&
        ((this.props.wallet.bankDetailsVerifyStatus &&
          (this.props.wallet.bankDetailsVerifyStatus === 'REJECTED' || this.props.wallet.bankDetailsVerifyStatus === '')) ||
          this.props.wallet.bankDetailsVerifyStatus === null) ? (
          <View keyboardShouldPersistTaps="always">
            <Card style={card}>
              {this.props.wallet && this.props.wallet.bankDetailsVerifyStatus === 'REJECTED' ? (
                <View
                  style={{
                    backgroundColor: '#f8d7da',
                    paddingBottom: 10,
                    paddingTop: 10,
                    paddingLeft: 15,
                    paddingRight: 10,
                    marginBottom: 10,
                    borderRadius: 3,
                  }}>
                  <Text style={{ color: '#a83324' }}>{`REJECTED: ${
                    this.props.wallet ? this.props.wallet.bankDetailsVerifyReason : null
                  }`}</Text>
                </View>
              ) : null}

              {!this.state.fileData ? (
                <Button
                  style={[button, { backgroundColor: '#374957' }]}
                  onPress={this.uploadBankDetails}
                  mode="contained"
                  uppercase="false"
                  color={Colors.background}>
                  <Text>UPDATE ACCOUNT PROOF*</Text>
                </Button>
              ) : (
                <Button style={button} onPress={this.uploadBankDetails} mode="contained" uppercase="false" color={Colors.background}>
                  <Text> ACCOUNT PROOF UPLOADED</Text>
                </Button>
              )}
              <Text style={[inst, { fontSize: 14 }]}>
                Upload your bank passbook, check book or bank account statement which shows your
                <Text style={{ fontWeight: 'bold' }}> Name, IFSC code & Account No. </Text>
              </Text>

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
                    this.userNameErrorMsg = ''
                    this.setState({ userName })
                  }}
                  maxLength={100}
                  value={this.state.userName}
                  error={this.userNameErrorMsg}
                  blurOnSubmit={false}
                  // onSubmitEditing={() => {
                  //   this.secondTextInput.focus()
                  // }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  {this.validation ? null : (
                    <HelperText type="error" visible={!this.validation}>
                      {this.userNameErrorMsg}
                    </HelperText>
                  )}
                  <Text style={inst}>As on the proof attached</Text>
                </View>
              </View>

              <View style={textFieldContainer}>
                <TextInput
                  underlineColor="green"
                  mode="outlined"
                  theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                  label="Bank Account Number*"
                  onChangeText={bankAccountNo => {
                    this.bankAccountNoErrorMsg = ''
                    this.setState({ bankAccountNo })
                  }}
                  secureTextEntry
                  maxLength={40}
                  value={this.state.bankAccountNo}
                  error={this.bankAccountNoErrorMsg}
                  blurOnSubmit={false}
                  // onSubmitEditing={() => {
                  //   this.secondTextInput.focus()
                  // }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  {this.validation ? null : (
                    <HelperText type="error" visible={!this.validation}>
                      {this.bankAccountNoErrorMsg}
                    </HelperText>
                  )}
                  <Text style={inst}>As on the proof attached</Text>
                </View>
              </View>

              <View style={textFieldContainer}>
                <TextInput
                  // ref={input => {
                  //   this.secondTextInput = input
                  // }}
                  theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                  underlineColor="green"
                  mode="outlined"
                  label=" Confirm Bank Account Number*"
                  onChangeText={confirmBankAccountNo => {
                    this.confirmBankAccountNoErrorMsg = ''
                    this.setState({ confirmBankAccountNo })
                  }}
                  maxLength={40}
                  value={this.state.confirmBankAccountNo}
                  error={this.confirmBankAccountNoErrorMsg}
                  blurOnSubmit={false}
                  // onSubmitEditing={() => {
                  //   this.thirdTextInput.focus()
                  // }}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  {this.validation ? null : (
                    <HelperText type="error" visible={!this.validation}>
                      {this.confirmBankAccountNoErrorMsg}
                    </HelperText>
                  )}
                  <Text style={inst}>As on the poof attached</Text>
                </View>
              </View>

              <View style={textFieldContainer}>
                <TextInput
                  // ref={input => {
                  //   this.thirdTextInput = input
                  // }}
                  underlineColor="green"
                  mode="outlined"
                  theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                  label="IFSC Code*"
                  onChangeText={ifscCode => {
                    this.ifscCodeErrorMsg = ''
                    this.setState({ ifscCode })
                  }}
                  autoCapitalize="characters"
                  autoComplete="false"
                  value={this.state.ifscCode}
                  error={this.ifscCodeErrorMsg}
                  blurOnSubmit={false}
                  // onSubmitEditing={() => {
                  //   this.fourthTextInput.focus()
                  // }}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  {this.validation ? null : (
                    <HelperText type="error" visible={!this.validation}>
                      {this.ifscCodeErrorMsg}
                    </HelperText>
                  )}
                  <Text style={inst}>As on the poof attached</Text>
                </View>
              </View>

              <View style={textFieldContainer}>
                <TextInput
                  // ref={input => {
                  //   this.fourthTextInput = input
                  // }}
                  underlineColor="green"
                  mode="outlined"
                  maxLength={10}
                  theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                  label="Mobile*"
                  onChangeText={mobileNumber => {
                    this.mobileNumberErrorMsg = ''
                    this.setState({ mobileNumber })
                  }}
                  autoCapitalize="characters"
                  autoComplete="false"
                  value={this.state.mobileNumber}
                  error={this.mobileNumberErrorMsg}
                  blurOnSubmit={false}
                  // onSubmitEditing={() => {
                  //   this.fifthTextInput.focus()
                  // }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  {this.validation ? null : (
                    <HelperText type="error" visible={!this.validation}>
                      {this.mobileNumberErrorMsg}
                    </HelperText>
                  )}
                  <Text style={inst}>For PAYTM Wallet</Text>
                </View>
              </View>

              <View style={textFieldContainer}>
                <TextInput
                  // ref={input => {
                  //   this.fifthTextInput = input
                  // }}
                  underlineColor="green"
                  mode="outlined"
                  maxLength={100}
                  theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                  label="VPA*"
                  onChangeText={vpa => {
                    this.vpaErrorMsg = ''
                    this.setState({ vpa })
                  }}
                  autoCapitalize="characters"
                  autoComplete="false"
                  value={this.state.vpa}
                  error={this.vpaErrorMsg}
                  blurOnSubmit={false}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  {this.validation ? null : (
                    <HelperText type="error" visible={!this.validation}>
                      {this.vpaErrorMsg}
                    </HelperText>
                  )}
                  <Text style={inst}>Your UPI ID</Text>
                </View>
              </View>

              <View style={textFieldContainer}>
                <Text style={[mandatoryText, { marginVertical: 10 }]}>* All fields are mandatory</Text>
                <Button
                  style={button}
                  disabled={this.props.fetching || this.state.isButtonDisabled}
                  onPress={this.submit}
                  mode="contained"
                  uppercase="false"
                  color={Colors.background}>
                  <Text>UPDATE</Text>
                </Button>
              </View>
            </Card>
          </View>
        ) : null}
      </ScrollView>
    )
  }
}
const mapStateToProps = state => {
  return {
    bankDetailsVerify: state.bankDetailsVerifies.bankDetailsVerify,
    wallet: state.wallets.wallet,
    fetching: state.wallets.fetchingOne,
    updating: state.bankDetailsVerifies.updating,
    error: state.bankDetailsVerifies.errorUpdating,
    account: state.account.account,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWallet: id => dispatch(WalletActions.walletRequest(id)),
    getBankDetailsVerify: id => dispatch(BankDetailsVerifyActions.bankDetailsVerifyRequest(id)),
    getAllBankDetailsVerifies: options => dispatch(BankDetailsVerifyActions.bankDetailsVerifyAllRequest(options)),
    updateBankDetailsVerify: bankDetailsVerify => dispatch(BankDetailsVerifyActions.bankDetailsVerifyUpdateRequest(bankDetailsVerify)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BankDetailsVerifyEntityEditScreen)
