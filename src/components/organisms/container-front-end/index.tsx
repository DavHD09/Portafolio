import { Fragment } from "react";
import { Grid } from "@mui/material";

import { ContainerTechnologies } from "../../molecules";
import { useGetTechonologiesItemFrontEnd } from "../../../hooks";
import { ListTechnologiesItem } from "../../../models";

export const ContainerFrontEnd = (): JSX.Element => {
    const { ItemsTechnologies } = useGetTechonologiesItemFrontEnd();

    return (
        <ContainerTechnologies title="Front-end">
            <Fragment>
                {ItemsTechnologies.map(
                    ({ name, img }: ListTechnologiesItem): JSX.Element => (
                        <Grid item lg={2} xs={4} key={name}>
                            <span key={name}>
                                <img src={img} alt={name} />
                                <div>{name}</div>
                            </span>
                        </Grid>
                    )
                )}
            </Fragment>
        </ContainerTechnologies>
    );
};
