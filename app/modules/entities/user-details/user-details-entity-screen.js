import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import UserDetailActions from './user-details.reducer'
import styles from './user-details-entity-screen-style'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

class UserDetailEntityScreen extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  
  

  render() {
    return (
        <TouchableOpacity >
        
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => {
  return {
    // ...redux state to props here
    userDetails: state.userDetails.userDetails,
    fetching: state.userDetails.fetchingAll,
    error: state.userDetails.errorAll,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    performSearch: query => dispatch(UserDetailActions.userDetailSearchRequest(query)),
    getAllUserDetails: options => dispatch(UserDetailActions.userDetailAllRequest(options)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDetailEntityScreen)
