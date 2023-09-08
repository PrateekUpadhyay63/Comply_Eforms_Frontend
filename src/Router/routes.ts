import React from 'react';
import { RouteType } from './types';
import Utils from '../Utils';

// // Instead of regular import statements, we will use the above approach for lazy loading
// const LoginWrapper = React.lazy(() => import('../Pages/Auth/login'));
// const ForgotPasswordWrapper = React.lazy(() => import('../Pages/Auth/forgotPassword'));
// const ResetPasswordWrapper = React.lazy(() => import('../Pages/Auth/resetPassword'));
// const DashboardWrapper = React.lazy(() => import('../Pages/dashboard'));
const W9 = React.lazy(() => import('../Components/w9'));
const IndividualUs = React.lazy(() => import('../Components/individualUS'));
const EntityUs = React.lazy(() => import('../Components/entity'));
const Term =  React.lazy(() => import('../Components/term'));
const Certificates = React.lazy(() => import('../Components/certificates'));

// const RolesDetailWrapper = React.lazy(() => import('../Modules/RolesManagement/RolesDetail'));
// const SubAdminWrapper = React.lazy(() => import('../Modules/RolesManagement/SubAdmin/index'));
// const RolesAddSubAdminWrapper = React.lazy(
//   () => import('../Modules/RolesManagement/SubAdmin/addSubAdmin')
// );
// const AddRoleWrapper = React.lazy(() => import('../Modules/RolesManagement/RolesDetail/addRole'));
// const RolesSubAdminDetailWrapper = React.lazy(
//   () => import('../Modules/RolesManagement/SubAdmin/subAdminDetails')
// );
// const UserManagementWrapper = React.lazy(() => import('../Pages/UserManagement'));
// const propertyManagementWrapper = React.lazy(() => import('../Pages/PropertyManagement'));
// const userWalletWrapper = React.lazy(() => import('../Pages/UserWallet'));
// const propertyWalletWrapper = React.lazy(() => import('../Pages/PropertyWallet'));
// const blockedUserWrapper = React.lazy(() => import('../Modules/UserManagement/BlockedUser'));
// const upcomingPropertyWrapper = React.lazy(
//   () => import('../Modules/PropertyManagement/UpcomingProperty')
// );
// const publishedPropertyWrapper = React.lazy(
//   () => import('../Modules/PropertyManagement/PublishedProperty')
// );
// const addPropertyWrapper = React.lazy(() => import('../Modules/PropertyManagement/AddProperty'));
// const ResendEmailWrapper = React.lazy(() => import('../Pages/Auth/resendEmail'));
// const editPropertyWrapper = React.lazy(() => import('../Modules/PropertyManagement/EditProperty'));
// const propertyDetailWrapper = React.lazy(
//   () => import('src/Modules/PropertyManagement/PropertyDetail')
// );
// const userDetailWrapper = React.lazy(() => import('../Modules/UserManagement/UserDetail'));
// const kycDetailWrapper = React.lazy(() => import('../Modules/UserManagement/UserDetail/kycDetail'));
// const kycProfileDetailHistoryWrapper = React.lazy(
//   () => import('../Modules/UserManagement/UserDetail/profileDetailHistory')
// );
// const kycIdVerificationHistoryWrapper = React.lazy(
//   () => import('../Modules/UserManagement/UserDetail/idVerificationHistory')
// );
// const kycAddressVerificationHistoryWrapper = React.lazy(
//   () => import('../Modules/UserManagement/UserDetail/addressVerificationHistory')
// );
// const AMLCheckHistoryWrapper = React.lazy(
//   () => import('../Modules/UserManagement/UserDetail/amlCheckHistory')
// );
// const userWalletDetailWrapper = React.lazy(
//   () => import('../Modules/UserManagement/UserDetail/userWalletDetail')
// );
// const ViewTransaction = React.lazy(() => import('../Modules/PropertyManagement/ViewTransaction'));
// const TransactionDetailWrapper = React.lazy(
//   () => import('../Modules/UserManagement/UserDetail/transactionDetail')
// );
// const UserWalletTransactionDetailWrapper = React.lazy(
//   () => import('../Modules/UserWallet/userWalletTransactionDetails')
// );
// const PropertyWalletTransactionDetailWrapper = React.lazy(
//   () => import('../Modules/PropertyWallet/propertyWalletTransactionDetail')
// );
// const TransactionDetail = React.lazy(
//   () => import('../Modules/PropertyManagement/ViewTransaction/transactionDetail')
// );
// const SliceWalletWrapper = React.lazy(() => import('../Pages/SliceWallet'));
// const SliceWalletTransactionDetailWrapper = React.lazy(
//   () => import('../Modules/SliceWallet/sliceWalletTransactionDetails')
// );
// const ExternalAccountWrapper = React.lazy(() => import('../Pages/ExternalAccount'));

