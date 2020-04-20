import { call, put } from 'redux-saga/effects'

import RegisterActions from './register.reducer'

// attempts to register
export function* register(api, { userDetail }) {
  console.log(api.registerCustomer, userDetail)
  const response = yield call(api.registerCustomer, userDetail)
  console.log(response)
  // success?
  if (response.ok) {
    console.tron.log('Register - OK')
    yield put(RegisterActions.registerSuccess())
  } else {
    console.tron.log('Register - FAIL')
    yield put(RegisterActions.registerFailure((response.data && response.data.title) || 'Registration failed'))
  }
}
