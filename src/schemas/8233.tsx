import * as Yup from "yup";
const obValues = JSON.parse(localStorage.getItem("formSelection") || '{}')
export const SubstantialSchema = () => {
  return Yup.object().shape({
    daysAvailableInThisYear: Yup.number().min(1).required(),
    daysAvailableIn_OneYearbefore: Yup.number().min(1).required(),
    daysAvailableIn_TwoYearbefore: Yup.number().min(1).required(),
    totalQualifyingDays: Yup.number(),
  });
};

export const US_TINSchema = () => {
  return Yup.object().shape({
    usTINTypeId: Yup.string().required("Please select"),
    usTIN: Yup.string().required("Please enter US Tin"),
    notAvailable: Yup.boolean().oneOf([true], "Please mark the checkbox"),
    foreginTIN_CountryId: Yup.string().required(
      "Please select Foriegn Tin Country"
    ),
    foregionTIN: Yup.string().required("Please enter Foriegn Tin "),
    isFTINNotLegallyRequired: Yup.boolean(),
    alternativeTIN_Format: Yup.boolean(),
    reasionForForegionTIN_NotAvailable: Yup.boolean().when("notAvailable", {
      is: "yes",
      then: () => Yup.string().required("Field Cannot be Empty"),
    }),
  });
};

export const ownerSchema = () => {
  return Yup.object().shape({
    exemptionApplicableForCompensationForCalnderYear: Yup.number()
      .min(1)
      .required(),
    otherTaxBeginingYear: Yup.number().min(1).required(),
    otherTaxEndYear: Yup.number().min(1).required(),
    usVisaTypeID: Yup.string().required(),
    countryIssuingPassportId: Yup.string().required(),
    countryIssuingPassportNumber: Yup.string().required(),
    dateOfEntryIntoUS: Yup.date().required("Please enter date"),
    nonImmigrationStatus: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    currentNonImmigrationStatus: Yup.string().required(),
    dateNonImmigrationStatusExpire: Yup.date().required("Please enter date"),
    declarationOfDurationStayStatus: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    foreignStudent_Teacher_Professor_ResearcherStatus: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    statementToForm8233_FileUpoad: Yup.mixed().required("File is required"),
  });
};
export const amountSchema = () => {
  return Yup.object().shape({
    taxTreaty_DescriptionOfPersonalServiceYouProvide: Yup.string(),
    taxTreaty_TotalCompensationYouExpectForThisCalenderYear: Yup.number()
      .min(1)
      .required(),
    taxTreaty_TreatyId: Yup.number(),
    taxTreaty_TreatyArticleId: Yup.number(),
    taxTreaty_TotalCompensationListedon11bExemptFromTax: Yup.number()
      .min(1)
      .required(),
    taxTreaty_CheckAll: Yup.boolean().oneOf([true], "Please mark the checkbox"),
    taxTreaty_CountryOfResidenceId: Yup.number(),
    taxTreaty_NoncompensatoryScholarshiporFellowshipIncome: Yup.number()
      ,
    taxTreatyAndTreatyArticleOnWhich_BasingExemptionFromWithholdingTreatyID:
      Yup.number(),
    taxTreatyAndTreatyArticleOnWhich_BasingExemptionFromWithholdingArticleID:
      Yup.number(),
    totalIncomeListedIncomeonLine13ATaxExemptAmount: Yup.number()
      ,
    sufficientFactToJustfyExemptionForClaim12A_13: Yup.string(),
  });
};

export const documentSchema = () => {
  return Yup.object().shape({
    additinalDocument1ID: Yup.number().min(1).required(),
    additinalDocument1Name: Yup.string().required(),
    additinalDocument2ID: Yup.number().min(1).required(),
    additinalDocument2Name: Yup.string().required(),
    additinalDocument3ID: Yup.number().min(1).required(),
    additinalDocument3Name: Yup.string().required(),
    additinalDocument4ID: Yup.number().min(1).required(),
    additinalDocument4Name: Yup.string().required(),
    additinalDocument5ID: Yup.number().min(1).required(),
    additinalDocument5Name: Yup.string().required(),
    additinalDocument6ID: Yup.number().min(1).required(),
    additinalDocument6Name: Yup.string().required(),
    additinalDocument7ID: Yup.number().min(1).required(),
    additinalDocument7Name: Yup.string().required(),
    additinalDocument8ID: Yup.number().min(1).required(),
    additinalDocument8Name: Yup.string().required(),
    additinalDocument9ID: Yup.number().min(1).required(),
    additinalDocument9Name: Yup.string().required(),
    additinalDocument10ID: Yup.number().min(1).required(),
    additinalDocument10Name: Yup.string().required(),
  });
};

export const certificateSchema = () => {
  return Yup.object().shape({
    i_Certify_BeneficialOwnerOrAuthorisedToSignForAllMentionIncome:
      Yup.boolean().oneOf([true], "Please mark the checkbox"),
    i_Certify_BeneficialOwnerIsNotUSPerson: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    i_Certify_BeneficialOwnerResidentOfTreatyCountryOf12A_13B:
      Yup.boolean().oneOf([true], "Please mark the checkbox"),
    i_Certify_FurthermoreIAuthorise: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    i_Certify_ConfirmYouHaveReviewedTheElectronicForm: Yup.boolean().oneOf(
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
    isDeclaration: Yup.boolean().oneOf([true], "Please mark the checkbox"),
    isConsentRecipent: Yup.boolean().oneOf([true], "Please mark the checkbox"),
    isNotConsentRecipent: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
  });
};
