import styles from "./styles.module.scss";

import { CardItem, Tags } from "../../../models/projects-item.model";
import { TagItem } from "../../atoms/tag-item";
import { Grid } from "@mui/material";

export const CardProject = ({
    route,
    tags,
    title,
    description,
}: CardItem): JSX.Element => {
    return (
        <div className={styles.container_item}>
            <img alt={title} src={route} className={styles.container_img} />
            <div className={styles.container_description}>
                <h3 className={styles[`container_description-title`]}>
                    {title}
                </h3>
                <h4 className={styles[`container_description-subtitle`]}>
                    {description}
                </h4>
                <Grid
                    container
                    className={styles[`container_description-tags`]}
                >
                    {tags.map(({ img, name }: Tags) => (
                        <TagItem img={img} name={name} key={name} />
                    ))}
                </Grid>
            </div>
        </div>
    );
};
