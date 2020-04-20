export default {
  // Functions return fixtures

  // entity fixtures
  updateUserType: userType => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-usertype.json'),
    }
  },
  getUserTypes: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-usertypes.json'),
    }
  },
  getUserType: userTypeId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-usertype.json'),
    }
  },
  deleteUserType: userTypeId => {
    return {
      ok: true,
    }
  },
  searchUserTypes: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-usertypes.json'),
    }
  },
  updateUserDetail: userDetail => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-userdetail.json'),
    }
  },
  getUserDetails: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-userdetails.json'),
    }
  },
  getUserDetail: userDetailId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-userdetail.json'),
    }
  },
  deleteUserDetail: userDetailId => {
    return {
      ok: true,
    }
  },
  searchUserDetails: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-userdetails.json'),
    }
  },
  updateAddressType: addressType => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-addresstype.json'),
    }
  },
  getAddressTypes: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-addresstypes.json'),
    }
  },
  getAddressType: addressTypeId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-addresstype.json'),
    }
  },
  deleteAddressType: addressTypeId => {
    return {
      ok: true,
    }
  },
  searchAddressTypes: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-addresstypes.json'),
    }
  },
  updateAddress: address => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-address.json'),
    }
  },
  getAddresses: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-addresses.json'),
    }
  },
  getAddress: addressId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-address.json'),
    }
  },
  deleteAddress: addressId => {
    return {
      ok: true,
    }
  },
  searchAddresses: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-addresses.json'),
    }
  },
  updatePhoneType: phoneType => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-phonetype.json'),
    }
  },
  getPhoneTypes: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-phonetypes.json'),
    }
  },
  getPhoneType: phoneTypeId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-phonetype.json'),
    }
  },
  deletePhoneType: phoneTypeId => {
    return {
      ok: true,
    }
  },
  searchPhoneTypes: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-phonetypes.json'),
    }
  },
  updatePhone: phone => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-phone.json'),
    }
  },
  getPhones: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-phones.json'),
    }
  },
  getPhone: phoneId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-phone.json'),
    }
  },
  deletePhone: phoneId => {
    return {
      ok: true,
    }
  },
  searchPhones: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-phones.json'),
    }
  },
  updateEmailType: emailType => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-emailtype.json'),
    }
  },
  getEmailTypes: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-emailtypes.json'),
    }
  },
  getEmailType: emailTypeId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-emailtype.json'),
    }
  },
  deleteEmailType: emailTypeId => {
    return {
      ok: true,
    }
  },
  searchEmailTypes: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-emailtypes.json'),
    }
  },
  updateEmailAdd: emailAdd => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-emailadd.json'),
    }
  },
  getEmailAdds: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-emailadds.json'),
    }
  },
  getEmailAdd: emailAddId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-emailadd.json'),
    }
  },
  deleteEmailAdd: emailAddId => {
    return {
      ok: true,
    }
  },
  searchEmailAdds: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-emailadds.json'),
    }
  },
  updateDocType: docType => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-doctype.json'),
    }
  },
  getDocTypes: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-doctypes.json'),
    }
  },
  getDocType: docTypeId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-doctype.json'),
    }
  },
  deleteDocType: docTypeId => {
    return {
      ok: true,
    }
  },
  searchDocTypes: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-doctypes.json'),
    }
  },
  updateDocSubType: docSubType => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-docsubtype.json'),
    }
  },
  getDocSubTypes: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-docsubtypes.json'),
    }
  },
  getDocSubType: docSubTypeId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-docsubtype.json'),
    }
  },
  deleteDocSubType: docSubTypeId => {
    return {
      ok: true,
    }
  },
  searchDocSubTypes: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-docsubtypes.json'),
    }
  },
  updateUserDoc: userDoc => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-userdoc.json'),
    }
  },
  getUserDocs: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-userdocs.json'),
    }
  },
  getUserDoc: userDocId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-userdoc.json'),
    }
  },
  deleteUserDoc: userDocId => {
    return {
      ok: true,
    }
  },
  searchUserDocs: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-userdocs.json'),
    }
  },
  updateCountry: country => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-country.json'),
    }
  },
  getCountries: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-countries.json'),
    }
  },
  getCountry: countryId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-country.json'),
    }
  },
  deleteCountry: countryId => {
    return {
      ok: true,
    }
  },
  searchCountries: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-countries.json'),
    }
  },
  updateState: state => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-state.json'),
    }
  },
  getStates: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-states.json'),
    }
  },
  getState: stateId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-state.json'),
    }
  },
  deleteState: stateId => {
    return {
      ok: true,
    }
  },
  searchStates: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-states.json'),
    }
  },
  updateCity: city => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-city.json'),
    }
  },
  getCities: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-cities.json'),
    }
  },
  getCity: cityId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-city.json'),
    }
  },
  deleteCity: cityId => {
    return {
      ok: true,
    }
  },
  searchCities: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-cities.json'),
    }
  },
  updatePincode: pincode => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-pincode.json'),
    }
  },
  getPincodes: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-pincodes.json'),
    }
  },
  getPincode: pincodeId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-pincode.json'),
    }
  },
  deletePincode: pincodeId => {
    return {
      ok: true,
    }
  },
  searchPincodes: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-pincodes.json'),
    }
  },
  updateArea: area => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-area.json'),
    }
  },
  getAreas: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-areas.json'),
    }
  },
  getArea: areaId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-area.json'),
    }
  },
  deleteArea: areaId => {
    return {
      ok: true,
    }
  },
  searchAreas: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-areas.json'),
    }
  },
  updateStatusType: statusType => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-statustype.json'),
    }
  },
  getStatusTypes: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-statustypes.json'),
    }
  },
  getStatusType: statusTypeId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-statustype.json'),
    }
  },
  deleteStatusType: statusTypeId => {
    return {
      ok: true,
    }
  },
  searchStatusTypes: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-statustypes.json'),
    }
  },
  updateStatus: status => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-status.json'),
    }
  },
  getStatuses: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-statuses.json'),
    }
  },
  getStatus: statusId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-status.json'),
    }
  },
  deleteStatus: statusId => {
    return {
      ok: true,
    }
  },
  searchStatuses: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-statuses.json'),
    }
  },
  updateCategory: category => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-category.json'),
    }
  },
  getCategories: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-categories.json'),
    }
  },
  getCategory: categoryId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-category.json'),
    }
  },
  deleteCategory: categoryId => {
    return {
      ok: true,
    }
  },
  searchCategories: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-categories.json'),
    }
  },
  updateSubCategoryType: subCategoryType => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-subcategorytype.json'),
    }
  },
  getSubCategoryTypes: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-subcategorytypes.json'),
    }
  },
  getSubCategoryType: subCategoryTypeId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-subcategorytype.json'),
    }
  },
  deleteSubCategoryType: subCategoryTypeId => {
    return {
      ok: true,
    }
  },
  searchSubCategoryTypes: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-subcategorytypes.json'),
    }
  },
  updateSubCategory: subCategory => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-subcategory.json'),
    }
  },
  getSubCategories: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-subcategories.json'),
    }
  },
  getSubCategory: subCategoryId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-subcategory.json'),
    }
  },
  deleteSubCategory: subCategoryId => {
    return {
      ok: true,
    }
  },
  searchSubCategories: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-subcategories.json'),
    }
  },
  updateCurrency: currency => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-currency.json'),
    }
  },
  getCurrencies: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-currencies.json'),
    }
  },
  getCurrency: currencyId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-currency.json'),
    }
  },
  deleteCurrency: currencyId => {
    return {
      ok: true,
    }
  },
  searchCurrencies: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-currencies.json'),
    }
  },
  updateCurrencyPoint: currencyPoint => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-currencypoint.json'),
    }
  },
  getCurrencyPoints: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-currencypoints.json'),
    }
  },
  getCurrencyPoint: currencyPointId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-currencypoint.json'),
    }
  },
  deleteCurrencyPoint: currencyPointId => {
    return {
      ok: true,
    }
  },
  searchCurrencyPoints: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-currencypoints.json'),
    }
  },
  updateCurrencyBPoint: currencyBPoint => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-currencybpoint.json'),
    }
  },
  getCurrencyBPoints: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-currencybpoints.json'),
    }
  },
  getCurrencyBPoint: currencyBPointId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-currencybpoint.json'),
    }
  },
  deleteCurrencyBPoint: currencyBPointId => {
    return {
      ok: true,
    }
  },
  searchCurrencyBPoints: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-currencybpoints.json'),
    }
  },
  updateSbCatTypePoint: sbCatTypePoint => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-sbcattypepoint.json'),
    }
  },
  getSbCatTypePoints: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-sbcattypepoints.json'),
    }
  },
  getSbCatTypePoint: sbCatTypePointId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-sbcattypepoint.json'),
    }
  },
  deleteSbCatTypePoint: sbCatTypePointId => {
    return {
      ok: true,
    }
  },
  searchSbCatTypePoints: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-sbcattypepoints.json'),
    }
  },
  updateCatBPoint: catBPoint => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-catbpoint.json'),
    }
  },
  getCatBPoints: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-catbpoints.json'),
    }
  },
  getCatBPoint: catBPointId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-catbpoint.json'),
    }
  },
  deleteCatBPoint: catBPointId => {
    return {
      ok: true,
    }
  },
  searchCatBPoints: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-catbpoints.json'),
    }
  },
  updateSbCatBPoint: sbCatBPoint => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-sbcatbpoint.json'),
    }
  },
  getSbCatBPoints: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-sbcatbpoints.json'),
    }
  },
  getSbCatBPoint: sbCatBPointId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-sbcatbpoint.json'),
    }
  },
  deleteSbCatBPoint: sbCatBPointId => {
    return {
      ok: true,
    }
  },
  searchSbCatBPoints: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-sbcatbpoints.json'),
    }
  },
  updateSbCatTypeBPoint: sbCatTypeBPoint => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-sbcattypebpoint.json'),
    }
  },
  getSbCatTypeBPoints: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-sbcattypebpoints.json'),
    }
  },
  getSbCatTypeBPoint: sbCatTypeBPointId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-sbcattypebpoint.json'),
    }
  },
  deleteSbCatTypeBPoint: sbCatTypeBPointId => {
    return {
      ok: true,
    }
  },
  searchSbCatTypeBPoints: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-sbcattypebpoints.json'),
    }
  },
  updateSbCatPoint: sbCatPoint => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-sbcatpoint.json'),
    }
  },
  getSbCatPoints: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-sbcatpoints.json'),
    }
  },
  getSbCatPoint: sbCatPointId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-sbcatpoint.json'),
    }
  },
  deleteSbCatPoint: sbCatPointId => {
    return {
      ok: true,
    }
  },
  searchSbCatPoints: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-sbcatpoints.json'),
    }
  },
  updateOrderRequest: orderRequest => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-orderrequest.json'),
    }
  },
  getOrderRequests: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-orderrequests.json'),
    }
  },
  getOrderRequest: orderRequestId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-orderrequest.json'),
    }
  },
  deleteOrderRequest: orderRequestId => {
    return {
      ok: true,
    }
  },
  searchOrderRequests: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-orderrequests.json'),
    }
  },
  updateSMSNotify: smsNotify => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-smsnotify.json'),
    }
  },
  getSMSNotifies: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-smsnotifies.json'),
    }
  },
  getSMSNotify: smsNotifyId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-smsnotify.json'),
    }
  },
  deleteSMSNotify: smsNotifyId => {
    return {
      ok: true,
    }
  },
  searchSMSNotifies: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-smsnotifies.json'),
    }
  },
  updateOrderPickUp: orderPickUp => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-orderpickup.json'),
    }
  },
  getOrderPickUps: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-orderpickups.json'),
    }
  },
  getOrderPickUp: orderPickUpId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-orderpickup.json'),
    }
  },
  deleteOrderPickUp: orderPickUpId => {
    return {
      ok: true,
    }
  },
  searchOrderPickUps: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-orderpickups.json'),
    }
  },
  updateOrdPickUpTrk: ordPickUpTrk => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-ordpickuptrk.json'),
    }
  },
  getOrdPickUpTrks: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-ordpickuptrks.json'),
    }
  },
  getOrdPickUpTrk: ordPickUpTrkId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-ordpickuptrk.json'),
    }
  },
  deleteOrdPickUpTrk: ordPickUpTrkId => {
    return {
      ok: true,
    }
  },
  searchOrdPickUpTrks: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-ordpickuptrks.json'),
    }
  },
  updateOrderDetail: orderDetail => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-orderdetail.json'),
    }
  },
  getOrderDetails: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-orderdetails.json'),
    }
  },
  getOrderDetail: orderDetailId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-orderdetail.json'),
    }
  },
  deleteOrderDetail: orderDetailId => {
    return {
      ok: true,
    }
  },
  searchOrderDetails: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-orderdetails.json'),
    }
  },
  updateOrdDtlTran: ordDtlTran => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-orddtltran.json'),
    }
  },
  getOrdDtlTrans: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-orddtltrans.json'),
    }
  },
  getOrdDtlTran: ordDtlTranId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-orddtltran.json'),
    }
  },
  deleteOrdDtlTran: ordDtlTranId => {
    return {
      ok: true,
    }
  },
  searchOrdDtlTrans: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-orddtltrans.json'),
    }
  },
  updateOrderDoc: orderDoc => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-orderdoc.json'),
    }
  },
  getOrderDocs: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-orderdocs.json'),
    }
  },
  getOrderDoc: orderDocId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-orderdoc.json'),
    }
  },
  deleteOrderDoc: orderDocId => {
    return {
      ok: true,
    }
  },
  searchOrderDocs: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-orderdocs.json'),
    }
  },
  updateUserPoint: userPoint => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-userpoint.json'),
    }
  },
  getUserPoints: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-userpoints.json'),
    }
  },
  getUserPoint: userPointId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-userpoint.json'),
    }
  },
  deleteUserPoint: userPointId => {
    return {
      ok: true,
    }
  },
  searchUserPoints: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-userpoints.json'),
    }
  },
  updateUserPointTran: userPointTran => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-userpointtran.json'),
    }
  },
  getUserPointTrans: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-userpointtrans.json'),
    }
  },
  getUserPointTran: userPointTranId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-userpointtran.json'),
    }
  },
  deleteUserPointTran: userPointTranId => {
    return {
      ok: true,
    }
  },
  searchUserPointTrans: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-userpointtrans.json'),
    }
  },
  updateWallet: wallet => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-wallet.json'),
    }
  },
  getWallets: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-wallets.json'),
    }
  },
  getWallet: walletId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-wallet.json'),
    }
  },
  deleteWallet: walletId => {
    return {
      ok: true,
    }
  },
  searchWallets: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-wallets.json'),
    }
  },
  updateWalletTx: walletTx => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-wallettx.json'),
    }
  },
  getWalletTxes: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-wallettxes.json'),
    }
  },
  getWalletTx: walletTxId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-wallettx.json'),
    }
  },
  deleteWalletTx: walletTxId => {
    return {
      ok: true,
    }
  },
  searchWalletTxes: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-wallettxes.json'),
    }
  },
  updatePancardVerify: pancardVerify => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-pancardverify.json'),
    }
  },
  getPancardVerifies: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-pancardverifies.json'),
    }
  },
  getPancardVerify: pancardVerifyId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-pancardverify.json'),
    }
  },
  deletePancardVerify: pancardVerifyId => {
    return {
      ok: true,
    }
  },
  searchPancardVerifies: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-pancardverifies.json'),
    }
  },
  updateBankDetailsVerify: bankDetailsVerify => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-bankdetailsverify.json'),
    }
  },
  getBankDetailsVerifies: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-bankdetailsverifies.json'),
    }
  },
  getBankDetailsVerify: bankDetailsVerifyId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-bankdetailsverify.json'),
    }
  },
  deleteBankDetailsVerify: bankDetailsVerifyId => {
    return {
      ok: true,
    }
  },
  searchBankDetailsVerifies: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-bankdetailsverifies.json'),
    }
  },
  updateWallet: wallet => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-wallet.json'),
    }
  },
  getWallets: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-wallets.json'),
    }
  },
  getWallet: walletId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-wallet.json'),
    }
  },
  deleteWallet: walletId => {
    return {
      ok: true,
    }
  },
  searchWallets: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-wallets.json'),
    }
  },
  updateWalletTx: walletTx => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-wallettx.json'),
    }
  },
  getWalletTxes: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-wallettxes.json'),
    }
  },
  getWalletTx: walletTxId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-wallettx.json'),
    }
  },
  deleteWalletTx: walletTxId => {
    return {
      ok: true,
    }
  },
  searchWalletTxes: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-wallettxes.json'),
    }
  },
  updateAppVersion: appVersion => {
    return {
      ok: true,
      data: require('../../shared/fixtures/update-appversion.json'),
    }
  },
  getAppVersions: () => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-appversions.json'),
    }
  },
  getAppVersion: appVersionId => {
    return {
      ok: true,
      data: require('../../shared/fixtures/get-appversion.json'),
    }
  },
  deleteAppVersion: appVersionId => {
    return {
      ok: true,
    }
  },
  searchAppVersions: query => {
    return {
      ok: true,
      data: require('../../shared/fixtures/search-appversions.json'),
    }
  },
  // ignite-jhipster-api-fixture-needle

  // user fixtures
  updateUser: user => {
    return {
      ok: true,
      data: require('../fixtures/update-user.json'),
    }
  },
  getUsers: () => {
    return {
      ok: true,
      data: require('../fixtures/get-users.json'),
    }
  },
  getUser: userId => {
    return {
      ok: true,
      data: require('../fixtures/get-user.json'),
    }
  },
  deleteUser: userId => {
    return {
      ok: true,
    }
  },
  // auth fixtures
  logout: () => {
    return {
      ok: true,
    }
  },
  login: authObj => {
    if (authObj.username === 'user' && authObj.password === 'user') {
      return {
        ok: true,
        data: require('../fixtures/login.json'),
      }
    } else {
      return {
        ok: false,
        status: 400,
        data: 'Invalid credentials',
      }
    }
  },
  register: ({ user }) => {
    if (user === 'user') {
      return {
        ok: true,
      }
    } else {
      return {
        ok: false,
        data: {
          title: 'Invalid email',
        },
      }
    }
  },
  forgotPassword: ({ email }) => {
    if (email === 'valid@gmail.com') {
      return {
        ok: true,
      }
    } else {
      return {
        ok: false,
        data: 'Invalid email',
      }
    }
  },
  getAccount: () => {
    return {
      ok: true,
      status: 200,
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      data: require('../fixtures/get-account.json'),
    }
  },
  updateAccount: () => {
    return {
      ok: true,
    }
  },
  changePassword: ({ currentPassword }) => {
    if (currentPassword === 'valid-password') {
      return {
        ok: true,
      }
    } else {
      return {
        ok: false,
        data: 'Password error',
      }
    }
  },
}