// const ExternalAddAccountWrapper = React.lazy(() => import('../Modules/ExternalAccount/AddAccount'));
// const ExternalEditAccountWrapper = React.lazy(
//   () => import('../Modules/ExternalAccount/EditAccount')
// );
// const ExternalViewTypesWrapper = React.lazy(() => import('../Modules/ExternalAccount/ViewTypes'));

// const ExternalAccountDetailWrapper = React.lazy(
//   () => import('../Modules/ExternalAccount/AccountDetail')
// );

// const CouponManagementWrapper = React.lazy(() => import('../Pages/CouponManagement'));
// const AddCoupontWrapper = React.lazy(() => import('../Modules/CouponManagement/AddCoupon'));
// const PromotionWrapper = React.lazy(() => import('../Modules/CouponManagement/promotion/index'));
// const PropertyManagementTransactionDetail = React.lazy(
//   () => import('../Modules/PropertyManagement/ViewTransaction/transactionDetail')
// );

// const CMSManagementWrapper = React.lazy(() => import('../Pages/CMSManagement/'));
// const AddJustSliceManagementWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/JustSliceThing/AddJustSlice')
// );
// const EditJustSliceManagementWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/JustSliceThing/EditSliceThings')
// );
// const AddBlogWrapper = React.lazy(() => import('../Modules/CMSManagement/Blog/AddBlog'));
// const DailyDoseBlogWrapper = React.lazy(() => import('../Modules/CMSManagement/Blog/DailyDose'));
// const EditBlogWrapper = React.lazy(() => import('../Modules/CMSManagement/Blog/EditBlog'));
// const EditDailyDoseWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/Blog/EditDailyDose')
// );

// const BlogDetailWrapper = React.lazy(() => import('../Modules/CMSManagement/Blog/BlogDetail'));
// const AddNewsWrapper = React.lazy(() => import('../Modules/CMSManagement/News/AddNews'));
// const NewsDetailWrapper = React.lazy(() => import('../Modules/CMSManagement/News/NewsDetail'));

// const JustSliceDetailManagementWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/JustSliceThing/JustSliceDetail')
// );
// const UnpublishedPropertyDetail = React.lazy(
//   () => import('../Modules/PropertyManagement/UnpublishedProperty')
// );
// const AddSliceAmbassadorWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/SliceAmbassador/AddAmbassador')
// );

// const EditSliceAmbassadorWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/SliceAmbassador/EditAmbassador')
// );
// const SliceAmbassadorDetailManagementWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/SliceAmbassador/SliceAmbassadorDetail')
// );

// const AddPerkInvestmentWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/PerkInvestment/AddPerkInvestment')
// );
// const EditPerkInvestmentWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/PerkInvestment/EditPerkInvestment')
// );
// const PerkInvestmentDetailManagementWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/PerkInvestment/PerkInvestmentDetail')
// );
// const AddLearnToInvestWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/LearnToInvest/AddLearnToInvest')
// );
// const EditLearnToInvestWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/LearnToInvest/EditLearnToInvest')
// );
// const LearnToInvestDetailManagementWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/LearnToInvest/LearnToInvestDetail')
// );
// const AddIconWrapper = React.lazy(() => import('../Modules/CMSManagement/Icons/AddIcon'));
// const EditIconWrapper = React.lazy(() => import('../Modules/CMSManagement/Icons/EditIcon'));
// const IconDetailManagementWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/Icons/IconDetail')
// );
// const FaqDetailManagementWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/Faqs/FaqDetail')
// );

