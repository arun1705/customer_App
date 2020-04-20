// import { AppState, Linking } from 'react-native'
// import { Navigation } from 'react-native-navigation'
// import { Provider } from 'react-redux'
// import { Images } from '../shared/themes'

// api import createStore from '../shared/reducers'
// import Colors from '../shared/themes/colors'
// import '../config/reactotron-config'
// import AccountActions from '../shared/reducers/account.reducer'

// import LoginScreen from '../modules/login/login-screen'
// import LaunchScreen from '../modules/home/launch-screen'
// import DrawerContent from './drawer/drawer-content'
// import SettingsScreen from '../modules/account/settings/settings-screen'
// import RegisterScreen from '../modules/account/register/register-screen'
// import ForgotPasswordScreen from '../modules/account/password-reset/forgot-password-screen'
// import ChangePasswordScreen from '../modules/account/password/change-password-screen'
// import EntitiesScreen from '../modules/entities/entities-screen'
// import StorybookScreen from '../../storybook'
// import ChatScreen from '../modules/chat/chat-screen'
// import UserTypeEntityScreen from '../modules/entities/user-type/user-type-entity-screen'
// import UserTypeEntityDetailScreen from '../modules/entities/user-type/user-type-entity-detail-screen'
// import UserTypeEntityEditScreen from '../modules/entities/user-type/user-type-entity-edit-screen'
// import UserDetailEntityScreen from '../modules/entities/user-details/user-details-entity-screen'
// import UserDetailEntityDetailScreen from '../modules/entities/user-details/user-details-entity-detail-screen'
// import UserDetailEntityEditScreen from '../modules/entities/user-details/user-details-entity-edit-screen'
// import AddressTypeEntityScreen from '../modules/entities/address-type/address-type-entity-screen'
// import AddressTypeEntityDetailScreen from '../modules/entities/address-type/address-type-entity-detail-screen'
// import AddressTypeEntityEditScreen from '../modules/entities/address-type/address-type-entity-edit-screen'
// import AddressEntityScreen from '../modules/entities/address/address-entity-screen'
// import AddressEntityDetailScreen from '../modules/entities/address/address-entity-detail-screen'
// import AddressEntityEditScreen from '../modules/entities/address/address-entity-edit-screen'
// import PhoneTypeEntityScreen from '../modules/entities/phone-type/phone-type-entity-screen'
// import PhoneTypeEntityDetailScreen from '../modules/entities/phone-type/phone-type-entity-detail-screen'
// import PhoneTypeEntityEditScreen from '../modules/entities/phone-type/phone-type-entity-edit-screen'
// import PhoneEntityScreen from '../modules/entities/phone/phone-entity-screen'
// import PhoneEntityDetailScreen from '../modules/entities/phone/phone-entity-detail-screen'
// import PhoneEntityEditScreen from '../modules/entities/phone/phone-entity-edit-screen'
// import EmailTypeEntityScreen from '../modules/entities/email-type/email-type-entity-screen'
// import EmailTypeEntityDetailScreen from '../modules/entities/email-type/email-type-entity-detail-screen'
// import EmailTypeEntityEditScreen from '../modules/entities/email-type/email-type-entity-edit-screen'
// import EmailAddEntityScreen from '../modules/entities/email-add/email-add-entity-screen'
// import EmailAddEntityDetailScreen from '../modules/entities/email-add/email-add-entity-detail-screen'
// import EmailAddEntityEditScreen from '../modules/entities/email-add/email-add-entity-edit-screen'
// import DocTypeEntityScreen from '../modules/entities/doc-type/doc-type-entity-screen'
// import DocTypeEntityDetailScreen from '../modules/entities/doc-type/doc-type-entity-detail-screen'
// import DocTypeEntityEditScreen from '../modules/entities/doc-type/doc-type-entity-edit-screen'
// import DocSubTypeEntityScreen from '../modules/entities/doc-sub-type/doc-sub-type-entity-screen'
// import DocSubTypeEntityDetailScreen from '../modules/entities/doc-sub-type/doc-sub-type-entity-detail-screen'
// import DocSubTypeEntityEditScreen from '../modules/entities/doc-sub-type/doc-sub-type-entity-edit-screen'
// import UserDocEntityScreen from '../modules/entities/user-doc/user-doc-entity-screen'
// import UserDocEntityDetailScreen from '../modules/entities/user-doc/user-doc-entity-detail-screen'
// import UserDocEntityEditScreen from '../modules/entities/user-doc/user-doc-entity-edit-screen'
// import CountryEntityScreen from '../modules/entities/country/country-entity-screen'
// import CountryEntityDetailScreen from '../modules/entities/country/country-entity-detail-screen'
// import CountryEntityEditScreen from '../modules/entities/country/country-entity-edit-screen'
// import StateEntityScreen from '../modules/entities/state/state-entity-screen'
// import StateEntityDetailScreen from '../modules/entities/state/state-entity-detail-screen'
// import StateEntityEditScreen from '../modules/entities/state/state-entity-edit-screen'
// import CityEntityScreen from '../modules/entities/city/city-entity-screen'
// import CityEntityDetailScreen from '../modules/entities/city/city-entity-detail-screen'
// import CityEntityEditScreen from '../modules/entities/city/city-entity-edit-screen'
// import PincodeEntityScreen from '../modules/entities/pincode/pincode-entity-screen'
// import PincodeEntityDetailScreen from '../modules/entities/pincode/pincode-entity-detail-screen'
// import PincodeEntityEditScreen from '../modules/entities/pincode/pincode-entity-edit-screen'
// import AreaEntityScreen from '../modules/entities/area/area-entity-screen'
// import AreaEntityDetailScreen from '../modules/entities/area/area-entity-detail-screen'
// import AreaEntityEditScreen from '../modules/entities/area/area-entity-edit-screen'
// import StatusTypeEntityScreen from '../modules/entities/status-type/status-type-entity-screen'
// import StatusTypeEntityDetailScreen from '../modules/entities/status-type/status-type-entity-detail-screen'
// import StatusTypeEntityEditScreen from '../modules/entities/status-type/status-type-entity-edit-screen'
// import StatusEntityScreen from '../modules/entities/status/status-entity-screen'
// import StatusEntityDetailScreen from '../modules/entities/status/status-entity-detail-screen'
// import StatusEntityEditScreen from '../modules/entities/status/status-entity-edit-screen'
// import CategoryEntityScreen from '../modules/entities/category/category-entity-screen'
// import CategoryEntityDetailScreen from '../modules/entities/category/category-entity-detail-screen'
// import CategoryEntityEditScreen from '../modules/entities/category/category-entity-edit-screen'
// import SubCategoryTypeEntityScreen from '../modules/entities/sub-category-type/sub-category-type-entity-screen'
// import SubCategoryTypeEntityDetailScreen from '../modules/entities/sub-category-type/sub-category-type-entity-detail-screen'
// import SubCategoryTypeEntityEditScreen from '../modules/entities/sub-category-type/sub-category-type-entity-edit-screen'
// import SubCategoryEntityScreen from '../modules/entities/sub-category/sub-category-entity-screen'
// import SubCategoryEntityDetailScreen from '../modules/entities/sub-category/sub-category-entity-detail-screen'
// import SubCategoryEntityEditScreen from '../modules/entities/sub-category/sub-category-entity-edit-screen'
// import CurrencyEntityScreen from '../modules/entities/currency/currency-entity-screen'
// import CurrencyEntityDetailScreen from '../modules/entities/currency/currency-entity-detail-screen'
// import CurrencyEntityEditScreen from '../modules/entities/currency/currency-entity-edit-screen'
// import CurrencyPointEntityScreen from '../modules/entities/currency-point/currency-point-entity-screen'
// import CurrencyPointEntityDetailScreen from '../modules/entities/currency-point/currency-point-entity-detail-screen'
// import CurrencyPointEntityEditScreen from '../modules/entities/currency-point/currency-point-entity-edit-screen'
// import CurrencyBPointEntityScreen from '../modules/entities/currency-b-point/currency-b-point-entity-screen'
// import CurrencyBPointEntityDetailScreen from '../modules/entities/currency-b-point/currency-b-point-entity-detail-screen'
// import CurrencyBPointEntityEditScreen from '../modules/entities/currency-b-point/currency-b-point-entity-edit-screen'
// import SbCatTypePointEntityScreen from '../modules/entities/sb-cat-type-point/sb-cat-type-point-entity-screen'
// import SbCatTypePointEntityDetailScreen from '../modules/entities/sb-cat-type-point/sb-cat-type-point-entity-detail-screen'
// import SbCatTypePointEntityEditScreen from '../modules/entities/sb-cat-type-point/sb-cat-type-point-entity-edit-screen'
// import CatBPointEntityScreen from '../modules/entities/cat-b-point/cat-b-point-entity-screen'
// import CatBPointEntityDetailScreen from '../modules/entities/cat-b-point/cat-b-point-entity-detail-screen'
// import CatBPointEntityEditScreen from '../modules/entities/cat-b-point/cat-b-point-entity-edit-screen'
// import SbCatBPointEntityScreen from '../modules/entities/sb-cat-b-point/sb-cat-b-point-entity-screen'
// import SbCatBPointEntityDetailScreen from '../modules/entities/sb-cat-b-point/sb-cat-b-point-entity-detail-screen'
// import SbCatBPointEntityEditScreen from '../modules/entities/sb-cat-b-point/sb-cat-b-point-entity-edit-screen'
// import SbCatTypeBPointEntityScreen from '../modules/entities/sb-cat-type-b-point/sb-cat-type-b-point-entity-screen'
// import SbCatTypeBPointEntityDetailScreen from '../modules/entities/sb-cat-type-b-point/sb-cat-type-b-point-entity-detail-screen'
// import SbCatTypeBPointEntityEditScreen from '../modules/entities/sb-cat-type-b-point/sb-cat-type-b-point-entity-edit-screen'
// import SbCatPointEntityScreen from '../modules/entities/sb-cat-point/sb-cat-point-entity-screen'
// import SbCatPointEntityDetailScreen from '../modules/entities/sb-cat-point/sb-cat-point-entity-detail-screen'
// import SbCatPointEntityEditScreen from '../modules/entities/sb-cat-point/sb-cat-point-entity-edit-screen'
// import OrderRequestEntityScreen from '../modules/entities/order-request/order-request-entity-screen'
// import OrderRequestEntityDetailScreen from '../modules/entities/order-request/order-request-entity-detail-screen'
// import OrderRequestEntityEditScreen from '../modules/entities/order-request/order-request-entity-edit-screen'
// import SMSNotifyEntityScreen from '../modules/entities/sms-notify/sms-notify-entity-screen'
// import SMSNotifyEntityDetailScreen from '../modules/entities/sms-notify/sms-notify-entity-detail-screen'
// import SMSNotifyEntityEditScreen from '../modules/entities/sms-notify/sms-notify-entity-edit-screen'
// import OrderPickUpEntityScreen from '../modules/entities/order-pick-up/order-pick-up-entity-screen'
// import OrderPickUpEntityDetailScreen from '../modules/entities/order-pick-up/order-pick-up-entity-detail-screen'
// import OrderPickUpEntityEditScreen from '../modules/entities/order-pick-up/order-pick-up-entity-edit-screen'
// import OrdPickUpTrkEntityScreen from '../modules/entities/ord-pick-up-trk/ord-pick-up-trk-entity-screen'
// import OrdPickUpTrkEntityDetailScreen from '../modules/entities/ord-pick-up-trk/ord-pick-up-trk-entity-detail-screen'
// import OrdPickUpTrkEntityEditScreen from '../modules/entities/ord-pick-up-trk/ord-pick-up-trk-entity-edit-screen'
// import OrderDetailEntityScreen from '../modules/entities/order-details/order-details-entity-screen'
// import OrderDetailEntityDetailScreen from '../modules/entities/order-details/order-details-entity-detail-screen'
// import OrderDetailEntityEditScreen from '../modules/entities/order-details/order-details-entity-edit-screen'
// import OrdDtlTranEntityScreen from '../modules/entities/ord-dtl-trans/ord-dtl-trans-entity-screen'
// import OrdDtlTranEntityDetailScreen from '../modules/entities/ord-dtl-trans/ord-dtl-trans-entity-detail-screen'
// import OrdDtlTranEntityEditScreen from '../modules/entities/ord-dtl-trans/ord-dtl-trans-entity-edit-screen'
// import OrderDocEntityScreen from '../modules/entities/order-doc/order-doc-entity-screen'
// import OrderDocEntityDetailScreen from '../modules/entities/order-doc/order-doc-entity-detail-screen'
// import OrderDocEntityEditScreen from '../modules/entities/order-doc/order-doc-entity-edit-screen'
// import UserPointEntityScreen from '../modules/entities/user-point/user-point-entity-screen'
// import UserPointEntityDetailScreen from '../modules/entities/user-point/user-point-entity-detail-screen'
// import UserPointEntityEditScreen from '../modules/entities/user-point/user-point-entity-edit-screen'
// import UserPointTranEntityScreen from '../modules/entities/user-point-trans/user-point-trans-entity-screen'
// import UserPointTranEntityDetailScreen from '../modules/entities/user-point-trans/user-point-trans-entity-detail-screen'
// import UserPointTranEntityEditScreen from '../modules/entities/user-point-trans/user-point-trans-entity-edit-screen'
// import WalletEntityScreen from '../modules/entities/wallet/wallet-entity-screen'
// import WalletEntityDetailScreen from '../modules/entities/wallet/wallet-entity-detail-screen'
// import WalletEntityEditScreen from '../modules/entities/wallet/wallet-entity-edit-screen'
// import WalletTxEntityScreen from '../modules/entities/wallet-tx/wallet-tx-entity-screen'
// import WalletTxEntityDetailScreen from '../modules/entities/wallet-tx/wallet-tx-entity-detail-screen'
// import WalletTxEntityEditScreen from '../modules/entities/wallet-tx/wallet-tx-entity-edit-screen'
// import PancardVerifyEntityScreen from '../modules/entities/pancard-verify/pancard-verify-entity-screen'
// import PancardVerifyEntityDetailScreen from '../modules/entities/pancard-verify/pancard-verify-entity-detail-screen'
// import PancardVerifyEntityEditScreen from '../modules/entities/pancard-verify/pancard-verify-entity-edit-screen'
// import BankDetailsVerifyEntityScreen from '../modules/entities/bank-details-verify/bank-details-verify-entity-screen'
// import BankDetailsVerifyEntityDetailScreen from '../modules/entities/bank-details-verify/bank-details-verify-entity-detail-screen'
// import BankDetailsVerifyEntityEditScreen from '../modules/entities/bank-details-verify/bank-details-verify-entity-edit-screen'
import AppVersionEntityScreen from '../modules/entities/app-version/app-version-entity-screen'
import AppVersionEntityDetailScreen from '../modules/entities/app-version/app-version-entity-detail-screen'
import AppVersionEntityEditScreen from '../modules/entities/app-version/app-version-entity-edit-screen'
// // // ignite-jhipster-navigation-import-needle

