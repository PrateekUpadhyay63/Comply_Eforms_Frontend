import * as Yup from "yup";

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