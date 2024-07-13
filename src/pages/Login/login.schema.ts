import * as yup from "yup";

export const logInSchema = yup.object().shape({
  name: yup.string().required("Name or ID is required"),
  password: yup.string().required("Password is required"),
});


export type loginSchemaT = yup.InferType<typeof logInSchema>;