import styles from "./styles.module.scss";

import { Grid } from "@mui/material";

import { ContainerBackend, ContainerFrontEnd, ContainerOthers } from "../";

export const TechnologiesView = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <section className={styles.container_title}>
                <h1> Tecnologías que domino </h1>
            </section>
            <Grid container spacing={4}>
                <ContainerFrontEnd />
                <ContainerBackend />
                <ContainerOthers />
            </Grid>
        </div>
    );
};
