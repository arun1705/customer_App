import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import EmailAddActions from './email-add.reducer'

export function* getEmailAdd(api, action) {
  const { emailAddId } = action
  // make the call to the api
  const apiCall = call(api.getEmailAdd, emailAddId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(EmailAddActions.emailAddSuccess(response.data))
  } else {
    yield put(EmailAddActions.emailAddFailure(response.data))
  }
}

export function* getEmailAdds(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getEmailAdds, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(EmailAddActions.emailAddAllSuccess(response.data))
  } else {
    yield put(EmailAddActions.emailAddAllFailure(response.data))
  }
}

export function* updateEmailAdd(api, action) {
  const { emailAdd } = action
  // make the call to the api
  const idIsNotNull = !!emailAdd.id
  const apiCall = call(idIsNotNull ? api.updateEmailAdd : api.createEmailAdd, emailAdd)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(EmailAddActions.emailAddUpdateSuccess(response.data))
  } else {
    yield put(EmailAddActions.emailAddUpdateFailure(response.data))
  }
}

export function* searchEmailAdds(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchEmailAdds, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(EmailAddActions.emailAddSearchSuccess(response.data))
  } else {
    yield put(EmailAddActions.emailAddSearchFailure(response.data))
  }
}
export function* deleteEmailAdd(api, action) {
  const { emailAddId } = action
  // make the call to the api
  const apiCall = call(api.deleteEmailAdd, emailAddId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(EmailAddActions.emailAddDeleteSuccess())
  } else {
    yield put(EmailAddActions.emailAddDeleteFailure(response.data))
  }
}
function mapDateFields(data) {
  if (data.createdOn) {
    data.createdOn = new Date(data.createdOn)
  }
  if (data.modifiedOn) {
    data.modifiedOn = new Date(data.modifiedOn)
  }
  return data
}
