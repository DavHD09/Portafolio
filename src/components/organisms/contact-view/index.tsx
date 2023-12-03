import styles from "./styles.module.scss";

import { Grid } from "@mui/material";

import { ContactFormulary, SocialMedia } from "../../molecules";
import { useButtonNavContext } from "../../../context";

export const ContactView = (): JSX.Element => {
    const { btnContactRef } = useButtonNavContext();
    return (
        <Grid container className={styles.container} ref={btnContactRef}>
            <Grid item xs={12} className={styles.container_title}>
                <h1> Contáctame </h1>
            </Grid>
            <Grid item md={6} xs={12}>
                <SocialMedia />
            </Grid>
            <Grid item md={6} xs={12}>
                <ContactFormulary />
            </Grid>
        </Grid>
    );
};
