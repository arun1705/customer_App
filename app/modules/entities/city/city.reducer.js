import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  cityRequest: ['cityId'],
  cityAllRequest: ['id'],
  cityUpdateRequest: ['city'],
  citySearchRequest: ['query'],
  cityDeleteRequest: ['cityId'],

  citySuccess: ['city'],
  cityAllSuccess: ['cities'],
  cityUpdateSuccess: ['city'],
  citySearchSuccess: ['cities'],
  cityDeleteSuccess: [],

  cityFailure: ['error'],
  cityAllFailure: ['error'],
  cityUpdateFailure: ['error'],
  citySearchFailure: ['error'],
  cityDeleteFailure: ['error'],
})

export const CityTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  city: null,
  cities: [],
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
    city: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    cities: [],
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
  const { city } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    city,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { cities } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    cities,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { city } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    city,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { cities } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    cities,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    city: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    city: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    cities: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    city: state.city,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    city: state.city,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    cities: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CITY_REQUEST]: request,
  [Types.CITY_ALL_REQUEST]: allRequest,
  [Types.CITY_UPDATE_REQUEST]: updateRequest,
  [Types.CITY_SEARCH_REQUEST]: searchRequest,
  [Types.CITY_DELETE_REQUEST]: deleteRequest,

  [Types.CITY_SUCCESS]: success,
  [Types.CITY_ALL_SUCCESS]: allSuccess,
  [Types.CITY_UPDATE_SUCCESS]: updateSuccess,
  [Types.CITY_SEARCH_SUCCESS]: searchSuccess,
  [Types.CITY_DELETE_SUCCESS]: deleteSuccess,

  [Types.CITY_FAILURE]: failure,
  [Types.CITY_ALL_FAILURE]: allFailure,
  [Types.CITY_UPDATE_FAILURE]: updateFailure,
  [Types.CITY_SEARCH_FAILURE]: searchFailure,
  [Types.CITY_DELETE_FAILURE]: deleteFailure,
})
