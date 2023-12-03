import styles from "./styles.module.scss";

import { Grid } from "@mui/material";

import { ContainerBackend, ContainerFrontEnd, ContainerOthers } from "../";
import { useButtonNavContext } from "../../../context";

export const TechnologiesView = (): JSX.Element => {
    const { btnTechnologyRef } = useButtonNavContext();
    return (
        <div className={styles.container} ref={btnTechnologyRef}>
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
