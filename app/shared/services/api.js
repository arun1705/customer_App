// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import CookieManager from 'react-native-cookies'

import AppConfig from '../../config/app-config'

// our "constructor"
const create = (baseURL = AppConfig.apiUrl) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
    },
    // 10 second timeout...
    timeout: 30000,
  })
  api.addAsyncRequestTransform(request => async request => {
    const cookies = await CookieManager.get(baseURL)
    if (cookies['XSRF-TOKEN']) {
      request.headers['X-XSRF-TOKEN'] = cookies['XSRF-TOKEN']
    }
    return request
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const login = userAuth => api.post('auth/login', userAuth)
  const logout = () => api.post('auth/logout')
  const register = user => api.post(AppConfig.uaaBaseUrl + 'api/register', user)
  const forgotPassword = data =>
    api.post(AppConfig.uaaBaseUrl + 'api/account/reset-password/init', data, {
      headers: { 'Content-Type': 'text/plain', Accept: 'application/json, text/plain, */*' },
    })

  const getAccount = () => api.get(AppConfig.uaaBaseUrl + 'api/account')
  const updateAccount = account => api.post(AppConfig.uaaBaseUrl + 'api/account', account)
  const changePassword = (currentPassword, newPassword) =>
    api.post(
      AppConfig.uaaBaseUrl + 'api/account/change-password',
      { currentPassword, newPassword },
      { headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/plain, */*' } },
    )

  const getUser = userId => api.get('api/users/' + userId)
  const getUsers = options => api.get('api/users', options)
  const createUser = user => api.post('api/users', user)
  const updateUser = user => api.put('api/users', user)
  const deleteUser = userId => api.delete('api/users/' + userId)

  const getUserType = userTypeId => api.get('services/userdetailsservice/api/user-types/' + userTypeId)
  const getUserTypes = options => api.get('services/userdetailsservice/api/user-types', options)
  const createUserType = userType => api.post('services/userdetailsservice/api/user-types', userType)
  const updateUserType = userType => api.put('services/userdetailsservice/api/user-types', userType)
  const deleteUserType = userTypeId => api.delete('services/userdetailsservice/api/user-types/' + userTypeId)
  const searchUserTypes = query => api.get('services/userdetailsservice/api/_search/user-types', { query: query })

  const getUserDetail = userDetailId => api.get('services/userdetailsservice/api/user-details/by-userid/' + userDetailId)
  const getUserDetails = options => api.get('services/userdetailsservice/api/user-details', options)
  const createUserDetail = userDetail => api.post('services/userdetailsservice/api/user-details', userDetail)
  const registerCustomer = userDetail => api.post('services/userdetailsservice/api/user-details/register-customer', userDetail)
  const updateUserDetail = userDetail => api.put('services/userdetailsservice/api/user-details/customer', userDetail)
  const deleteUserDetail = userDetailId => api.delete('services/userdetailsservice/api/user-details/' + userDetailId)
  const searchUserDetails = query => api.get('services/userdetailsservice/api/_search/user-details', { query: query })

  const getAddressType = addressTypeId => api.get('services/userdetailsservice/api/address-types/' + addressTypeId)
  const getAddressTypes = options => api.get('services/userdetailsservice/api/address-types/all', options)
  const createAddressType = addressType => api.post('services/userdetailsservice/api/address-types', addressType)
  const updateAddressType = addressType => api.put('services/userdetailsservice/api/address-types', addressType)
  const deleteAddressType = addressTypeId => api.delete('services/userdetailsservice/api/address-types/' + addressTypeId)
  const searchAddressTypes = query => api.get('services/userdetailsservice/api/_search/address-types', { query: query })

  const getAddress = addressId => api.get('services/userdetailsservice/api/addresses/' + addressId)
  const getAddresses = userId => api.get('services/userdetailsservice/api/addresses/customer/' + userId)
  const createAddress = address => api.post('services/userdetailsservice/api/addresses', address)
  const updateAddress = address => api.put('services/userdetailsservice/api/addresses', address)
  const deleteAddress = addressId => api.delete('services/userdetailsservice/api/addresses/' + addressId)
  const searchAddresses = query => api.get('services/userdetailsservice/api/_search/addresses', { query: query })

  const getPhoneType = phoneTypeId => api.get('services/userdetailsservice/api/phone-types/' + phoneTypeId)
  const getPhoneTypes = options => api.get('services/userdetailsservice/api/phone-types/all', options)
  const createPhoneType = phoneType => api.post('services/userdetailsservice/api/phone-types', phoneType)
  const updatePhoneType = phoneType => api.put('services/userdetailsservice/api/phone-types', phoneType)
  const deletePhoneType = phoneTypeId => api.delete('services/userdetailsservice/api/phone-types/' + phoneTypeId)
  const searchPhoneTypes = query => api.get('services/userdetailsservice/api/_search/phone-types', { query: query })

  const getPhone = phoneId => api.get('services/userdetailsservice/api/phones/' + phoneId)
  const getPhones = userId => api.get('services/userdetailsservice/api/phones/customer/' + userId)
  const createPhone = phone => api.post('services/userdetailsservice/api/phones', phone)
  const updatePhone = phone => api.put('services/userdetailsservice/api/phones', phone)
  const deletePhone = phoneId => api.delete('services/userdetailsservice/api/phones/' + phoneId)
  const searchPhones = query => api.get('services/userdetailsservice/api/_search/phones', { query: query })

  const getEmailType = emailTypeId => api.get('services/userdetailsservice/api/email-types/' + emailTypeId)
  const getEmailTypes = options => api.get('services/userdetailsservice/api/email-types', options)
  const createEmailType = emailType => api.post('services/userdetailsservice/api/email-types', emailType)
  const updateEmailType = emailType => api.put('services/userdetailsservice/api/email-types', emailType)
  const deleteEmailType = emailTypeId => api.delete('services/userdetailsservice/api/email-types/' + emailTypeId)
  const searchEmailTypes = query => api.get('services/userdetailsservice/api/_search/email-types', { query: query })

  const getEmailAdd = emailAddId => api.get('services/userdetailsservice/api/email-adds/' + emailAddId)
  const getEmailAdds = options => api.get('services/userdetailsservice/api/email-adds', options)
  const createEmailAdd = emailAdd => api.post('services/userdetailsservice/api/email-adds', emailAdd)
  const updateEmailAdd = emailAdd => api.put('services/userdetailsservice/api/email-adds', emailAdd)
  const deleteEmailAdd = emailAddId => api.delete('services/userdetailsservice/api/email-adds/' + emailAddId)
  const searchEmailAdds = query => api.get('services/userdetailsservice/api/_search/email-adds', { query: query })

  const getDocType = docTypeId => api.get('services/userdetailsservice/api/doc-types/' + docTypeId)
  const getDocTypes = options => api.get('services/userdetailsservice/api/doc-types', options)
  const createDocType = docType => api.post('services/userdetailsservice/api/doc-types', docType)
  const updateDocType = docType => api.put('services/userdetailsservice/api/doc-types', docType)
  const deleteDocType = docTypeId => api.delete('services/userdetailsservice/api/doc-types/' + docTypeId)
  const searchDocTypes = query => api.get('services/userdetailsservice/api/_search/doc-types', { query: query })

  const getDocSubType = docSubTypeId => api.get('services/userdetailsservice/api/doc-sub-types/' + docSubTypeId)
  const getDocSubTypes = options => api.get('services/userdetailsservice/api/doc-sub-types', options)
  const createDocSubType = docSubType => api.post('services/userdetailsservice/api/doc-sub-types', docSubType)
  const updateDocSubType = docSubType => api.put('services/userdetailsservice/api/doc-sub-types', docSubType)
  const deleteDocSubType = docSubTypeId => api.delete('services/userdetailsservice/api/doc-sub-types/' + docSubTypeId)
  const searchDocSubTypes = query => api.get('services/userdetailsservice/api/_search/doc-sub-types', { query: query })

  const getUserDoc = userDocId => api.get('services/userdetailsservice/api/user-docs/' + userDocId)
  const getUserDocs = options => api.get('services/userdetailsservice/api/user-docs', options)
  const createUserDoc = userDoc => api.post('services/userdetailsservice/api/user-docs', userDoc)
  const updateUserDoc = userDoc => api.put('services/userdetailsservice/api/user-docs', userDoc)
  const deleteUserDoc = userDocId => api.delete('services/userdetailsservice/api/user-docs/' + userDocId)
  const searchUserDocs = query => api.get('services/userdetailsservice/api/_search/user-docs', { query: query })

  const getCountry = countryId => api.get('services/masterservice/api/countries/' + countryId)
  const getCountries = options => api.get('services/masterservice/api/countries/all', options)
  const createCountry = country => api.post('services/masterservice/api/countries', country)
  const updateCountry = country => api.put('services/masterservice/api/countries', country)
  const deleteCountry = countryId => api.delete('services/masterservice/api/countries/' + countryId)
  const searchCountries = query => api.get('services/masterservice/api/_search/countries', { query: query })

  const getState = stateId => api.get('services/masterservice/api/states/' + stateId)
  const getStates = id => api.get('services/masterservice/api/states/bycountry/' + id)
  const createState = state => api.post('services/masterservice/api/states', state)
  const updateState = state => api.put('services/masterservice/api/states', state)
  const deleteState = stateId => api.delete('services/masterservice/api/states/' + stateId)
  const searchStates = query => api.get('services/masterservice/api/_search/states', { query: query })

  const getCity = cityId => api.get('services/masterservice/api/cities/' + cityId)
  const getCities = id => api.get('services/masterservice/api/cities/bystate/' + id)
  const createCity = city => api.post('services/masterservice/api/cities', city)
  const updateCity = city => api.put('services/masterservice/api/cities', city)
  const deleteCity = cityId => api.delete('services/masterservice/api/cities/' + cityId)
  const searchCities = query => api.get('services/masterservice/api/_search/cities', { query: query })

  const getPincode = pincodeId => api.get('services/masterservice/api/pincodes/' + pincodeId)
  const getPincodes = id => api.get('services/masterservice/api/pincodes/bycity/' + id)
  const createPincode = pincode => api.post('services/masterservice/api/pincodes', pincode)
  const updatePincode = pincode => api.put('services/masterservice/api/pincodes', pincode)
  const deletePincode = pincodeId => api.delete('services/masterservice/api/pincodes/' + pincodeId)
  const searchPincodes = query => api.get('services/masterservice/api/_search/pincodes', { query: query })

  const getArea = areaId => api.get('services/masterservice/api/areas/' + areaId)
  const getAreas = id => api.get('services/masterservice/api/areas/bypincode/' + id)
  const createArea = area => api.post('services/masterservice/api/areas', area)
  const updateArea = area => api.put('services/masterservice/api/areas', area)
  const deleteArea = areaId => api.delete('services/masterservice/api/areas/' + areaId)
  const searchAreas = query => api.get('services/masterservice/api/_search/areas', { query: query })

  const getStatusType = statusTypeId => api.get('services/masterservice/api/status-types/' + statusTypeId)
  const getStatusTypes = options => api.get('services/masterservice/api/status-types', options)
  const createStatusType = statusType => api.post('services/masterservice/api/status-types', statusType)
  const updateStatusType = statusType => api.put('services/masterservice/api/status-types', statusType)
  const deleteStatusType = statusTypeId => api.delete('services/masterservice/api/status-types/' + statusTypeId)
  const searchStatusTypes = query => api.get('services/masterservice/api/_search/status-types', { query: query })

  const getStatus = statusId => api.get('services/masterservice/api/statuses/' + statusId)
  const getStatuses = options => api.get('services/masterservice/api/statuses', options)
  const createStatus = status => api.post('services/masterservice/api/statuses', status)
  const updateStatus = status => api.put('services/masterservice/api/statuses', status)
  const deleteStatus = statusId => api.delete('services/masterservice/api/statuses/' + statusId)
  const searchStatuses = query => api.get('services/masterservice/api/_search/statuses', { query: query })

  const getCategory = categoryId => api.get('services/masterservice/api/categories/' + categoryId)
  const getCategories = options => api.get('services/masterservice/api/categories', options)
  const createCategory = category => api.post('services/masterservice/api/categories', category)
  const updateCategory = category => api.put('services/masterservice/api/categories', category)
  const deleteCategory = categoryId => api.delete('services/masterservice/api/categories/' + categoryId)
  const searchCategories = query => api.get('services/masterservice/api/_search/categories', { query: query })

  const getSubCategoryType = subCategoryTypeId => api.get('services/masterservice/api/sub-category-types/' + subCategoryTypeId)
  const getSubCategoryTypes = options => api.get('services/masterservice/api/sub-category-types', options)
  const createSubCategoryType = subCategoryType => api.post('services/masterservice/api/sub-category-types', subCategoryType)
  const updateSubCategoryType = subCategoryType => api.put('services/masterservice/api/sub-category-types', subCategoryType)
  const deleteSubCategoryType = subCategoryTypeId => api.delete('services/masterservice/api/sub-category-types/' + subCategoryTypeId)
  const searchSubCategoryTypes = query => api.get('services/masterservice/api/_search/sub-category-types', { query: query })

  const getSubCategory = subCategoryId => api.get('services/masterservice/api/sub-categories/' + subCategoryId)
  const getSubCategories = options => api.get('services/masterservice/api/sub-categories', options)
  const createSubCategory = subCategory => api.post('services/masterservice/api/sub-categories', subCategory)
  const updateSubCategory = subCategory => api.put('services/masterservice/api/sub-categories', subCategory)
  const deleteSubCategory = subCategoryId => api.delete('services/masterservice/api/sub-categories/' + subCategoryId)
  const searchSubCategories = query => api.get('services/masterservice/api/_search/sub-categories', { query: query })

  const getCurrency = currencyId => api.get('services/masterservice/api/currencies/' + currencyId)
  const getCurrencies = options => api.get('services/masterservice/api/currencies', options)
  const createCurrency = currency => api.post('services/masterservice/api/currencies', currency)
  const updateCurrency = currency => api.put('services/masterservice/api/currencies', currency)
  const deleteCurrency = currencyId => api.delete('services/masterservice/api/currencies/' + currencyId)
  const searchCurrencies = query => api.get('services/masterservice/api/_search/currencies', { query: query })

  const getCurrencyPoint = currencyPointId => api.get('services/masterservice/api/currency-points/' + currencyPointId)
  const getCurrencyPoints = options => api.get('services/masterservice/api/currency-points', options)
  const createCurrencyPoint = currencyPoint => api.post('services/masterservice/api/currency-points', currencyPoint)
  const updateCurrencyPoint = currencyPoint => api.put('services/masterservice/api/currency-points', currencyPoint)
  const deleteCurrencyPoint = currencyPointId => api.delete('services/masterservice/api/currency-points/' + currencyPointId)
  const searchCurrencyPoints = query => api.get('services/masterservice/api/_search/currency-points', { query: query })

  const getCurrencyBPoint = currencyBPointId => api.get('services/masterservice/api/currency-b-points/' + currencyBPointId)
  const getCurrencyBPoints = options => api.get('services/masterservice/api/currency-b-points', options)
  const createCurrencyBPoint = currencyBPoint => api.post('services/masterservice/api/currency-b-points', currencyBPoint)
  const updateCurrencyBPoint = currencyBPoint => api.put('services/masterservice/api/currency-b-points', currencyBPoint)
  const deleteCurrencyBPoint = currencyBPointId => api.delete('services/masterservice/api/currency-b-points/' + currencyBPointId)
  const searchCurrencyBPoints = query => api.get('services/masterservice/api/_search/currency-b-points', { query: query })

  const getSbCatTypePoint = sbCatTypePointId => api.get('services/masterservice/api/sb-cat-type-points/' + sbCatTypePointId)
  const getSbCatTypePoints = options => api.get('services/masterservice/api/sb-cat-type-points', options)
  const createSbCatTypePoint = sbCatTypePoint => api.post('services/masterservice/api/sb-cat-type-points', sbCatTypePoint)
  const updateSbCatTypePoint = sbCatTypePoint => api.put('services/masterservice/api/sb-cat-type-points', sbCatTypePoint)
  const deleteSbCatTypePoint = sbCatTypePointId => api.delete('services/masterservice/api/sb-cat-type-points/' + sbCatTypePointId)
  const searchSbCatTypePoints = query => api.get('services/masterservice/api/_search/sb-cat-type-points', { query: query })

  const getCatBPoint = catBPointId => api.get('services/masterservice/api/cat-b-points/' + catBPointId)
  const getCatBPoints = options => api.get('services/masterservice/api/cat-b-points', options)
  const createCatBPoint = catBPoint => api.post('services/masterservice/api/cat-b-points', catBPoint)
  const updateCatBPoint = catBPoint => api.put('services/masterservice/api/cat-b-points', catBPoint)
  const deleteCatBPoint = catBPointId => api.delete('services/masterservice/api/cat-b-points/' + catBPointId)
  const searchCatBPoints = query => api.get('services/masterservice/api/_search/cat-b-points', { query: query })

  const getSbCatBPoint = sbCatBPointId => api.get('services/masterservice/api/sb-cat-b-points/' + sbCatBPointId)
  const getSbCatBPoints = options => api.get('services/masterservice/api/sb-cat-b-points', options)
  const createSbCatBPoint = sbCatBPoint => api.post('services/masterservice/api/sb-cat-b-points', sbCatBPoint)
  const updateSbCatBPoint = sbCatBPoint => api.put('services/masterservice/api/sb-cat-b-points', sbCatBPoint)
  const deleteSbCatBPoint = sbCatBPointId => api.delete('services/masterservice/api/sb-cat-b-points/' + sbCatBPointId)
  const searchSbCatBPoints = query => api.get('services/masterservice/api/_search/sb-cat-b-points', { query: query })

  const getSbCatTypeBPoint = sbCatTypeBPointId => api.get('services/masterservice/api/sb-cat-type-b-points/' + sbCatTypeBPointId)
  const getSbCatTypeBPoints = options => api.get('services/masterservice/api/sb-cat-type-b-points', options)
  const createSbCatTypeBPoint = sbCatTypeBPoint => api.post('services/masterservice/api/sb-cat-type-b-points', sbCatTypeBPoint)
  const updateSbCatTypeBPoint = sbCatTypeBPoint => api.put('services/masterservice/api/sb-cat-type-b-points', sbCatTypeBPoint)
  const deleteSbCatTypeBPoint = sbCatTypeBPointId => api.delete('services/masterservice/api/sb-cat-type-b-points/' + sbCatTypeBPointId)
  const searchSbCatTypeBPoints = query => api.get('services/masterservice/api/_search/sb-cat-type-b-points', { query: query })

  const getSbCatPoint = sbCatPointId => api.get('services/masterservice/api/sb-cat-points/' + sbCatPointId)
  const getSbCatPoints = options => api.get('services/masterservice/api/sb-cat-points', options)
  const createSbCatPoint = sbCatPoint => api.post('services/masterservice/api/sb-cat-points', sbCatPoint)
  const updateSbCatPoint = sbCatPoint => api.put('services/masterservice/api/sb-cat-points', sbCatPoint)
  const deleteSbCatPoint = sbCatPointId => api.delete('services/masterservice/api/sb-cat-points/' + sbCatPointId)
  const searchSbCatPoints = query => api.get('services/masterservice/api/_search/sb-cat-points', { query: query })

  const getOrderRequest = orderRequestId => api.get('services/orderservice/api/order-requests/' + orderRequestId)
  const getOrderRequests = options => api.get('services/orderservice/api/order-requests', options)
  const createOrderRequest = orderRequest => api.post('services/orderservice/api/order-requests', orderRequest)
  const updateOrderRequest = orderRequest => api.put('services/orderservice/api/order-requests', orderRequest)
  const deleteOrderRequest = orderRequestId => api.delete('services/orderservice/api/order-requests/' + orderRequestId)
  const searchOrderRequests = query => api.get('services/orderservice/api/_search/order-requests', { query: query })

  const getSMSNotify = smsNotifyId => api.get('services/orderservice/api/sms-notifies/' + smsNotifyId)
  const getSMSNotifies = options => api.get('services/orderservice/api/sms-notifies', options)
  const createSMSNotify = smsNotify => api.post('services/orderservice/api/sms-notifies', smsNotify)
  const updateSMSNotify = smsNotify => api.put('services/orderservice/api/sms-notifies', smsNotify)
  const deleteSMSNotify = smsNotifyId => api.delete('services/orderservice/api/sms-notifies/' + smsNotifyId)
  const searchSMSNotifies = query => api.get('services/orderservice/api/_search/sms-notifies', { query: query })

  const getOrderPickUp = orderPickUpId => api.get('services/orderservice/api/order-pick-ups/' + orderPickUpId)
  const getOrderPickUps = options => api.get('services/orderservice/api/order-pick-ups', options)
  const createOrderPickUp = orderPickUp => api.post('services/orderservice/api/order-pick-ups', orderPickUp)
  const updateOrderPickUp = orderPickUp => api.put('services/orderservice/api/order-pick-ups', orderPickUp)
  const deleteOrderPickUp = orderPickUpId => api.delete('services/orderservice/api/order-pick-ups/' + orderPickUpId)
  const searchOrderPickUps = query => api.get('services/orderservice/api/_search/order-pick-ups', { query: query })

  const getOrdPickUpTrk = ordPickUpTrkId => api.get('services/orderservice/api/ord-pick-up-trks/' + ordPickUpTrkId)
  const getOrdPickUpTrks = options => api.get('services/orderservice/api/ord-pick-up-trks', options)
  const createOrdPickUpTrk = ordPickUpTrk => api.post('services/orderservice/api/ord-pick-up-trks', ordPickUpTrk)
  const updateOrdPickUpTrk = ordPickUpTrk => api.put('services/orderservice/api/ord-pick-up-trks', ordPickUpTrk)
  const deleteOrdPickUpTrk = ordPickUpTrkId => api.delete('services/orderservice/api/ord-pick-up-trks/' + ordPickUpTrkId)
  const searchOrdPickUpTrks = query => api.get('services/orderservice/api/_search/ord-pick-up-trks', { query: query })

  const getOrderDetail = orderDetailId => api.get('services/orderservice/api/order-details/' + orderDetailId)
  const getOrderDetails = orderRequestId => api.get('services/orderservice/api/order-details/by-order-request', orderRequestId)
  const createOrderDetail = orderDetail => api.post('services/orderservice/api/order-details', orderDetail)
  const updateOrderDetail = orderDetail => api.put('services/orderservice/api/order-details', orderDetail)
  const deleteOrderDetail = orderDetailId => api.delete('services/orderservice/api/order-details/' + orderDetailId)
  const searchOrderDetails = query => api.get('services/orderservice/api/_search/order-details', { query: query })

  const getOrdDtlTran = ordDtlTranId => api.get('services/orderservice/api/ord-dtl-trans/' + ordDtlTranId)
  const getOrdDtlTrans = options => api.get('services/orderservice/api/ord-dtl-trans', options)
  const createOrdDtlTran = ordDtlTran => api.post('services/orderservice/api/ord-dtl-trans', ordDtlTran)
  const updateOrdDtlTran = ordDtlTran => api.put('services/orderservice/api/ord-dtl-trans', ordDtlTran)
  const deleteOrdDtlTran = ordDtlTranId => api.delete('services/orderservice/api/ord-dtl-trans/' + ordDtlTranId)
  const searchOrdDtlTrans = query => api.get('services/orderservice/api/_search/ord-dtl-trans', { query: query })

  const getOrderDoc = orderDocId => api.get('services/orderservice/api/order-docs/' + orderDocId)
  const getOrderDocs = options => api.get('services/orderservice/api/order-docs', options)
  const createOrderDoc = orderDoc => api.post('services/orderservice/api/order-docs', orderDoc)
  const updateOrderDoc = orderDoc => api.put('services/orderservice/api/order-docs', orderDoc)
  const deleteOrderDoc = orderDocId => api.delete('services/orderservice/api/order-docs/' + orderDocId)
  const searchOrderDocs = query => api.get('services/orderservice/api/_search/order-docs', { query: query })

  const getUserPoint = userPointId => api.get('services/orderservice/api/user-points/' + userPointId)
  const getUserPoints = options => api.get('services/orderservice/api/user-points', options)
  const createUserPoint = userPoint => api.post('services/orderservice/api/user-points', userPoint)
  const updateUserPoint = userPoint => api.put('services/orderservice/api/user-points', userPoint)
  const deleteUserPoint = userPointId => api.delete('services/orderservice/api/user-points/' + userPointId)
  const searchUserPoints = query => api.get('services/orderservice/api/_search/user-points', { query: query })

  const getUserPointTran = userPointTranId => api.get('services/orderservice/api/user-point-trans/' + userPointTranId)
  const getUserPointTrans = options => api.get('services/orderservice/api/user-point-trans', options)
  const createUserPointTran = userPointTran => api.post('services/orderservice/api/user-point-trans', userPointTran)
  const updateUserPointTran = userPointTran => api.put('services/orderservice/api/user-point-trans', userPointTran)
  const deleteUserPointTran = userPointTranId => api.delete('services/orderservice/api/user-point-trans/' + userPointTranId)
  const searchUserPointTrans = query => api.get('services/orderservice/api/_search/user-point-trans', { query: query })

  const getWallet = walletId => api.get('services/pointspaymentservice/api/wallets/' + walletId)
  const getWallets = options => api.get('services/pointspaymentservice/api/wallets', options)
  const withdrawWallet = options => api.post('services/pointspaymentservice/api/wallets/withdraw', options)
  const createWallet = wallet => api.post('services/pointspaymentservice/api/wallets', wallet)
  const updateWallet = wallet => api.put('services/pointspaymentservice/api/wallets', wallet)
  const deleteWallet = walletId => api.delete('services/pointspaymentservice/api/wallets/' + walletId)
  const searchWallets = query => api.get('services/pointspaymentservice/api/_search/wallets', { query: query })

  const getWalletTx = walletTxId => api.get('services/pointspaymentservice/api/wallet-txes/' + walletTxId)
  const getWalletTxes = options => api.get('services/pointspaymentservice/api/wallet-txes/by-userid', options)
  const createWalletTx = walletTx => api.post('services/pointspaymentservice/api/wallet-txes', walletTx)
  const updateWalletTx = walletTx => api.put('services/pointspaymentservice/api/wallet-txes', walletTx)
  const deleteWalletTx = walletTxId => api.delete('services/pointspaymentservice/api/wallet-txes/' + walletTxId)
  const searchWalletTxes = query => api.get('services/pointspaymentservice/api/_search/wallet-txes', { query: query })

  const getPancardVerify = pancardVerifyId => api.get('services/pointspaymentservice/api/pancard-verifies/' + pancardVerifyId)
  const getPancardVerifies = options => api.get('services/pointspaymentservice/api/pancard-verifies', options)
  const createPancardVerify = pancardVerify => api.post('services/pointspaymentservice/api/pancard-verifies', pancardVerify)
  const updatePancardVerify = pancardVerify => api.put('services/pointspaymentservice/api/pancard-verifies', pancardVerify)
  const deletePancardVerify = pancardVerifyId => api.delete('services/pointspaymentservice/api/pancard-verifies/' + pancardVerifyId)
  const searchPancardVerifies = query => api.get('services/pointspaymentservice/api/_search/pancard-verifies', { query: query })

  const getBankDetailsVerify = bankDetailsVerifyId =>
    api.get('services/pointspaymentservice/api/bank-details-verifies/' + bankDetailsVerifyId)
  const getBankDetailsVerifies = options => api.get('services/pointspaymentservice/api/bank-details-verifies', options)
  const createBankDetailsVerify = bankDetailsVerify =>
    api.post('services/pointspaymentservice/api/bank-details-verifies', bankDetailsVerify)
  const updateBankDetailsVerify = bankDetailsVerify => api.put('services/pointspaymentservice/api/bank-details-verifies', bankDetailsVerify)
  const deleteBankDetailsVerify = bankDetailsVerifyId =>
    api.delete('services/pointspaymentservice/api/bank-details-verifies/' + bankDetailsVerifyId)
  const searchBankDetailsVerifies = query => api.get('services/pointspaymentservice/api/_search/bank-details-verifies', { query: query })

  const getAppVersion = appVersionId => api.get('services/masterservice/api/app-versions/' + appVersionId)
  const getAppVersions = options => api.get('services/masterservice/api/app-versions', options)
  const createAppVersion = appVersion => api.post('services/masterservice/api/app-versions', appVersion)
  const updateAppVersion = appVersion => api.put('services/masterservice/api/app-versions', appVersion)
  const deleteAppVersion = appVersionId => api.delete('services/masterservice/api/app-versions/' + appVersionId)
  const searchAppVersions = query => api.get('services/masterservice/api/_search/app-versions', { query: query })
  // ignite-jhipster-api-method-needle

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    createUser,
    updateUser,
    getUsers,
    getUser,
    deleteUser,

    createUserType,
    updateUserType,
    getUserTypes,
    getUserType,
    deleteUserType,
    searchUserTypes,

    createUserDetail,
    registerCustomer,
    updateUserDetail,
    getUserDetails,
    getUserDetail,
    deleteUserDetail,
    searchUserDetails,

    createAddressType,
    updateAddressType,
    getAddressTypes,
    getAddressType,
    deleteAddressType,
    searchAddressTypes,

    createAddress,
    updateAddress,
    getAddresses,
    getAddress,
    deleteAddress,
    searchAddresses,

    createPhoneType,
    updatePhoneType,
    getPhoneTypes,
    getPhoneType,
    deletePhoneType,
    searchPhoneTypes,

    createPhone,
    updatePhone,
    getPhones,
    getPhone,
    deletePhone,
    searchPhones,

    createEmailType,
    updateEmailType,
    getEmailTypes,
    getEmailType,
    deleteEmailType,
    searchEmailTypes,

    createEmailAdd,
    updateEmailAdd,
    getEmailAdds,
    getEmailAdd,
    deleteEmailAdd,
    searchEmailAdds,

    createDocType,
    updateDocType,
    getDocTypes,
    getDocType,
    deleteDocType,
    searchDocTypes,

    createDocSubType,
    updateDocSubType,
    getDocSubTypes,
    getDocSubType,
    deleteDocSubType,
    searchDocSubTypes,

    createUserDoc,
    updateUserDoc,
    getUserDocs,
    getUserDoc,
    deleteUserDoc,
    searchUserDocs,

    createCountry,
    updateCountry,
    getCountries,
    getCountry,
    deleteCountry,
    searchCountries,

    createState,
    updateState,
    getStates,
    getState,
    deleteState,
    searchStates,

    createCity,
    updateCity,
    getCities,
    getCity,
    deleteCity,
    searchCities,

    createPincode,
    updatePincode,
    getPincodes,
    getPincode,
    deletePincode,
    searchPincodes,

    createArea,
    updateArea,
    getAreas,
    getArea,
    deleteArea,
    searchAreas,

    createStatusType,
    updateStatusType,
    getStatusTypes,
    getStatusType,
    deleteStatusType,
    searchStatusTypes,

    createStatus,
    updateStatus,
    getStatuses,
    getStatus,
    deleteStatus,
    searchStatuses,

    createCategory,
    updateCategory,
    getCategories,
    getCategory,
    deleteCategory,
    searchCategories,

    createSubCategoryType,
    updateSubCategoryType,
    getSubCategoryTypes,
    getSubCategoryType,
    deleteSubCategoryType,
    searchSubCategoryTypes,

    createSubCategory,
    updateSubCategory,
    getSubCategories,
    getSubCategory,
    deleteSubCategory,
    searchSubCategories,

    createCurrency,
    updateCurrency,
    getCurrencies,
    getCurrency,
    deleteCurrency,
    searchCurrencies,

    createCurrencyPoint,
    updateCurrencyPoint,
    getCurrencyPoints,
    getCurrencyPoint,
    deleteCurrencyPoint,
    searchCurrencyPoints,

    createCurrencyBPoint,
    updateCurrencyBPoint,
    getCurrencyBPoints,
    getCurrencyBPoint,
    deleteCurrencyBPoint,
    searchCurrencyBPoints,

    createSbCatTypePoint,
    updateSbCatTypePoint,
    getSbCatTypePoints,
    getSbCatTypePoint,
    deleteSbCatTypePoint,
    searchSbCatTypePoints,

    createCatBPoint,
    updateCatBPoint,
    getCatBPoints,
    getCatBPoint,
    deleteCatBPoint,
    searchCatBPoints,

    createSbCatBPoint,
    updateSbCatBPoint,
    getSbCatBPoints,
    getSbCatBPoint,
    deleteSbCatBPoint,
    searchSbCatBPoints,

    createSbCatTypeBPoint,
    updateSbCatTypeBPoint,
    getSbCatTypeBPoints,
    getSbCatTypeBPoint,
    deleteSbCatTypeBPoint,
    searchSbCatTypeBPoints,

    createSbCatPoint,
    updateSbCatPoint,
    getSbCatPoints,
    getSbCatPoint,
    deleteSbCatPoint,
    searchSbCatPoints,

    createOrderRequest,
    updateOrderRequest,
    getOrderRequests,
    getOrderRequest,
    deleteOrderRequest,
    searchOrderRequests,

    createSMSNotify,
    updateSMSNotify,
    getSMSNotifies,
    getSMSNotify,
    deleteSMSNotify,
    searchSMSNotifies,

    createOrderPickUp,
    updateOrderPickUp,
    getOrderPickUps,
    getOrderPickUp,
    deleteOrderPickUp,
    searchOrderPickUps,

    createOrdPickUpTrk,
    updateOrdPickUpTrk,
    getOrdPickUpTrks,
    getOrdPickUpTrk,
    deleteOrdPickUpTrk,
    searchOrdPickUpTrks,

    createOrderDetail,
    updateOrderDetail,
    getOrderDetails,
    getOrderDetail,
    deleteOrderDetail,
    searchOrderDetails,

    createOrdDtlTran,
    updateOrdDtlTran,
    getOrdDtlTrans,
    getOrdDtlTran,
    deleteOrdDtlTran,
    searchOrdDtlTrans,

    createOrderDoc,
    updateOrderDoc,
    getOrderDocs,
    getOrderDoc,
    deleteOrderDoc,
    searchOrderDocs,

    createUserPoint,
    updateUserPoint,
    getUserPoints,
    getUserPoint,
    deleteUserPoint,
    searchUserPoints,

    createUserPointTran,
    updateUserPointTran,
    getUserPointTrans,
    getUserPointTran,
    deleteUserPointTran,
    searchUserPointTrans,

    createWallet,
    updateWallet,
    getWallets,
    withdrawWallet,
    getWallet,
    deleteWallet,
    searchWallets,

    createWalletTx,
    updateWalletTx,
    getWalletTxes,
    getWalletTx,
    deleteWalletTx,
    searchWalletTxes,

    createPancardVerify,
    updatePancardVerify,
    getPancardVerifies,
    getPancardVerify,
    deletePancardVerify,
    searchPancardVerifies,

    createBankDetailsVerify,
    updateBankDetailsVerify,
    getBankDetailsVerifies,
    getBankDetailsVerify,
    deleteBankDetailsVerify,
    searchBankDetailsVerifies,

    createAppVersion,
    updateAppVersion,
    getAppVersions,
    getAppVersion,
    deleteAppVersion,
    searchAppVersions,
    // ignite-jhipster-api-export-needle
    logout,
    login,
    register,
    forgotPassword,
    getAccount,
    updateAccount,
    changePassword,
  }
}

// let's return back our create method as the default.
export default {
  create,
}
