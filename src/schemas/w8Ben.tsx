import * as Yup from "yup";
const obValues = JSON.parse(localStorage.getItem("formSelection") || '{}')
export const StatusSchema = () => {
  return Yup.object().shape({
    isHeldUSCitizenship: Yup.string().required(
      "Please select one of the options"
    ),
    countryOfCitizenship: Yup.string(),
    // countryOfCitizenship: Yup.string().required(
    //     "Please select one of the options"
    //   ),
    dob: Yup.date(),
    // dob: Yup.date().required("Please Enter DOB"),

    isTaxationUSCitizenOrResident: Yup.string()
    .required(
      "Please select one of the options"
    ),
    
    isPermamnentResidentCardHolder: Yup.string()
    ,
    isHoldDualCitizenshipStatus: Yup.string(),
    isHoldDualCitizenshipIncludeUSCitizenship: Yup.string().when(
      "isHoldDualCitizenshipStatus",
      {
        is: "yes",
        then: () => Yup.string(),
      }
    ),
    //Keyy Missing from UI
    // isRenouncedCitizenship: Yup.boolean().required(
    //   "Please select one of the options"
    // ),
    // dateRenouncedUSCitizenship: Yup.date().required("Please Enter DOB"),
    // // renouncementProof: "",
    isTaxLiabilityJurisdictions: Yup.string(),
    countryTaxLiability: Yup.number().when("isTaxLiabilityJurisdictions", {
      is: "yes",
      then: () =>
        Yup.number()
          //   .required("Please select a country")
          .notOneOf([0], "Please select a valid country"),
    }),
    taxReferenceNumber: Yup.number().when("isTaxLiabilityJurisdictions", {
      is: "yes",
      then: () =>
        Yup.number()
          // .required("Please select a country")
          .notOneOf([0], "Please select a valid country"),
    }),
    isTINFormatNotAvailable: Yup.boolean().when("isTaxLiabilityJurisdictions", {
      is: "yes",
      then: () => Yup.boolean().oneOf([true], "Message"),
    }),
    // isPresentAtleast31Days: Yup.boolean().required(
    //   "Please select one of the options"
    // ),
  });
};
export const US_TINSchema = () => {
  return Yup.object().shape({
    usTinTypeId: Yup.number().required("Please select"),
    usTin: Yup.string().required("Please enter US Tin"),
    notAvailable: Yup.boolean(),
    foreignTINCountry: Yup.string().required(
      "Please select Foriegn Tin Country"
    ),
    // foreignTIN: Yup.string().required("Please enter Foriegn Tin "),
    isFTINNotLegallyRequired: Yup.boolean(),
    // tinisFTINNotLegallyRequired: true,
    // tinAlternativeFormate: true,
    isNotLegallyFTIN: Yup.string(),
  });
};
export const claimSchemaaa = () => {
  return Yup.object().shape({
    isSubmissionClaimTreaty: Yup.string().required(
      "Please select one of the options"
    ),
    permanentResidentialCountryId: Yup.string().when("isSubmissionClaimTreaty", {
      is: "yes",
      then: () => Yup.string().required("Please select owner"),
    }),
    // permanentResidentialCountryId: Yup.string().required(
    //   "Please select one of the options"
    // ),
   
  });
};

export const claimSchema = () => {
  return Yup.object().shape({
    isSubmissionClaimTreaty: Yup.string().required(
      "Please select one of the options"
    ),
    ownerResidentId: Yup.boolean().when("isSubmissionClaimTreaty", {
      is: "yes",
      then: () => Yup.string().required("Please select owner"),
    }),
    permanentResidentialCountryId: Yup.string().required(
      "Please select one of the options"
    ),
    benefitId: Yup.string().required(
      "Please select one of the options"
    ),
  });
};
export const rateSchema = () => {

  return Yup.object().shape({
    
    isSubmissionSpecialRates: Yup.string().required(
      "Please select one of the options"
    ),
    articleBeneficalOwner:Yup.string().required("Please select one of the options"),
 

    paragraphArticleClaimed: Yup.string().required("Please select one of the options"),
    
    subParagraphArticle:Yup.string().required("Please enter Article"),
  
    withHoldingClaim:  Yup.string().required("Please select one of the options"),

    incomeExpected:  Yup.string().required("Please select one of the options"),
 
    articleExplanation:  Yup.string().required("Please Enter Explanation"),
 
  });
};
export const certificateSchema = () => {
  return Yup.object().shape({
    isBeneficialOwnerIncome: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    isPersonNameNotUSPerson: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    isIncomeFormRelated: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    isIncomeTaxTreaty: Yup.boolean().oneOf([true], "Please mark the checkbox"),
    isBrokerTransactions: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    isAuthorizedForm: Yup.boolean().oneOf([true], "Please mark the checkbox"),
    isConfirmElectronicForm: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    isConsentReceipentstatement: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
  });
};

export const partCertiSchema = () => {
  return Yup.object().shape({
    signedBy: Yup.string().required("Please enter "),
    confirmationCode: Yup.string()
    .required("Please enter code")
    .test(
      'match',
      'Confirmation code does not match',
      function (value) {
        const storedConfirmationCode = obValues?.confirmationCode;
        return !storedConfirmationCode || value === storedConfirmationCode;
      }
    ),
  date: Yup.date(),
  isAgreeWithDeclaration: Yup.boolean().oneOf(
    [true],
    "Please mark the checkbox"
  ),
});
};

export const declarationsSchema = () => {
  return Yup.object().shape({
    isAgreeWithDeclaration: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    isConsentReceipentstatement: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    isNotConsentReceipentstatement: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
  });
};
