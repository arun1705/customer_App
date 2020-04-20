import React, { Component } from 'react'
import { View, Text, Linking, StatusBar, Image, FlatList, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import UserDetailsAction from '../modules/entities/user-details/user-details.reducer'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Card } from 'react-native-paper'
import colors from '../shared/themes/colors'
import { styles } from './ProfileStyles'
const { item, title, cardStyle, imageStyle, img, headerContainer, textName, welcomeText, overlay } = styles

import AppConfig from '../config/app-config'

class ProfileLandingScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'PROFILE', id: 1, path: require('../../images/man.png') },
        { id: 2, name: 'KYC', path: require('../../images/docverify.png') },
        { name: 'MY WALLET', id: 3, path: require('../../images/wallet1.png') },
        { name: 'INFO', id: 4, path: require('../../images/info1.png') },
        { name: 'RAISE REQUEST', id: 5, path: require('../../images/createOrder.png') },
        { id: 6, name: 'REQUEST HISTORY', path: require('../../images/check-list.png') },
      ],
      netInfo: true,
    }
  }

  componentDidMount() {
    this.props.getUserDetail(this.props.account ? this.props.account.id : 0)
  }
  renderCard = data => {
    return (
      <Card
        style={item}
        onPress={() => {
          switch (data.id) {
            case 1:
              this.props.navigation.navigate('user-profile')
              break
            case 2:
              this.props.navigation.navigate('kyc')
              break
            case 3:
              this.props.navigation.navigate('rewards')
              break
            case 4:
              Linking.openURL(AppConfig.apiUrl + 'info')
              break
            case 5:
              this.props.navigation.navigate('raise-request')
              break
            case 6:
              this.props.navigation.navigate('request-history')
              break
          }
        }}>
        <Image style={img} resizeMode="contain" source={data.path} />
        <Text style={title}>{data.name}</Text>
      </Card>
    )
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <StatusBar backgroundColor={colors.statusBar} barStyle="light-content" />
        <View style={cardStyle}>
          <View style={headerContainer}>
            <View>
              <Text style={textName}>{this.props.userDetail ? this.props.userDetail.firstName.toUpperCase() : ''} </Text>
              <Text style={welcomeText}>Be a better segregator</Text>
            </View>
            {/* <Image source={require('../../images/0.jpg')} borderRadius={hp(4.5)} style={imageStyle} resizeMode="cover" /> */}
          </View>
        </View>
        <View style={overlay}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id.toString()}
            horizontal={false}
            numColumns={2}
            renderItem={({ item, index }) => this.renderCard(item)}
          />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  account: state.account.account,
  userDetail: state.userDetails.userDetail,
})

const mapDispatchToProps = dispatch => {
  return {
    getUserDetail: id => dispatch(UserDetailsAction.userDetailRequest(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileLandingScreen)
