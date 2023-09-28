import * as Yup from "yup";

export const TinSchema = () => {
  return Yup.object().shape({
    streetNumberName: Yup.string().required("Field Cannot be Empty"),
    eciUsTinTypeId: Yup.number().min(1,"Field Cannot be Empty").required("Field Cannot be Empty"),
    eciUsTin: Yup.string().required("Field Cannot be Empty"),
    aptSuite: Yup.string().required("Field Cannot be Empty"),
    cityTown: Yup.string().required("Field Cannot be Empty"),
    stateProvinceId: Yup.string().required("Field Cannot be Empty"),
    zipPostalCode: Yup.string().required("Field Cannot be Empty"),
  });
};
