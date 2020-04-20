import React from 'react'
import { FlatList, Text, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import SearchBar from '../../../shared/components/search-bar/search-bar'
import { styles } from './address-entity-detail-screen-style'
import AlertMessage from '../../../shared/components/alert-message/alert-message'
import { Card, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../../shared/themes/colors'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html
var dataObjects = [
  { orderId: 1, address: 1, mobile: 12345678, wasteCollected: 2 },
  { orderId: 2, address: 2, mobile: 12345678, wasteCollected: 3 },
  { orderId: 3, address: 3, mobile: 12345678, wasteCollected: 5 },
  { orderId: 4, address: 4, mobile: 12345678, wasteCollected: 7 },
]
const { containerStyle, innercontainer, itemStyle, image, textStyle, text } = styles
class AddressListViewScreen extends React.PureComponent {
  constructor(props) {
    super(props)

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
      searchTerm: '',
      dataObjects: [],
    }
    //this.fetchOrderRequests()
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
    return (
      <View style={styles.userDetailsRow}>
        <View>
          <View style={styles.userDetailsText}>
            <Text style={{ fontSize: 14 }}>Flat No 202, Fernandez castle </Text>
          </View>

          <View style={styles.userDetailsText}>
            <Text style={{ fontSize: 14 }}>Vandrapada</Text>
          </View>
        </View>
        <View style={{ paddingTop: 6 }}>
          <TouchableOpacity>
            <Icon name="edit" color="#17661e" size={22} onPress={() => this.props.navigation.navigate('address-details')} />
          </TouchableOpacity>
        </View>
      </View>
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
  renderEmpty = () => <AlertMessage title="No OrderRequests Found" show={!this.props.fetching} />

  // renderSeparator = () =>
  //  <Text style={styles.label}> - ~~~~~ - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => `${index}`

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

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

  //   cancelSearch = () => {
  //     this.setState({
  //       searchTerm: '',
  //     })
  //     this.fetchOrderRequests()
  //   }

  //   performSearch = query => {
  //     if (query === '') {
  //       this.cancelSearch()
  //       return
  //     }
  //     this.setState({
  //       searchTerm: query,
  //     })
  //     this.props.performSearch(query)
  //   }
  //   fetchOrderRequests = () => {
  //     this.props.getAllOrderRequests({ page: this.state.page, sort: this.state.sort, size: this.state.size })
  //   }

  //   handleLoadMore = () => {
  //     if (this.state.done || this.props.fetching) {
  //       return
  //     }
  //     this.setState(
  //       {
  //         page: this.state.page + 1,
  //       },
  //       () => {
  //         this.fetchOrderRequests()
  //       },
  //     )
  //   }

  render() {
    return (
      <View testID="orderRequestScreen">
        <ScrollView>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.userDetailsNameText}>Address List</Text>
              <Icon name="add" color="#17661e" size={28} onPress={() => this.props.navigation.navigate('address-details')} />
            </View>
          </View>
          <FlatList
            contentContainerStyle={styles.listContent}
            data={dataObjects}
            renderItem={this.renderRow}
            // keyExtractor={this.keyExtractor}
            // initialNumToRender={this.oneScreensWorth}
            // onEndReached={this.handleLoadMore}
            // ListHeaderComponent={this.renderHeader}
            // /* ListFooterComponent={this.renderFooter} */
            // ListEmptyComponent={this.renderEmpty}
            // ItemSeparatorComponent={this.renderSeparator}
          />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    // ...redux state to props here
    // orderRequests: state.orderRequests.orderRequests,
    // fetching: state.orderRequests.fetchingAll,
    // error: state.orderRequests.errorAll,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // performSearch: query => dispatch(OrderRequestActions.orderRequestSearchRequest(query)),
    // getAllOrderRequests: options => dispatch(OrderRequestActions.orderRequestAllRequest(options)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressListViewScreen)
