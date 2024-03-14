import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { SweetAlertMessage } from "./sweet-alert-message.utility";
import { Dispatch, SetStateAction } from "react";

export const sendEmailMessage = (
    valuesForm: HTMLFormElement,
    setLoading: Dispatch<SetStateAction<boolean>>
): void => {
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userId = import.meta.env.VITE_USER_ID;
    try {
        emailjs
            .sendForm(serviceId, templateId, valuesForm, userId)
            .then(({ status }: EmailJSResponseStatus) => {
                if (status === 200) {
                    setLoading(false);
                    SweetAlertMessage({
                        message: "El mensaje se ha enviado con exito",
                        icon: "success",
                    });
                }
            });
    } catch (error) {
        SweetAlertMessage({
            icon: "error",
            message: `Ha ocurrido el siguiente error:  ${error}`,
        });
    }
};
