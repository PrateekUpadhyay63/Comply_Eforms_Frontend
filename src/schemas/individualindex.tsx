import * as Yup from 'yup';

export const individualSchema = () => {
    return Yup.object().shape({
      firstName: Yup.string()
        .required('Please Enter First Name')
        .min(3, 'First Name should be minimum of 3 characters')
        .max(50, 'First Nameould be maximum of 250 characters'),
      lastName: Yup.string()
      .required('Please Enter Last Name')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Nameould be maximum of 250 characters'),
      uniqueIdentifier: Yup.string()
      .required('Please Enter unique Identifier')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Nameould be maximum of 250 characters'),
      countryOfCitizenshipId: Yup.string()
      .required('Please select a country'),
      dob: Yup.string()
      .required('Please Enter dob'),
      nameOfDisregarded: Yup.string()
      .required('Please Enter Entity name')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Nameould be maximum of 250 characters'),
      permanentResidentialStreetNumberandName: Yup.string()
      .required('Please enter street number and name')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      permanentResidentialCityorTown: Yup.string()
      .required('Please enter city or Town')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      permanentResidentialZipPostalCode: Yup.string()
      .required('Please enter Zip/Postal code')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      permanentResidentialStreetNumberandName1: Yup.string()
      .required('Please enter street Number and Name')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      permanentResidentialCityorTown1: Yup.string()
      .required('Please enter city or town')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      permanentResidentialZipPostalCode1: Yup.string()
      .required('Please enter Zip/Postal code')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      contactFirstName: Yup.string()
      .required('Please enter First name')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      contactLastName: Yup.string()
      .required('Please enter last name')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      contactEmail: Yup.string()
      .required('Please enter Email')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      accountHolderName: Yup.string()
      .required('Please enter Account Holder Name')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      accountBankName: Yup.string()
      .required('Please enter Bank Name')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      accountBankBranchLocationId: Yup.string()
      .required('Please select branch location')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      accountNumber: Yup.string()
      .required('Please enter account Number')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      bankCode: Yup.string()
      .required('Please enter Bank code')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Name should be maximum of 250 characters'),
      // permanentResidentialStreetNumberandName: Yup.string()
      // .required('Please enter state number and name')
      // .min(3, 'Last Name should be minimum of 3 characters')
      // .max(50, 'Last Name should be maximum of 250 characters'),
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