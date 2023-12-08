import * as Yup from "yup";

export const SubmitSchema = () => {
  return Yup.object().shape({
   declaration:Yup.boolean().oneOf(
    [true],
    "Please mark the checkbox"
  ),

  IsSubmit: Yup.boolean().test(
    'is-exclusive',
    'Please select only one of the checkboxes',
    function (value) {
      const { IsSubmit_not } = this.parent;
      return (value && !IsSubmit_not) || (!value && IsSubmit_not);
    }
  ),

  IsSubmit_not: Yup.boolean().test(
    'is-exclusive',
    'Please select only one of the checkboxes',
    function (value) {
      const { IsSubmit } = this.parent;
      return (value && !IsSubmit) || (!value && IsSubmit);
    }
  ),
});
};