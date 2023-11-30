import * as Yup from "yup";

export const TinSchema = () => {
  return Yup.object().shape({
    streetNumberName: Yup.string().required("Field Cannot be Empty"),
    eciUsTinTypeId: Yup.number()
      .min(1, "Field Cannot be Empty")
      .required("Field Cannot be Empty"),
    eciUsTin: Yup.string().required("Field Cannot be Empty"),
    // aptSuite: Yup.string().required("Field Cannot be Empty"),
    cityTown: Yup.string().required("Field Cannot be Empty"),
    stateProvinceId: Yup.string().required("Field Cannot be Empty"),
    zipPostalCode: Yup.string().required("Field Cannot be Empty"),
  });
};

export const TaxPurposeSchema = () => {
  return Yup.object().shape({
    firstName: Yup.string().required("Field Cannot be Empty"),
    federalTaxClassificationId: Yup.number()
      .min(1, "Field Cannot be Empty")
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
export const partCertiSchema = () => {
  return Yup.object().shape({
    signedBy: Yup.string().required("Please enter "),
    confirmationCode: Yup.string().required("Please enter code"),
    date: Yup.date().required("Please enter date"),
    isAgreeWithDeclaration: Yup.boolean().oneOf(
      [true],
      "Please mark the checkbox"
    ),
  });
};
