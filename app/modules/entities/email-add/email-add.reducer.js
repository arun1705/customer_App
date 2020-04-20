import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  emailAddRequest: ['emailAddId'],
  emailAddAllRequest: ['options'],
  emailAddUpdateRequest: ['emailAdd'],
  emailAddSearchRequest: ['query'],
  emailAddDeleteRequest: ['emailAddId'],

  emailAddSuccess: ['emailAdd'],
  emailAddAllSuccess: ['emailAdds'],
  emailAddUpdateSuccess: ['emailAdd'],
  emailAddSearchSuccess: ['emailAdds'],
  emailAddDeleteSuccess: [],

  emailAddFailure: ['error'],
  emailAddAllFailure: ['error'],
  emailAddUpdateFailure: ['error'],
  emailAddSearchFailure: ['error'],
  emailAddDeleteFailure: ['error'],
})

export const EmailAddTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  emailAdd: null,
  emailAdds: [],
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
    emailAdd: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    emailAdds: [],
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
  const { emailAdd } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    emailAdd,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { emailAdds } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    emailAdds,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { emailAdd } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    emailAdd,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { emailAdds } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    emailAdds,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    emailAdd: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    emailAdd: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    emailAdds: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    emailAdd: state.emailAdd,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    emailAdd: state.emailAdd,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    emailAdds: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EMAIL_ADD_REQUEST]: request,
  [Types.EMAIL_ADD_ALL_REQUEST]: allRequest,
  [Types.EMAIL_ADD_UPDATE_REQUEST]: updateRequest,
  [Types.EMAIL_ADD_SEARCH_REQUEST]: searchRequest,
  [Types.EMAIL_ADD_DELETE_REQUEST]: deleteRequest,

  [Types.EMAIL_ADD_SUCCESS]: success,
  [Types.EMAIL_ADD_ALL_SUCCESS]: allSuccess,
  [Types.EMAIL_ADD_UPDATE_SUCCESS]: updateSuccess,
  [Types.EMAIL_ADD_SEARCH_SUCCESS]: searchSuccess,
  [Types.EMAIL_ADD_DELETE_SUCCESS]: deleteSuccess,

  [Types.EMAIL_ADD_FAILURE]: failure,
  [Types.EMAIL_ADD_ALL_FAILURE]: allFailure,
  [Types.EMAIL_ADD_UPDATE_FAILURE]: updateFailure,
  [Types.EMAIL_ADD_SEARCH_FAILURE]: searchFailure,
  [Types.EMAIL_ADD_DELETE_FAILURE]: deleteFailure,
})
