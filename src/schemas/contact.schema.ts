import * as yup from "yup";

export const contactSchema = yup.object().shape({
    name: yup.string().required("Este campo es obligatorio"),
    email: yup.string().email('El correo tiene que ser valido').required("Este campo es obligatorio"),
    subject: yup.string().required("Este campo es obligatorio"),
    message: yup.string().required("Este campo es obligatorio"),
});
