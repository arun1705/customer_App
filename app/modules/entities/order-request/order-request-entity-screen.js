import React from 'react'
import { FlatList, Text, ScrollView, View, RefreshControl, ActivityIndicator, Alert, Image } from 'react-native'
import { connect } from 'react-redux'
import { Button, Card } from 'react-native-paper'
import SearchBar from '../../../shared/components/search-bar/search-bar'
import OrderRequestActions from './order-request.reducer'
import { styles } from './order-request-entity-screen-style'
import AlertMessage from '../../../shared/components/alert-message/alert-message'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../../shared/themes/colors'
import { Colors } from '../../../shared/themes'
import NetWork from '../../../shared/components/offline/NetWork'
import { NetworkContext } from '../../../shared/components/offline/context'
// More info here: https://facebook.github.io/react-native/docs/flatlist.html

class OrderRequestEntityScreen extends React.PureComponent {
  static contextType = NetworkContext

  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
    this.confirmDelete = this.confirmDelete.bind(this)

    /* ***********************************************************
     * STEP 1
     * This is an array of objects with the properties you desire
     * Usually this should come from Redux mapStateToProps
     *************************************************************/
    this.state = {
      page: 0,
      sort: 'id,asc',
      size: 20,
      done: false,
      screenFetch: false,
      searchTerm: '',
      isRefreshing: false,
      dataObjects: [],
      dataObjectsOld: [],
      deleteRequest: false,
      requestId: 0,
    }
  }

  componentDidMount() {
    this.fetchOrderRequests()
  }

  componentDidUpdate() {
    if (this.state.deleteRequest && !this.props.deleting) {
      this.setState(
        {
          deleteRequest: false,
        },
        () => {
          if (this.props.errorDeleting) {
            alert('Error while delete request')
          } else {
            const dataObjectsNew = this.state.dataObjects.filter(item => item.id !== this.state.requestId)
            this.setState({
              dataObjects: dataObjectsNew,
              pickUp: false,
            })
          }
        },
      )
    }

    if (this.state.screenFetch && !this.props.fetching) {
      if (this.props.orderRequests !== null && this.props.orderRequests.length > 0) {
        if (this.props.orderRequests.length < 5) {
          if (this.state.done) {
            this.setState({
              done: true,
              page: this.state.page - 1,
              screenFetch: false,
              dataObjects: [...this.state.dataObjectsOld, ...this.props.orderRequests],
            })
          } else {
            this.setState({
              done: true,
              page: this.state.page - 1,
              dataObjectsOld: [...this.state.dataObjects],
              screenFetch: false,
              dataObjects: [...this.state.dataObjects, ...this.props.orderRequests],
            })
          }
        } else {
          if (this.state.done) {
            this.setState({
              dataObjects: [...this.state.dataObjectsOld, ...this.props.orderRequests],
              screenFetch: false,
              done: false,
            })
          } else {
            this.setState({
              dataObjects: [...this.state.dataObjects, ...this.props.orderRequests],
              screenFetch: false,
            })
          }
        }
      } else {
        this.setState({
          done: true,
          page: this.state.page - 1,
          dataObjectsOld: [...this.state.dataObjects],
          screenFetch: false,
        })
      }
    }
  }

  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} description={item.description} />
  *************************************************************/
  renderRow({ item }) {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    let fetchedDateOrg = item.createdOn
    let fetchedDate = new Date(fetchedDateOrg)
    // fetchedDate = fetchedDate.getDate() + '-' + months[fetchedDate.getMonth()] + '-' + fetchedDate.getFullYear()

    let completedDate = ''
    if (item.completedOn) {
      completedDate = new Date(item.completedOn)
      // completedDate = completedDate.getDate() + '-' + months[completedDate.getMonth()] + '-' + completedDate.getFullYear()
    }

    return (
      <View style={styles.userDetailsRow}>
        <View>
          <View style={styles.userDetailsText}>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>Req ID: {`#${item.id}`} </Text>
          </View>

          <View style={styles.userDetailsText}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.coal }}>Status: {item.status} </Text>
          </View>

          <View style={styles.userDetailsText}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: colors.coal }}>Raised On: {fetchedDate.toLocaleString()}</Text>
          </View>

          {completedDate ? (
            <View style={styles.userDetailsText}>
              <Text style={{ fontSize: 14, fontWeight: '400', color: colors.coal }}>Completed On: {completedDate.toLocaleString()}</Text>
            </View>
          ) : null}

          {item.finalPoints ? (
            <View style={styles.userDetailsText}>
              <Text style={{ fontSize: 14, fontWeight: '400', color: colors.coal }}>Points: {item.finalPoints} pts.</Text>
            </View>
          ) : null}

          {item.finalPointsInRs ? (
            <View style={styles.userDetailsText}>
              <Text style={{ fontSize: 14, fontWeight: '400', color: colors.coal }}>Points in Rupee: Rs. {item.finalPointsInRs}</Text>
            </View>
          ) : null}

          {item.finalBPoints ? (
            <View style={styles.userDetailsText}>
              <Text style={{ fontSize: 14, fontWeight: '400', color: colors.coal }}>Bonus points: {item.finalBPoints} pts.</Text>
            </View>
          ) : null}

          {item.finalBPointsInRs ? (
            <View style={styles.userDetailsText}>
              <Text style={{ fontSize: 14, fontWeight: '400', color: colors.coal }}>
                Bonus points in Rupee: Rs. {item.finalBPointsInRs}
              </Text>
            </View>
          ) : null}
        </View>
        <View style={{ paddingTop: 3 }}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('view-request-details', {
                orderId: item.id,
              })
            }>
            <Image source={require('../../../../images/visibility.png')} style={styles.imageicon} />
            {/* <Icon name="eye" type="font-awesome" color="#215990" size={24} /> */}
          </TouchableOpacity>

          {item.status === 'QUEUE' && (
            <TouchableOpacity style={{ paddingTop: 0 }} onPress={() => this.confirmDelete(item.id)}>
              <Icon name="trash" type="font-awesome" color="#e2393e" size={25} />
              {/* <Image source={require('../../../../images/delete.png')} style={styles.imageicon} /> */}
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }

  confirmDelete = orderId => {
    Alert.alert(
      'Delete Request',
      'Are you sure you want to delete the request #' + orderId + '?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => {
            this.setState(
              {
                deleteRequest: true,
                requestId: orderId,
              },
              () => {
                this.props.deleteOrderRequest(orderId)
              },
            )
          },
        },
      ],
      { cancelable: false },
    )
  }
  /* ***********************************************************
   * STEP 3
   * Consider the configurations we've set below.  Customize them
   * to your liking!  Each with some friendly advice.
   *************************************************************/
  // Render a header?
  renderHeader = () => <SearchBar onSearch={this.performSearch} searchTerm={this.state.searchTerm} onCancel={this.cancelSearch} />

  // Render a footer?
  // renderFooter = () =>
  //  <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

  // Show this when data is empty
  renderEmpty = () => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <AlertMessage title="No request found" show={!this.props.fetching} />
      </View>
    )
  }

  // renderSeparator = () =>
  //  <Text style={styles.label}> - ~~~~~ - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => `${index}`

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 5

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  cancelSearch = () => {
    this.setState({
      searchTerm: '',
    })
    this.fetchOrderRequests()
  }

  performSearch = query => {
    if (query === '') {
      this.cancelSearch()
      return
    }
    this.setState({
      searchTerm: query,
    })
    this.props.performSearch(query)
  }
  fetchOrderRequests = () => {
    const userId = this.props.account ? this.props.account.id : 0
    this.props.getAllOrderRequests({
      page: this.state.page,
      sort: this.state.sort,
      size: this.state.size,
      userId: userId,
    })
    this.setState({
      screenFetch: true,
      page: this.state.page + 1,
      isRefreshing: false,
    })
  }

  handleLoadMore = () => {
    if (this.state.page > 0) {
      if (this.state.screenFetch || this.props.fetching) {
        return
      }
      this.fetchOrderRequests()
    }
  }

  onRefresh = () => {
    this.setState(
      {
        isRefreshing: true,
        page: 0,
        sort: 'id,asc',
        size: 5,
        done: false,
        screenFetch: false,
        searchTerm: '',
        dataObjects: [],
        dataObjectsOld: [],
        pickUp: false,
      },
      () => {
        if (this.state.page === 0 && this.state.dataObjects.length === 0) {
          this.fetchOrderRequests()
        }
      },
    )
  }

  render() {
    return (
      <>
        {this.context.isInternetReachable ? (
          <View testID="orderRequestScreen" style={{ flex: 1 }}>
            {this.state.dataObjects ? (
              <ScrollView>
                <FlatList
                  contentContainerStyle={styles.listContent}
                  data={this.state.dataObjects}
                  refreshControl={<RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.onRefresh.bind(this)} />}
                  renderItem={this.renderRow}
                  keyExtractor={this.keyExtractor}
                  onEndReached={this.handleLoadMore}
                  initialNumToRender={this.oneScreensWorth}
                  ListEmptyComponent={this.renderEmpty}
                />
              </ScrollView>
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
    // ...redux state to props here
    orderRequests: state.orderRequests.orderRequests,
    account: state.account.account,
    fetching: state.orderRequests.fetchingOne,
    error: state.orderRequests.errorAll,
    deleting: state.orderRequests.deleting,
    errorDeleting: state.orderRequests.errorDeleting,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    performSearch: query => dispatch(OrderRequestActions.orderRequestSearchRequest(query)),
    getAllOrderRequests: options => dispatch(OrderRequestActions.orderRequestAllRequest(options)),
    deleteOrderRequest: id => dispatch(OrderRequestActions.orderRequestDeleteRequest(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderRequestEntityScreen)
