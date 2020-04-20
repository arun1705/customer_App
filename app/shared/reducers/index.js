import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import configureStore from './create-store'
import rootSaga from '../sagas'
import ReduxPersist from '../../config/redux-persist'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  appState: require('./app-state.reducer').reducer,
  users: require('./user.reducer').reducer,
  chat: require('../../modules/chat/chat.reducer').reducer,
  userTypes: require('../../modules/entities/user-type/user-type.reducer').reducer,
  userDetails: require('../../modules/entities/user-details/user-details.reducer').reducer,
  addressTypes: require('../../modules/entities/address-type/address-type.reducer').reducer,
  addresses: require('../../modules/entities/address/address.reducer').reducer,
  phoneTypes: require('../../modules/entities/phone-type/phone-type.reducer').reducer,
  phones: require('../../modules/entities/phone/phone.reducer').reducer,
  emailTypes: require('../../modules/entities/email-type/email-type.reducer').reducer,
  emailAdds: require('../../modules/entities/email-add/email-add.reducer').reducer,
  docTypes: require('../../modules/entities/doc-type/doc-type.reducer').reducer,
  docSubTypes: require('../../modules/entities/doc-sub-type/doc-sub-type.reducer').reducer,
  userDocs: require('../../modules/entities/user-doc/user-doc.reducer').reducer,
  countries: require('../../modules/entities/country/country.reducer').reducer,
  states: require('../../modules/entities/state/state.reducer').reducer,
  cities: require('../../modules/entities/city/city.reducer').reducer,
  pincodes: require('../../modules/entities/pincode/pincode.reducer').reducer,
  areas: require('../../modules/entities/area/area.reducer').reducer,
  statusTypes: require('../../modules/entities/status-type/status-type.reducer').reducer,
  statuses: require('../../modules/entities/status/status.reducer').reducer,
  categories: require('../../modules/entities/category/category.reducer').reducer,
  subCategoryTypes: require('../../modules/entities/sub-category-type/sub-category-type.reducer').reducer,
  subCategories: require('../../modules/entities/sub-category/sub-category.reducer').reducer,
  currencies: require('../../modules/entities/currency/currency.reducer').reducer,
  currencyPoints: require('../../modules/entities/currency-point/currency-point.reducer').reducer,
  currencyBPoints: require('../../modules/entities/currency-b-point/currency-b-point.reducer').reducer,
  sbCatTypePoints: require('../../modules/entities/sb-cat-type-point/sb-cat-type-point.reducer').reducer,
  catBPoints: require('../../modules/entities/cat-b-point/cat-b-point.reducer').reducer,
  sbCatBPoints: require('../../modules/entities/sb-cat-b-point/sb-cat-b-point.reducer').reducer,
  sbCatTypeBPoints: require('../../modules/entities/sb-cat-type-b-point/sb-cat-type-b-point.reducer').reducer,
  sbCatPoints: require('../../modules/entities/sb-cat-point/sb-cat-point.reducer').reducer,
  orderRequests: require('../../modules/entities/order-request/order-request.reducer').reducer,
  smsNotifies: require('../../modules/entities/sms-notify/sms-notify.reducer').reducer,
  orderPickUps: require('../../modules/entities/order-pick-up/order-pick-up.reducer').reducer,
  ordPickUpTrks: require('../../modules/entities/ord-pick-up-trk/ord-pick-up-trk.reducer').reducer,
  orderDetails: require('../../modules/entities/order-details/order-details.reducer').reducer,
  ordDtlTrans: require('../../modules/entities/ord-dtl-trans/ord-dtl-trans.reducer').reducer,
  orderDocs: require('../../modules/entities/order-doc/order-doc.reducer').reducer,
  userPoints: require('../../modules/entities/user-point/user-point.reducer').reducer,
  userPointTrans: require('../../modules/entities/user-point-trans/user-point-trans.reducer').reducer,
  wallets: require('../../modules/entities/wallet/wallet.reducer').reducer,
  walletTxes: require('../../modules/entities/wallet-tx/wallet-tx.reducer').reducer,
  pancardVerifies: require('../../modules/entities/pancard-verify/pancard-verify.reducer').reducer,
  bankDetailsVerifies: require('../../modules/entities/bank-details-verify/bank-details-verify.reducer').reducer,
  appVersions: require('../../modules/entities/app-version/app-version.reducer').reducer,
  // ignite-jhipster-redux-store-import-needle
  account: require('./account.reducer').reducer,
  login: require('../../modules/login/login.reducer').reducer,
  register: require('../../modules/account/register/register.reducer').reducer,
  changePassword: require('../../modules/account/password/change-password.reducer').reducer,
  forgotPassword: require('../../modules/account/password-reset/forgot-password.reducer').reducer,
})

export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
