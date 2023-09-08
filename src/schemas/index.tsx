import * as Yup from 'yup';

export const firstStepSchema = () => {
    return Yup.object().shape({
      federalTaxClassificationId :Yup.number()
      .required('This Field is Required.').min(0),
      firstName: Yup.string()
        .required('Please Enter First Name')
        .min(3, 'First Name should be minimum of 3 characters')
        .max(50, 'First Nameould be maximum of 250 characters'),
      lastName: Yup.string()
      .required('Please Enter Last Name')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Nameould be maximum of 250 characters'),
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

  export const firstStepBusinessSchema = () => {
    return Yup.object().shape({
      ederalTaxClassificationId :Yup.number()
      .required('This Field is Required.').min(0),
      firstName: Yup.string()
        .required('Please Enter First Name')
        .min(3, 'First Name should be minimum of 3 characters')
        .max(50, 'First Nameould be maximum of 250 characters'),
      lastName: Yup.string()
      .required('Please Enter Last Name')
      .min(3, 'Last Name should be minimum of 3 characters')
      .max(50, 'Last Nameould be maximum of 250 characters'),

      businessName: Yup.string()
      .required('Please Enter business Name')
      .min(3, 'business Name should be minimum of 3 characters')
      .max(50, 'business Name should be maximum of 250 characters'),
    });
  };

  export const secondStepSchema = ()=>{
    return  Yup.object().shape({
      isExemptionfromBackup: Yup.string()
      .required("Please select one of the options")
    });
  }
 