// // export const LOGIN_SCREEN = 'nav.LoginScreen'
// // export const REGISTER_SCREEN = 'nav.RegisterScreen'
// // export const FORGOT_PASSWORD_SCREEN = 'nav.ForgotPasswordScreen'
// // export const CHANGE_PASSWORD_SCREEN = 'nav.ChangePasswordScreen'
// // export const SETTINGS_SCREEN = 'nav.SettingsScreen'
// // export const LAUNCH_SCREEN = 'nav.LaunchScreen'
// // export const DRAWER_CONTENT = 'nav.DrawerContent'
// // export const ENTITIES_SCREEN = 'nav.EntitiesScreen'
// // export const STORYBOOK_SCREEN = 'nav.StorybookScreen'
// // export const CHAT_SCREEN = 'nav.ChatScreen'
// export const USER_TYPE_ENTITY_SCREEN = 'nav.UserTypeEntityScreen'
// export const USER_TYPE_ENTITY_DETAIL_SCREEN = 'nav.UserTypeEntityDetailScreen'
// export const USER_TYPE_ENTITY_EDIT_SCREEN = 'nav.UserTypeEntityEditScreen'
// export const USER_DETAIL_ENTITY_SCREEN = 'nav.UserDetailEntityScreen'
// export const USER_DETAIL_ENTITY_DETAIL_SCREEN = 'nav.UserDetailEntityDetailScreen'
// export const USER_DETAIL_ENTITY_EDIT_SCREEN = 'nav.UserDetailEntityEditScreen'
// export const ADDRESS_TYPE_ENTITY_SCREEN = 'nav.AddressTypeEntityScreen'
// export const ADDRESS_TYPE_ENTITY_DETAIL_SCREEN = 'nav.AddressTypeEntityDetailScreen'
// export const ADDRESS_TYPE_ENTITY_EDIT_SCREEN = 'nav.AddressTypeEntityEditScreen'
// export const ADDRESS_ENTITY_SCREEN = 'nav.AddressEntityScreen'
// export const ADDRESS_ENTITY_DETAIL_SCREEN = 'nav.AddressEntityDetailScreen'
// export const ADDRESS_ENTITY_EDIT_SCREEN = 'nav.AddressEntityEditScreen'
// export const PHONE_TYPE_ENTITY_SCREEN = 'nav.PhoneTypeEntityScreen'
// export const PHONE_TYPE_ENTITY_DETAIL_SCREEN = 'nav.PhoneTypeEntityDetailScreen'
// export const PHONE_TYPE_ENTITY_EDIT_SCREEN = 'nav.PhoneTypeEntityEditScreen'
// export const PHONE_ENTITY_SCREEN = 'nav.PhoneEntityScreen'
// export const PHONE_ENTITY_DETAIL_SCREEN = 'nav.PhoneEntityDetailScreen'
// export const PHONE_ENTITY_EDIT_SCREEN = 'nav.PhoneEntityEditScreen'
// export const EMAIL_TYPE_ENTITY_SCREEN = 'nav.EmailTypeEntityScreen'
// export const EMAIL_TYPE_ENTITY_DETAIL_SCREEN = 'nav.EmailTypeEntityDetailScreen'
// export const EMAIL_TYPE_ENTITY_EDIT_SCREEN = 'nav.EmailTypeEntityEditScreen'
// export const EMAIL_ADD_ENTITY_SCREEN = 'nav.EmailAddEntityScreen'
// export const EMAIL_ADD_ENTITY_DETAIL_SCREEN = 'nav.EmailAddEntityDetailScreen'
// export const EMAIL_ADD_ENTITY_EDIT_SCREEN = 'nav.EmailAddEntityEditScreen'
// export const DOC_TYPE_ENTITY_SCREEN = 'nav.DocTypeEntityScreen'
// export const DOC_TYPE_ENTITY_DETAIL_SCREEN = 'nav.DocTypeEntityDetailScreen'
// export const DOC_TYPE_ENTITY_EDIT_SCREEN = 'nav.DocTypeEntityEditScreen'
// export const DOC_SUB_TYPE_ENTITY_SCREEN = 'nav.DocSubTypeEntityScreen'
// export const DOC_SUB_TYPE_ENTITY_DETAIL_SCREEN = 'nav.DocSubTypeEntityDetailScreen'
// export const DOC_SUB_TYPE_ENTITY_EDIT_SCREEN = 'nav.DocSubTypeEntityEditScreen'
// export const USER_DOC_ENTITY_SCREEN = 'nav.UserDocEntityScreen'
// export const USER_DOC_ENTITY_DETAIL_SCREEN = 'nav.UserDocEntityDetailScreen'
// export const USER_DOC_ENTITY_EDIT_SCREEN = 'nav.UserDocEntityEditScreen'
// export const COUNTRY_ENTITY_SCREEN = 'nav.CountryEntityScreen'
// export const COUNTRY_ENTITY_DETAIL_SCREEN = 'nav.CountryEntityDetailScreen'
// export const COUNTRY_ENTITY_EDIT_SCREEN = 'nav.CountryEntityEditScreen'
// export const STATE_ENTITY_SCREEN = 'nav.StateEntityScreen'
// export const STATE_ENTITY_DETAIL_SCREEN = 'nav.StateEntityDetailScreen'
// export const STATE_ENTITY_EDIT_SCREEN = 'nav.StateEntityEditScreen'
// export const CITY_ENTITY_SCREEN = 'nav.CityEntityScreen'
// export const CITY_ENTITY_DETAIL_SCREEN = 'nav.CityEntityDetailScreen'
// export const CITY_ENTITY_EDIT_SCREEN = 'nav.CityEntityEditScreen'
// export const PINCODE_ENTITY_SCREEN = 'nav.PincodeEntityScreen'
// export const PINCODE_ENTITY_DETAIL_SCREEN = 'nav.PincodeEntityDetailScreen'
// export const PINCODE_ENTITY_EDIT_SCREEN = 'nav.PincodeEntityEditScreen'
// export const AREA_ENTITY_SCREEN = 'nav.AreaEntityScreen'
// export const AREA_ENTITY_DETAIL_SCREEN = 'nav.AreaEntityDetailScreen'
// export const AREA_ENTITY_EDIT_SCREEN = 'nav.AreaEntityEditScreen'
// export const STATUS_TYPE_ENTITY_SCREEN = 'nav.StatusTypeEntityScreen'
// export const STATUS_TYPE_ENTITY_DETAIL_SCREEN = 'nav.StatusTypeEntityDetailScreen'
// export const STATUS_TYPE_ENTITY_EDIT_SCREEN = 'nav.StatusTypeEntityEditScreen'
// export const STATUS_ENTITY_SCREEN = 'nav.StatusEntityScreen'
// export const STATUS_ENTITY_DETAIL_SCREEN = 'nav.StatusEntityDetailScreen'
// export const STATUS_ENTITY_EDIT_SCREEN = 'nav.StatusEntityEditScreen'
// export const CATEGORY_ENTITY_SCREEN = 'nav.CategoryEntityScreen'
// export const CATEGORY_ENTITY_DETAIL_SCREEN = 'nav.CategoryEntityDetailScreen'
// export const CATEGORY_ENTITY_EDIT_SCREEN = 'nav.CategoryEntityEditScreen'
// export const SUB_CATEGORY_TYPE_ENTITY_SCREEN = 'nav.SubCategoryTypeEntityScreen'
// export const SUB_CATEGORY_TYPE_ENTITY_DETAIL_SCREEN = 'nav.SubCategoryTypeEntityDetailScreen'
// export const SUB_CATEGORY_TYPE_ENTITY_EDIT_SCREEN = 'nav.SubCategoryTypeEntityEditScreen'
// export const SUB_CATEGORY_ENTITY_SCREEN = 'nav.SubCategoryEntityScreen'
// export const SUB_CATEGORY_ENTITY_DETAIL_SCREEN = 'nav.SubCategoryEntityDetailScreen'
// export const SUB_CATEGORY_ENTITY_EDIT_SCREEN = 'nav.SubCategoryEntityEditScreen'
// export const CURRENCY_ENTITY_SCREEN = 'nav.CurrencyEntityScreen'
// export const CURRENCY_ENTITY_DETAIL_SCREEN = 'nav.CurrencyEntityDetailScreen'
// export const CURRENCY_ENTITY_EDIT_SCREEN = 'nav.CurrencyEntityEditScreen'
// export const CURRENCY_POINT_ENTITY_SCREEN = 'nav.CurrencyPointEntityScreen'
// export const CURRENCY_POINT_ENTITY_DETAIL_SCREEN = 'nav.CurrencyPointEntityDetailScreen'
// export const CURRENCY_POINT_ENTITY_EDIT_SCREEN = 'nav.CurrencyPointEntityEditScreen'
// export const CURRENCY_B_POINT_ENTITY_SCREEN = 'nav.CurrencyBPointEntityScreen'
// export const CURRENCY_B_POINT_ENTITY_DETAIL_SCREEN = 'nav.CurrencyBPointEntityDetailScreen'
// export const CURRENCY_B_POINT_ENTITY_EDIT_SCREEN = 'nav.CurrencyBPointEntityEditScreen'
// export const SB_CAT_TYPE_POINT_ENTITY_SCREEN = 'nav.SbCatTypePointEntityScreen'
// export const SB_CAT_TYPE_POINT_ENTITY_DETAIL_SCREEN = 'nav.SbCatTypePointEntityDetailScreen'
// export const SB_CAT_TYPE_POINT_ENTITY_EDIT_SCREEN = 'nav.SbCatTypePointEntityEditScreen'
// export const CAT_B_POINT_ENTITY_SCREEN = 'nav.CatBPointEntityScreen'
// export const CAT_B_POINT_ENTITY_DETAIL_SCREEN = 'nav.CatBPointEntityDetailScreen'
// export const CAT_B_POINT_ENTITY_EDIT_SCREEN = 'nav.CatBPointEntityEditScreen'
// export const SB_CAT_B_POINT_ENTITY_SCREEN = 'nav.SbCatBPointEntityScreen'
// export const SB_CAT_B_POINT_ENTITY_DETAIL_SCREEN = 'nav.SbCatBPointEntityDetailScreen'
// export const SB_CAT_B_POINT_ENTITY_EDIT_SCREEN = 'nav.SbCatBPointEntityEditScreen'
// export const SB_CAT_TYPE_B_POINT_ENTITY_SCREEN = 'nav.SbCatTypeBPointEntityScreen'
// export const SB_CAT_TYPE_B_POINT_ENTITY_DETAIL_SCREEN = 'nav.SbCatTypeBPointEntityDetailScreen'
// export const SB_CAT_TYPE_B_POINT_ENTITY_EDIT_SCREEN = 'nav.SbCatTypeBPointEntityEditScreen'
// export const SB_CAT_POINT_ENTITY_SCREEN = 'nav.SbCatPointEntityScreen'
// export const SB_CAT_POINT_ENTITY_DETAIL_SCREEN = 'nav.SbCatPointEntityDetailScreen'
// export const SB_CAT_POINT_ENTITY_EDIT_SCREEN = 'nav.SbCatPointEntityEditScreen'
// export const ORDER_REQUEST_ENTITY_SCREEN = 'nav.OrderRequestEntityScreen'
// export const ORDER_REQUEST_ENTITY_DETAIL_SCREEN = 'nav.OrderRequestEntityDetailScreen'
// export const ORDER_REQUEST_ENTITY_EDIT_SCREEN = 'nav.OrderRequestEntityEditScreen'
// export const SMS_NOTIFY_ENTITY_SCREEN = 'nav.SMSNotifyEntityScreen'
// export const SMS_NOTIFY_ENTITY_DETAIL_SCREEN = 'nav.SMSNotifyEntityDetailScreen'
// export const SMS_NOTIFY_ENTITY_EDIT_SCREEN = 'nav.SMSNotifyEntityEditScreen'
// export const ORDER_PICK_UP_ENTITY_SCREEN = 'nav.OrderPickUpEntityScreen'
// export const ORDER_PICK_UP_ENTITY_DETAIL_SCREEN = 'nav.OrderPickUpEntityDetailScreen'
// export const ORDER_PICK_UP_ENTITY_EDIT_SCREEN = 'nav.OrderPickUpEntityEditScreen'
// export const ORD_PICK_UP_TRK_ENTITY_SCREEN = 'nav.OrdPickUpTrkEntityScreen'
// export const ORD_PICK_UP_TRK_ENTITY_DETAIL_SCREEN = 'nav.OrdPickUpTrkEntityDetailScreen'
// export const ORD_PICK_UP_TRK_ENTITY_EDIT_SCREEN = 'nav.OrdPickUpTrkEntityEditScreen'
// export const ORDER_DETAIL_ENTITY_SCREEN = 'nav.OrderDetailEntityScreen'
// export const ORDER_DETAIL_ENTITY_DETAIL_SCREEN = 'nav.OrderDetailEntityDetailScreen'
// export const ORDER_DETAIL_ENTITY_EDIT_SCREEN = 'nav.OrderDetailEntityEditScreen'
// export const ORD_DTL_TRAN_ENTITY_SCREEN = 'nav.OrdDtlTranEntityScreen'
// export const ORD_DTL_TRAN_ENTITY_DETAIL_SCREEN = 'nav.OrdDtlTranEntityDetailScreen'
// export const ORD_DTL_TRAN_ENTITY_EDIT_SCREEN = 'nav.OrdDtlTranEntityEditScreen'
// export const ORDER_DOC_ENTITY_SCREEN = 'nav.OrderDocEntityScreen'
// export const ORDER_DOC_ENTITY_DETAIL_SCREEN = 'nav.OrderDocEntityDetailScreen'
// export const ORDER_DOC_ENTITY_EDIT_SCREEN = 'nav.OrderDocEntityEditScreen'
// export const USER_POINT_ENTITY_SCREEN = 'nav.UserPointEntityScreen'
// export const USER_POINT_ENTITY_DETAIL_SCREEN = 'nav.UserPointEntityDetailScreen'
// export const USER_POINT_ENTITY_EDIT_SCREEN = 'nav.UserPointEntityEditScreen'
// export const USER_POINT_TRAN_ENTITY_SCREEN = 'nav.UserPointTranEntityScreen'
// export const USER_POINT_TRAN_ENTITY_DETAIL_SCREEN = 'nav.UserPointTranEntityDetailScreen'
// export const USER_POINT_TRAN_ENTITY_EDIT_SCREEN = 'nav.UserPointTranEntityEditScreen'
// export const WALLET_ENTITY_SCREEN = 'nav.WalletEntityScreen'
// export const WALLET_ENTITY_DETAIL_SCREEN = 'nav.WalletEntityDetailScreen'
// export const WALLET_ENTITY_EDIT_SCREEN = 'nav.WalletEntityEditScreen'
// export const WALLET_TX_ENTITY_SCREEN = 'nav.WalletTxEntityScreen'
// export const WALLET_TX_ENTITY_DETAIL_SCREEN = 'nav.WalletTxEntityDetailScreen'
// export const WALLET_TX_ENTITY_EDIT_SCREEN = 'nav.WalletTxEntityEditScreen'
// export const PANCARD_VERIFY_ENTITY_SCREEN = 'nav.PancardVerifyEntityScreen'
// export const PANCARD_VERIFY_ENTITY_DETAIL_SCREEN = 'nav.PancardVerifyEntityDetailScreen'
// export const PANCARD_VERIFY_ENTITY_EDIT_SCREEN = 'nav.PancardVerifyEntityEditScreen'
// export const BANK_DETAILS_VERIFY_ENTITY_SCREEN = 'nav.BankDetailsVerifyEntityScreen'
// export const BANK_DETAILS_VERIFY_ENTITY_DETAIL_SCREEN = 'nav.BankDetailsVerifyEntityDetailScreen'
// export const BANK_DETAILS_VERIFY_ENTITY_EDIT_SCREEN = 'nav.BankDetailsVerifyEntityEditScreen'
export const APP_VERSION_ENTITY_SCREEN = 'nav.AppVersionEntityScreen'
export const APP_VERSION_ENTITY_DETAIL_SCREEN = 'nav.AppVersionEntityDetailScreen'
export const APP_VERSION_ENTITY_EDIT_SCREEN = 'nav.AppVersionEntityEditScreen'
// // ignite-jhipster-navigation-declaration-needle

