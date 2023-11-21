import * as Yup from "yup";

export const TaxPurposeSchema = () => {
    return Yup.object().shape({
      federalTaxClassificationId: Yup.number()
        .min(1, "Field Cannot be Empty")
        .required("Field Cannot be Empty"),
    });
  };


