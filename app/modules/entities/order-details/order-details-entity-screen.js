import React from 'react'
import { FlatList, TouchableOpacity, View, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import OrderDetailActions from './order-details.reducer'
import styles from './order-details-entity-screen-style'
import AlertMessage from '../../../shared/components/alert-message/alert-message'
import { Card } from 'react-native-elements'
import { Colors } from '../../../shared/themes'
import NetWork from '../../../shared/components/offline/NetWork'
import { NetworkContext } from '../../../shared/components/offline/context'
// More info here: https://facebook.github.io/react-native/docs/flatlist.html

class OrderDetailEntityScreen extends React.PureComponent {
  static contextType = NetworkContext

  constructor(props) {
    super(props)

    this.renderRow = this.renderRow.bind(this)

    this.state = {
      page: 0,
      sort: 'id,asc',
      size: 20,
      deleteProduct: false,
      deleteOrderDetailsId: 0,
      fetchList: false,
      done: false,
      searchTerm: '',
      dataObjects: [],
    }
  }

  componentDidMount() {
    this.props.getAllOrderDetails({ orderRequestId: this.props.route.params.orderId })
    this.setState({
      fetchList: true,
    })
  }

  componentDidUpdate() {
    if (this.state.fetchList && !this.props.fetching) {
      this.setState({
        fetchList: false,
        dataObjects: this.props.orderDetails,
      })
      console.log(this.props.orderDetails)
    }
  }

  renderRow({ item }) {
    if (item.productPicUrl) {
      var url = item.productPicUrl.replace(/\\/g, '/')
    }
    if (url) {
      return (
        <Card image={{ uri: url }} title={item.productName}>
          <Text style={styles.labelTextStyle}>Quantity: {item.quantity} kg</Text>
          <View style={{ borderWidth: 0.4, borderColor: 'red', borderRadius: 5, padding: 5, marginVertical: 5 }}>
            <Text style={styles.labelTextStyle}>Points: {item.prodPCount ? item.prodPCount : '0'} pts.</Text>
            <Text style={styles.labelTextStyle}>Points in Rupee: Rs. {item.productValue ? item.productValue : '0.00'}</Text>
          </View>
          <View style={{ borderWidth: 0.4, borderColor: 'green', borderRadius: 5, padding: 5, marginVertical: 5 }}>
            <Text style={styles.labelTextStyle}>
              Bonus Points: {item.catTypeBPCount ? item.catTypeBPCount : item.prodBPCount ? item.prodBPCount : '0'} pts.
            </Text>
            <Text style={styles.labelTextStyle}>Bonus Points in Rupee: Rs. {item.productBvalue ? item.productBvalue : '0.00'}</Text>
          </View>
        </Card>
      )
    } else {
      return (
        <Card title={item.productName}>
          <Text style={styles.labelTextStyle}>Quantity: {item.quantity} kg</Text>
          <View style={{ borderWidth: 0.4, borderColor: 'red', borderRadius: 5, padding: 5, marginVertical: 5 }}>
            <Text style={styles.labelTextStyle}>Points: {item.prodPCount ? item.prodPCount : '0'} pts.</Text>
            <Text style={styles.labelTextStyle}>Points in Rupee: Rs. {item.productValue ? item.productValue : '0.00'}</Text>
          </View>
          <View style={{ borderWidth: 0.4, borderColor: 'green', borderRadius: 5, padding: 5, marginVertical: 5 }}>
            <Text style={styles.labelTextStyle}>
              Bonus Points: {item.catTypeBPCount ? item.catTypeBPCount : item.prodBPCount ? item.prodBPCount : '0'} pts.
            </Text>
            <Text style={styles.labelTextStyle}>Bonus Points in Rupee: Rs. {item.productBvalue ? item.productBvalue : '0.00'}</Text>
          </View>
        </Card>
      )
    }
  }

  componentDidAppear() {
    let that = this
    setTimeout(function() {
      that.setState({
        fetchList: true,
      })
      that.props.getAllOrderDetails({ orderRequestId: that.props.item.id })
    }, 3000)
  }

  // Show this when data is empty
  renderEmpty = () => <AlertMessage title="No Request Details Found" show={!this.props.fetching} />

  // renderSeparator = () =>
  //  <Text style={styles.label}> - ~~~~~ - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => `${index}`

  // fetchOrderDetails = () => {
  //   this.props.getAllOrderDetails(this.props.item.id)
  // }

  render() {
    return (
      <>
        {this.context.isInternetReachable ? (
          <View style={styles.container} testID="orderDetailScreen">
            {!this.props.fetching ? (
              <FlatList
                contentContainerStyle={styles.listContent}
                data={this.state.dataObjects}
                renderItem={this.renderRow}
                keyExtractor={this.keyExtractor}
                ListEmptyComponent={this.renderEmpty}
              />
            ) : (
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <ActivityIndicator animating={true} color={Colors.background} size="large" style={{ flex: 1, paddingTop: 50 }} />
              </View>
            )}
          </View>
        ) : (
          <NetWork />
        )}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    orderDetails: state.orderDetails.orderDetails,
    fetching: state.orderDetails.fetchingAll,
    deleting: state.orderDetails.deleting,
    error: state.orderDetails.errorAll,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllOrderDetails: options => dispatch(OrderDetailActions.orderDetailAllRequest(options)),
    deleteOrderDetails: orderDetailId => dispatch(OrderDetailActions.orderDetailDeleteRequest(orderDetailId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderDetailEntityScreen)