// const store = createStore()

// export const appStack = {
//   root: {
//     sideMenu: {
//       left: {
//         component: {
//           name: DRAWER_CONTENT,
//         },
//       },
//       center: {
//         stack: {
//           id: 'center',
//           children: [
//             {
//               component: {
//                 name: LAUNCH_SCREEN,
//                 options: {
//                   topBar: {
//                     title: {
//                       text: 'Welcome!',
//                       color: Colors.snow,
//                     },
//                     leftButtons: [
//                       {
//                         id: 'menuButton',
//                         icon: Images.menuIcon,
//                         testID: 'menuButton',
//                         color: Colors.snow,
//                       },
//                     ],
//                   },
//                 },
//               },
//             },
//           ],
//         },
//       },
//     },
//   },
// }

// let lastAppState = 'active'
// function handleAppStateChange(nextAppState) {
//   if (lastAppState.match(/inactive|background/) && nextAppState === 'active') {
//     refreshAccount(store)
//   }
//   lastAppState = nextAppState
// }

// function refreshAccount() {
//   store.dispatch(AccountActions.accountRequest())
// }
// // for deep linking
// function handleOpenURL(event) {
//   console.tron.log(event.url)
//   let splitUrl = event.url.split('/') // ['https:', '', 'domain', 'route', 'params']
//   let importantParameters = splitUrl.splice(3) // ['route', 'params']
//   if (importantParameters.length === 0) {
//     console.tron.log('Sending to home page')
//     return null
//   }
//   if (importantParameters.length === 1) {
//     switch (importantParameters[0]) {
//       case 'register':
//         console.tron.log('Sending to Register Page')
//         registerScreen()
//         break
//       default:
//         console.tron.warn(`Unhandled deep link: ${event.url}`)
//       // default code block
//     }
//   }
// }

