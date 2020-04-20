import React, { useState } from 'react'
import { View, Text, Image, Alert, ScrollView, TouchableOpacity } from 'react-native'
import { Card, Button, TextInput, HelperText } from 'react-native-paper'
import ImagePicker from 'react-native-image-picker'
import DocumentPicker from 'react-native-document-picker'
import { validIfscCode, validateMobNum, validateMobNumLength, validAccountNumber } from '../../../shared/res/Validate'

import Colors from '../../../shared/themes/colors'
import { styles } from './BankStyle'
const { ContainerStyle, viewStyle, card, text, folder, verifyText, instruction, containerStyle, mandatoryText, inst, button, textFieldContainer } = styles
const Bank = () => {
  const [account, changeAccount] = useState('')
  const [accountErrorMsg, changeAccountErrorMsg] = useState('')

  const [accountConfirm, changeAccountConfirm] = useState('')
  const [accountConfirmErrorMsg, changeAccountConfirmErrorMsg] = useState('')

  const [AccountProof, changeAccountProof] = useState('')
  const [AccountProofMsg, changeAccountProofErrorMsg] = useState('')

  const [bank, changeBank] = useState('')
  const [bankErrorMsg, changeBankErrorMsg] = useState('')

  const [ifsc, changeIfsc] = useState('')
  const [ifscErrorMsg, changeifscErrorMsg] = useState('')

  const [branch, changeBranch] = useState('')
  const [branchErrorMsg, changeBranchErrorMsg] = useState('')

  const [validation, changeValidation] = useState(true)
  
  uploadDoc = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
      })
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      )
      changeAccountProof(res.uri)
      changeAccountProofErrorMsg('')
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err
      }
    }

 }

  submit = () => {
    let validation = true
   
    if (account === '') {
      validation = false
      changeValidation(false)
      changeAccountErrorMsg('Please Enter Account No')
    } else if (!validAccountNumber(account)) {
      validation = false
      changeValidation(false)
      changeAccountErrorMsg('Please Enter valid Account No')
    }
    if (accountConfirm === '') {
      changeValidation(false)
      validation = false
      changeAccountConfirmErrorMsg(' Please Enter Account No')
    } else if (account !== accountConfirm) {
      changeValidation(false)
      validation = false
      changeAccountConfirmErrorMsg('Account does not Match')
    }

    if (AccountProof === '') {
      validation = false
      changeValidation(false)
      changeAccountProofErrorMsg('Please Upload PAN pic')
    }

    if (ifsc === '') {
      validation = false
      changeValidation(false)
      changeifscErrorMsg('Please Enter IFSC code')
    } else if (!validIfscCode(ifsc)) {
      validation = false
      changeValidation(false)
      changeifscErrorMsg('Please Enter Valid IFSC code')
    }

    if (bank === '') {
      validation = false
      changeValidation(false)
      changeBankErrorMsg('Please Enter Bank Name')
    }

    if (branch === '') {
      validation = false
      changeValidation(false)
      changeBranchErrorMsg('Please Enter Branch Name')
    }
    if (validation) {
      alert('service call')
    }
  }

  return (
    <ScrollView style={ContainerStyle}>
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
              <Text style={instruction}>{'\u2022'}  Verify your Email ID </Text>
              <Text style={instruction}>{'\u2022'}  Verify your PAN CARD </Text>
              <Text style={instruction}>{'\u2022'}  Verify your Bank Account Details </Text>
            </View>
          </View>
        </View>
      </Card>
      <View keyboardShouldPersistTaps="always">
        <Card style={card}>
          {!AccountProof ? (
            <Button
              style={[button, { backgroundColor: '#374957' }]}
              onPress={uploadDoc}
              mode="contained"
              uppercase="false"
              color={Colors.background}>
              <Text>UPDATE ACCOUNT PROOF*</Text>
            </Button>
          ) : (
            <Button style={button} onPress={uploadDoc} mode="contained" uppercase="false" color={Colors.background}>
              <Text> ACCOUNT PROOF UPLOADED</Text>
            </Button>
          )}
          <Text style={[inst, { fontSize: 14 }]}>
            Upload your bank passbook, check book or bank account statement which shows your 
            <Text style={{ fontWeight: 'bold' }}> Name, IFSC code & Account No. </Text>
          </Text>
          {validation ? null : (
            <HelperText type="error" visible={!validation}>
              {AccountProofMsg}
            </HelperText>
          )}

          <View style={textFieldContainer}>
            <TextInput
              underlineColor="green"
              mode="outlined"
              theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
              label="Bank Account Number*"
              onChangeText={name => {
                changeAccountErrorMsg('')
                changeAccount(name)
              }}
              secureTextEntry
              keyboardType="numeric"
              maxLength={18}
              value={account}
              error={accountErrorMsg}
              blurOnSubmit={false}
              onSubmitEditing={() => {
                this.secondTextInput.focus()
              }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {validation ? null : (
              <HelperText type="error" visible={!validation}>
                {accountErrorMsg}
              </HelperText>
            )}
            <Text style={inst}>as on the proof attached</Text>
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
              label=" Retype Bank Account Number*"
              onChangeText={name => {
                changeAccountConfirmErrorMsg('')
                changeAccountConfirm(name)
              }}
              keyboardType="numeric"
              maxLength={18}
              value={accountConfirm}
              error={accountConfirmErrorMsg}
              blurOnSubmit={false}
              // onSubmitEditing={() => {
              //   this.thirdTextInput.focus()
              // }}
            />
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {validation ? null : (
              <HelperText type="error" visible={!validation}>
                {accountConfirmErrorMsg}
              </HelperText>
            )}
            <Text style={inst}>as on the poof attached</Text>
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
              onChangeText={name => {
                changeifscErrorMsg('')
                changeIfsc(name)
              }}
              autoCapitalize="characters"
              autoComplete="false"
              value={ifsc}
              error={ifscErrorMsg}
              // onSubmitEditing={() => {
              //   this.fourthTextInput.focus()
              // }}
              blurOnSubmit={false}
            />

            

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {validation ? null : (
              <HelperText type="error" visible={!validation}>
                {ifscErrorMsg}
              </HelperText>
            )}
            <Text style={inst}>as on the poof attached</Text>
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
              label="Bank Name*"
              onChangeText={name => {
                changeBankErrorMsg('')
                changeBank(name)
              }}
              autoCapitalize="characters"
              autoComplete="false"
              value={bank}
              error={bankErrorMsg}
              blurOnSubmit={false}
              // onSubmitEditing={() => {
              //   this.fifthTextInput.focus()
              // }}
            />

            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {validation ? null : (
              <HelperText type="error" visible={!validation}>
                {bankErrorMsg}
              </HelperText>
            )}
            <Text style={inst}>as on the poof attached</Text>
            </View>
            </View>
            <View style={textFieldContainer}>
            <TextInput
              // ref={input => {
              //   this.fifthTextInput = input
              // }}
              underlineColor="green"
              mode="outlined"
              maxLength={10}
              theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
              label="Branch Name*"
              onChangeText={name => {
                changeBranchErrorMsg('')
                changeBranch(name)
              }}
              autoCapitalize="characters"
              autoComplete="false"
              value={branch}
              error={branchErrorMsg}
              blurOnSubmit={false}
            />

            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {validation ? null : (
              <HelperText type="error" visible={!validation}>
                {branchErrorMsg}
              </HelperText>
            )}
            <Text style={inst}>as on the poof attached</Text>
            </View>

            </View>

            <View style={textFieldContainer}>
            <TextInput
              // ref={input => {
              //   this.fifthTextInput = input
              // }}
              underlineColor="green"
              mode="outlined"
              maxLength={10}
              label="Mobile Number*"
              theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
              
              onChangeText={name => {
                changeBranchErrorMsg('')
                changeBranch(name)
              }}
              autoCapitalize="characters"
              autoComplete="false"
              value={branch}
              error={branchErrorMsg}
              blurOnSubmit={false}
            />

            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {validation ? null : (
              <HelperText type="error" visible={!validation}>
                {branchErrorMsg}
              </HelperText>
            )}
            <Text style={inst}>for PAYTM Wallet</Text>
            </View>
            </View>

            <View style={textFieldContainer}>
            <TextInput
              // ref={input => {
              //   this.fifthTextInput = input
              // }}
              underlineColor="green"
              mode="outlined"
              maxLength={10}
              label="VPA*"
              theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
              
              onChangeText={name => {
                changeBranchErrorMsg('')
                changeBranch(name)
              }}
              autoCapitalize="characters"
              autoComplete="false"
              value={branch}
              error={branchErrorMsg}
              blurOnSubmit={false}
            />

            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {validation ? null : (
              <HelperText type="error" visible={!validation}>
                {branchErrorMsg}
              </HelperText>
            )}
            <Text style={inst}>your UPI ID</Text>
            </View>
            </View>
            <View style={textFieldContainer}>
            <Text style={[mandatoryText, { marginVertical: 10 }]}>* All fields are mandatory</Text>
            <Button style={button} onPress={submit} mode="contained" uppercase="false" color={Colors.background}>
              <Text>UPDATE</Text>
            </Button>
          </View>
        </Card>
      </View>
    </ScrollView>
  )
}

export default Bank
