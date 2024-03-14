import styles from "./styles.module.scss";

import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Send } from "@mui/icons-material";

import { ButtomCustom } from "../../atoms";
import { InputWithFormValidate } from "../../atoms/input-form-validate";
import { sendEmailMessage } from "../../../utilities/send-email.utility";
import { contactSchema } from "../../../schemas/contact.schema";
import { ContactFormularyInputs } from "../../../models/contact-formulary.model";

export const ContactFormulary = (): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(false)

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ContactFormularyInputs>({
        resolver: yupResolver(contactSchema),
    });

    const sendEmail = async (
        _data: ContactFormularyInputs,
        event: FormEvent<HTMLFormElement>
    ) => {
        const formValues = event.target as HTMLFormElement;
        setLoading(true)
        sendEmailMessage(formValues, setLoading);
    };

    return (
        <div className={styles.container}>
            <form
                onSubmit={handleSubmit(
                    // @ts-expect-error expect error of typo
                    async (_data, event) => await sendEmail(_data, event)
                )}
            >
                <InputWithFormValidate
                    control={control}
                    name="name"
                    error={errors}
                    label="Nombre completo: "
                />
                <InputWithFormValidate
                    control={control}
                    name="email"
                    error={errors}
                    label="Correo electrónico: "
                />
                <InputWithFormValidate
                    control={control}
                    name="subject"
                    error={errors}
                    label="Asunto: "
                />
                <InputWithFormValidate
                    control={control}
                    name="message"
                    error={errors}
                    label="Mensaje: "
                    row={4}
                />
                <section className={styles.container_icon}>
                    <ButtomCustom
                        icon={<Send />}
                        name="Enviar mensaje"
                        type="submit"
                        disabled={loading}
                    />
                </section>
            </form>
        </div>
    );
};
