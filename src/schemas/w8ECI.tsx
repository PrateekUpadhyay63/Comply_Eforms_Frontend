import * as Yup from "yup";

export const TinSchema = () => {
  return Yup.object().shape({
    streetNumberName: Yup.string().required("Field Cannot be Empty"),
    eciUsTinTypeId: Yup.number()
      .min(1, "Field Cannot be Empty")
      .required("Field Cannot be Empty"),
    eciUsTin: Yup.string().required("Field Cannot be Empty"),
    aptSuite: Yup.string().required("Field Cannot be Empty"),
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
    lastName: Yup.string().required("Field Cannot be Empty"),
    businessName: Yup.string().required("Field Cannot be Empty"),
  });
};
export const US_TINSchema = () => {
  return Yup.object().shape({
    usTinTypeId: Yup.number().required("Field Cannot be Empty"),
    usTin: Yup.string().required("Field Cannot be Empty"),
    isNotAvailable: Yup.string().required("Please select one of the options"),
    notAvailable: Yup.string().required("Please select one of the options"),
    foreignTINCountry: Yup.string().required("Field Cannot be Empty"),
    foreignTIN: Yup.string().required("Field Cannot be Empty"),
    isFTINLegally: Yup.boolean(),
    // alternativeTINFormat: Yup.string().required("Field Cannot be Empty"),
    isExplanationNotLegallyFTIN: Yup.string().required("Field Cannot be Empty"),
    nonAvailabilityReason: Yup.string().required("Field Cannot be Empty"),
  });
};
