import React from 'react'
import { FlatList, Text, ActivityIndicator, TouchableOpacity, View, Switch, ScrollView, Alert } from 'react-native'
import { connect } from 'react-redux'
import WalletTxActions from './wallet-tx.reducer'
import styles from './wallet-tx-entity-screen-style'
import { Card, Icon } from 'react-native-elements'
import Accordion from 'react-native-collapsible/Accordion'
import * as Animatable from 'react-native-animatable'
import AlertMessage from '../../../shared/components/alert-message/alert-message'

import { Colors } from '../../../shared/themes'
import NetWork from '../../../shared/components/offline/NetWork'
import { NetworkContext } from '../../../shared/components/offline/context'
class WalletTxEntityScreen extends React.PureComponent {
  static contextType = NetworkContext

  constructor(props) {
    super(props)

    this.state = {
      page: 0,
      sort: 'requestedOn,desc',
      size: 20,
      done: false,
      searchTerm: '',
      dataObjects: [],
      activeSections: [],
      collapsed: true,
      multipleSelect: false,
    }
  }

  componentDidMount() {
    this.fetchWalletTxes()
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.fetching)
    if (prevProps.fetching && !this.props.fetching && this.props.walletTxes) {
      console.log(this.props.walletTxes)
      this.setState({
        dataObjects: this.props.walletTxes,
      })
    }
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

  fetchWalletTxes = () => {
    const userId = this.props.account ? this.props.account.id : 0
    this.props.getAllWalletTxes({
      page: this.state.page,
      sort: this.state.sort,
      size: this.state.size,
      userId: userId,
    })
  }

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View duration={400} style={[styles.header]} transition="backgroundColor">
        <Card containerStyle={styles.containerStyle}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.headerText}>
              {section.txType === 'DEBIT' ? '-' : '+'}
              {section.amount}
            </Text>
            <Text style={styles.headerText}>{section.txType}</Text>
            <Icon name="angle-down" type="font-awesome" color="#17661e" size={22} />
          </View>
        </Card>
      </Animatable.View>
    )
  }

  renderContent(section, _, isActive) {
    // console.log(section)
    let ldate = section.completedOn
    let completedDate = new Date(ldate)

    let raised = section.requestedOn

    let raisedDate = new Date(raised)

    return (
      <Animatable.View duration={400} style={[styles.content]} transition="backgroundColor">
        <View style={styles.contentDetails}>
          <View style={styles.txdetails}>
            <Animatable.Text style={styles.text} animation={isActive ? 'bounceIn' : undefined}>
              ID :
            </Animatable.Text>
            <Animatable.Text style={{ color: 'red', fontSize: 12 }} animation={isActive ? 'bounceIn' : undefined}>
              {section.txId}
            </Animatable.Text>
          </View>
          <View style={styles.txdetails}>
            <Animatable.Text style={styles.text} animation={isActive ? 'bounceIn' : undefined}>
              Status :
            </Animatable.Text>
            <Animatable.Text style={styles.text} animation={isActive ? 'bounceIn' : undefined}>
              {section.status}
            </Animatable.Text>
          </View>

          <View style={styles.txdetails}>
            <Animatable.Text style={styles.text} animation={isActive ? 'bounceIn' : undefined}>
              Requested On :
            </Animatable.Text>
            <Animatable.Text style={styles.text} animation={isActive ? 'bounceIn' : undefined}>
              {raisedDate.toLocaleString()}
            </Animatable.Text>
          </View>

          <View style={styles.txdetails}>
            <Animatable.Text style={styles.text} animation={isActive ? 'bounceIn' : undefined}>
              Completed On :
            </Animatable.Text>
            <Animatable.Text style={styles.text} animation={isActive ? 'bounceIn' : undefined}>
              {completedDate.toLocaleString()}
            </Animatable.Text>
          </View>
          <View style={styles.txdetails}>
            <Animatable.Text style={styles.text} animation={isActive ? 'bounceIn' : undefined}>
              Message:{' '}
            </Animatable.Text>
            <Animatable.Text style={styles.text} animation={isActive ? 'bounceIn' : undefined}>
              {section.statusMessage}
            </Animatable.Text>
          </View>
        </View>
      </Animatable.View>
    )
  }

  render() {
    const { multipleSelect, activeSections } = this.state
    return (
      <>
        {this.context.isInternetReachable ? (
          <ScrollView style={styles.container}>
            {!this.props.fetching ? (
              <View style={styles.container}>
                {this.state.dataObjects.length !== 0 ? (
                  <Accordion
                    activeSections={activeSections}
                    sections={this.state.dataObjects}
                    touchableComponent={TouchableOpacity}
                    expandMultiple={multipleSelect}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    duration={400}
                    onChange={this.setSections}
                  />
                ) : (
                  <View>
                    <AlertMessage title="No transaction  has been made" />
                  </View>
                )}
              </View>
            ) : (
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <ActivityIndicator animating={true} color={Colors.background} size="large" style={{ flex: 1, paddingTop: 50 }} />
              </View>
            )}
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
    // ...redux state to props here
    walletTxes: state.walletTxes.walletTxes,
    fetching: state.walletTxes.fetchingAll,
    error: state.walletTxes.errorAll,
    account: state.account.account,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    performSearch: query => dispatch(WalletTxActions.walletTxSearchRequest(query)),
    getAllWalletTxes: options => dispatch(WalletTxActions.walletTxAllRequest(options)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WalletTxEntityScreen)
