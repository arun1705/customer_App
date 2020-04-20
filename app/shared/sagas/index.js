import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/api'
import FixtureAPI from '../services/fixture-api'
import DebugConfig from '../../config/debug-config'

/* ------------- Types ------------- */

import { StartupTypes } from '../reducers/startup.reducer'
import { LoginTypes } from '../../modules/login/login.reducer'
import { AccountTypes } from '../../shared/reducers/account.reducer'
import { RegisterTypes } from '../../modules/account/register/register.reducer'
import { ForgotPasswordTypes } from '../../modules/account/password-reset/forgot-password.reducer'
import { ChangePasswordTypes } from '../../modules/account/password/change-password.reducer'
import { UserTypes } from '../../shared/reducers/user.reducer'
import { UserTypeTypes } from '../../modules/entities/user-type/user-type.reducer'
import { UserDetailTypes } from '../../modules/entities/user-details/user-details.reducer'
import { AddressTypeTypes } from '../../modules/entities/address-type/address-type.reducer'
import { AddressTypes } from '../../modules/entities/address/address.reducer'
import { PhoneTypeTypes } from '../../modules/entities/phone-type/phone-type.reducer'
import { PhoneTypes } from '../../modules/entities/phone/phone.reducer'
import { EmailTypeTypes } from '../../modules/entities/email-type/email-type.reducer'
import { EmailAddTypes } from '../../modules/entities/email-add/email-add.reducer'
import { DocTypeTypes } from '../../modules/entities/doc-type/doc-type.reducer'
import { DocSubTypeTypes } from '../../modules/entities/doc-sub-type/doc-sub-type.reducer'
import { UserDocTypes } from '../../modules/entities/user-doc/user-doc.reducer'
import { CountryTypes } from '../../modules/entities/country/country.reducer'
import { StateTypes } from '../../modules/entities/state/state.reducer'
import { CityTypes } from '../../modules/entities/city/city.reducer'
import { PincodeTypes } from '../../modules/entities/pincode/pincode.reducer'
import { AreaTypes } from '../../modules/entities/area/area.reducer'
import { StatusTypeTypes } from '../../modules/entities/status-type/status-type.reducer'
import { StatusTypes } from '../../modules/entities/status/status.reducer'
import { CategoryTypes } from '../../modules/entities/category/category.reducer'
import { SubCategoryTypeTypes } from '../../modules/entities/sub-category-type/sub-category-type.reducer'
import { SubCategoryTypes } from '../../modules/entities/sub-category/sub-category.reducer'
import { CurrencyTypes } from '../../modules/entities/currency/currency.reducer'
import { CurrencyPointTypes } from '../../modules/entities/currency-point/currency-point.reducer'
import { CurrencyBPointTypes } from '../../modules/entities/currency-b-point/currency-b-point.reducer'
import { SbCatTypePointTypes } from '../../modules/entities/sb-cat-type-point/sb-cat-type-point.reducer'
import { CatBPointTypes } from '../../modules/entities/cat-b-point/cat-b-point.reducer'
import { SbCatBPointTypes } from '../../modules/entities/sb-cat-b-point/sb-cat-b-point.reducer'
import { SbCatTypeBPointTypes } from '../../modules/entities/sb-cat-type-b-point/sb-cat-type-b-point.reducer'
import { SbCatPointTypes } from '../../modules/entities/sb-cat-point/sb-cat-point.reducer'
import { OrderRequestTypes } from '../../modules/entities/order-request/order-request.reducer'
import { SMSNotifyTypes } from '../../modules/entities/sms-notify/sms-notify.reducer'
import { OrderPickUpTypes } from '../../modules/entities/order-pick-up/order-pick-up.reducer'
import { OrdPickUpTrkTypes } from '../../modules/entities/ord-pick-up-trk/ord-pick-up-trk.reducer'
import { OrderDetailTypes } from '../../modules/entities/order-details/order-details.reducer'
import { OrdDtlTranTypes } from '../../modules/entities/ord-dtl-trans/ord-dtl-trans.reducer'
import { OrderDocTypes } from '../../modules/entities/order-doc/order-doc.reducer'
import { UserPointTypes } from '../../modules/entities/user-point/user-point.reducer'
import { UserPointTranTypes } from '../../modules/entities/user-point-trans/user-point-trans.reducer'
import { WalletTypes } from '../../modules/entities/wallet/wallet.reducer'
import { WalletTxTypes } from '../../modules/entities/wallet-tx/wallet-tx.reducer'
import { PancardVerifyTypes } from '../../modules/entities/pancard-verify/pancard-verify.reducer'
import { BankDetailsVerifyTypes } from '../../modules/entities/bank-details-verify/bank-details-verify.reducer'
import { AppVersionTypes } from '../../modules/entities/app-version/app-version.reducer'
// ignite-jhipster-saga-redux-import-needle

/* ------------- Sagas ------------- */

