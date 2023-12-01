import * as Yup from "yup";
const obValues = JSON.parse(localStorage.getItem("formSelection") || '{}')
export const TinSchema = () => {
  return Yup.object().shape({
    streetNumberName: Yup.string().required("Field Cannot be Empty"),
    eciUsTinTypeId: Yup.number()
      .required("Field Cannot be Empty"),
    eciUsTin: Yup.string().when("eciUsTinTypeId", {
        is: "2",
        then: () => Yup.string().required("Field Cannot be Empty"),
      }),
      // .required("Field Cannot be Empty"),
    
    cityTown: Yup.string().required("Field Cannot be Empty"),
    stateProvinceId: Yup.string().required("Field Cannot be Empty"),
    zipPostalCode: Yup.string().required("Field Cannot be Empty"),
  });
};

export const TaxPurposeSchema = () => {
  return Yup.object().shape({
    firstName: Yup.string().required("Field Cannot be Empty"),
    federalTaxClassificationId: Yup.number()
      .required("Field Cannot be Empty"),
    lastName: Yup.string(),
    businessName: Yup.string().required("Field Cannot be Empty"),
  });
};
export const TaxPayerSchema = () => {
  return Yup.object().shape({
    usTinTypeId: Yup.number().required("Field Cannot be Empty"),
    usTin: Yup.string().required("Field Cannot be Empty"),
    isNotAvailable: Yup.string(),
    // notAvailable: Yup.string().required("Please select one of the options"),
    foreignTINCountry: Yup.string().required("Field Cannot be Empty"),
    foreignTIN: Yup.string(),
    // isFTINLegally: Yup.boolean(),
    // isExplanationNotLegallyFTIN: Yup.string().required("Field Cannot be Empty"),
    // nonAvailabilityReason: Yup.boolean().when("isExplanationNotLegallyFTIN", {
    //   is: "no",
    //   then: () => Yup.string().required("Field Cannot be Empty"),
    // }),
  });
};
export const IncomeSchema = () => {
  return Yup.object().shape({
    itemIncomeType: Yup.number().required("Field Cannot be Empty"),
    incomeDescription: Yup.string().required("Field Cannot be Empty"),
    isAppplicationCheck: Yup.string().required(
      "Please select"
    ),
  });
};
export const certificateSchema = () => {
  return Yup.object().shape({
    isBeneficialOwnerIncome: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    isAmountCertificationUS: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    isBeneficialOwnerGrossIncome: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    isBeneficialOwnerNotUSPerson: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    isAuthorizeWithHoldingAgent: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
    isCapacityForm: Yup.boolean().oneOf([true], "Please mark the checkbox"),
    isElectronicForm: Yup.boolean().oneOf([true], "Please mark the checkbox"),
  });
};
// export const partCertiSchema = () => {
//   return Yup.object().shape({
//     signedBy: Yup.string().required("Please enter "),
//     confirmationCode: Yup.string().required("Please enter code"),
//     date: Yup.date(),
//     isAgreeWithDeclaration: Yup.boolean().oneOf(
//       [true],
//       "Please mark the checkbox"
//     ),
//   });
// };
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