// export function registerScreensAndStartApp() {
//   Navigation.registerComponentWithRedux(LOGIN_SCREEN, () => LoginScreen, Provider, store)
//   Navigation.registerComponentWithRedux(REGISTER_SCREEN, () => RegisterScreen, Provider, store)
//   Navigation.registerComponentWithRedux(FORGOT_PASSWORD_SCREEN, () => ForgotPasswordScreen, Provider, store)
//   Navigation.registerComponentWithRedux(CHANGE_PASSWORD_SCREEN, () => ChangePasswordScreen, Provider, store)
//   Navigation.registerComponentWithRedux(SETTINGS_SCREEN, () => SettingsScreen, Provider, store)
//   Navigation.registerComponentWithRedux(DRAWER_CONTENT, () => DrawerContent, Provider, store)
//   Navigation.registerComponentWithRedux(LAUNCH_SCREEN, () => LaunchScreen, Provider, store)
//   Navigation.registerComponentWithRedux(ENTITIES_SCREEN, () => EntitiesScreen, Provider, store)
//   Navigation.registerComponent(STORYBOOK_SCREEN, () => StorybookScreen)
//   Navigation.registerComponentWithRedux(CHAT_SCREEN, () => ChatScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_TYPE_ENTITY_SCREEN, () => UserTypeEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_TYPE_ENTITY_DETAIL_SCREEN, () => UserTypeEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_TYPE_ENTITY_EDIT_SCREEN, () => UserTypeEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_DETAIL_ENTITY_SCREEN, () => UserDetailEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_DETAIL_ENTITY_DETAIL_SCREEN, () => UserDetailEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_DETAIL_ENTITY_EDIT_SCREEN, () => UserDetailEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(ADDRESS_TYPE_ENTITY_SCREEN, () => AddressTypeEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(ADDRESS_TYPE_ENTITY_DETAIL_SCREEN, () => AddressTypeEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(ADDRESS_TYPE_ENTITY_EDIT_SCREEN, () => AddressTypeEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(ADDRESS_ENTITY_SCREEN, () => AddressEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(ADDRESS_ENTITY_DETAIL_SCREEN, () => AddressEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(ADDRESS_ENTITY_EDIT_SCREEN, () => AddressEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(PHONE_TYPE_ENTITY_SCREEN, () => PhoneTypeEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(PHONE_TYPE_ENTITY_DETAIL_SCREEN, () => PhoneTypeEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(PHONE_TYPE_ENTITY_EDIT_SCREEN, () => PhoneTypeEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(PHONE_ENTITY_SCREEN, () => PhoneEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(PHONE_ENTITY_DETAIL_SCREEN, () => PhoneEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(PHONE_ENTITY_EDIT_SCREEN, () => PhoneEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(EMAIL_TYPE_ENTITY_SCREEN, () => EmailTypeEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(EMAIL_TYPE_ENTITY_DETAIL_SCREEN, () => EmailTypeEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(EMAIL_TYPE_ENTITY_EDIT_SCREEN, () => EmailTypeEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(EMAIL_ADD_ENTITY_SCREEN, () => EmailAddEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(EMAIL_ADD_ENTITY_DETAIL_SCREEN, () => EmailAddEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(EMAIL_ADD_ENTITY_EDIT_SCREEN, () => EmailAddEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(DOC_TYPE_ENTITY_SCREEN, () => DocTypeEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(DOC_TYPE_ENTITY_DETAIL_SCREEN, () => DocTypeEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(DOC_TYPE_ENTITY_EDIT_SCREEN, () => DocTypeEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(DOC_SUB_TYPE_ENTITY_SCREEN, () => DocSubTypeEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(DOC_SUB_TYPE_ENTITY_DETAIL_SCREEN, () => DocSubTypeEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(DOC_SUB_TYPE_ENTITY_EDIT_SCREEN, () => DocSubTypeEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_DOC_ENTITY_SCREEN, () => UserDocEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_DOC_ENTITY_DETAIL_SCREEN, () => UserDocEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_DOC_ENTITY_EDIT_SCREEN, () => UserDocEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(COUNTRY_ENTITY_SCREEN, () => CountryEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(COUNTRY_ENTITY_DETAIL_SCREEN, () => CountryEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(COUNTRY_ENTITY_EDIT_SCREEN, () => CountryEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(STATE_ENTITY_SCREEN, () => StateEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(STATE_ENTITY_DETAIL_SCREEN, () => StateEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(STATE_ENTITY_EDIT_SCREEN, () => StateEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(CITY_ENTITY_SCREEN, () => CityEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(CITY_ENTITY_DETAIL_SCREEN, () => CityEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(CITY_ENTITY_EDIT_SCREEN, () => CityEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(PINCODE_ENTITY_SCREEN, () => PincodeEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(PINCODE_ENTITY_DETAIL_SCREEN, () => PincodeEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(PINCODE_ENTITY_EDIT_SCREEN, () => PincodeEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(AREA_ENTITY_SCREEN, () => AreaEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(AREA_ENTITY_DETAIL_SCREEN, () => AreaEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(AREA_ENTITY_EDIT_SCREEN, () => AreaEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(STATUS_TYPE_ENTITY_SCREEN, () => StatusTypeEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(STATUS_TYPE_ENTITY_DETAIL_SCREEN, () => StatusTypeEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(STATUS_TYPE_ENTITY_EDIT_SCREEN, () => StatusTypeEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(STATUS_ENTITY_SCREEN, () => StatusEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(STATUS_ENTITY_DETAIL_SCREEN, () => StatusEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(STATUS_ENTITY_EDIT_SCREEN, () => StatusEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(CATEGORY_ENTITY_SCREEN, () => CategoryEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(CATEGORY_ENTITY_DETAIL_SCREEN, () => CategoryEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(CATEGORY_ENTITY_EDIT_SCREEN, () => CategoryEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(SUB_CATEGORY_TYPE_ENTITY_SCREEN, () => SubCategoryTypeEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(SUB_CATEGORY_TYPE_ENTITY_DETAIL_SCREEN, () => SubCategoryTypeEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(SUB_CATEGORY_TYPE_ENTITY_EDIT_SCREEN, () => SubCategoryTypeEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(SUB_CATEGORY_ENTITY_SCREEN, () => SubCategoryEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(SUB_CATEGORY_ENTITY_DETAIL_SCREEN, () => SubCategoryEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(SUB_CATEGORY_ENTITY_EDIT_SCREEN, () => SubCategoryEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(CURRENCY_ENTITY_SCREEN, () => CurrencyEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(CURRENCY_ENTITY_DETAIL_SCREEN, () => CurrencyEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(CURRENCY_ENTITY_EDIT_SCREEN, () => CurrencyEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(CURRENCY_POINT_ENTITY_SCREEN, () => CurrencyPointEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(CURRENCY_POINT_ENTITY_DETAIL_SCREEN, () => CurrencyPointEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(CURRENCY_POINT_ENTITY_EDIT_SCREEN, () => CurrencyPointEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(CURRENCY_B_POINT_ENTITY_SCREEN, () => CurrencyBPointEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(CURRENCY_B_POINT_ENTITY_DETAIL_SCREEN, () => CurrencyBPointEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(CURRENCY_B_POINT_ENTITY_EDIT_SCREEN, () => CurrencyBPointEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(SB_CAT_TYPE_POINT_ENTITY_SCREEN, () => SbCatTypePointEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(SB_CAT_TYPE_POINT_ENTITY_DETAIL_SCREEN, () => SbCatTypePointEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(SB_CAT_TYPE_POINT_ENTITY_EDIT_SCREEN, () => SbCatTypePointEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(CAT_B_POINT_ENTITY_SCREEN, () => CatBPointEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(CAT_B_POINT_ENTITY_DETAIL_SCREEN, () => CatBPointEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(CAT_B_POINT_ENTITY_EDIT_SCREEN, () => CatBPointEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(SB_CAT_B_POINT_ENTITY_SCREEN, () => SbCatBPointEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(SB_CAT_B_POINT_ENTITY_DETAIL_SCREEN, () => SbCatBPointEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(SB_CAT_B_POINT_ENTITY_EDIT_SCREEN, () => SbCatBPointEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(SB_CAT_TYPE_B_POINT_ENTITY_SCREEN, () => SbCatTypeBPointEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(SB_CAT_TYPE_B_POINT_ENTITY_DETAIL_SCREEN, () => SbCatTypeBPointEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(SB_CAT_TYPE_B_POINT_ENTITY_EDIT_SCREEN, () => SbCatTypeBPointEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(SB_CAT_POINT_ENTITY_SCREEN, () => SbCatPointEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(SB_CAT_POINT_ENTITY_DETAIL_SCREEN, () => SbCatPointEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(SB_CAT_POINT_ENTITY_EDIT_SCREEN, () => SbCatPointEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORDER_REQUEST_ENTITY_SCREEN, () => OrderRequestEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORDER_REQUEST_ENTITY_DETAIL_SCREEN, () => OrderRequestEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORDER_REQUEST_ENTITY_EDIT_SCREEN, () => OrderRequestEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(SMS_NOTIFY_ENTITY_SCREEN, () => SMSNotifyEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(SMS_NOTIFY_ENTITY_DETAIL_SCREEN, () => SMSNotifyEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(SMS_NOTIFY_ENTITY_EDIT_SCREEN, () => SMSNotifyEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORDER_PICK_UP_ENTITY_SCREEN, () => OrderPickUpEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORDER_PICK_UP_ENTITY_DETAIL_SCREEN, () => OrderPickUpEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORDER_PICK_UP_ENTITY_EDIT_SCREEN, () => OrderPickUpEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORD_PICK_UP_TRK_ENTITY_SCREEN, () => OrdPickUpTrkEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORD_PICK_UP_TRK_ENTITY_DETAIL_SCREEN, () => OrdPickUpTrkEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORD_PICK_UP_TRK_ENTITY_EDIT_SCREEN, () => OrdPickUpTrkEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORDER_DETAIL_ENTITY_SCREEN, () => OrderDetailEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORDER_DETAIL_ENTITY_DETAIL_SCREEN, () => OrderDetailEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORDER_DETAIL_ENTITY_EDIT_SCREEN, () => OrderDetailEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORD_DTL_TRAN_ENTITY_SCREEN, () => OrdDtlTranEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORD_DTL_TRAN_ENTITY_DETAIL_SCREEN, () => OrdDtlTranEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORD_DTL_TRAN_ENTITY_EDIT_SCREEN, () => OrdDtlTranEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORDER_DOC_ENTITY_SCREEN, () => OrderDocEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORDER_DOC_ENTITY_DETAIL_SCREEN, () => OrderDocEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(ORDER_DOC_ENTITY_EDIT_SCREEN, () => OrderDocEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_POINT_ENTITY_SCREEN, () => UserPointEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_POINT_ENTITY_DETAIL_SCREEN, () => UserPointEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_POINT_ENTITY_EDIT_SCREEN, () => UserPointEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_POINT_TRAN_ENTITY_SCREEN, () => UserPointTranEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_POINT_TRAN_ENTITY_DETAIL_SCREEN, () => UserPointTranEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(USER_POINT_TRAN_ENTITY_EDIT_SCREEN, () => UserPointTranEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(WALLET_ENTITY_SCREEN, () => WalletEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(WALLET_ENTITY_DETAIL_SCREEN, () => WalletEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(WALLET_ENTITY_EDIT_SCREEN, () => WalletEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(WALLET_TX_ENTITY_SCREEN, () => WalletTxEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(WALLET_TX_ENTITY_DETAIL_SCREEN, () => WalletTxEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(WALLET_TX_ENTITY_EDIT_SCREEN, () => WalletTxEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(PANCARD_VERIFY_ENTITY_SCREEN, () => PancardVerifyEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(PANCARD_VERIFY_ENTITY_DETAIL_SCREEN, () => PancardVerifyEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(PANCARD_VERIFY_ENTITY_EDIT_SCREEN, () => PancardVerifyEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(BANK_DETAILS_VERIFY_ENTITY_SCREEN, () => BankDetailsVerifyEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(BANK_DETAILS_VERIFY_ENTITY_DETAIL_SCREEN, () => BankDetailsVerifyEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(BANK_DETAILS_VERIFY_ENTITY_EDIT_SCREEN, () => BankDetailsVerifyEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(WALLET_ENTITY_SCREEN, () => WalletEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(WALLET_ENTITY_DETAIL_SCREEN, () => WalletEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(WALLET_ENTITY_EDIT_SCREEN, () => WalletEntityEditScreen, Provider, store)
// Navigation.registerComponentWithRedux(WALLET_TX_ENTITY_SCREEN, () => WalletTxEntityScreen, Provider, store)
// Navigation.registerComponentWithRedux(WALLET_TX_ENTITY_DETAIL_SCREEN, () => WalletTxEntityDetailScreen, Provider, store)
// Navigation.registerComponentWithRedux(WALLET_TX_ENTITY_EDIT_SCREEN, () => WalletTxEntityEditScreen, Provider, store)
Navigation.registerComponentWithRedux(APP_VERSION_ENTITY_SCREEN, () => AppVersionEntityScreen, Provider, store)
Navigation.registerComponentWithRedux(APP_VERSION_ENTITY_DETAIL_SCREEN, () => AppVersionEntityDetailScreen, Provider, store)
Navigation.registerComponentWithRedux(APP_VERSION_ENTITY_EDIT_SCREEN, () => AppVersionEntityEditScreen, Provider, store)
//   // ignite-jhipster-navigation-registration-needle

