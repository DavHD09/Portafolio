import styles from "./styles.module.scss";

import { Fragment } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextField, InputLabel } from "@mui/material";

import { ContactFormularyInputs } from "../../../models/contact-formulary.model";

interface Props {
    name: keyof ContactFormularyInputs;
    control: Control<ContactFormularyInputs>;
    error: FieldErrors<ContactFormularyInputs>;
    label: string;
    row?: number;
}

export const InputWithFormValidate = ({
    name,
    control,
    error,
    label,
    row = 1,
}: Props) => {
    return (
        <div className={styles.form}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Fragment>
                        <InputLabel className={styles.form_label}>
                            {label}
                        </InputLabel>
                        <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            minRows={row}
                            multiline={true}
                            {...field}
                            style={{ background: "white", borderRadius: "7px" }}
                        />
                    </Fragment>
                )}
            />
            {error && (
                <p className={styles.form_error}>{error[name]?.message}</p>
            )}
        </div>
    );
};
