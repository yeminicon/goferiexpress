import * as yup from "yup";

export const changePasswordSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Confirm password"),
});


export type changePasswordSchemaT = yup.InferType<typeof changePasswordSchema>;