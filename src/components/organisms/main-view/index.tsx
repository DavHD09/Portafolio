import styles from "./styles.module.scss";

import { Grid } from "@mui/material";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";

import {
    ButtonsNavegation,
    ContainerPhoto,
    MessageWelcome,
} from "../../molecules";

export const MainView = (): JSX.Element => {
    return (
        <Grid container className={styles.container}>
            <Grid item md={5} xs={12} className={styles.container_messages}>
                <MessageWelcome />
            </Grid>
            <Grid item md={7} xs={12} className={styles.container_photo}>
                <ContainerPhoto />
            </Grid>
            <aside className={styles.container_buttons}>
                <ButtonsNavegation />
            </aside>
            <footer className={styles[`container_icon-down`]}>
                <KeyboardDoubleArrowDown />
            </footer>
        </Grid>
    );
};
