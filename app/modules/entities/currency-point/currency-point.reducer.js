import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  currencyPointRequest: ['currencyPointId'],
  currencyPointAllRequest: ['options'],
  currencyPointUpdateRequest: ['currencyPoint'],
  currencyPointSearchRequest: ['query'],
  currencyPointDeleteRequest: ['currencyPointId'],

  currencyPointSuccess: ['currencyPoint'],
  currencyPointAllSuccess: ['currencyPoints'],
  currencyPointUpdateSuccess: ['currencyPoint'],
  currencyPointSearchSuccess: ['currencyPoints'],
  currencyPointDeleteSuccess: [],

  currencyPointFailure: ['error'],
  currencyPointAllFailure: ['error'],
  currencyPointUpdateFailure: ['error'],
  currencyPointSearchFailure: ['error'],
  currencyPointDeleteFailure: ['error'],
})

export const CurrencyPointTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  currencyPoint: null,
  currencyPoints: [],
  errorOne: null,
  errorAll: null,
  errorUpdating: null,
  errorSearching: null,
  errorDeleting: null,
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = state =>
  state.merge({
    fetchingOne: true,
    currencyPoint: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    currencyPoints: [],
  })

// request to update from an api
export const updateRequest = state =>
  state.merge({
    updating: true,
  })
// request to search from an api
export const searchRequest = state =>
  state.merge({
    searching: true,
  })
// request to delete from an api
export const deleteRequest = state =>
  state.merge({
    deleting: true,
  })

// successful api lookup for single entity
export const success = (state, action) => {
  const { currencyPoint } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    currencyPoint,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { currencyPoints } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    currencyPoints,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { currencyPoint } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    currencyPoint,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { currencyPoints } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    currencyPoints,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    currencyPoint: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    currencyPoint: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    currencyPoints: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    currencyPoint: state.currencyPoint,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    currencyPoint: state.currencyPoint,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    currencyPoints: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CURRENCY_POINT_REQUEST]: request,
  [Types.CURRENCY_POINT_ALL_REQUEST]: allRequest,
  [Types.CURRENCY_POINT_UPDATE_REQUEST]: updateRequest,
  [Types.CURRENCY_POINT_SEARCH_REQUEST]: searchRequest,
  [Types.CURRENCY_POINT_DELETE_REQUEST]: deleteRequest,

  [Types.CURRENCY_POINT_SUCCESS]: success,
  [Types.CURRENCY_POINT_ALL_SUCCESS]: allSuccess,
  [Types.CURRENCY_POINT_UPDATE_SUCCESS]: updateSuccess,
  [Types.CURRENCY_POINT_SEARCH_SUCCESS]: searchSuccess,
  [Types.CURRENCY_POINT_DELETE_SUCCESS]: deleteSuccess,

  [Types.CURRENCY_POINT_FAILURE]: failure,
  [Types.CURRENCY_POINT_ALL_FAILURE]: allFailure,
  [Types.CURRENCY_POINT_UPDATE_FAILURE]: updateFailure,
  [Types.CURRENCY_POINT_SEARCH_FAILURE]: searchFailure,
  [Types.CURRENCY_POINT_DELETE_FAILURE]: deleteFailure,
})
