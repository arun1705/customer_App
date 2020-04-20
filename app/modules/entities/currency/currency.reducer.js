import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  currencyRequest: ['currencyId'],
  currencyAllRequest: ['options'],
  currencyUpdateRequest: ['currency'],
  currencySearchRequest: ['query'],
  currencyDeleteRequest: ['currencyId'],

  currencySuccess: ['currency'],
  currencyAllSuccess: ['currencies'],
  currencyUpdateSuccess: ['currency'],
  currencySearchSuccess: ['currencies'],
  currencyDeleteSuccess: [],

  currencyFailure: ['error'],
  currencyAllFailure: ['error'],
  currencyUpdateFailure: ['error'],
  currencySearchFailure: ['error'],
  currencyDeleteFailure: ['error'],
})

export const CurrencyTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  currency: null,
  currencies: [],
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
    currency: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    currencies: [],
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
  const { currency } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    currency,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { currencies } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    currencies,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { currency } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    currency,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { currencies } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    currencies,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    currency: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    currency: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    currencies: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    currency: state.currency,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    currency: state.currency,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    currencies: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CURRENCY_REQUEST]: request,
  [Types.CURRENCY_ALL_REQUEST]: allRequest,
  [Types.CURRENCY_UPDATE_REQUEST]: updateRequest,
  [Types.CURRENCY_SEARCH_REQUEST]: searchRequest,
  [Types.CURRENCY_DELETE_REQUEST]: deleteRequest,

  [Types.CURRENCY_SUCCESS]: success,
  [Types.CURRENCY_ALL_SUCCESS]: allSuccess,
  [Types.CURRENCY_UPDATE_SUCCESS]: updateSuccess,
  [Types.CURRENCY_SEARCH_SUCCESS]: searchSuccess,
  [Types.CURRENCY_DELETE_SUCCESS]: deleteSuccess,

  [Types.CURRENCY_FAILURE]: failure,
  [Types.CURRENCY_ALL_FAILURE]: allFailure,
  [Types.CURRENCY_UPDATE_FAILURE]: updateFailure,
  [Types.CURRENCY_SEARCH_FAILURE]: searchFailure,
  [Types.CURRENCY_DELETE_FAILURE]: deleteFailure,
})
