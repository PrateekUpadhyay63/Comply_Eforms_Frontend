import * as Yup from "yup";

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

    isTaxationUSCitizenOrResident: Yup.string().required(
      "Please select one of the options"
    ),
    isPermamnentResidentCardHolder: Yup.string().required(
      "Please select one of the options"
    ),
    isHoldDualCitizenshipStatus: Yup.string().required(
      "Please select one of the options"
    ),
    isHoldDualCitizenshipIncludeUSCitizenship: Yup.string().when(
      "isHoldDualCitizenshipStatus",
      {
        is: "yes",
        then: () => Yup.string().required("Please select one of the options"),
      }
    ),
    //Keyy Missing from UI
    // isRenouncedCitizenship: Yup.boolean().required(
    //   "Please select one of the options"
    // ),
    // dateRenouncedUSCitizenship: Yup.date().required("Please Enter DOB"),
    // // renouncementProof: "",
    isTaxLiabilityJurisdictions: Yup.string().required(
      "Please select one of the options"
    ),
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
          .required("Please select a country")
          .notOneOf([0], "Please select a valid country"),
    }),
    isTINFormatNotAvailable: Yup.boolean().when("isTaxLiabilityJurisdictions", {
      is: "yes",
      then: () => Yup.boolean().oneOf([true], "Message"),
    }),
    isPresentAtleast31Days: Yup.boolean().required(
      "Please select one of the options"
    ),
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
    foreignTIN: Yup.string().required("Please enter Foriegn Tin "),
    isFTINNotLegallyRequired: Yup.boolean(),
    // tinisFTINNotLegallyRequired: true,
    // tinAlternativeFormate: true,
    isNotLegallyFTIN: Yup.string().required("Please select one of the options"),
  });
};
export const claimSchema = () => {
  return Yup.object().shape({
    isSubmissionClaimTreaty: Yup.string().required(
      "Please select one of the options"
    ),
  });
};
