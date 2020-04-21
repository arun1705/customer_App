import React from 'react'
import { Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { styles } from './UserDetailsListStyle'
import { Icon } from 'react-native-elements'
import UserDetailsAction from './user-details.reducer'
import PhoneActions from '../phone/phone.reducer'
import AlertMessage from '../../../shared/components/alert-message/alert-message'
import AddressActions from '../address/address.reducer'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native-paper'
import { Colors } from '../../../shared/themes'
import NetWork from '../../../shared/components/offline/NetWork'
import { NetworkContext } from '../../../shared/components/offline/context'

const { containerStyle, text } = styles
class UserDetailsList extends React.Component {
  static contextType = NetworkContext

  constructor(props) {
    super(props)
    this.phoneRow = this.phoneRow.bind(this)
    this.addressRow = this.addressRow.bind(this)
  }

  componentDidMount() {
    this.props.getUserDetail(this.props.account ? this.props.account.id : 0)
    this.props.getPhones(this.props.account ? this.props.account.id : 0)
    this.props.getAddresses(this.props.account ? this.props.account.id : 0)
  }

  keyExtractorPhone = (item, index) => `${index}`

  keyExtractorAddress = (item, index) => `${index}`

  renderPhoneEmpty = () => <AlertMessage style={{ marginTop: 15 }} title="No Phone Number found!!" />

  renderAddressEmpty = () => <AlertMessage style={{ marginTop: 15 }} title="No Address found!!" />

  phoneRow({ item }) {
    return (
      <View style={styles.userDetailsRow} key={item.id}>
        <View>
          <View style={styles.userDetailsText}>
            <Text>Mobile: </Text>
            <Text style={text}>{item.phoneNum}</Text>
          </View>

          <View style={styles.userDetailsText}>
            <Text>Primary: </Text>
            <Text style={text}>{item.primary ? 'YES' : 'NO'}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Icon
              name="edit"
              color="#17661e"
              size={22}
              onPress={() =>
                this.props.navigation.navigate('mobile-details', {
                  phoneId: item.id,
                  userId: this.props.userDetail.id,
                })
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  addressRow({ item }) {
    return (
      <View style={styles.userDetailsRow} key={item.id}>
        <View>
          <View style={styles.userDetailsText}>
            <Text>Primary: </Text>
            <Text style={text}>{item.primary ? 'YES' : 'NO'}</Text>
          </View>
          <View style={styles.addressText}>
            <Text style={text}>
              {item.addressLineOne ? item.addressLineOne : ''}
              {item.addressLineTwo ? ', ' : '...'}{' '}
            </Text>
            <Text style={text}>{item.addressLineTwo ? item.addressLineTwo : ''}...</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Icon
              name="edit"
              color="#17661e"
              size={22}
              onPress={() =>
                this.props.navigation.navigate('address-details', {
                  addressId: item.id,
                  userId: this.props.userDetail.id,
                })
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    const { userDetail } = this.props
    if (!this.props.userDetail) {
      return <ActivityIndicator animating={true} color={Colors.background} size="large" style={{ flex: 1, paddingTop: 50 }} />
    }
    return (
      <ScrollView style={containerStyle}>
        <View>
          <View style={styles.header}>
            {this.context.isInternetReachable ? (
              <>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.userDetailsNameText}>Basic Details</Text>
                  <TouchableOpacity>
                    <Icon
                      name="edit"
                      color="#17661e"
                      size={22}
                      onPress={() =>
                        this.props.navigation.navigate('edit-profile', {
                          userId: userDetail.userId,
                          firstName: userDetail.firstName,
                          lastName: userDetail.lastName,
                          loginId: userDetail.loginId,
                        })
                      }
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.userDetailsStartRow}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.userDetailsNameText}>
                      {userDetail.firstName.toUpperCase()} {userDetail.lastName.toUpperCase()}
                    </Text>
                  </View>

                  <View style={styles.userDetailsText}>
                    <Text>Login Id: </Text>
                    <Text style={text}>{userDetail.loginId}</Text>
                  </View>

                  <View style={styles.userDetailsText}>
                    <Text>Email Id: </Text>
                    <Text style={text}>{userDetail.loginId}</Text>
                  </View>
                </View>

                <View style={styles.header}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.userDetailsNameText}>Phone Details</Text>
                    <TouchableOpacity>
                      <Icon
                        name="add"
                        color="#17661e"
                        size={28}
                        onPress={() =>
                          this.props.navigation.navigate('mobile-details', {
                            phoneId: 0,
                            userId: userDetail.id,
                          })
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <FlatList
                  contentContainerStyle={styles.listContent}
                  data={this.props.phones}
                  renderItem={this.phoneRow}
                  keyExtractor={this.keyExtractorPhone}
                  ListEmptyComponent={this.renderPhoneEmpty}
                />

                <View style={styles.header}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.userDetailsNameText}>Address Details</Text>
                    <TouchableOpacity>
                      <Icon
                        name="add"
                        color="#17661e"
                        size={28}
                        onPress={() =>
                          this.props.navigation.navigate('address-details', {
                            id: 0,
                            userId: userDetail.id,
                          })
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <FlatList
                  contentContainerStyle={styles.listContent}
                  data={this.props.addresses}
                  renderItem={this.addressRow}
                  keyExtractor={this.keyExtractorAddress}
                  ListEmptyComponent={this.renderAddressEmpty}
                />
              </>
            ) : (
              <NetWork />
            )}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    userDetail: state.userDetails.userDetail,
    phones: state.phones.phones,
    addresses: state.addresses.addresses,
    account: state.account.account,
    fetching: state.orderRequests.fetchingOne,
    updating: state.orderRequests.updating,
    error: state.orderRequests.errorUpdating,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserDetail: id => dispatch(UserDetailsAction.userDetailRequest(id)),
    getPhones: id => dispatch(PhoneActions.phoneAllRequest(id)),
    getAddresses: id => dispatch(AddressActions.addressAllRequest(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDetailsList)
