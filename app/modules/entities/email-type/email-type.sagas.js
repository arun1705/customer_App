import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import EmailTypeActions from './email-type.reducer'

export function* getEmailType(api, action) {
  const { emailTypeId } = action
  // make the call to the api
  const apiCall = call(api.getEmailType, emailTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(EmailTypeActions.emailTypeSuccess(response.data))
  } else {
    yield put(EmailTypeActions.emailTypeFailure(response.data))
  }
}

export function* getEmailTypes(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getEmailTypes, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(EmailTypeActions.emailTypeAllSuccess(response.data))
  } else {
    yield put(EmailTypeActions.emailTypeAllFailure(response.data))
  }
}

export function* updateEmailType(api, action) {
  const { emailType } = action
  // make the call to the api
  const idIsNotNull = !!emailType.id
  const apiCall = call(idIsNotNull ? api.updateEmailType : api.createEmailType, emailType)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(EmailTypeActions.emailTypeUpdateSuccess(response.data))
  } else {
    yield put(EmailTypeActions.emailTypeUpdateFailure(response.data))
  }
}

export function* searchEmailTypes(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchEmailTypes, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(EmailTypeActions.emailTypeSearchSuccess(response.data))
  } else {
    yield put(EmailTypeActions.emailTypeSearchFailure(response.data))
  }
}
export function* deleteEmailType(api, action) {
  const { emailTypeId } = action
  // make the call to the api
  const apiCall = call(api.deleteEmailType, emailTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(EmailTypeActions.emailTypeDeleteSuccess())
  } else {
    yield put(EmailTypeActions.emailTypeDeleteFailure(response.data))
  }
}