import { startup } from './startup.saga'
import { login, logout } from '../../modules/login/login.sagas'
import { register } from '../../modules/account/register/register.sagas'
import { forgotPassword } from '../../modules/account/password-reset/forgot-password.sagas'
import { changePassword } from '../../modules/account/password/change-password.sagas'
import { getAccount, updateAccount } from '../../shared/sagas/account.sagas'
import { getUser, getUsers, updateUser, deleteUser } from '../../shared/sagas/user.sagas'
import {
  getUserType,
  getUserTypes,
  updateUserType,
  deleteUserType,
  searchUserTypes,
} from '../../modules/entities/user-type/user-type.sagas'
import {
  getUserDetail,
  getUserDetails,
  updateUserDetail,
  deleteUserDetail,
  searchUserDetails,
} from '../../modules/entities/user-details/user-details.sagas'
import {
  getAddressType,
  getAddressTypes,
  updateAddressType,
  deleteAddressType,
  searchAddressTypes,
} from '../../modules/entities/address-type/address-type.sagas'
import { getAddress, getAddresses, updateAddress, deleteAddress, searchAddresses } from '../../modules/entities/address/address.sagas'
import {
  getPhoneType,
  getPhoneTypes,
  updatePhoneType,
  deletePhoneType,
  searchPhoneTypes,
} from '../../modules/entities/phone-type/phone-type.sagas'
import { getPhone, getPhones, updatePhone, deletePhone, searchPhones } from '../../modules/entities/phone/phone.sagas'
import {
  getEmailType,
  getEmailTypes,
  updateEmailType,
  deleteEmailType,
  searchEmailTypes,
} from '../../modules/entities/email-type/email-type.sagas'
import {
  getEmailAdd,
  getEmailAdds,
  updateEmailAdd,
  deleteEmailAdd,
  searchEmailAdds,
} from '../../modules/entities/email-add/email-add.sagas'
import { getDocType, getDocTypes, updateDocType, deleteDocType, searchDocTypes } from '../../modules/entities/doc-type/doc-type.sagas'
import {
  getDocSubType,
  getDocSubTypes,
  updateDocSubType,
  deleteDocSubType,
  searchDocSubTypes,
} from '../../modules/entities/doc-sub-type/doc-sub-type.sagas'
import { getUserDoc, getUserDocs, updateUserDoc, deleteUserDoc, searchUserDocs } from '../../modules/entities/user-doc/user-doc.sagas'
import { getCountry, getCountries, updateCountry, deleteCountry, searchCountries } from '../../modules/entities/country/country.sagas'
import { getState, getStates, updateState, deleteState, searchStates } from '../../modules/entities/state/state.sagas'
import { getCity, getCities, updateCity, deleteCity, searchCities } from '../../modules/entities/city/city.sagas'
import { getPincode, getPincodes, updatePincode, deletePincode, searchPincodes } from '../../modules/entities/pincode/pincode.sagas'
import { getArea, getAreas, updateArea, deleteArea, searchAreas } from '../../modules/entities/area/area.sagas'
import {
  getStatusType,
  getStatusTypes,
  updateStatusType,
  deleteStatusType,
  searchStatusTypes,
} from '../../modules/entities/status-type/status-type.sagas'
import { getStatus, getStatuses, updateStatus, deleteStatus, searchStatuses } from '../../modules/entities/status/status.sagas'
import {
  getCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  searchCategories,
} from '../../modules/entities/category/category.sagas'
import {
  getSubCategoryType,
  getSubCategoryTypes,
  updateSubCategoryType,
  deleteSubCategoryType,
  searchSubCategoryTypes,
} from '../../modules/entities/sub-category-type/sub-category-type.sagas'
import {
  getSubCategory,
  getSubCategories,
  updateSubCategory,
  deleteSubCategory,
  searchSubCategories,
} from '../../modules/entities/sub-category/sub-category.sagas'
import {
  getCurrency,
  getCurrencies,
  updateCurrency,
  deleteCurrency,
  searchCurrencies,
} from '../../modules/entities/currency/currency.sagas'
import {
  getCurrencyPoint,
  getCurrencyPoints,
  updateCurrencyPoint,
  deleteCurrencyPoint,
  searchCurrencyPoints,
} from '../../modules/entities/currency-point/currency-point.sagas'
import {
  getCurrencyBPoint,
  getCurrencyBPoints,
  updateCurrencyBPoint,
  deleteCurrencyBPoint,
  searchCurrencyBPoints,
} from '../../modules/entities/currency-b-point/currency-b-point.sagas'
import {
  getSbCatTypePoint,
  getSbCatTypePoints,
  updateSbCatTypePoint,
  deleteSbCatTypePoint,
  searchSbCatTypePoints,
} from '../../modules/entities/sb-cat-type-point/sb-cat-type-point.sagas'
import {
  getCatBPoint,
  getCatBPoints,
  updateCatBPoint,
  deleteCatBPoint,
  searchCatBPoints,
} from '../../modules/entities/cat-b-point/cat-b-point.sagas'
import {
  getSbCatBPoint,
  getSbCatBPoints,
  updateSbCatBPoint,
  deleteSbCatBPoint,
  searchSbCatBPoints,
} from '../../modules/entities/sb-cat-b-point/sb-cat-b-point.sagas'
import {
  getSbCatTypeBPoint,
  getSbCatTypeBPoints,
  updateSbCatTypeBPoint,
  deleteSbCatTypeBPoint,
  searchSbCatTypeBPoints,
} from '../../modules/entities/sb-cat-type-b-point/sb-cat-type-b-point.sagas'
import {
  getSbCatPoint,
  getSbCatPoints,
  updateSbCatPoint,
  deleteSbCatPoint,
  searchSbCatPoints,
} from '../../modules/entities/sb-cat-point/sb-cat-point.sagas'
import {
  getOrderRequest,
  getOrderRequests,
  updateOrderRequest,
  deleteOrderRequest,
  searchOrderRequests,
} from '../../modules/entities/order-request/order-request.sagas'
import {
  getSMSNotify,
  getSMSNotifies,
  updateSMSNotify,
  deleteSMSNotify,
  searchSMSNotifies,
} from '../../modules/entities/sms-notify/sms-notify.sagas'
import {
  getOrderPickUp,
  getOrderPickUps,
  updateOrderPickUp,
  deleteOrderPickUp,
  searchOrderPickUps,
} from '../../modules/entities/order-pick-up/order-pick-up.sagas'
import {
  getOrdPickUpTrk,
  getOrdPickUpTrks,
  updateOrdPickUpTrk,
  deleteOrdPickUpTrk,
  searchOrdPickUpTrks,
} from '../../modules/entities/ord-pick-up-trk/ord-pick-up-trk.sagas'
import {
  getOrderDetail,
  getOrderDetails,
  updateOrderDetail,
  deleteOrderDetail,
  searchOrderDetails,
} from '../../modules/entities/order-details/order-details.sagas'
import {
  getOrdDtlTran,
  getOrdDtlTrans,
  updateOrdDtlTran,
  deleteOrdDtlTran,
  searchOrdDtlTrans,
} from '../../modules/entities/ord-dtl-trans/ord-dtl-trans.sagas'
import {
  getOrderDoc,
  getOrderDocs,
  updateOrderDoc,
  deleteOrderDoc,
  searchOrderDocs,
} from '../../modules/entities/order-doc/order-doc.sagas'
import {
  getUserPoint,
  getUserPoints,
  updateUserPoint,
  deleteUserPoint,
  searchUserPoints,
} from '../../modules/entities/user-point/user-point.sagas'
import {
  getUserPointTran,
  getUserPointTrans,
  updateUserPointTran,
  deleteUserPointTran,
  searchUserPointTrans,
} from '../../modules/entities/user-point-trans/user-point-trans.sagas'
import { getWallet, getWallets, updateWallet, deleteWallet, searchWallets } from '../../modules/entities/wallet/wallet.sagas'
import {
  getPancardVerify,
  getPancardVerifies,
  updatePancardVerify,
  deletePancardVerify,
  searchPancardVerifies,
} from '../../modules/entities/pancard-verify/pancard-verify.sagas'
import {
  getBankDetailsVerify,
  getBankDetailsVerifies,
  updateBankDetailsVerify,
  deleteBankDetailsVerify,
  searchBankDetailsVerifies,
} from '../../modules/entities/bank-details-verify/bank-details-verify.sagas'
import {
  getWalletTx,
  getWalletTxes,
  updateWalletTx,
  deleteWalletTx,
  searchWalletTxes,
} from '../../modules/entities/wallet-tx/wallet-tx.sagas'
import {
  getAppVersion,
  getAppVersions,
  updateAppVersion,
  deleteAppVersion,
  searchAppVersions,
} from '../../modules/entities/app-version/app-version.sagas'
// ignite-jhipster-saga-method-import-needle

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // JHipster accounts
    takeLatest(LoginTypes.LOGIN_REQUEST, login, api),
    takeLatest(LoginTypes.LOGOUT_REQUEST, logout, api),
    takeLatest(RegisterTypes.REGISTER_REQUEST, register, api),
    takeLatest(ForgotPasswordTypes.FORGOT_PASSWORD_REQUEST, forgotPassword, api),
    takeLatest(ChangePasswordTypes.CHANGE_PASSWORD_REQUEST, changePassword, api),

    takeLatest(UserTypeTypes.USER_TYPE_REQUEST, getUserType, api),
    takeLatest(UserTypeTypes.USER_TYPE_ALL_REQUEST, getUserTypes, api),
    takeLatest(UserTypeTypes.USER_TYPE_UPDATE_REQUEST, updateUserType, api),
    takeLatest(UserTypeTypes.USER_TYPE_DELETE_REQUEST, deleteUserType, api),
    takeLatest(UserTypeTypes.USER_TYPE_SEARCH_REQUEST, searchUserTypes, api),

    takeLatest(UserDetailTypes.USER_DETAIL_REQUEST, getUserDetail, api),
    takeLatest(UserDetailTypes.USER_DETAIL_ALL_REQUEST, getUserDetails, api),
    takeLatest(UserDetailTypes.USER_DETAIL_UPDATE_REQUEST, updateUserDetail, api),
    takeLatest(UserDetailTypes.USER_DETAIL_DELETE_REQUEST, deleteUserDetail, api),
    takeLatest(UserDetailTypes.USER_DETAIL_SEARCH_REQUEST, searchUserDetails, api),

    takeLatest(AddressTypeTypes.ADDRESS_TYPE_REQUEST, getAddressType, api),
    takeLatest(AddressTypeTypes.ADDRESS_TYPE_ALL_REQUEST, getAddressTypes, api),
    takeLatest(AddressTypeTypes.ADDRESS_TYPE_UPDATE_REQUEST, updateAddressType, api),
    takeLatest(AddressTypeTypes.ADDRESS_TYPE_DELETE_REQUEST, deleteAddressType, api),
    takeLatest(AddressTypeTypes.ADDRESS_TYPE_SEARCH_REQUEST, searchAddressTypes, api),

    takeLatest(AddressTypes.ADDRESS_REQUEST, getAddress, api),
    takeLatest(AddressTypes.ADDRESS_ALL_REQUEST, getAddresses, api),
    takeLatest(AddressTypes.ADDRESS_UPDATE_REQUEST, updateAddress, api),
    takeLatest(AddressTypes.ADDRESS_DELETE_REQUEST, deleteAddress, api),
    takeLatest(AddressTypes.ADDRESS_SEARCH_REQUEST, searchAddresses, api),

    takeLatest(PhoneTypeTypes.PHONE_TYPE_REQUEST, getPhoneType, api),
    takeLatest(PhoneTypeTypes.PHONE_TYPE_ALL_REQUEST, getPhoneTypes, api),
    takeLatest(PhoneTypeTypes.PHONE_TYPE_UPDATE_REQUEST, updatePhoneType, api),
    takeLatest(PhoneTypeTypes.PHONE_TYPE_DELETE_REQUEST, deletePhoneType, api),
    takeLatest(PhoneTypeTypes.PHONE_TYPE_SEARCH_REQUEST, searchPhoneTypes, api),

    takeLatest(PhoneTypes.PHONE_REQUEST, getPhone, api),
    takeLatest(PhoneTypes.PHONE_ALL_REQUEST, getPhones, api),
    takeLatest(PhoneTypes.PHONE_UPDATE_REQUEST, updatePhone, api),
    takeLatest(PhoneTypes.PHONE_DELETE_REQUEST, deletePhone, api),
    takeLatest(PhoneTypes.PHONE_SEARCH_REQUEST, searchPhones, api),

    takeLatest(EmailTypeTypes.EMAIL_TYPE_REQUEST, getEmailType, api),
    takeLatest(EmailTypeTypes.EMAIL_TYPE_ALL_REQUEST, getEmailTypes, api),
    takeLatest(EmailTypeTypes.EMAIL_TYPE_UPDATE_REQUEST, updateEmailType, api),
    takeLatest(EmailTypeTypes.EMAIL_TYPE_DELETE_REQUEST, deleteEmailType, api),
    takeLatest(EmailTypeTypes.EMAIL_TYPE_SEARCH_REQUEST, searchEmailTypes, api),

    takeLatest(EmailAddTypes.EMAIL_ADD_REQUEST, getEmailAdd, api),
    takeLatest(EmailAddTypes.EMAIL_ADD_ALL_REQUEST, getEmailAdds, api),
    takeLatest(EmailAddTypes.EMAIL_ADD_UPDATE_REQUEST, updateEmailAdd, api),
    takeLatest(EmailAddTypes.EMAIL_ADD_DELETE_REQUEST, deleteEmailAdd, api),
    takeLatest(EmailAddTypes.EMAIL_ADD_SEARCH_REQUEST, searchEmailAdds, api),

    takeLatest(DocTypeTypes.DOC_TYPE_REQUEST, getDocType, api),
    takeLatest(DocTypeTypes.DOC_TYPE_ALL_REQUEST, getDocTypes, api),
    takeLatest(DocTypeTypes.DOC_TYPE_UPDATE_REQUEST, updateDocType, api),
    takeLatest(DocTypeTypes.DOC_TYPE_DELETE_REQUEST, deleteDocType, api),
    takeLatest(DocTypeTypes.DOC_TYPE_SEARCH_REQUEST, searchDocTypes, api),

    takeLatest(DocSubTypeTypes.DOC_SUB_TYPE_REQUEST, getDocSubType, api),
    takeLatest(DocSubTypeTypes.DOC_SUB_TYPE_ALL_REQUEST, getDocSubTypes, api),
    takeLatest(DocSubTypeTypes.DOC_SUB_TYPE_UPDATE_REQUEST, updateDocSubType, api),
    takeLatest(DocSubTypeTypes.DOC_SUB_TYPE_DELETE_REQUEST, deleteDocSubType, api),
    takeLatest(DocSubTypeTypes.DOC_SUB_TYPE_SEARCH_REQUEST, searchDocSubTypes, api),

    takeLatest(UserDocTypes.USER_DOC_REQUEST, getUserDoc, api),
    takeLatest(UserDocTypes.USER_DOC_ALL_REQUEST, getUserDocs, api),
    takeLatest(UserDocTypes.USER_DOC_UPDATE_REQUEST, updateUserDoc, api),
    takeLatest(UserDocTypes.USER_DOC_DELETE_REQUEST, deleteUserDoc, api),
    takeLatest(UserDocTypes.USER_DOC_SEARCH_REQUEST, searchUserDocs, api),

    takeLatest(CountryTypes.COUNTRY_REQUEST, getCountry, api),
    takeLatest(CountryTypes.COUNTRY_ALL_REQUEST, getCountries, api),
    takeLatest(CountryTypes.COUNTRY_UPDATE_REQUEST, updateCountry, api),
    takeLatest(CountryTypes.COUNTRY_DELETE_REQUEST, deleteCountry, api),
    takeLatest(CountryTypes.COUNTRY_SEARCH_REQUEST, searchCountries, api),

    takeLatest(StateTypes.STATE_REQUEST, getState, api),
    takeLatest(StateTypes.STATE_ALL_REQUEST, getStates, api),
    takeLatest(StateTypes.STATE_UPDATE_REQUEST, updateState, api),
    takeLatest(StateTypes.STATE_DELETE_REQUEST, deleteState, api),
    takeLatest(StateTypes.STATE_SEARCH_REQUEST, searchStates, api),

    takeLatest(CityTypes.CITY_REQUEST, getCity, api),
    takeLatest(CityTypes.CITY_ALL_REQUEST, getCities, api),
    takeLatest(CityTypes.CITY_UPDATE_REQUEST, updateCity, api),
    takeLatest(CityTypes.CITY_DELETE_REQUEST, deleteCity, api),
    takeLatest(CityTypes.CITY_SEARCH_REQUEST, searchCities, api),

    takeLatest(PincodeTypes.PINCODE_REQUEST, getPincode, api),
    takeLatest(PincodeTypes.PINCODE_ALL_REQUEST, getPincodes, api),
    takeLatest(PincodeTypes.PINCODE_UPDATE_REQUEST, updatePincode, api),
    takeLatest(PincodeTypes.PINCODE_DELETE_REQUEST, deletePincode, api),
    takeLatest(PincodeTypes.PINCODE_SEARCH_REQUEST, searchPincodes, api),

    takeLatest(AreaTypes.AREA_REQUEST, getArea, api),
    takeLatest(AreaTypes.AREA_ALL_REQUEST, getAreas, api),
    takeLatest(AreaTypes.AREA_UPDATE_REQUEST, updateArea, api),
    takeLatest(AreaTypes.AREA_DELETE_REQUEST, deleteArea, api),
    takeLatest(AreaTypes.AREA_SEARCH_REQUEST, searchAreas, api),

    takeLatest(StatusTypeTypes.STATUS_TYPE_REQUEST, getStatusType, api),
    takeLatest(StatusTypeTypes.STATUS_TYPE_ALL_REQUEST, getStatusTypes, api),
    takeLatest(StatusTypeTypes.STATUS_TYPE_UPDATE_REQUEST, updateStatusType, api),
    takeLatest(StatusTypeTypes.STATUS_TYPE_DELETE_REQUEST, deleteStatusType, api),
    takeLatest(StatusTypeTypes.STATUS_TYPE_SEARCH_REQUEST, searchStatusTypes, api),

    takeLatest(StatusTypes.STATUS_REQUEST, getStatus, api),
    takeLatest(StatusTypes.STATUS_ALL_REQUEST, getStatuses, api),
    takeLatest(StatusTypes.STATUS_UPDATE_REQUEST, updateStatus, api),
    takeLatest(StatusTypes.STATUS_DELETE_REQUEST, deleteStatus, api),
    takeLatest(StatusTypes.STATUS_SEARCH_REQUEST, searchStatuses, api),

    takeLatest(CategoryTypes.CATEGORY_REQUEST, getCategory, api),
    takeLatest(CategoryTypes.CATEGORY_ALL_REQUEST, getCategories, api),
    takeLatest(CategoryTypes.CATEGORY_UPDATE_REQUEST, updateCategory, api),
    takeLatest(CategoryTypes.CATEGORY_DELETE_REQUEST, deleteCategory, api),
    takeLatest(CategoryTypes.CATEGORY_SEARCH_REQUEST, searchCategories, api),

    takeLatest(SubCategoryTypeTypes.SUB_CATEGORY_TYPE_REQUEST, getSubCategoryType, api),
    takeLatest(SubCategoryTypeTypes.SUB_CATEGORY_TYPE_ALL_REQUEST, getSubCategoryTypes, api),
    takeLatest(SubCategoryTypeTypes.SUB_CATEGORY_TYPE_UPDATE_REQUEST, updateSubCategoryType, api),
    takeLatest(SubCategoryTypeTypes.SUB_CATEGORY_TYPE_DELETE_REQUEST, deleteSubCategoryType, api),
    takeLatest(SubCategoryTypeTypes.SUB_CATEGORY_TYPE_SEARCH_REQUEST, searchSubCategoryTypes, api),

    takeLatest(SubCategoryTypes.SUB_CATEGORY_REQUEST, getSubCategory, api),
    takeLatest(SubCategoryTypes.SUB_CATEGORY_ALL_REQUEST, getSubCategories, api),
    takeLatest(SubCategoryTypes.SUB_CATEGORY_UPDATE_REQUEST, updateSubCategory, api),
    takeLatest(SubCategoryTypes.SUB_CATEGORY_DELETE_REQUEST, deleteSubCategory, api),
    takeLatest(SubCategoryTypes.SUB_CATEGORY_SEARCH_REQUEST, searchSubCategories, api),

    takeLatest(CurrencyTypes.CURRENCY_REQUEST, getCurrency, api),
    takeLatest(CurrencyTypes.CURRENCY_ALL_REQUEST, getCurrencies, api),
    takeLatest(CurrencyTypes.CURRENCY_UPDATE_REQUEST, updateCurrency, api),
    takeLatest(CurrencyTypes.CURRENCY_DELETE_REQUEST, deleteCurrency, api),
    takeLatest(CurrencyTypes.CURRENCY_SEARCH_REQUEST, searchCurrencies, api),

    takeLatest(CurrencyPointTypes.CURRENCY_POINT_REQUEST, getCurrencyPoint, api),
    takeLatest(CurrencyPointTypes.CURRENCY_POINT_ALL_REQUEST, getCurrencyPoints, api),
    takeLatest(CurrencyPointTypes.CURRENCY_POINT_UPDATE_REQUEST, updateCurrencyPoint, api),
    takeLatest(CurrencyPointTypes.CURRENCY_POINT_DELETE_REQUEST, deleteCurrencyPoint, api),
    takeLatest(CurrencyPointTypes.CURRENCY_POINT_SEARCH_REQUEST, searchCurrencyPoints, api),

    takeLatest(CurrencyBPointTypes.CURRENCY_B_POINT_REQUEST, getCurrencyBPoint, api),
    takeLatest(CurrencyBPointTypes.CURRENCY_B_POINT_ALL_REQUEST, getCurrencyBPoints, api),
    takeLatest(CurrencyBPointTypes.CURRENCY_B_POINT_UPDATE_REQUEST, updateCurrencyBPoint, api),
    takeLatest(CurrencyBPointTypes.CURRENCY_B_POINT_DELETE_REQUEST, deleteCurrencyBPoint, api),
    takeLatest(CurrencyBPointTypes.CURRENCY_B_POINT_SEARCH_REQUEST, searchCurrencyBPoints, api),

    takeLatest(SbCatTypePointTypes.SB_CAT_TYPE_POINT_REQUEST, getSbCatTypePoint, api),
    takeLatest(SbCatTypePointTypes.SB_CAT_TYPE_POINT_ALL_REQUEST, getSbCatTypePoints, api),
    takeLatest(SbCatTypePointTypes.SB_CAT_TYPE_POINT_UPDATE_REQUEST, updateSbCatTypePoint, api),
    takeLatest(SbCatTypePointTypes.SB_CAT_TYPE_POINT_DELETE_REQUEST, deleteSbCatTypePoint, api),
    takeLatest(SbCatTypePointTypes.SB_CAT_TYPE_POINT_SEARCH_REQUEST, searchSbCatTypePoints, api),

    takeLatest(CatBPointTypes.CAT_B_POINT_REQUEST, getCatBPoint, api),
    takeLatest(CatBPointTypes.CAT_B_POINT_ALL_REQUEST, getCatBPoints, api),
    takeLatest(CatBPointTypes.CAT_B_POINT_UPDATE_REQUEST, updateCatBPoint, api),
    takeLatest(CatBPointTypes.CAT_B_POINT_DELETE_REQUEST, deleteCatBPoint, api),
    takeLatest(CatBPointTypes.CAT_B_POINT_SEARCH_REQUEST, searchCatBPoints, api),

    takeLatest(SbCatBPointTypes.SB_CAT_B_POINT_REQUEST, getSbCatBPoint, api),
    takeLatest(SbCatBPointTypes.SB_CAT_B_POINT_ALL_REQUEST, getSbCatBPoints, api),
    takeLatest(SbCatBPointTypes.SB_CAT_B_POINT_UPDATE_REQUEST, updateSbCatBPoint, api),
    takeLatest(SbCatBPointTypes.SB_CAT_B_POINT_DELETE_REQUEST, deleteSbCatBPoint, api),
    takeLatest(SbCatBPointTypes.SB_CAT_B_POINT_SEARCH_REQUEST, searchSbCatBPoints, api),

    takeLatest(SbCatTypeBPointTypes.SB_CAT_TYPE_B_POINT_REQUEST, getSbCatTypeBPoint, api),
    takeLatest(SbCatTypeBPointTypes.SB_CAT_TYPE_B_POINT_ALL_REQUEST, getSbCatTypeBPoints, api),
    takeLatest(SbCatTypeBPointTypes.SB_CAT_TYPE_B_POINT_UPDATE_REQUEST, updateSbCatTypeBPoint, api),
    takeLatest(SbCatTypeBPointTypes.SB_CAT_TYPE_B_POINT_DELETE_REQUEST, deleteSbCatTypeBPoint, api),
    takeLatest(SbCatTypeBPointTypes.SB_CAT_TYPE_B_POINT_SEARCH_REQUEST, searchSbCatTypeBPoints, api),

    takeLatest(SbCatPointTypes.SB_CAT_POINT_REQUEST, getSbCatPoint, api),
    takeLatest(SbCatPointTypes.SB_CAT_POINT_ALL_REQUEST, getSbCatPoints, api),
    takeLatest(SbCatPointTypes.SB_CAT_POINT_UPDATE_REQUEST, updateSbCatPoint, api),
    takeLatest(SbCatPointTypes.SB_CAT_POINT_DELETE_REQUEST, deleteSbCatPoint, api),
    takeLatest(SbCatPointTypes.SB_CAT_POINT_SEARCH_REQUEST, searchSbCatPoints, api),

    takeLatest(OrderRequestTypes.ORDER_REQUEST_REQUEST, getOrderRequest, api),
    takeLatest(OrderRequestTypes.ORDER_REQUEST_ALL_REQUEST, getOrderRequests, api),
    takeLatest(OrderRequestTypes.ORDER_REQUEST_UPDATE_REQUEST, updateOrderRequest, api),
    takeLatest(OrderRequestTypes.ORDER_REQUEST_DELETE_REQUEST, deleteOrderRequest, api),
    takeLatest(OrderRequestTypes.ORDER_REQUEST_SEARCH_REQUEST, searchOrderRequests, api),

    takeLatest(SMSNotifyTypes.SMS_NOTIFY_REQUEST, getSMSNotify, api),
    takeLatest(SMSNotifyTypes.SMS_NOTIFY_ALL_REQUEST, getSMSNotifies, api),
    takeLatest(SMSNotifyTypes.SMS_NOTIFY_UPDATE_REQUEST, updateSMSNotify, api),
    takeLatest(SMSNotifyTypes.SMS_NOTIFY_DELETE_REQUEST, deleteSMSNotify, api),
    takeLatest(SMSNotifyTypes.SMS_NOTIFY_SEARCH_REQUEST, searchSMSNotifies, api),

    takeLatest(OrderPickUpTypes.ORDER_PICK_UP_REQUEST, getOrderPickUp, api),
    takeLatest(OrderPickUpTypes.ORDER_PICK_UP_ALL_REQUEST, getOrderPickUps, api),
    takeLatest(OrderPickUpTypes.ORDER_PICK_UP_UPDATE_REQUEST, updateOrderPickUp, api),
    takeLatest(OrderPickUpTypes.ORDER_PICK_UP_DELETE_REQUEST, deleteOrderPickUp, api),
    takeLatest(OrderPickUpTypes.ORDER_PICK_UP_SEARCH_REQUEST, searchOrderPickUps, api),

    takeLatest(OrdPickUpTrkTypes.ORD_PICK_UP_TRK_REQUEST, getOrdPickUpTrk, api),
    takeLatest(OrdPickUpTrkTypes.ORD_PICK_UP_TRK_ALL_REQUEST, getOrdPickUpTrks, api),
    takeLatest(OrdPickUpTrkTypes.ORD_PICK_UP_TRK_UPDATE_REQUEST, updateOrdPickUpTrk, api),
    takeLatest(OrdPickUpTrkTypes.ORD_PICK_UP_TRK_DELETE_REQUEST, deleteOrdPickUpTrk, api),
    takeLatest(OrdPickUpTrkTypes.ORD_PICK_UP_TRK_SEARCH_REQUEST, searchOrdPickUpTrks, api),

    takeLatest(OrderDetailTypes.ORDER_DETAIL_REQUEST, getOrderDetail, api),
    takeLatest(OrderDetailTypes.ORDER_DETAIL_ALL_REQUEST, getOrderDetails, api),
    takeLatest(OrderDetailTypes.ORDER_DETAIL_UPDATE_REQUEST, updateOrderDetail, api),
    takeLatest(OrderDetailTypes.ORDER_DETAIL_DELETE_REQUEST, deleteOrderDetail, api),
    takeLatest(OrderDetailTypes.ORDER_DETAIL_SEARCH_REQUEST, searchOrderDetails, api),

    takeLatest(OrdDtlTranTypes.ORD_DTL_TRAN_REQUEST, getOrdDtlTran, api),
    takeLatest(OrdDtlTranTypes.ORD_DTL_TRAN_ALL_REQUEST, getOrdDtlTrans, api),
    takeLatest(OrdDtlTranTypes.ORD_DTL_TRAN_UPDATE_REQUEST, updateOrdDtlTran, api),
    takeLatest(OrdDtlTranTypes.ORD_DTL_TRAN_DELETE_REQUEST, deleteOrdDtlTran, api),
    takeLatest(OrdDtlTranTypes.ORD_DTL_TRAN_SEARCH_REQUEST, searchOrdDtlTrans, api),

    takeLatest(OrderDocTypes.ORDER_DOC_REQUEST, getOrderDoc, api),
    takeLatest(OrderDocTypes.ORDER_DOC_ALL_REQUEST, getOrderDocs, api),
    takeLatest(OrderDocTypes.ORDER_DOC_UPDATE_REQUEST, updateOrderDoc, api),
    takeLatest(OrderDocTypes.ORDER_DOC_DELETE_REQUEST, deleteOrderDoc, api),
    takeLatest(OrderDocTypes.ORDER_DOC_SEARCH_REQUEST, searchOrderDocs, api),

    takeLatest(UserPointTypes.USER_POINT_REQUEST, getUserPoint, api),
    takeLatest(UserPointTypes.USER_POINT_ALL_REQUEST, getUserPoints, api),
    takeLatest(UserPointTypes.USER_POINT_UPDATE_REQUEST, updateUserPoint, api),
    takeLatest(UserPointTypes.USER_POINT_DELETE_REQUEST, deleteUserPoint, api),
    takeLatest(UserPointTypes.USER_POINT_SEARCH_REQUEST, searchUserPoints, api),

    takeLatest(UserPointTranTypes.USER_POINT_TRAN_REQUEST, getUserPointTran, api),
    takeLatest(UserPointTranTypes.USER_POINT_TRAN_ALL_REQUEST, getUserPointTrans, api),
    takeLatest(UserPointTranTypes.USER_POINT_TRAN_UPDATE_REQUEST, updateUserPointTran, api),
    takeLatest(UserPointTranTypes.USER_POINT_TRAN_DELETE_REQUEST, deleteUserPointTran, api),
    takeLatest(UserPointTranTypes.USER_POINT_TRAN_SEARCH_REQUEST, searchUserPointTrans, api),

    takeLatest(WalletTypes.WALLET_REQUEST, getWallet, api),
    takeLatest(WalletTypes.WALLET_ALL_REQUEST, getWallets, api),
    takeLatest(WalletTypes.WALLET_UPDATE_REQUEST, updateWallet, api),
    takeLatest(WalletTypes.WALLET_DELETE_REQUEST, deleteWallet, api),
    takeLatest(WalletTypes.WALLET_SEARCH_REQUEST, searchWallets, api),

    takeLatest(WalletTxTypes.WALLET_TX_REQUEST, getWalletTx, api),
    takeLatest(WalletTxTypes.WALLET_TX_ALL_REQUEST, getWalletTxes, api),
    takeLatest(WalletTxTypes.WALLET_TX_UPDATE_REQUEST, updateWalletTx, api),
    takeLatest(WalletTxTypes.WALLET_TX_DELETE_REQUEST, deleteWalletTx, api),
    takeLatest(WalletTxTypes.WALLET_TX_SEARCH_REQUEST, searchWalletTxes, api),

    takeLatest(PancardVerifyTypes.PANCARD_VERIFY_REQUEST, getPancardVerify, api),
    takeLatest(PancardVerifyTypes.PANCARD_VERIFY_ALL_REQUEST, getPancardVerifies, api),
    takeLatest(PancardVerifyTypes.PANCARD_VERIFY_UPDATE_REQUEST, updatePancardVerify, api),
    takeLatest(PancardVerifyTypes.PANCARD_VERIFY_DELETE_REQUEST, deletePancardVerify, api),
    takeLatest(PancardVerifyTypes.PANCARD_VERIFY_SEARCH_REQUEST, searchPancardVerifies, api),

    takeLatest(BankDetailsVerifyTypes.BANK_DETAILS_VERIFY_REQUEST, getBankDetailsVerify, api),
    takeLatest(BankDetailsVerifyTypes.BANK_DETAILS_VERIFY_ALL_REQUEST, getBankDetailsVerifies, api),
    takeLatest(BankDetailsVerifyTypes.BANK_DETAILS_VERIFY_UPDATE_REQUEST, updateBankDetailsVerify, api),
    takeLatest(BankDetailsVerifyTypes.BANK_DETAILS_VERIFY_DELETE_REQUEST, deleteBankDetailsVerify, api),
    takeLatest(BankDetailsVerifyTypes.BANK_DETAILS_VERIFY_SEARCH_REQUEST, searchBankDetailsVerifies, api),

    takeLatest(AppVersionTypes.APP_VERSION_REQUEST, getAppVersion, api),
    takeLatest(AppVersionTypes.APP_VERSION_ALL_REQUEST, getAppVersions, api),
    takeLatest(AppVersionTypes.APP_VERSION_UPDATE_REQUEST, updateAppVersion, api),
    takeLatest(AppVersionTypes.APP_VERSION_DELETE_REQUEST, deleteAppVersion, api),
    takeLatest(AppVersionTypes.APP_VERSION_SEARCH_REQUEST, searchAppVersions, api),
    // ignite-jhipster-saga-redux-connect-needle

    takeLatest(UserTypes.USER_REQUEST, getUser, api),
    takeLatest(UserTypes.USER_ALL_REQUEST, getUsers, api),
    takeLatest(UserTypes.USER_UPDATE_REQUEST, updateUser, api),
    takeLatest(UserTypes.USER_DELETE_REQUEST, deleteUser, api),

    takeLatest(AccountTypes.ACCOUNT_REQUEST, getAccount, api),
    takeLatest(AccountTypes.ACCOUNT_UPDATE_REQUEST, updateAccount, api),
  ])
}
