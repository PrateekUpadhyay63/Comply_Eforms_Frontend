import * as Yup from 'yup';

export const EntitySchema = () => {
    return Yup.object().shape({
    //   firstName: Yup.string()
    //     .required('Please Enter First Name')
    //     .min(3, 'First Name should be minimum of 3 characters')
    //     .max(50, 'First Name should be maximum of 50 characters'),
      entityName: Yup.string()
      .required('Please Enter Entity name'),
      uniqueIdentifier: Yup.string()
      .required('Please Enter unique Identifier')
      .min(3, 'Too short')
      .max(50, 'Too long'),
      countryOfCitizenshipId: Yup.number()
      .required('Please select a country'),
      dob: Yup.date()
      .required('Please Enter DOB'),
      nameOfDisregarded: Yup.string()
      .required('Please Enter Entity name')
      .min(3, 'Entity name should be minimum of 3 characters')
      .max(50, 'Entity name should be maximum of 50 characters'),
      permanentResidentialStreetNumberandName: Yup.string()
      .required('Please enter Street number and name'),
      permanentResidentialCityorTown: Yup.string()
      .required('Please enter City or Town'),
      permanentResidentialZipPostalCode: Yup.string()
      .required('Zip/Postal code is required'),
      permanentResidentialCountryId:Yup
      .number()
      .required("Please select a country")
      .notOneOf([1], 'Please select a valid country'),
      permanentResidentialCountryId1:Yup.number()
      .required("Please select a country")
      .notOneOf([1], 'Please select a valid country'),
      permanentResidentialStreetNumberandName1: Yup.string()
      .required('Please enter street Number and Name'),
      permanentResidentialCityorTown1: Yup.string()
      .required('Please enter city or town'),
      permanentResidentialZipPostalCode1: Yup.string()
      .required('Zip/Postal code is required'),
      contactFirstName: Yup.string()
      .required('Please enter First name')
      .min(3, 'First Name should be minimum of 3 characters')
      .max(50, 'First Name should be maximum of 50 characters'),
      contactLastName: Yup.string()
      .required('Please enter Last name')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 50 characters'),
      contactEmail: Yup.string()
      .email('Invalid Email address')
      .required('Please enter Email'),
      accountHolderName: Yup.string()
      .required('Please enter Account Holder Name')
      .min(3, 'Name should be minimum of 3 characters')
      .max(50, 'Name should be maximum of 50 characters'),
      accountBankName: Yup.string()
      .required('Please enter Bank Name')
      .max(50, 'Bank Name should be maximum of 50 characters'),
      accountBankBranchLocationId: Yup.number()
      .required('Please select branch location')
      .notOneOf([1], 'Please select Branch location'),
      accountNumber: Yup.string()
      .matches(/^\d{10}$/, 'Account number must be exactly 10 digits')
      .required('Account Number is required'),
      bankCode: Yup.string()
      .required('Please enter Bank code')
      .min(5, 'Bank code should be minimum of 5 characters'),
      payResidentalCountryId: Yup.number()
      .required('Please select country')
      .notOneOf([1], 'Please select a country'),
      makePayable: Yup.string()
      .required('Please enter payable name')
      .min(3, 'Name should be minimum of 3 characters')
      .max(50, 'Name should be maximum of 50 characters'),
      payStreetNumberAndName: Yup.string()
      .required('Please enter street no. and name'),
      payCityorTown: Yup.string()
      .required('Please enter city or town'),
      payStateOrProvince: Yup.string()
      .required('Please enter state or province'),
      payZipPostalCode: Yup.string()
      .required('Please enter zip or postal code'),
      isCorrectPaymentPurposes:Yup.string()
      .required("Verify please"),
      abaRouting:Yup.string()
      .required(" ABA/Routing is required"),
    //   businessName: Yup.string()
    //   .required('Please Enter business Name')
    //   .min(3, 'business Name should be minimum of 3 characters')
    //   .max(50, 'business Name should be maximum of 250 characters'),
    //     .matches(/^[0-9]+$/, 'Referrer Amount will always be a whole number')
    //     .required('Please Enter Referrer Amount'),
    //   refereeAmount: Yup.string()
    //     .matches(/^[0-9]+$/, 'Referee Amount will always be a whole number')
    //     .required('Please Enter Referee Amount'),
    //   limit: Yup.string().matches(/^[0-9]+$/, 'Minimum Invest Amount will always be a whole number'),
    //   campaignDetails: Yup.string()
    //     .required('Please Enter Campaign Details')
    //     .min(3, 'Campaign Details should be minimum of 3 characters'),
    });
  };