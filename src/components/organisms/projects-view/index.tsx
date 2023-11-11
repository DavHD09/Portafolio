import styles from "./styles.module.scss";

import { Grid } from "@mui/material";

import { useGetProjectsItems } from "../../../hooks/use-get-projects-item.hook";
import { CardProject } from "../../molecules";
import { CardItem } from "../../../models/projects-item.model";

export const ProjectsView = (): JSX.Element => {
    const { projectsItems } = useGetProjectsItems();
    return (
        <Grid container className={styles.container}>
            <Grid item xs={12} className={styles.container_title}>
                <h1> Proyectos ejecutados </h1>
            </Grid>
            <Grid container spacing={2}>
                {projectsItems.map(
                    ({ route, tags, title, description }: CardItem) => (
                        <Grid item md={4} sm={6} xs={12}>
                            <CardProject
                                route={route}
                                tags={tags}
                                title={title}
                                description={description}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </Grid>
    );
};