// const AddLegalTitleWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/LegalContent/AddLegalTitle')
// );
// // const AppScreenWrapper = React.lazy(() => import('../Modules/CMSManagement/LoginScreen/App'));
// const AddRewardGrowMoreWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/RewardsAndGrowMore/AddRewardsAndGrowMore')
// );
// const EditRewardGrowMoreWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/RewardsAndGrowMore/EditRewardsAndGrowMore')
// );
// const RewardGrowMoreDetailManagementWrapper = React.lazy(
//   () => import('../Modules/CMSManagement/RewardsAndGrowMore/RewardsAndGrowMoreDetail')
// );
// const DistributeDividendPropertyWalletWrapper = React.lazy(
//   () => import('../Modules/PropertyWallet/distributeDividend')
// );
// const FinalSettlementPropertyWalletWrapper = React.lazy(
//   () => import('../Modules/PropertyWallet/finalSettlement')
// );
// const PromotionDetailWrapper = React.lazy(
//   () => import('../Modules/CouponManagement/promotion/details')
// );
// const ReferralDetailWrapper = React.lazy(
//   () => import('../Modules/CouponManagement/Referral/details')
// );
// const AddCouponReferral = React.lazy(
//   () => import('../Modules/CouponManagement/Referral/addCoupon')
// );
// const EditNewsWrapper = React.lazy(() => import('../Modules/CMSManagement/News/EditNews'));
// const PageNotFoundWrapper = React.lazy(() => import('../Components/PageNotFound'));
const ROUTES: Array<RouteType> = [
  {
    name: 'W9',
    path: "W9",
    id: 1,
    Component: W9,
    isPrivate: true,
    roleName: 'DASHBOARD',
  },
  {
    name: 'IndividualUs',
    path:"IndividualUs",
    id: 2,
    Component: IndividualUs,
    isPrivate: true,
  },
  {
    name: 'EntityUs',
    path:"EntityUs",
    id: 2,
    Component: EntityUs,
    isPrivate: true},
    {
      name: 'Term',
      path:"Term",
      id: 3,
      Component: Term,
      isPrivate: true},
      {
        name: 'Certificates',
        path:"Certificates",
        id: 4,
        Component: Certificates,
        isPrivate: true},


  

//   {
//     name: 'Login',
//     path: Utils.PathName.Login,
//     id: 4,
//     Component: LoginWrapper,
//     isPrivate: false,
//   },
//   {
//     name: 'Forgot Password',
//     path: Utils.PathName.ForgotPassword,
//     id: 5,
//     Component: ForgotPasswordWrapper,
//     isPrivate: false,
//   },
//   {
//     name: 'Reset Password',
//     path: Utils.PathName.ResetPassword,
//     id: 6,
//     Component: ResetPasswordWrapper,
//     isPrivate: false,
//   },
//   {
//     name: 'Resend Email',
//     path: Utils.PathName.ResendEmail,
//     id: 7,
//     Component: ResendEmailWrapper,
//     isPrivate: false,
//   },
//   // TODO: change isPrivate to true for all private components
//   {
//     name: 'Dashboard',
//     path: Utils.PathName.LandingPage,
//     id: 8,
//     Component: LoginWrapper,
//     isPrivate: false,
//   },
//   {
//     name: 'User Management',
//     path: Utils.PathName.UserManagement,
//     id: 9,
//     Component: UserManagementWrapper,
//     isPrivate: true,
//     roleName: 'USER_LISTING',
//   },
//   {
//     name: 'User Management Detail',
//     path: Utils.PathName.UserDetail,
//     id: 10,
//     Component: userDetailWrapper,
//     isPrivate: true,
//     roleName: 'USER_DETAILS_REGISTRATION',
//   },
//   {
//     name: 'User Management Kyc Detail',
//     path: Utils.PathName.KycDetail,
//     id: 20,
//     Component: kycDetailWrapper,
//     isPrivate: true,
//     roleName: 'USER_DETAIL_KYC',
//   },
//   {
//     name: 'User Management User Wallet',
//     path: Utils.PathName.UserWalletDetail,
//     id: 21,
//     Component: userWalletDetailWrapper,
//     isPrivate: true,
//     roleName: 'USER_DETAIL_USER_WALLET',
//   },
//   {
//     name: 'User Management Wallet Transaction Detail',
//     path: Utils.PathName.UserTransactionDetail,
//     id: 22,
//     Component: TransactionDetailWrapper,
//     isPrivate: true,
//     roleName: 'USER_DETAIL_USER_WALLET',
//   },
//   {
//     name: 'Kyc Profile Detail History',
//     path: Utils.PathName.KycProfileDetailHistory,
//     id: 78,
//     Component: kycProfileDetailHistoryWrapper,
//     isPrivate: true,
//     roleName: 'USER_DETAIL_KYC',
//   },
//   {
//     name: 'Kyc ID Verification History',
//     path: Utils.PathName.KycIdVerificationHistory,
//     id: 79,
//     Component: kycIdVerificationHistoryWrapper,
//     isPrivate: true,
//     roleName: 'USER_DETAIL_KYC',
//   },
//   {
//     name: 'Address Verification History',
//     path: Utils.PathName.KycAddressVerificationHistory,
//     id: 80,
//     Component: kycAddressVerificationHistoryWrapper,
//     isPrivate: true,
//     roleName: 'USER_DETAIL_KYC',
//   },
//   {
//     name: 'AML Check History',
//     path: Utils.PathName.AMLCheckHistory,
//     id: 81,
//     Component: AMLCheckHistoryWrapper,
//     isPrivate: true,
//     roleName: 'USER_DETAIL_KYC',
//   },
//   {
//     name: 'Blocked Users',
//     path: Utils.PathName.BlockedUsers,
//     id: 15,
//     Component: blockedUserWrapper,
//     isPrivate: true,
//     roleName: 'USER_LISTING',
//   },
//   {
//     name: 'Property Management',
//     path: Utils.PathName.PropertyManagement,
//     id: 11,
//     Component: propertyManagementWrapper,
//     isPrivate: true,
//     roleName: 'PROPERTY_LISTING',
//   },

//   {
//     name: 'Property Details',
//     path: Utils.PathName.PropertyDetail,
//     id: 12,
//     Component: propertyDetailWrapper,
//     isPrivate: true,
//     roleName: 'PROPERTY_LISTING',
//   },
//   {
//     name: 'Upcoming Property',
//     path: Utils.PathName.UpcomingProperty,
//     id: 16,
//     Component: upcomingPropertyWrapper,
//     isPrivate: true,
//     roleName: 'PROPERTY_LISTING',
//   },
//   {
//     name: 'Published Property',
//     path: Utils.PathName.PublishProperty,
//     id: 17,
//     Component: publishedPropertyWrapper,
//     isPrivate: true,
//     roleName: 'PROPERTY_LISTING',
//   },
//   {
//     name: 'Add Property',
//     path: Utils.PathName.AddProperty,
//     id: 18,
//     Component: addPropertyWrapper,
//     isPrivate: true,
//     roleName: 'ADD_PROPERTY',
//   },
//   {
//     name: 'Edit Property',
//     path: Utils.PathName.EditProperty,
//     id: 19,
//     Component: editPropertyWrapper,
//     isPrivate: true,
//     roleName: 'EDIT_PROPERTY',
//   },
//   {
//     name: 'View Transaction',
//     path: Utils.PathName.ViewTransaction,
//     id: 3,
//     Component: ViewTransaction,
//     isPrivate: true,
//     roleName: 'PROPERTY_MGMT_VIEW_TRANSACTION',
//   },
//   {
//     name: 'Unpublished Property Detail',
//     path: Utils.PathName.UnpublishedPropertyDetail,
//     id: 62,
//     Component: UnpublishedPropertyDetail,
//     isPrivate: true,
//   },
//   {
//     name: 'property Management Transaction Detail',
//     path: Utils.PathName.PropertyTransactionDetail,
//     id: 24,
//     Component: PropertyManagementTransactionDetail,
//     isPrivate: true,
//     roleName: 'PROPERTY_MGMT_VIEW_TRANSACTION',
//   },
//   {
//     name: 'Final Settlement Property Management View Transaction',
//     path: Utils.PathName.finalSettlementPropertyManagementWallet,
//     id: 61,
//     Component: FinalSettlementPropertyWalletWrapper,
//     roleName: 'PROPERTY_MGMT_FINAL_SETTLEMENT',
//   },
//   {
//     name: 'Distribute Dividend Property Management View Transaction',
//     path: Utils.PathName.distributeDividendPropertyManagementWallet,
//     id: 60,
//     Component: DistributeDividendPropertyWalletWrapper,
//     isPrivate: true,
//     roleName: 'PROPERTY_MGMT_DISTRIBUTE_DIVIDEND',
//   },
//   {
//     name: 'User Wallet',
//     path: Utils.PathName.UserWallet,
//     id: 13,
//     Component: userWalletWrapper,
//     isPrivate: true,
//     roleName: 'VIEW_USER_WALLET',
//   },
//   {
//     name: 'User Wallet Transaction Detail',
//     path: Utils.PathName.userWalletTransactionDetail,
//     id: 23,
//     Component: UserWalletTransactionDetailWrapper,
//     isPrivate: true,
//     roleName: 'VIEW_USER_WALLET',
//   },
//   {
//     name: 'Property Wallet',
//     path: Utils.PathName.PropertyWallet,
//     id: 14,
//     Component: propertyWalletWrapper,
//     isPrivate: true,
//     roleName: 'VIEW_PROPERTY_WALLET',
//   },
//   {
//     name: 'property Wallet Transaction Detail',
//     path: Utils.PathName.propertyWalletTransactionDetail,
//     id: 25,
//     Component: PropertyWalletTransactionDetailWrapper,
//     isPrivate: true,
//     roleName: 'VIEW_PROPERTY_WALLET',
//   },
//   {
//     name: 'Distribute Dividend Property Wallet',
//     path: Utils.PathName.distributeDividendPropertWallet,
//     id: 58,
//     Component: DistributeDividendPropertyWalletWrapper,
//     isPrivate: true,
//     roleName: 'PROPERT_WALLET_DISTRIBUTE_DIVIDEND',
//   },
//   {
//     name: 'Final Settlement Property Wallet',
//     path: Utils.PathName.finalSettlementPropertyWallet,
//     id: 59,
//     Component: FinalSettlementPropertyWalletWrapper,
//     isPrivate: true,
//     roleName: 'PROPERT_WALLET_FINAL_SETTLEMENT',
//   },
//   {
//     name: 'Slice Wallet',
//     path: Utils.PathName.SliceWallet,
//     id: 75,
//     Component: SliceWalletWrapper,
//     isPrivate: true,
//     roleName: 'VIEW_SLICE_WALLET',
//   },
//   {
//     name: 'Slice Wallet Transaction',
//     path: Utils.PathName.sliceWalletTransactionDetails,
//     id: 76,
//     Component: SliceWalletTransactionDetailWrapper,
//     isPrivate: true,
//     roleName: 'VIEW_SLICE_WALLET',
//   },
//   {
//     name: 'External Account',
//     path: Utils.PathName.ExternalAccount,
//     id: 26,
//     Component: ExternalAccountWrapper,
//     isPrivate: true,
//     roleName: 'VIEW_EXTERNAL_ACCOUNT',
//   },
//   {
//     name: 'External Add Account',
//     path: Utils.PathName.ExternalAddAccount,
//     id: 27,
//     Component: ExternalAddAccountWrapper,
//     isPrivate: true,
//     roleName: 'ADD_EXTERNAL_ACCOUNT',
//   },
//   {
//     name: 'External Account Detail',
//     path: Utils.PathName.ExternalAccountDetail,
//     id: 28,
//     Component: ExternalAccountDetailWrapper,
//     isPrivate: true,
//     roleName: 'VIEW_EXTERNAL_ACCOUNT',
//   },
//   {
//     name: 'External Edit_Account',
//     path: Utils.PathName.ExternalEditAccount,
//     id: 65,
//     Component: ExternalEditAccountWrapper,
//     isPrivate: true,
//     roleName: 'ADD_EXTERNAL_ACCOUNT',
//   },
//   {
//     name: 'External View Types',
//     path: Utils.PathName.ExternalViewTypes,
//     id: 66,
//     Component: ExternalViewTypesWrapper,
//     isPrivate: true,
//     roleName: 'EXTERNAL_ACCOUNT_VIEW_TYPES',
//   },
//   {
//     name: 'Coupon Referral Management',
//     path: Utils.PathName.CouponManagement,
//     id: 29,
//     Component: CouponManagementWrapper,
//     isPrivate: true,
//     roleName: 'VIEW_REFERRAL_CAMPAIGN',
//   },
//   {
//     name: 'Coupon Add_Coupon',
//     path: Utils.PathName.AddCouponManagement,
//     id: 30,
//     Component: AddCoupontWrapper,
//     isPrivate: true,
//     roleName: 'ADD_GLOBAL_COUPONS',
//   },
//   {
//     name: 'Coupon Management',
//     path: Utils.PathName.PromotionManagement,
//     id: 32,
//     Component: PromotionWrapper,
//     isPrivate: true,
//     roleName: 'VIEW_GLOBAL_COUPONS',
//   },
//   {
//     name: 'Coupon Management',
//     path: Utils.PathName.promotionDetailsWithId,
//     id: 69,
//     Component: PromotionDetailWrapper,
//     isPrivate: true,
//     roleName: 'VIEW_GLOBAL_COUPONS',
//   },
//   {
//     name: 'Referral Details',
//     path: Utils.PathName.referralDetailWithId,
//     id: 70,
//     Component: ReferralDetailWrapper,
//     isPrivate: true,
//     roleName: 'VIEW_REFERRAL_CAMPAIGN',
//   },
//   {
//     name: 'Content Management',
//     path: Utils.PathName.CMSManagement,
//     id: 33,
//     Component: CMSManagementWrapper,
//     isPrivate: true,
//     roleName: 'CMS_VIEW_LISTING',
//   },
//   {
//     name: 'Add Just Slice Things',
//     path: Utils.PathName.AddJustSliceManagement,
//     id: 34,
//     Component: AddJustSliceManagementWrapper,
//     isPrivate: true,
//     roleName: 'CMS_ADD_NEW_ITEM',
//   },
//   {
//     name: 'Edit Just Slice Things',
//     path: Utils.PathName.EditJustSliceManagementDetails,
//     id: 35,
//     Component: EditJustSliceManagementWrapper,
//     isPrivate: true,
//     roleName: 'CMS_UPDATE_NEW_ITEM',
//   },
//   {
//     name: 'Just Slice Detail Things',
//     path: Utils.PathName.JustSliceDetailManagementDetail,
//     id: 41,
//     Component: JustSliceDetailManagementWrapper,
//     isPrivate: true,
//     roleName: 'CMS_VIEW_LISTING',
//   },
//   {
//     name: 'Add Blog',
//     path: Utils.PathName.AddBlog,
//     id: 36,
//     Component: AddBlogWrapper,
//     isPrivate: true,
//     roleName: 'CMS_ADD_NEW_ITEM',
//   },
//   {
//     name: 'Edit Blog',
//     path: Utils.PathName.EditBlogManagement,
//     id: 37,
//     Component: EditBlogWrapper,
//     isPrivate: true,
//     roleName: 'CMS_UPDATE_NEW_ITEM',
//   },
//   {
//     name: 'Blog Detail',
//     path: Utils.PathName.BlogDetailManagement,
//     id: 38,
//     Component: BlogDetailWrapper,
//     isPrivate: true,
//     roleName: 'CMS_VIEW_LISTING',
//   },
//   {
//     name: 'Add News',
//     path: Utils.PathName.AddNews,
//     id: 39,
//     Component: AddNewsWrapper,
//     isPrivate: true,
//     roleName: 'CMS_ADD_NEW_ITEM',
//   },
//   {
//     name: 'News Detail',
//     path: Utils.PathName.NewsDetailManagement,
//     id: 40,
//     Component: NewsDetailWrapper,
//     isPrivate: true,
//     roleName: 'CMS_VIEW_LISTING',
//   },

//   {
//     name: 'Add Slice Ambassador',
//     path: Utils.PathName.AddSliceAmbassdor,
//     id: 42,
//     Component: AddSliceAmbassadorWrapper,
//     isPrivate: true,
//     roleName: 'CMS_ADD_NEW_ITEM',
//   },
//   {
//     name: 'Edit Slice Ambassador',
//     path: Utils.PathName.EditSliceAmbassdorDetails,
//     id: 43,
//     Component: EditSliceAmbassadorWrapper,
//     isPrivate: true,
//     roleName: 'CMS_UPDATE_NEW_ITEM',
//   },

//   {
//     name: 'Slice Ambassador Detail',
//     path: Utils.PathName.SliceAmbassdorDetailManagementDetail,
//     id: 44,
//     Component: SliceAmbassadorDetailManagementWrapper,
//     isPrivate: true,
//     roleName: 'CMS_VIEW_LISTING',
//   },
//   {
//     name: 'Add Perk Investment',
//     path: Utils.PathName.AddPerkInvestment,
//     id: 45,
//     Component: AddPerkInvestmentWrapper,
//     isPrivate: true,
//     roleName: 'CMS_ADD_NEW_ITEM',
//   },
//   {
//     name: 'Edit Perk Investment',
//     path: Utils.PathName.EditPerkInvestmentDetail,
//     id: 63,
//     Component: EditPerkInvestmentWrapper,
//     isPrivate: true,
//     roleName: 'CMS_UPDATE_NEW_ITEM',
//   },
//   {
//     name: 'Perk Investment Detail',
//     path: Utils.PathName.PerkInvestmentDetailManagementDetails,
//     id: 46,
//     Component: PerkInvestmentDetailManagementWrapper,
//     isPrivate: true,
//     roleName: 'CMS_VIEW_LISTING',
//   },
//   {
//     name: 'Add Learn To Invest',
//     path: Utils.PathName.AddLearnToInvest,
//     id: 47,
//     Component: AddLearnToInvestWrapper,
//     isPrivate: true,
//     roleName: 'CMS_ADD_NEW_ITEM',
//   },
//   {
//     name: 'Edit Learn To Invest',
//     path: Utils.PathName.EditLearnToInvestManagement,
//     id: 48,
//     Component: EditLearnToInvestWrapper,
//     isPrivate: true,
//     roleName: 'CMS_UPDATE_NEW_ITEM',
//   },
//   {
//     name: 'Learn To Invest Detail',
//     path: Utils.PathName.LearnToInvestDetail,
//     id: 49,
//     Component: LearnToInvestDetailManagementWrapper,
//     isPrivate: true,
//     roleName: 'CMS_VIEW_LISTING',
//   },

//   {
//     name: 'Add Icon',
//     path: Utils.PathName.AddIcon,
//     id: 50,
//     Component: AddIconWrapper,
//     isPrivate: true,
//     roleName: 'CMS_ADD_NEW_ITEM',
//   },
//   {
//     name: 'Edit Icon',
//     path: Utils.PathName.EditIconManagement,
//     id: 51,
//     Component: EditIconWrapper,
//     isPrivate: true,
//     roleName: 'CMS_UPDATE_NEW_ITEM',
//   },
//   {
//     name: 'Icon Detail',
//     path: Utils.PathName.IconDetail,
//     id: 52,
//     Component: IconDetailManagementWrapper,
//     isPrivate: true,
//     roleName: 'CMS_VIEW_LISTING',
//   },
//   {
//     name: 'Faq Detail',
//     path: Utils.PathName.FaqDetailManagementComp,
//     id: 53,
//     Component: FaqDetailManagementWrapper,
//     isPrivate: true,
//     roleName: 'CMS_VIEW_LISTING',
//   },

//   {
//     name: 'Add Legal Title',
//     path: Utils.PathName.AddLegalTitle,
//     id: 54,
//     Component: AddLegalTitleWrapper,
//     isPrivate: true,
//     roleName: 'CMS_ADD_NEW_ITEM',
//   },
//   {
//     name: 'Add Rewards And Grow More',
//     path: Utils.PathName.AddRewardAndGrowMore,
//     id: 56,
//     Component: AddRewardGrowMoreWrapper,
//     isPrivate: true,
//     roleName: 'CMS_ADD_NEW_ITEM',
//   },
//   {
//     name: 'Rewards And Grow More Detail',
//     path: Utils.PathName.RewardAndGrowMoreDetailManagementDetails,
//     id: 57,
//     Component: RewardGrowMoreDetailManagementWrapper,
//     isPrivate: true,
//     roleName: 'CMS_VIEW_LISTING',
//   },
//   {
//     name: 'Edit Rewards And Grow More',
//     path: Utils.PathName.EditRewardAndGrowMoreDetail,
//     id: 64,
//     Component: EditRewardGrowMoreWrapper,
//     isPrivate: true,
//     roleName: 'CMS_UPDATE_NEW_ITEM',
//   },

//   {
//     name: 'Blog Daily Dose',
//     path: Utils.PathName.DailyDoseBlog,
//     id: 67,
//     Component: DailyDoseBlogWrapper,
//     isPrivate: true,
//     roleName: 'CMS_ADD_NEW_ITEM',
//   },
//   {
//     name: 'Add Coupon Referral',
//     path: Utils.PathName.AddCouponManagementReferral,
//     id: 71,
//     Component: AddCouponReferral,
//   },
//   {
//     name: 'Roles Management',
//     path: Utils.PathName.RolesManagement,
//     id: 68,
//     Component: RolesManagementWrapper,
//     isPrivate: true,
//     roleName: 'ROLES_MGMT_VIEW_ROLES',
//   },

//   {
//     name: 'Profile Wrapper',
//     path: Utils.PathName.Profile,
//     id: 77,
//     Component: ProfileWrapper,
//     isPrivate: true,
//     roleName: 'SETTING_VIEW_NAME_AND_PROFILE_IMAGE',
//   },

//   {
//     name: 'Edit News',
//     path: Utils.PathName.EditNewsManagement,
//     id: 81,
//     Component: EditNewsWrapper,
//     isPrivate: true,
//     roleName: 'CMS_UPDATE_NEW_ITEM',
//   },
//   {
//     name: 'Edit Daily Dose',
//     path: Utils.PathName.EditDailyDoseManagement,
//     id: 82,
//     Component: EditDailyDoseWrapper,
//     isPrivate: true,
//     roleName: 'CMS_UPDATE_NEW_ITEM',
//   },
//   {
//     name: 'Roles Detail',
//     path: Utils.PathName.RolesDetail,
//     id: 72,
//     Component: RolesDetailWrapper,
//     isPrivate: true,
//     roleName: 'ROLES_MGMT_VIEW_ROLES',
//   },
//   {
//     name: 'Add Sub Admin',
//     path: Utils.PathName.RolesAddSubAdmin,
//     id: 73,
//     Component: RolesAddSubAdminWrapper,
//     isPrivate: true,
//     roleName: 'ROLES_MGMT_ADD_SUB_ADMIN',
//   },

//   {
//     name: 'Sub Admin',
//     path: Utils.PathName.viewSubAdmin,
//     id: 83,
//     Component: SubAdminWrapper,
//     isPrivate: true,
//     roleName: 'ROLES_MGMT_VIEW_SUB_ADMIN',
//   },
//   {
//     name: 'Sub Admin Detail',
//     path: Utils.PathName.RolesSubAdminDetail,
//     id: 74,
//     Component: RolesSubAdminDetailWrapper,
//     isPrivate: true,
//     roleName: 'ROLES_MGMT_VIEW_SUB_ADMIN',
//   },

//   {
//     name: 'Add Role',
//     path: Utils.PathName.addNewRole,
//     id: 84,
//     Component: AddRoleWrapper,
//     isPrivate: true,
//     roleName: 'ROLES_MGMT_ADD_ROLES',
//   },
//   {
//     name: 'Edit Role',
//     path: Utils.PathName.editRole,
//     id: 85,
//     Component: AddRoleWrapper,
//     isPrivate: true,
//     roleName: 'ROLES_MGMT_UPDATE_ROLE',
//   },
//   {
//     name: 'Edit Sub Admin',
//     path: Utils.PathName.editSubAdmin,
//     id: 86,
//     Component: RolesAddSubAdminWrapper,
//     isPrivate: true,
//     roleName: 'ROLES_MGMT_UPDATE_SUB_ADMIN',
//   },
//   {
//     name: 'Page Not Found',
//     path: Utils.PathName.pageNotFound,
//     id: 86,
//     Component: PageNotFoundWrapper,
//     isPrivate: true,
//   },
];

export default ROUTES;
