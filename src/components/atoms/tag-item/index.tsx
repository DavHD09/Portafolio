import styles from "./styles.module.scss";

import { Tags } from "../../../models/projects-item.model";
import { Grid } from "@mui/material";

export const TagItem = ({ img, name }: Tags): JSX.Element => {
    return (
        <div className={styles.container}>
            <Grid item xs={4} className={styles.container_img}>
                <img alt={name} src={img} />
            </Grid>
            <Grid item xs={6} className={styles.container_name}> 
                {name}
            </Grid>
        </div>
    );
};
