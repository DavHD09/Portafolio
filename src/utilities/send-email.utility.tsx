import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { SweetAlertMessage } from "./sweet-alert-message.utility";

export const sendEmailMessage = (valuesForm: HTMLFormElement): void => {
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userId = import.meta.env.VITE_USER_ID;
    try {
        emailjs
            .sendForm(serviceId, templateId, valuesForm, userId)
            .then(({ status }: EmailJSResponseStatus) => {
                status === 200 &&
                    SweetAlertMessage({
                        message: "El mensaje se ha enviado con exito",
                        icon: "success",
                    });
            });
    } catch (error) {
        SweetAlertMessage({
            icon: "error",
            message: `Ha ocurrido el siguiente error:  ${error}`,
        });
    }
};