//   Navigation.events().registerAppLaunchedListener(() => {
//     Navigation.setDefaultOptions({
//       topBar: {
//         topBar: {
//           title: {
//             color: Colors.snow,
//           },
//         },
//         backButton: {
//           showTitle: false,
//           testID: 'backButton',
//           icon: Images.chevronLeftIcon,
//           color: Colors.snow,
//           iconColor: Colors.snow,
//         },
//         background: {
//           color: Colors.background,
//         },
//       },
//       sideMenu: {
//         left: {
//           enabled: false,
//         },
//       },
//     })

//     Navigation.setRoot(appStack)

//     // handle app state and deep links
//     AppState.addEventListener('change', handleAppStateChange)
//     Linking.addEventListener('url', handleOpenURL)
//   })
// }

// export const loginScreen = () =>
//   Navigation.showModal({
//     stack: {
//       children: [
//         {
//           component: {
//             name: LOGIN_SCREEN,
//             options: {
//               topBar: {
//                 visible: false,
//                 drawBehind: true,
//               },
//             },
//           },
//         },
//       ],
//     },
//   })

// export const registerScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: REGISTER_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Sign Up',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const forgotPasswordScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: FORGOT_PASSWORD_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Forgot Password',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })
// export const changePasswordScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: CHANGE_PASSWORD_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Change Password',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })
// export const settingsScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: SETTINGS_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Settings',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const entitiesScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: ENTITIES_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Entities',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })
// export const storybookScreen = () => {
//   Navigation.push('center', {
//     component: {
//       name: STORYBOOK_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Storybook',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })
// }
// export const chatScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: CHAT_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Chat',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const userTypeEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: USER_TYPE_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'UserTypes',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const userTypeEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: USER_TYPE_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'UserTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const userTypeEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: USER_TYPE_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'UserTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const userDetailEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: USER_DETAIL_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'UserDetails',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const userDetailEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: USER_DETAIL_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'UserDetails',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const userDetailEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: USER_DETAIL_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'UserDetails',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const addressTypeEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: ADDRESS_TYPE_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'AddressTypes',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const addressTypeEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ADDRESS_TYPE_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'AddressTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const addressTypeEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ADDRESS_TYPE_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'AddressTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const addressEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: ADDRESS_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Addresses',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const addressEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ADDRESS_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Addresses',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const addressEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ADDRESS_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Addresses',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const phoneTypeEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: PHONE_TYPE_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'PhoneTypes',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const phoneTypeEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: PHONE_TYPE_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'PhoneTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const phoneTypeEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: PHONE_TYPE_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'PhoneTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const phoneEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: PHONE_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Phones',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const phoneEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: PHONE_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Phones',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const phoneEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: PHONE_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Phones',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const emailTypeEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: EMAIL_TYPE_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'EmailTypes',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const emailTypeEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: EMAIL_TYPE_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'EmailTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const emailTypeEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: EMAIL_TYPE_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'EmailTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const emailAddEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: EMAIL_ADD_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'EmailAdds',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const emailAddEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: EMAIL_ADD_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'EmailAdds',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const emailAddEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: EMAIL_ADD_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'EmailAdds',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const docTypeEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: DOC_TYPE_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'DocTypes',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const docTypeEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: DOC_TYPE_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'DocTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const docTypeEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: DOC_TYPE_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'DocTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const docSubTypeEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: DOC_SUB_TYPE_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'DocSubTypes',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const docSubTypeEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: DOC_SUB_TYPE_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'DocSubTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const docSubTypeEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: DOC_SUB_TYPE_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'DocSubTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const userDocEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: USER_DOC_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'UserDocs',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const userDocEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: USER_DOC_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'UserDocs',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const userDocEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: USER_DOC_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'UserDocs',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const countryEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: COUNTRY_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Countries',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const countryEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: COUNTRY_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Countries',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const countryEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: COUNTRY_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Countries',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const stateEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: STATE_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'States',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const stateEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: STATE_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'States',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const stateEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: STATE_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'States',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const cityEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: CITY_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Cities',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const cityEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: CITY_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Cities',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const cityEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: CITY_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Cities',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const pincodeEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: PINCODE_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Pincodes',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const pincodeEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: PINCODE_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Pincodes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const pincodeEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: PINCODE_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Pincodes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const areaEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: AREA_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Areas',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const areaEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: AREA_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Areas',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const areaEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: AREA_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Areas',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const statusTypeEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: STATUS_TYPE_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'StatusTypes',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const statusTypeEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: STATUS_TYPE_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'StatusTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const statusTypeEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: STATUS_TYPE_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'StatusTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const statusEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: STATUS_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Statuses',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const statusEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: STATUS_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Statuses',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const statusEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: STATUS_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Statuses',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const categoryEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: CATEGORY_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Categories',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const categoryEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: CATEGORY_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Categories',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const categoryEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: CATEGORY_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Categories',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const subCategoryTypeEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: SUB_CATEGORY_TYPE_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'SubCategoryTypes',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const subCategoryTypeEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SUB_CATEGORY_TYPE_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SubCategoryTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const subCategoryTypeEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SUB_CATEGORY_TYPE_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SubCategoryTypes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const subCategoryEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: SUB_CATEGORY_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'SubCategories',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const subCategoryEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SUB_CATEGORY_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SubCategories',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const subCategoryEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SUB_CATEGORY_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SubCategories',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const currencyEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: CURRENCY_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Currencies',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const currencyEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: CURRENCY_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Currencies',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const currencyEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: CURRENCY_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Currencies',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const currencyPointEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: CURRENCY_POINT_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'CurrencyPoints',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const currencyPointEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: CURRENCY_POINT_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'CurrencyPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const currencyPointEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: CURRENCY_POINT_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'CurrencyPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const currencyBPointEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: CURRENCY_B_POINT_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'CurrencyBPoints',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const currencyBPointEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: CURRENCY_B_POINT_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'CurrencyBPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const currencyBPointEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: CURRENCY_B_POINT_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'CurrencyBPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const sbCatTypePointEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: SB_CAT_TYPE_POINT_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'SbCatTypePoints',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const sbCatTypePointEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SB_CAT_TYPE_POINT_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SbCatTypePoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const sbCatTypePointEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SB_CAT_TYPE_POINT_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SbCatTypePoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const catBPointEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: CAT_B_POINT_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'CatBPoints',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const catBPointEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: CAT_B_POINT_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'CatBPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const catBPointEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: CAT_B_POINT_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'CatBPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const sbCatBPointEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: SB_CAT_B_POINT_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'SbCatBPoints',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const sbCatBPointEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SB_CAT_B_POINT_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SbCatBPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const sbCatBPointEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SB_CAT_B_POINT_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SbCatBPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const sbCatTypeBPointEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: SB_CAT_TYPE_B_POINT_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'SbCatTypeBPoints',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const sbCatTypeBPointEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SB_CAT_TYPE_B_POINT_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SbCatTypeBPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const sbCatTypeBPointEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SB_CAT_TYPE_B_POINT_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SbCatTypeBPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const sbCatPointEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: SB_CAT_POINT_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'SbCatPoints',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const sbCatPointEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SB_CAT_POINT_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SbCatPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const sbCatPointEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SB_CAT_POINT_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SbCatPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const orderRequestEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: ORDER_REQUEST_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'OrderRequests',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const orderRequestEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ORDER_REQUEST_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'OrderRequests',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const orderRequestEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ORDER_REQUEST_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'OrderRequests',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const smsNotifyEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: SMS_NOTIFY_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'SMSNotifies',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const smsNotifyEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SMS_NOTIFY_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SMSNotifies',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const smsNotifyEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: SMS_NOTIFY_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'SMSNotifies',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const orderPickUpEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: ORDER_PICK_UP_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'OrderPickUps',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const orderPickUpEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ORDER_PICK_UP_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'OrderPickUps',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const orderPickUpEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ORDER_PICK_UP_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'OrderPickUps',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const ordPickUpTrkEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: ORD_PICK_UP_TRK_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'OrdPickUpTrks',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const ordPickUpTrkEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ORD_PICK_UP_TRK_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'OrdPickUpTrks',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const ordPickUpTrkEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ORD_PICK_UP_TRK_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'OrdPickUpTrks',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const orderDetailEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: ORDER_DETAIL_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'OrderDetails',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const orderDetailEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ORDER_DETAIL_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'OrderDetails',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const orderDetailEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ORDER_DETAIL_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'OrderDetails',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const ordDtlTranEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: ORD_DTL_TRAN_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'OrdDtlTrans',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const ordDtlTranEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ORD_DTL_TRAN_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'OrdDtlTrans',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const ordDtlTranEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ORD_DTL_TRAN_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'OrdDtlTrans',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const orderDocEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: ORDER_DOC_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'OrderDocs',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const orderDocEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ORDER_DOC_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'OrderDocs',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const orderDocEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: ORDER_DOC_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'OrderDocs',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const userPointEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: USER_POINT_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'UserPoints',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const userPointEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: USER_POINT_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'UserPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const userPointEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: USER_POINT_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'UserPoints',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const userPointTranEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: USER_POINT_TRAN_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'UserPointTrans',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const userPointTranEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: USER_POINT_TRAN_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'UserPointTrans',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const userPointTranEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: USER_POINT_TRAN_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'UserPointTrans',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const walletEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: WALLET_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'Wallets',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const walletEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: WALLET_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Wallets',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const walletEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: WALLET_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Wallets',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const walletTxEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: WALLET_TX_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'WalletTxes',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const walletTxEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: WALLET_TX_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'WalletTxes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const walletTxEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: WALLET_TX_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'WalletTxes',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const pancardVerifyEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: PANCARD_VERIFY_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'PancardVerifies',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const pancardVerifyEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: PANCARD_VERIFY_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'PancardVerifies',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const pancardVerifyEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: PANCARD_VERIFY_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'PancardVerifies',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const bankDetailsVerifyEntityScreen = () =>
//   Navigation.push('center', {
//     component: {
//       name: BANK_DETAILS_VERIFY_ENTITY_SCREEN,
//       options: {
//         topBar: {
//           title: {
//             text: 'BankDetailsVerifies',
//             color: Colors.snow,
//           },
//           rightButtons: [
//             {
//               id: 'createButton',
//               text: 'Create',
//               color: Colors.snow,
//             },
//           ],
//         },
//       },
//     },
//   })

// export const bankDetailsVerifyEntityEditScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: BANK_DETAILS_VERIFY_ENTITY_EDIT_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'BankDetailsVerifies',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

// export const bankDetailsVerifyEntityDetailScreen = data =>
//   Navigation.push('center', {
//     component: {
//       name: BANK_DETAILS_VERIFY_ENTITY_DETAIL_SCREEN,
//       passProps: {
//         data,
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'BankDetailsVerifies',
//             color: Colors.snow,
//           },
//         },
//       },
//     },
//   })

export const appVersionEntityScreen = () =>
  Navigation.push('center', {
    component: {
      name: APP_VERSION_ENTITY_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'AppVersions',
            color: Colors.snow,
          },
          rightButtons: [
            {
              id: 'createButton',
              text: 'Create',
              color: Colors.snow,
            },
          ],
        },
      },
    },
  })

export const appVersionEntityEditScreen = data =>
  Navigation.push('center', {
    component: {
      name: APP_VERSION_ENTITY_EDIT_SCREEN,
      passProps: {
        data,
      },
      options: {
        topBar: {
          title: {
            text: 'AppVersions',
            color: Colors.snow,
          },
        },
      },
    },
  })

export const appVersionEntityDetailScreen = data =>
  Navigation.push('center', {
    component: {
      name: APP_VERSION_ENTITY_DETAIL_SCREEN,
      passProps: {
        data,
      },
      options: {
        topBar: {
          title: {
            text: 'AppVersions',
            color: Colors.snow,
          },
        },
      },
    },
  })
// // // // ignite-jhipster-navigation-method-needle
