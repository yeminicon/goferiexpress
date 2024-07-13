import * as yup from "yup";

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
});


export type forgotPasswordSchemaT = yup.InferType<typeof forgotPasswordSchema>;