import * as Yup from "yup";

export const validationLoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password"),
    rememberMe: Yup.boolean()
})