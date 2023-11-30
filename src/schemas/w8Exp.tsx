import * as Yup from "yup";

export const TaxPurposeSchema = () => {
    return Yup.object().shape({
      federalTaxClassificationId: Yup.number()
        .min(1, "Field Cannot be Empty")
        .required("Field Cannot be Empty"),
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
      isBackup: Yup.boolean().oneOf([true], "Please mark the checkbox"),
      isCapacityForm: Yup.boolean().oneOf([true], "Please mark the checkbox"),
      isElectronicForm: Yup.boolean().oneOf([true], "Please mark the checkbox"),
    });
  };
