import { Fragment } from "react";
import { Grid } from "@mui/material";

import { ContainerTechnologies } from "../../molecules";
import { useGetOtherTechnologiesItem } from "../../../hooks";
import { ListTechnologiesItem } from "../../../models";

export const ContainerOthers = (): JSX.Element => {
    const { ItemsTechnologies } = useGetOtherTechnologiesItem();

    return (
        <ContainerTechnologies title="Otras" grid={12}>
            <Fragment>
                {ItemsTechnologies.map(
                    ({ name, img }: ListTechnologiesItem): JSX.Element => (
                        <Grid item lg={1} md={1.5} xs={4} key={name}>
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
