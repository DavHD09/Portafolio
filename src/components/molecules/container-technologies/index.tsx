import styles from "./styles.module.scss";

import { Grid } from "@mui/material";

interface Props {
    title: string;
    children: JSX.Element;
    grid?: number;
}

export const ContainerTechnologies = ({
    title,
    children,
    grid = 6,
}: Props): JSX.Element => {
    return (
        <Grid item lg={grid} md={grid} xs={12} className={styles.container}>
            <h2> {title} </h2>
            <div className={styles.container_outside}>
                <Grid container spacing={2} className={styles.container_inside}>
                    {children}
                </Grid>
            </div>
        </Grid>
    );
};
